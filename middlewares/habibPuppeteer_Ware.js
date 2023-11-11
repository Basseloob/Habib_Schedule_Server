const fs = require("fs");
const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

const habib_Im_Url =
  "https://hmgeservices.com/login?ProjectID=60&ClinicID=1&StrDate=%27%27&lang=en";
const habib_Family_Url =
  "https://hmgeservices.com/login?ProjectID=60&ClinicID=26&StrDate=%27%27&lang=en";
const habib_Cardio_Url =
  "https://hmgeservices.com/login?ProjectID=60&ClinicID=21&StrDate=%27%27&lang=en";
const habib_Endo_Url =
  "https://hmgeservices.com/login?ProjectID=60&ClinicID=14&StrDate=%27%27&lang=en";
const habib_Nephro_Url =
  "https://hmgeservices.com/login?ProjectID=60&ClinicID=30&StrDate=%27%27&lang=en";

// const get_FamilyMedicine = async () => {
//   // Function to extract data from a page

//   await puppeteer
//     .launch({
//       headless: false,
//       executablePath:
//         // "C:/Program Files/Google/Chrome/Application/chrome.exe",
//         "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
//       userDataDir:
//         //   "C:/Users/Basseloob/AppData/Local/Google/Chrome/User Data/Default",
//         "/Users/basseloob/Library/Application Support/Google/Chrome/Profile 1",
//       // args: ["--proxy-server=http://162.23.125.34:8080"],
//     })
//     .then(async (browser) => {
//       const page = await browser.newPage();
//       //
//       //
//       //
//       //
//       await page.goto(habib_Family_Url);
//       page.waitForSelector(".docBoxLeft");
//       await page.waitForTimeout(3000);
//       await page.waitForSelector(".docBoxRight");
//       await page.waitForSelector(".docBoxLeft");
//       await page.waitForSelector(".docBox span.redColorLink");

//       // Perform the data extraction
//       await page.waitForSelector(".docBox span.redColorLink");
//       let viewDetails_btns = await page.$$(".docBox span.redColorLink");

//       let result = [];

//       for (let i = 0; i < viewDetails_btns.length; i++) {
//         // for (let i = 0; i < 8; i++) {
//         console.log("Number of physicians: ", viewDetails_btns.length);

//         await page.waitForTimeout(2000);
//         await page.waitForSelector(".docBox span.redColorLink");
//         //   await page.waitForSelector(viewDetails_btns[i]);
//         console.log("Number of now: ", i);

//         let viewDetails_btns2 = await page.$$(".docBox span.redColorLink");
//         viewDetails_btns2[i].click();

//         console.log("result array  : ", result);

//         await page.waitForSelector(".docBoxLeft img[src]");
//         await page.waitForSelector(".docBoxRight h3");
//         await page.waitForSelector("b.ng-tns-c12-0");
//         await page.waitForSelector("p.docMainDetails span");
//         await page.waitForSelector("p.docMainDetails span");
//         try {
//           await page.waitForSelector("div.timedate", {
//             timeout: 5000,
//           });
//         } catch (error) {
//           console.log("The element didn't appear.");
//         }

//         const image = await page.$(".docBoxLeft img[src]");
//         const name = await page.$(".docBoxRight h3");
//         const speciality = await page.$("p.docMainDetails span:nth-child(2)");
//         const hospitalName = await page.$("p.docMainDetails span:nth-child(1)");
//         const date = await page.$("b.ng-tns-c12-0");
//         // const times = await page.$$("div.timedate div.timepicker");

//         // if (image && name && speciality && hospitalName && date && times) {
//         const imageSource = await page.evaluate((el) => el.src, image);
//         const nameText = await page.evaluate((el) => el.innerText, name);

//         const speciality_Text = await page.evaluate(
//           (el) => el.innerText,
//           speciality
//         );

//         const hospitalName_Text = await page.evaluate(
//           (el) => el.innerText,
//           hospitalName
//         );

//         const dateText = await page.evaluate((el) => el.innerText, date);

