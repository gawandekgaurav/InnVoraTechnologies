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

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    const srno = Math.max(sheet.getLastRow(), 1);
    const timestamp = new Date();

    sheet.appendRow([
      srno,
      timestamp,
      data.name || '',
      data.email || '',
      data.phone || '',
      data.projectDetails || '',
    ]);

    return createJsonResponse({ success: true });
  } catch (error) {
    return createJsonResponse({ success: false, error: error.message });
  }
}

function doGet() {
  return createJsonResponse({ success: true, status: 'ok' });
}

function createJsonResponse(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}
