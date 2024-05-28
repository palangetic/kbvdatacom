function submitForm(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var phone = document.getElementById('phone').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  if (name && phone && email && message) {
    alert('Poruka uspešno poslata!');
    document.getElementById('contact-form').reset();
  }
}
