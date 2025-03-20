// Login Form Submission
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  console.log('Login Data:', { email, password });
  alert('Login successful! Redirecting to dashboard...');
  window.location.href = 'dashboard.html';
});

// Signup Form Submission
document.getElementById('signupForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const userType = document.getElementById('userType').value;
  console.log('Signup Data:', { fullName, email, password, confirmPassword, userType });
  alert('Signup successful! Redirecting to login...');
  window.location.href = 'login.html';
});

// Donate Food Form Submission
document.getElementById('donateForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const foodItem = document.getElementById('foodItem').value;
  const quantity = document.getElementById('quantity').value;
  const expiryDate = document.getElementById('expiryDate').value;
  const location = document.getElementById('location').value;
  const instructions = document.getElementById('instructions').value;
  console.log('Donation Data:', { foodItem, quantity, expiryDate, location, instructions });
  alert('Thank you for your donation!');
  window.location.href = 'dashboard.html';
});

// Request Food Form Submission
document.getElementById('requestForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const foodItem = document.getElementById('foodItem').value;
  const quantity = document.getElementById('quantity').value;
  const preferredTime = document.getElementById('preferredTime').value;
  const location = document.getElementById('location').value;
  const instructions = document.getElementById('instructions').value;
  console.log('Request Data:', { foodItem, quantity, preferredTime, location, instructions });
  alert('Your request has been submitted!');
  window.location.href = 'dashboard.html';
});

// Volunteer Form Submission
document.getElementById('volunteerForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const availability = document.getElementById('availability').value;
  const location = document.getElementById('location').value;
  const comments = document.getElementById('comments').value;
  console.log('Volunteer Data:', { fullName, email, phone, availability, location, comments });
  alert('Thank you for volunteering!');
  window.location.href = 'dashboard.html';
});