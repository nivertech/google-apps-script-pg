// React to submission
// On form submit trigger
// http://youtu.be/38H7WpsTD0M

function onFormSubmit(event) {
  var response = event.response;
  var email = event.getRespondentEmail();
  var days = event.getItemResponses()[0].getResponse();
  
  var message = Utilities.formatString('Guest %s can attend on %s.', email, days.join(', '));
  
  var document = DocumentApp.openById("1kwC...........");
  document.getBody().appendParagraph(message);
  document.addViewer(email);
}
