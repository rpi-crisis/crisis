/*
 * Fetch data from the GitHub server if the data version does not match the local version.
 * Otherwise, load the locally cached data.
 */

const filepath:string = "https://raw.githubusercontent.com/rpi-crisis/data/main/";
const courses_name:string = "courses.json";
const version_name:string = "meta";
let db_version:string = "";
let local_version:string = "";

let data_json = []

let is_init:boolean = false;

function init(){
  if(!is_init) {
    is_init = true;
    local_version = localStorage.getItem("courses_version") as string;
    fetchVersion();
  }
}

function fetchVersion() {
  fetch(filepath+version_name)
    .then(version => { version.text()
        .then((result_text) => {
        db_version = result_text;
        console.log("Found local_version: " + local_version);
        console.log("Found db_version: " + db_version);
        if (local_version !== db_version) {
          fetchData();
          console.log("Updating local_version");
        } else {
          data_json = JSON.parse(localStorage.getItem("courses_json") as string);
          console.log("No update needed");
        }
      });

    }).catch((error) => {
    console.log("Failed to get version: " + error);
    is_init = false;
  });
}

function fetchData() {
  fetch(filepath + courses_name)
    .then(response => response.json())
    .then(data => {
      data_json = data;
      localStorage.setItem("courses_json", JSON.stringify(data));
      localStorage.setItem("courses_version", db_version);
      console.log("courses.json fetched");
      console.log(data_json);
    })
    .catch(error => {
      console.error(error)
      is_init = false;
    });
}

export default init;