//         ////////////////////////////////////////////////////////////////////////////
//         const innerTextArr = [];
//         try {
//         } catch (err) {}
//         const times = await page.$$("div.timedate div.timepicker");
//         for (const divElement of times) {
//           const timesText = await page.evaluate(
//             (el) => el.innerText,
//             divElement
//           );
//           innerTextArr.push(timesText);
//         }
//         console.log("TimesText : ", times.length);
//         console.log("TimesText Array : ", innerTextArr);

//         ////////////////////////////////////////////////////////////////////////////

//         result.push({
//           Img: imageSource,
//           Name: nameText,
//           Speciality: speciality_Text,
//           Hospital: hospitalName_Text,
//           Date: dateText,
//           Times: innerTextArr,
//         });

//         page.reload();

//         // 5) wait 3 seconds :
//         await page.waitForTimeout(2000);
//         // 6) Wait for the "button.btn" and click it
//         await page.waitForSelector("button.btn");
//         const button = await page.$("button.btn");
//         if (button) {
//           // await page.reload();
//           // await page.waitForTimeout(1500);
//           await button.click();
//         } else {
//           console.log("Button with class 'btn' not found.");
//         }
//       }

//       console.log(result);
//       console.log("Loop is done. The result array is : ");

//       //   saving the result array :
//       const resultFilePath = "./output/output_Fm_HabibData.json";
//       fs.writeFileSync(resultFilePath, JSON.stringify(result));
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };

// const get_InternalMedicine = async () => {
//   // Function to extract data from a page

//   await puppeteer
//     .launch({
//       headless: false,
//       executablePath:
//         // "C:/Program Files/Google/Chrome/Application/chrome.exe",
//         "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
//       userDataDir:
//         //   "C:/Users/Basseloob/AppData/Local/Google/Chrome/User Data/Default",
//         "/Users/basseloob/Library/Application Support/Google/Chrome/Profile 1",
//       // args: ["--proxy-server=http://162.23.125.34:8080"],
//     })
//     .then(async (browser) => {
//       const page = await browser.newPage();
//       //
//       //
//       //
//       //
//       await page.goto(habib_Im_Url);
//       page.waitForSelector(".docBoxLeft");
//       await page.waitForTimeout(3000);
//       await page.waitForSelector(".docBoxRight");
//       await page.waitForSelector(".docBoxLeft");
//       await page.waitForSelector(".docBox span.redColorLink");

//       // Perform the data extraction
//       await page.waitForSelector(".docBox span.redColorLink");
//       let viewDetails_btns = await page.$$(".docBox span.redColorLink");

//       let result = [];

//       for (let i = 0; i < viewDetails_btns.length; i++) {
//         // for (let i = 0; i < 8; i++) {
//         console.log("Number of physicians: ", viewDetails_btns.length);

//         await page.waitForTimeout(2000);
//         await page.waitForSelector(".docBox span.redColorLink");
//         //   await page.waitForSelector(viewDetails_btns[i]);
//         console.log("Number of now: ", i);

//         let viewDetails_btns2 = await page.$$(".docBox span.redColorLink");
//         viewDetails_btns2[i].click();

//         console.log("result array  : ", result);

//         await page.waitForSelector(".docBoxLeft img[src]");
//         await page.waitForSelector(".docBoxRight h3");
//         await page.waitForSelector("b.ng-tns-c12-0");
//         await page.waitForSelector("p.docMainDetails span");
//         await page.waitForSelector("p.docMainDetails span");
//         try {
//           await page.waitForSelector("div.timedate", {
//             timeout: 5000,
//           });
//         } catch (error) {
//           console.log("The element didn't appear.");
//         }

//         const image = await page.$(".docBoxLeft img[src]");
//         const name = await page.$(".docBoxRight h3");
//         const speciality = await page.$("p.docMainDetails span:nth-child(2)");
//         const hospitalName = await page.$("p.docMainDetails span:nth-child(1)");
//         const date = await page.$("b.ng-tns-c12-0");
//         // const times = await page.$$("div.timedate div.timepicker");

