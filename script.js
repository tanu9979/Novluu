const loginBtn = document.getElementById('loginBtn');
const loginWrapper = document.getElementById('loginWrapper');
const closeBtn = document.getElementById('closeBtn');

// Show the wrapper when the Login button is clicked
loginBtn.addEventListener('click', () => {
    loginWrapper.style.display = 'flex'; // Use flex to keep alignment
});

// Hide the wrapper when the Close button is clicked
closeBtn.addEventListener('click', () => {
    loginWrapper.style.display = 'none';
});
