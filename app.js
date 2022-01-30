const inquirer = require('inquirer')
//? const fs = require('fs');

//? const generatePage = require('./src/page-template.js');
// using require, this calls upon the page-template file that is exported to this one.



// these constant variables assign the respective items within the array with their respective names. Item 0 within array will always = name, etc.
// now rather than the console.log for generate page being hard-coded with a name and github, they can be dynamically entered into the array by the user. the function then calls them from the array to be displayed accordingly.
//? const pageHTML = generatePage(name, github);

//! const printProfileData = profileDataArr => {
//     // This... 
//  !   for (let i = 0; i < profileDataArr.length; i += 1) {
//  !       console.log(profileDataArr[1]);
//  !   }

//     console.log('===============');
    
//     // Is the same as this...
//  !   profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// Parenthesis are not needed in an arrow function with only one parameter. This one has no parameter, so the parenthesis are there to mark it as empty.
// ! const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;

// using ` rather than ' creates a template literal. We can embed JavaScript expressions into the string this way.
// we can also create multi-line strings w/ them.

//! const generatePage = (userName, githubName) => {
//!     return `
//!     Name: ${userName}
//!     GitHub: ${githubName}
//!     `;
//! };
// The above is great, but it needs to be in html format. See below.


// * The generatePage function was here, but got moved to its own js file.


// ! console.log(generatePage('Jane', 'janehub'));

//! console.log(name, github);
//! console.log(generatePage(name, github));

// by entering "node app.js 'Grayson' 'graysontmiller'" into the command line, I am presented with my name and github account.

//? fs.writeFile('./index.html', pageHTML, err => {
    //accesses the filesystem to create a file called index.html based on the generatePage function(the string template in this case). the last argument is a callback for error handling as well as the success message.
    //? if (err) throw err;
    // "if error, create and display an error message within the console."

    //? console.log('Portfolio complete! Checkout index.html to see the output!');
//? });

const promptUser = () => {
    return inquirer.prompt ([
            {
                type:'input',  // Input means the question will receive a text reply
                name: 'name',
                message: 'What is your name?'
            },
            {
                type: 'input',
                name: 'github',
                message: 'Enter your GitHub Username'
            },
            {
                type: 'input',
                name: 'about',
                message: 'Provide some information about yourself:'
            }
        ]);
    };
        // The prompt section receives an array of objects in its argument, creating the individual question objects. What is typed in response is the answer.


const promptProject = portfolioData => {
    console.log(`
  =================
  Add a New Project
  =================
  `);

    // If there's no 'projects' array property, create one
    if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
        return inquirer.prompt([
          {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?'
          },
          {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)'
          },
          {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
          },
          {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)'
          },
          {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
          },
          {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
          }
        ])
    .then(projectData => {
            portfolioData.projects.push(projectData);
            if (projectData.confirmAddProject) {
                return promptProject(portfolioData);
            } else {
                return portfolioData;
            }
        })
        // After all of the questions, push this portfolio data to projects array. If the user answers true to the confirmAddProject, promptProject will be called.
      };

promptUser()
.then(promptProject)
.then(portfolioData => {
    console.log(portfolioData);
});