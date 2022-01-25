const generatePage = (name, github) => {
    return `
    <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
  </head>

  <body>
    <h1>${name}</h1>
    <h2><a href="https://github.com/${github}">Github</a></h2>
  </body>
  </html>
  `;
};
// we hard code the HTML into the string in the template literal, this way the app will read the string as HTML. the HTML includes the name and github variables from the profileDataArgs array

module.exports = generatePage;
// Designates this file to be exported to another when called on with require.