//         // if (image && name && speciality && hospitalName && date && times) {
//         const imageSource = await page.evaluate((el) => el.src, image);
//         const nameText = await page.evaluate((el) => el.innerText, name);

//         const speciality_Text = await page.evaluate(
//           (el) => el.innerText,
//           speciality
//         );

//         const hospitalName_Text = await page.evaluate(
//           (el) => el.innerText,
//           hospitalName
//         );

//         const dateText = await page.evaluate((el) => el.innerText, date);

//         ////////////////////////////////////////////////////////////////////////////
//         const innerTextArr = [];
//         try {
//         } catch (err) {}
//         const times = await page.$$("div.timedate div.timepicker");
//         for (const divElement of times) {
//           const timesText = await page.evaluate(
//             (el) => el.innerText,
//             divElement
//           );
//           innerTextArr.push(timesText);
//         }
//         console.log("TimesText : ", times.length);
//         console.log("TimesText Array : ", innerTextArr);

//         ////////////////////////////////////////////////////////////////////////////

//         result.push({
//           Img: imageSource,
//           Name: nameText,
//           Speciality: speciality_Text,
//           Hospital: hospitalName_Text,
//           Date: dateText,
//           Times: innerTextArr,
//         });

//         page.reload();

//         // 5) wait 3 seconds :
//         await page.waitForTimeout(2000);
//         // 6) Wait for the "button.btn" and click it
//         await page.waitForSelector("button.btn");
//         const button = await page.$("button.btn");
//         if (button) {
//           // await page.reload();
//           // await page.waitForTimeout(1500);
//           await button.click();
//         } else {
//           console.log("Button with class 'btn' not found.");
//         }
//       }

//       console.log(result);
//       console.log("Loop is done. The result array is : ");

//       //   saving the result array :
//       const resultFilePath = "./output/output_Im_HabibData.json";
//       fs.writeFileSync(resultFilePath, JSON.stringify(result));
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };

// const get_Cardiology = async () => {
//   // Function to extract data from a page

//   await puppeteer
//     .launch({
//       headless: false,
//       executablePath:
//         // "C:/Program Files/Google/Chrome/Application/chrome.exe",
//         "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
//       userDataDir:
//         //   "C:/Users/Basseloob/AppData/Local/Google/Chrome/User Data/Default",
//         "/Users/basseloob/Library/Application Support/Google/Chrome/Profile 1",
//       // args: ["--proxy-server=http://162.23.125.34:8080"],
//     })
//     .then(async (browser) => {
//       const page = await browser.newPage();
//       //
//       //
//       //
//       //
//       await page.goto(habib_Cardio_Url);
//       page.waitForSelector(".docBoxLeft");
//       await page.waitForTimeout(3000);
//       await page.waitForSelector(".docBoxRight");
//       await page.waitForSelector(".docBoxLeft");
//       await page.waitForSelector(".docBox span.redColorLink");

//       // Perform the data extraction
//       await page.waitForSelector(".docBox span.redColorLink");
//       let viewDetails_btns = await page.$$(".docBox span.redColorLink");

//       let result = [];

//       for (let i = 0; i < viewDetails_btns.length; i++) {
//         // for (let i = 0; i < 8; i++) {
//         console.log("Number of physicians: ", viewDetails_btns.length);

//         await page.waitForTimeout(2000);
//         await page.waitForSelector(".docBox span.redColorLink");
//         //   await page.waitForSelector(viewDetails_btns[i]);
//         console.log("Number of now: ", i);

//         let viewDetails_btns2 = await page.$$(".docBox span.redColorLink");
//         viewDetails_btns2[i].click();

//         console.log("result array  : ", result);

//         await page.waitForSelector(".docBoxLeft img[src]");
//         await page.waitForSelector(".docBoxRight h3");
//         await page.waitForSelector("b.ng-tns-c12-0");
//         await page.waitForSelector("p.docMainDetails span");
//         await page.waitForSelector("p.docMainDetails span");
//         try {
//           await page.waitForSelector("div.timedate", {
//             timeout: 5000,
//           });
//         } catch (error) {
//           console.log("The element didn't appear.");
//         }

