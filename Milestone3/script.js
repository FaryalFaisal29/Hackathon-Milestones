// Get references to the form and display area
var form = document.getElementById('resume-form');
var displayArea = document.getElementById('resume-display');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // Get form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    // Create a new HTML element for each field to generate the resume dynamically.
    var resumeHTML = "\n                     <h2><b>Resume</b></h2>\n                     \n                     <h3>Personal Information</h3>\n                     <p><b>Name:</b>".concat(name, "</p>\n                     <p><b>Email:</b>").concat(email, "</p>\n                     <p><b>Phone:</b>").concat(phone, "</p>\n                     \n                     <h3>Education</h3>\n                     <p>").concat(education, "</p>\n\n                     <h3>Skills</h3>\n                     <p>").concat(skills, "</p>\n\n                     <h3>Experience</h3>\n                     <p>").concat(experience, "</p>\n                     ");
    // Display the resume in the display area
    if (displayArea) {
        displayArea.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is not available.');
    }
});