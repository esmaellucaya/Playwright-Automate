// import fs from 'fs';
// import { readFileSync } from 'node:fs';
// import path from 'path';
// import { test } from '@playwright/test';
// import { parse } from 'csv-parse/sync';

// const records = parse(fs.readFileSync(path.join(__dirname, 'input.csv')), {
//     columns: true,
//     skip_empty_lines:true
// });


// for (const record of records) {

//     test('foo: ${record.test.case}', async ({ page }) =>{
//         console.log(record.test.case, record.some_value, record.some_other_value);
//     });

// } 


// test('Paste input values from CSV into a textbox', async ({ page }) => {
//     // 1. Read and parse the CSV
//     const filePath = path.join(__dirname, '../data/input.csv');
//     const csvData = fs.readFileSync(filePath);
//     const records = parse(csvData, {
//       columns: true,
//       skip_empty_lines: true,
//     });
  
//     // 2. Navigate to the target website
//     await page.goto('https://example.com'); // ⬅️ Replace with actual URL
  
//     // 3. Loop through the CSV rows and input values
//     for (const row of records) {
//       const inputValue = row.input;
  
//       // Wait for textbox to be visible
//       await page.waitForSelector('#inputBox'); // ⬅️ Replace with your actual selector
  
//       // Fill the input
//       await page.fill('#inputBox', inputValue);
  
//       // (Optional) Submit or trigger some action
//       // await page.click('#submitButton'); // ⬅️ If there's a button to click
  
//       // Wait a bit before next entry (if needed)
//       await page.waitForTimeout(1000);
//     }
//   });