//         const image = await page.$(".docBoxLeft img[src]");
//         const name = await page.$(".docBoxRight h3");
//         const speciality = await page.$("p.docMainDetails span:nth-child(2)");
//         const hospitalName = await page.$("p.docMainDetails span:nth-child(1)");
//         const date = await page.$("b.ng-tns-c12-0");
//         // const times = await page.$$("div.timedate div.timepicker");

//         // if (image && name && speciality && hospitalName && date && times) {
//         const imageSource = await page.evaluate((el) => el.src, image);
//         const nameText = await page.evaluate((el) => el.innerText, name);

//         const speciality_Text = await page.evaluate(
//           (el) => el.innerText,
//           speciality
//         );

//         const hospitalName_Text = await page.evaluate(
//           (el) => el.innerText,
//           hospitalName
//         );

//         const dateText = await page.evaluate((el) => el.innerText, date);

//         ////////////////////////////////////////////////////////////////////////////
//         const innerTextArr = [];
//         try {
//         } catch (err) {}
//         const times = await page.$$("div.timedate div.timepicker");
//         for (const divElement of times) {
//           const timesText = await page.evaluate(
//             (el) => el.innerText,
//             divElement
//           );
//           innerTextArr.push(timesText);
//         }
//         console.log("TimesText : ", times.length);
//         console.log("TimesText Array : ", innerTextArr);

//         ////////////////////////////////////////////////////////////////////////////

//         result.push({
//           Img: imageSource,
//           Name: nameText,
//           Speciality: speciality_Text,
//           Hospital: hospitalName_Text,
//           Date: dateText,
//           Times: innerTextArr,
//         });

//         page.reload();

//         // 5) wait 3 seconds :
//         await page.waitForTimeout(2000);
//         // 6) Wait for the "button.btn" and click it
//         await page.waitForSelector("button.btn");
//         const button = await page.$("button.btn");
//         if (button) {
//           // await page.reload();
//           // await page.waitForTimeout(1500);
//           await button.click();
//         } else {
//           console.log("Button with class 'btn' not found.");
//         }
//       }

//       console.log(result);
//       console.log("Loop is done. The result array is : ");

//       //   saving the result array :
//       const resultFilePath = "./output/output_Cardio_HabibData.json";
//       fs.writeFileSync(resultFilePath, JSON.stringify(result));
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };

// const get_Endo = async () => {
//   // Function to extract data from a page

//   await puppeteer
//     .launch({
//       headless: false,
//       executablePath:
//         // "C:/Program Files/Google/Chrome/Application/chrome.exe",
//         "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
//       userDataDir:
//         //   "C:/Users/Basseloob/AppData/Local/Google/Chrome/User Data/Default",
//         "/Users/basseloob/Library/Application Support/Google/Chrome/Profile 1",
//       // args: ["--proxy-server=http://162.23.125.34:8080"],
//     })
//     .then(async (browser) => {
//       const page = await browser.newPage();
//       //
//       //
//       //
//       //
//       await page.goto(habib_Endo_Url);
//       page.waitForSelector(".docBoxLeft");
//       await page.waitForTimeout(3000);
//       await page.waitForSelector(".docBoxRight");
//       await page.waitForSelector(".docBoxLeft");
//       await page.waitForSelector(".docBox span.redColorLink");

//       // Perform the data extraction
//       await page.waitForSelector(".docBox span.redColorLink");
//       let viewDetails_btns = await page.$$(".docBox span.redColorLink");

//       let result = [];

//       for (let i = 0; i < viewDetails_btns.length; i++) {
//         // for (let i = 0; i < 8; i++) {
//         console.log("Number of physicians: ", viewDetails_btns.length);

//         await page.waitForTimeout(2000);
//         await page.waitForSelector(".docBox span.redColorLink");
//         //   await page.waitForSelector(viewDetails_btns[i]);
//         console.log("Number of now: ", i);

