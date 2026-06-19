/**
 * InnVora Technologies — Lead Form Handler
 *
 * Setup:
 * 1. Create a Google Sheet with columns: srno | Timestamp | Name | Email | Phone | Project Details
 * 2. Extensions → Apps Script → paste this file
 * 3. Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Copy the Web App URL into VITE_GOOGLE_SCRIPT_URL in your .env file
 */

function doGet() {
  return ContentService.createTextOutput("Apps Script is running!");
}

function doPost(e) {

  try {

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");

    const data = JSON.parse(e.postData.contents);

    const serialNo = sheet.getLastRow();

    sheet.appendRow([
      serialNo,
      new Date(),
      data.name,
      data.email,
      data.phone,
      data.projectDetails
    ]);

    return ContentService
      .createTextOutput(
        JSON.stringify({
          result: "success"
        })
      )
      .setMimeType(ContentService.MimeType.JSON);

  }

  catch (err) {

    return ContentService
      .createTextOutput(
        JSON.stringify({
          result: "error",
          message: err.toString()
        })
      )
      .setMimeType(ContentService.MimeType.JSON);

  }

}
