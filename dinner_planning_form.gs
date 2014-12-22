// Google I/O 2013 - Use Apps Script to Create Dynamic Google Forms 
// https://www.youtube.com/watch?v=38H7WpsTD0M
// Create form and email link
// http://youtu.be/38H7WpsTD0M?t=11m42s

var form = FormApp.create('Dinner Planning Form');
form.setTitle('Dinner Availability');
form.setCollectEmails(true);

var item = form.addCheckboxItem();
item.setTitle('What days are you available?');
item.setChoiceValue(['Monday', 'Tuesday', 'Wednesday']);

MailApp.sendEmail(
  Session.getActiveUser().getEmail(),
  'Please fill out this form',
  form.getPublishedUrl());
