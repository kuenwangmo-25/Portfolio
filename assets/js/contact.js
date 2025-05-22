const form = document.getElementById('contact-form');
  const staticMsg = document.getElementById('static-message');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Stop form from submitting
    form.reset(); // Clear the form fields
    staticMsg.style.display = 'block'; // Show the success message

    // Hide message after 5 seconds
    setTimeout(() => {
      staticMsg.style.display = 'none';
    }, 2000); // 5000 ms = 5 seconds
  });