/*
 * Fetch data from the GitHub server if the data version does not match the local version.
 * Otherwise, load the locally cached data.
 */

import * as localforage from 'localforage';

const filepath = 'https://raw.githubusercontent.com/rpi-crisis/data/main/';
const courses_name = 'model_data.json';
const version_name = 'meta';
let db_version = '';
let local_version = '';

// Will be set to true while the function is running. Helps ensure that the function is not called multiple times.
let is_init = false;
// Will be set to true when there are the necessary stringified json files in the local storage.
let ready = false;

// This function may be overwritten if we need to use an update hook.
function updateReady(value: boolean){
  ready = value;
}

function init(): void {
  if(!is_init && !ready) {
    is_init = true;
    localforage.getItem('data_version')
      .then((data_version_value)=>{
        local_version = data_version_value as string;
        fetchVersion();
      }).catch((err)=>{
        console.log(err);
        return null;
      });
  }
}

function fetchVersion(): void {
  fetch(filepath + version_name)
    .then(response => { response.text()
      .then((version_text) => {
        db_version = version_text;
        console.log('Found local_version: ' + local_version); // Debug logging
        console.log('Found db_version: ' + db_version); // Debug logging
        if (local_version !== db_version) {
          fetchData();
        } else {
          updateReady(true);
          console.log('No update needed'); // Debug logging
        }
      });
    }).catch((error) => {
      console.log('Failed to get version: ' + error);
      is_init = false;
    });
}

function fetchData(): void {
  fetch(filepath + courses_name)
    .then(response => response.json())
    .then(data => {
      local_version = db_version;
      localforage.setItem('data_version', db_version);
      localforage.setItem('courses_json', JSON.stringify(data)).then(()=>{
        updateReady(true);
        console.log('Updated files to match server'); // Debug logging
        console.log('Set local_version to: ' + local_version); // Debug logging
        console.log('File: ' + courses_name + 'fetched'); // Debug logging
        // console.log(data); // Debug logging
      });
    })
    .catch(error => {
      console.error('Failed to get data file: ' + error);
      is_init = false;
    });
}

// Do not use inside a component which is re-rendered often.
/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
async function getJsonData(): Promise<any> {
  return JSON.parse(await localforage.getItem('courses_json') as string);
}

export default init;

export { getJsonData };