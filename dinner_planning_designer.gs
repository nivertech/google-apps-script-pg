// Google I/O 2013 - Use Apps Script to Create Dynamic Google Forms 
// https://www.youtube.com/watch?v=38H7WpsTD0M

// Enhance the form designer
// Add custom menus
// http://youtu.be/38H7WpsTD0M?t=14m28s

function onOpen() {
  FormApp.getUi().createMenu('Extras')
    .addItem('Show best day', 'showBestDay')
    .addItem('Show response chart', 'showChart')
    .addToUi();
}

function showBestDay() {
  // ...
}

function showChart() {
  // ...
}

// http://youtu.be/38H7WpsTD0M?t=15m54s
// Enhance the form designer
// Show custom dialogs and sidebars
function showResponseChart() {
  var template = HtmlService.createTemplateFromFile('Chart.html');
  template.votes = getVotesPerDay();
  
  var html = template.evaluate()
    .setTitle('Response Chart')
    .setWidth(300)
    .setHeight(125);
  
  FormApp.getUi().showDialog(html);
}

function getVotesPerDay() {
  // ...
}
