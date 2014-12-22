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
