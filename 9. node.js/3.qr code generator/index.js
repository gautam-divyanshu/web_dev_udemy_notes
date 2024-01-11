/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer"; //npm package
import qr from "qr-image"; //npm package
import fs from "fs"; //native node module

inquirer
  .prompt([ //js object
    {
      message: "Type in your URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL; //console.log(answer.URL)
    
    //using qr-image npm package
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    //following will save url in txt file
    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong// Something else went wrong
    }
  });