//         let viewDetails_btns2 = await page.$$(".docBox span.redColorLink");
//         viewDetails_btns2[i].click();

//         console.log("result array  : ", result);

//         await page.waitForSelector(".docBoxLeft img[src]");
//         await page.waitForSelector(".docBoxRight h3");
//         await page.waitForSelector("b.ng-tns-c12-0");
//         await page.waitForSelector("p.docMainDetails span");
//         await page.waitForSelector("p.docMainDetails span");
//         try {
//           await page.waitForSelector("div.timedate", {
//             timeout: 5000,
//           });
//         } catch (error) {
//           console.log("The element didn't appear.");
//         }

//         const image = await page.$(".docBoxLeft img[src]");
//         const name = await page.$(".docBoxRight h3");
//         const speciality = await page.$("p.docMainDetails span:nth-child(2)");
//         const hospitalName = await page.$("p.docMainDetails span:nth-child(1)");
//         const date = await page.$("b.ng-tns-c12-0");
//         // const times = await page.$$("div.timedate div.timepicker");

//         // if (image && name && speciality && hospitalName && date && times) {
//         const imageSource = await page.evaluate((el) => el.src, image);
//         const nameText = await page.evaluate((el) => el.innerText, name);

//         const speciality_Text = await page.evaluate(
//           (el) => el.innerText,
//           speciality
//         );

//         const hospitalName_Text = await page.evaluate(
//           (el) => el.innerText,
//           hospitalName
//         );

//         const dateText = await page.evaluate((el) => el.innerText, date);

//         ////////////////////////////////////////////////////////////////////////////
//         const innerTextArr = [];
//         try {
//         } catch (err) {}
//         const times = await page.$$("div.timedate div.timepicker");
//         for (const divElement of times) {
//           const timesText = await page.evaluate(
//             (el) => el.innerText,
//             divElement
//           );
//           innerTextArr.push(timesText);
//         }
//         console.log("TimesText : ", times.length);
//         console.log("TimesText Array : ", innerTextArr);

//         ////////////////////////////////////////////////////////////////////////////

//         result.push({
//           Img: imageSource,
//           Name: nameText,
//           Speciality: speciality_Text,
//           Hospital: hospitalName_Text,
//           Date: dateText,
//           Times: innerTextArr,
//         });

//         page.reload();

//         // 5) wait 3 seconds :
//         await page.waitForTimeout(2000);
//         // 6) Wait for the "button.btn" and click it
//         await page.waitForSelector("button.btn");
//         const button = await page.$("button.btn");
//         if (button) {
//           // await page.reload();
//           // await page.waitForTimeout(1500);
//           await button.click();
//         } else {
//           console.log("Button with class 'btn' not found.");
//         }
//       }

//       console.log(result);
//       console.log("Loop is done. The result array is : ");

//       //   saving the result array :
//       const resultFilePath = "./output/output_Endo_HabibData.json";
//       fs.writeFileSync(resultFilePath, JSON.stringify(result));
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };

// const get_Nephro = async () => {
//   // Function to extract data from a page

//   await puppeteer
//     .launch({
//       headless: false,
//       executablePath:
//         // "C:/Program Files/Google/Chrome/Application/chrome.exe",
//         "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
//       userDataDir:
//         //   "C:/Users/Basseloob/AppData/Local/Google/Chrome/User Data/Default",
//         "/Users/basseloob/Library/Application Support/Google/Chrome/Profile 1",
//       // args: ["--proxy-server=http://162.23.125.34:8080"],
//     })
//     .then(async (browser) => {
//       const page = await browser.newPage();
//       //
//       //
//       //
//       //
//       await page.goto(habib_Nephro_Url);
//       page.waitForSelector(".docBoxLeft");
//       await page.waitForTimeout(3000);
//       await page.waitForSelector(".docBoxRight");
//       await page.waitForSelector(".docBoxLeft");
//       await page.waitForSelector(".docBox span.redColorLink");

