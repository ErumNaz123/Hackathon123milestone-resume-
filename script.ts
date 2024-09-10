
//listing element
document.getElementById("resumeForm")?.addEventListener("submit", function(event){
    event.preventDefault();


    //type assertion
    const nameElement = document.getElementById("name") as HTMLInputElement|null;
    const emailElement = document.getElementById("email") as HTMLInputElement|null;
    const phoneElement = document.getElementById("phone") as HTMLInputElement|null;
    const educationElement = document.getElementById("education") as HTMLTextAreaElement |null;
    const experienceElement = document.getElementById("experience") as HTMLTextAreaElement|null;
    const skillsElement = document.getElementById("skills") as HTMLTextAreaElement|null;


    if(nameElement && phoneElement && educationElement && emailElement &&experienceElement 
        && skillsElement){
            const name = nameElement.value;
            const email = emailElement.value;
            const phone = phoneElement.value;
            const education = educationElement.value;
            const experience = experienceElement.value;
            const skills = skillsElement.value;
    //create resume output

    const resumeOutput = `
    <h2>RESUME</h2>
    <p><strong>Name:</strong>${name}</p>
     <p><strong>Email:</strong>${email}</p>
      <p><strong>Phone:</strong>${phone}</p>
      <h3> EDUCATION</h3>
       <p>${education}</p>
       <h4> EXPERIENCE </h4>
        <p>${experience}</p>
        <h5> SKILLS </h5>
         <p>${skills}</p>
      
    `;

    const  resumeOutputElement= document.getElementById("resumeOutput");
    if(resumeOutputElement){
        resumeOutputElement.innerHTML=resumeOutput;
    }else{
        console.error("the resume output element are missing")
    }

}else{
    console.error("one or more form element are missing")
}
});

