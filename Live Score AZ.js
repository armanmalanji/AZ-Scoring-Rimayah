// Menerima skor dari aplikasi (POST)
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Live");
  if (!sheet) sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet("Live");
  
  // Simpan seluruh data skor di sel A1
  sheet.getRange("A1").setValue(e.postData.contents);
  return ContentService.createTextOutput("Sukses");
}

// Mengirim skor ke halaman Live Score (GET)
function doGet(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Live");
  if (!sheet) return ContentService.createTextOutput("{}").setMimeType(ContentService.MimeType.JSON);
  
  var data = sheet.getRange("A1").getValue();
  if(!data) data = "{}";
  
  return ContentService.createTextOutput(data).setMimeType(ContentService.MimeType.JSON);
}