//       // Perform the data extraction
//       await page.waitForSelector(".docBox span.redColorLink");
//       let viewDetails_btns = await page.$$(".docBox span.redColorLink");

//       let result = [];

//       for (let i = 0; i < viewDetails_btns.length; i++) {
//         // for (let i = 0; i < 8; i++) {
//         console.log("Number of physicians: ", viewDetails_btns.length);

//         await page.waitForTimeout(2000);
//         await page.waitForSelector(".docBox span.redColorLink");
//         //   await page.waitForSelector(viewDetails_btns[i]);
//         console.log("Number of now: ", i);

//         let viewDetails_btns2 = await page.$$(".docBox span.redColorLink");
//         viewDetails_btns2[i].click();

//         console.log("result array  : ", result);

//         await page.waitForSelector(".docBoxLeft img[src]");
//         await page.waitForSelector(".docBoxRight h3");
//         await page.waitForSelector("b.ng-tns-c12-0");
//         await page.waitForSelector("p.docMainDetails span");
//         await page.waitForSelector("p.docMainDetails span");
//         try {
//           await page.waitForSelector("div.timedate", {
//             timeout: 5000,
//           });
//         } catch (error) {
//           console.log("The element didn't appear.");
//         }

//         const image = await page.$(".docBoxLeft img[src]");
//         const name = await page.$(".docBoxRight h3");
//         const speciality = await page.$("p.docMainDetails span:nth-child(2)");
//         const hospitalName = await page.$("p.docMainDetails span:nth-child(1)");
//         const date = await page.$("b.ng-tns-c12-0");
//         // const times = await page.$$("div.timedate div.timepicker");

//         // if (image && name && speciality && hospitalName && date && times) {
//         const imageSource = await page.evaluate((el) => el.src, image);
//         const nameText = await page.evaluate((el) => el.innerText, name);

//         const speciality_Text = await page.evaluate(
//           (el) => el.innerText,
//           speciality
//         );

//         const hospitalName_Text = await page.evaluate(
//           (el) => el.innerText,
//           hospitalName
//         );

//         const dateText = await page.evaluate((el) => el.innerText, date);

//         ////////////////////////////////////////////////////////////////////////////
//         const innerTextArr = [];
//         try {
//         } catch (err) {}
//         const times = await page.$$("div.timedate div.timepicker");
//         for (const divElement of times) {
//           const timesText = await page.evaluate(
//             (el) => el.innerText,
//             divElement
//           );
//           innerTextArr.push(timesText);
//         }
//         console.log("TimesText : ", times.length);
//         console.log("TimesText Array : ", innerTextArr);

//         ////////////////////////////////////////////////////////////////////////////

//         result.push({
//           Img: imageSource,
//           Name: nameText,
//           Speciality: speciality_Text,
//           Hospital: hospitalName_Text,
//           Date: dateText,
//           Times: innerTextArr,
//         });

//         page.reload();

//         // 5) wait 3 seconds :
//         await page.waitForTimeout(2000);
//         // 6) Wait for the "button.btn" and click it
//         await page.waitForSelector("button.btn");
//         const button = await page.$("button.btn");
//         if (button) {
//           // await page.reload();
//           // await page.waitForTimeout(1500);
//           await button.click();
//         } else {
//           console.log("Button with class 'btn' not found.");
//         }
//       }

//       console.log(result);
//       console.log("Loop is done. The result array is : ");

//       //   saving the result array :
//       const resultFilePath = "./output/output_Nephro_HabibData.json";
//       fs.writeFileSync(resultFilePath, JSON.stringify(result));
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };

