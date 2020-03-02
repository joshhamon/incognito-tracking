function onFormSubmit(e) {
  Logger.log("[METHOD] onFormSubmit");
  formatMySpreadsheet();
}

function formatMySpreadsheet() {
 
  var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/xxx/");  //replace xxx with your spreedsheets URL
  var sheet = ss.getSheets()[x];   //replace x with the correct sheet number, the sheet you are looking for is probably named "Form Responses 1"
  var lastRow = sheet.getLastRow();
  var lastCell = sheet.getRange(sheet.getLastRow(), sheet.getLastColumn());
  var checkCell = sheet.getRange(lastRow, 5);
  var realDateCell = sheet.getRange(lastRow, 6);
  var realDate = Date();
  
  // Log initial variables for troubleshooting
  //Logger.log(sheet.getName());
  //Logger.log("lastRow =",lastRow);
  //Logger.log("lastCell =",lastCell);
  //Logger.log("checkCell=",checkCell);
  //Logger.log("realDateCell=", realDateCell);
  //Logger.log("realDate=",realDate);
  
  if (checkCell.getValue()=="Yes") {
  //  Logger.log("Yes, use timestamp");
    realDate = sheet.getRange(lastRow, 1).getValue();
  } 
  else { 
    realDate = sheet.getRange(lastRow, 4).getValue();
 //   Logger.log("No, use Date");
  }
  
//  Logger.log("realDate is ",realDate);
//  Logger.log("realDate.getMonth() is ",realDate.getMonth());

  sheet.getRange(realDateCell.getA1Notation()).setValue(realDate.getMonth()+1);

  if (realDateCell.isBlank()) {
    checkMyVar(); 
    Logger.log("Running checkMyVar"); //If the cell remains blank for any reason, checkMyVar runs to log variables. 
  }
}

function checkMyVar() {
 

  var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1SOs_IGECnkfNsd_8KKUyToX8m7T8lo5kf-Oc-PEOtug/");
  var sheet = ss.getSheets()[2];   // Replacing 2 with "findSheet()" didn't work and returned an error on the next line
  var lastRow = sheet.getLastRow();
  var lastCell = sheet.getRange(sheet.getLastRow(), sheet.getLastColumn());
  var checkCell = sheet.getRange(lastRow, 5);
  var realDateCell = sheet.getRange(lastRow, 6);
  var realDate = Date();
  
  // Log initial variables
  Logger.log(sheet.getName());
  Logger.log("lastRow =",lastRow);
  Logger.log("lastCell =",lastCell);
  Logger.log("checkCell =",checkCell);
  Logger.log("realDateCell =", realDateCell);
  Logger.log("realDate =",realDate);
  
  if (checkCell.getValue()=="Yes") {
    Logger.log("Yes, use timestamp");
    realDate = sheet.getRange(lastRow, 1).getValue();
  } 
  else { 
    realDate = sheet.getRange(lastRow, 4).getValue();
    Logger.log("No, use Date");
  }
  
  Logger.log("realDate is",realDate);
  Logger.log("realDate.getMonth()+1 is",realDate.getMonth()+1);

//  sheet.getRange(realDateCell.getA1Notation()).setValue(realDate.getMonth()+1);

}

function findSheet() {
 
  //findSheet not implemented at this time, it runs through the sheet looking for the "Form Responses 1" and returns it's index number. 
  
  var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1SOs_IGECnkfNsd_8KKUyToX8m7T8lo5kf-Oc-PEOtug/");
  var targetSheet = "Form Responses 1";
  
  // Loop through sheet names until we find targetSheet, return their index number
  for(y=0; y<10; y++) {
    if(ss.getSheets()[y].getSheetName()==targetSheet) {
      Logger.log("y=",y);
      return ss.getSheets()[y];
    }
  }
  Logger.log("Error, got through the list of sheets without finding the target");
  
}
