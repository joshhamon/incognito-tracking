# incognito-tracking
While the fine folks at Incognito keep working on their project, here is a google form and script to help track your own earnings. So this can be setup for free with only the smaller amount of technical skill. This makes use of google appscript and requires a google/gmail account.

I will be updating this as a get the proper files setup, so if you download this now, it won't work.

Files:
form-link - while tracking remains DIY, here is a google form you can use to track your own nodes earnings. You will need to import it, then update to have the proper accounts available. It will also allow you to edit the submission date. This way if you withdraw earnings from your node on Monday but don't submit the form until Tuesday, your tracking will be accurate. This is also useful around the end of the month so March results don't get put into April. Once you've edited the form, you'll need to connect it to spreadsheet.

Code.gs - this script updates the spreadsheet automatically with DateCleaner function. You'll need to add in your forms URLs and sheetId (where the sheet falls among the tabs). 

Rough Steps:
1) Go to the url in form-link a make your copy. 
2) Optional: update the form title
3) Edit "Which Node?" question with your Account names.
4) In the Responses tab, either Create a New Spreadsheet or Select Response Destination to link the form to the correct Google sheet.
5) In the Form, go to the Script Editor (three dots in upper right)
6) This is where to code from Code.gs goes
7) Copy your Response Destination sheet URL to ss
8) Update var sheet with the code sheetId (which tab is it by #)
9) Test the form with a test entry or 2
10) From here you can edit the sheet for whatever analytics that interests you