const get_Habib_Data = async (clinic) => {
  // Function to extract data from a page

  await puppeteer
    .launch({
      headless: false,
      executablePath:
        // "C:/Program Files/Google/Chrome/Application/chrome.exe",
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
      userDataDir:
        //   "C:/Users/Basseloob/AppData/Local/Google/Chrome/User Data/Default",
        "/Users/basseloob/Library/Application Support/Google/Chrome/Profile 1",
      // args: ["--proxy-server=http://162.23.125.34:8080"],
    })
    .then(async (browser) => {
      const page = await browser.newPage();
      //
      //
      //
      //
      await page.goto(clinic);
      page.waitForSelector(".docBoxLeft");
      await page.waitForTimeout(3000);
      await page.waitForSelector(".docBoxRight");
      await page.waitForSelector(".docBoxLeft");
      await page.waitForSelector(".docBox span.redColorLink");

      // Perform the data extraction
      await page.waitForSelector(".docBox span.redColorLink");
      let viewDetails_btns = await page.$$(".docBox span.redColorLink");

      let result = [];

      for (let i = 0; i < viewDetails_btns.length; i++) {
        // for (let i = 0; i < 8; i++) {
        console.log("Number of physicians: ", viewDetails_btns.length);

        await page.waitForTimeout(2000);
        await page.waitForSelector(".docBox span.redColorLink");
        //   await page.waitForSelector(viewDetails_btns[i]);
        console.log("Number of now: ", i);

        let viewDetails_btns2 = await page.$$(".docBox span.redColorLink");
        viewDetails_btns2[i].click();

        console.log("result array  : ", result);

        await page.waitForSelector(".docBoxLeft img[src]");
        await page.waitForSelector(".docBoxRight h3");
        await page.waitForSelector("b.ng-tns-c12-0");
        await page.waitForSelector("p.docMainDetails span");
        await page.waitForSelector("p.docMainDetails span");
        try {
          await page.waitForSelector("div.timedate", {
            timeout: 5000,
          });
        } catch (error) {
          console.log("The element didn't appear.");
        }

        const image = await page.$(".docBoxLeft img[src]");
        const name = await page.$(".docBoxRight h3");
        const speciality = await page.$("p.docMainDetails span:nth-child(2)");
        const hospitalName = await page.$("p.docMainDetails span:nth-child(1)");
        const date = await page.$("b.ng-tns-c12-0");
        // const times = await page.$$("div.timedate div.timepicker");

        // if (image && name && speciality && hospitalName && date && times) {
        const imageSource = await page.evaluate((el) => el.src, image);
        const nameText = await page.evaluate((el) => el.innerText, name);

        const speciality_Text = await page.evaluate(
          (el) => el.innerText,
          speciality
        );

        const hospitalName_Text = await page.evaluate(
          (el) => el.innerText,
          hospitalName
        );

        const dateText = await page.evaluate((el) => el.innerText, date);

        ////////////////////////////////////////////////////////////////////////////
        const innerTextArr = [];
        try {
        } catch (err) {}
        const times = await page.$$("div.timedate div.timepicker");
        for (const divElement of times) {
          const timesText = await page.evaluate(
            (el) => el.innerText,
            divElement
          );
          innerTextArr.push(timesText);
        }
        console.log("TimesText : ", times.length);
        console.log("TimesText Array : ", innerTextArr);

        ////////////////////////////////////////////////////////////////////////////

        result.push({
          Img: imageSource,
          Name: nameText,
          Speciality: speciality_Text,
          Hospital: hospitalName_Text,
          Date: dateText,
          Times: innerTextArr,
        });

        page.reload();

        // 5) wait 3 seconds :
        await page.waitForTimeout(2000);
        // 6) Wait for the "button.btn" and click it
        await page.waitForSelector("button.btn");
        const button = await page.$("button.btn");
        if (button) {
          // await page.reload();
          // await page.waitForTimeout(1500);
          await button.click();
        } else {
          console.log("Button with class 'btn' not found.");
        }
      }

      console.log(result);
      console.log("Loop is done. The result array is : ");

      //   saving the result array :
      const resultFilePath = `./output/${clinic}.json`;
      fs.writeFileSync(resultFilePath, JSON.stringify(result));
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = {
  // get_Cardiology,
  // get_Endo,
  // get_InternalMedicine,
  // get_Nephro,
  // get_FamilyMedicine,
  get_Habib_Data,
};
