// Handle 'Learn More' button clicks
document.querySelectorAll('.place-item button').forEach(button => {
    button.addEventListener('click', event => {
      const placeName = event.target.parentElement.querySelector('h2').textContent;
      alert(Learn more about ${placeName}!);
    });
  });
  
  // Handle form submission
  document.getElementById('contactForm').addEventListener('submit', event => {
    event.preventDefault(); // Prevent actual form submission
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (name && email && message) {
      const successMessage = Thank you, ${name}! We have received your message and will get back to you at ${email} shortly.;
      alert(successMessage);
      document.getElementById('contactForm').reset();
    } else {
      alert('Error: Please fill out all fields before submitting the form.');
    }
  });