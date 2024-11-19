// Get references to the form and display area

const form = document.getElementById('resume-form') as HTMLFormElement;

const displayArea = document.getElementById('resume-display') as HTMLDivElement;

// Handle form submission

form.addEventListener('submit',(event: Event)=>{
    event.preventDefault();  // prevent page reload
    
    // Get form data
  
    const name=(document.getElementById('name') as HTMLInputElement).value
    const email=(document.getElementById('email') as HTMLInputElement).value
    const phone=(document.getElementById('phone') as HTMLInputElement).value
    const education=(document.getElementById('education') as HTMLInputElement).value
    const skills=(document.getElementById('skills') as HTMLInputElement).value
    const experience=(document.getElementById('experience') as HTMLInputElement).value

    // Create a new HTML element for each field to generate the resume dynamically.

    const resumeHTML= `
         <h2><b>Resume</b></h2>
                     
         <h3>Personal Information</h3>
         <p><b>Name:</b>${name}</p>
         <p><b>Email:</b>${email}</p>
         <p><b>Phone:</b>${phone}</p>
                     
         <h3>Education</h3>
         <p>${education}</p>

         <h3>Skills</h3>
         <p>${skills}</p>

         <h3>Experience</h3>
         <p>${experience}</p>

    `;

    // Display the resume in the display area

    if (displayArea) {
       displayArea.innerHTML = resumeHTML;
    }else{
        console.error('The resume display element is not available.');
    }

})
