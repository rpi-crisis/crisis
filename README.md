# RTools  

RTools is an open source RCOS project: a website that houses various course and major related tools for my college, Rensselaer Polytechnic Institute.  
From the highest priority to lowest this would include:  
Course descriptions, prerequisites, cross-listings, transfer options by course, the course time/location/professor that semester,
major/dual major curriculum by year, a HASS pathways planner, and possibly even a course scheduler if one of the RCOS scheduler projects wishes to collaborate.

Format: static website  
Stacks: HTML, CSS, TypeScript, React, Node


### Contributors

Lead: Trevor Brunette  
Co-Lead: Colin Melville (this is a thing)

For more information about contributions, see [AUTHORS](https://github.com/rpi-tools/RTools/blob/main/AUTHORS.md)


### Development
We use [node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) to help develop this project; instructions to install those are
[here](https://nodejs.org/en/download/) and [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).  
To automatically download the dependencies, navigate to the cloned project directory and run  
`npm install`  

To start coding live with auto-compile on save and auto-refresh, within the project directory run  
`npm start`  

To build your code for deployment, within the project directory run  
`npm run build`  
and a deployable static site will be built in `working-directory/build/`


### Pull Requests  

After you have cloned the repository, you will have your own version of it on your system to modify.
You will use a branch for your (team's) development and commits, and submit pull requests to send your cumulative additions from commits for review and then to eventually be merged into the main.
Pull requests should be relatively infrequent in general, but since the project is so new, there may be quite a few this semester.   

#### Your commits should be on your development branch, not main.
#### Please never force push commits to a PR.



### Licensing
RTools is licensed under the GNU Affero General Public License v3.0  
For more information on licensing and copyright information, see the [LICENSE](https://github.com/rpi-tools/RTools/blob/main/LICENSE)
