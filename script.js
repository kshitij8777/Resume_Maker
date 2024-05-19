//  button function for add new education section 
 
 function addEducation() {
  // Create a new textarea element
  var textarea = document.createElement("textarea");
  textarea.setAttribute("type", "text");
  textarea.setAttribute("id", "education");
  textarea.setAttribute("class", "education");
  textarea.setAttribute("name", "degree");
  var newScript = document.createElement('script');


  // Append the textarea to the education section
  var educationSection = document.querySelector(".education-section");
  educationSection.appendChild(textarea);
  educationSection.appendChild(document.createElement("br"));
  educationSection.appendChild(document.createElement("br"));
}


// adding new education section 

function addWe() {
  // Create a new textarea element
  var textarea = document.createElement("textarea");
  textarea.setAttribute("id", "description");
  textarea.setAttribute("class", "description");
  textarea.setAttribute("name", "description");

  // Append the textarea to the experience section
  var experienceSection = document.querySelector(".experience-section");
  experienceSection.appendChild(document.createElement("br")); // Add line break for spacing
  experienceSection.appendChild(textarea); // Append textarea
  experienceSection.appendChild(document.createElement("br")); // Add line break for spacing
}

// add skill button 

function addSkill() {
  // Create a new textarea element
  var textarea = document.createElement("textarea");
  textarea.setAttribute("class", "skills");
  textarea.setAttribute("name", "skills");

  // Append the textarea to the skills container
  var skillsContainer = document.getElementById("skills-container");
  skillsContainer.appendChild(document.createElement("br")); // Add line break for spacing
  skillsContainer.appendChild(textarea); // Append textarea
  skillsContainer.appendChild(document.createElement("br")); // Add line break for spacing
}

// add project button 
function addProjects() {
  // Create a new textarea element
  var textarea = document.createElement("textarea");
  textarea.setAttribute("class", "projects");
  textarea.setAttribute("name", "projects");

  // Append the textarea to the project container
  var projectContainer = document.getElementById("project-container");
  projectContainer.appendChild(document.createElement("br")); // Add line break for spacing
  projectContainer.appendChild(textarea); // Append textarea
  projectContainer.appendChild(document.createElement("br")); // Add line break for spacing
}




// generate resume 

function generateResume(){

  let name=document.getElementById("name").value;
  let tname=document.getElementById("tname")
  tname.innerHTML=name;

  let email=document.getElementById("email").value;
  let temail=document.getElementById("temail")
  temail.innerHTML=email;

  let phone=document.getElementById("phone").value;
  let tphone=document.getElementById("tphone")
  tphone.innerHTML=phone;

  let address=document.getElementById("address").value;
  let taddress=document.getElementById("taddress")
  taddress.innerHTML=address;

  let linkedin=document.getElementById("linkedin").value;
  let tlinkedin=document.getElementById("tlinkedin")
  tlinkedin.innerHTML=linkedin;



  
// summary

let summary=document.getElementById("summary").value;
  let tsummary=document.getElementById("tsummary")
  tsummary.innerHTML=summary;


  // job experience 

  let we =document.getElementsByClassName("description");
  let str="";
  for (let e of we){
    str = str + `<li><pre> ${e.value} </pre></li>`;
  }
  document.getElementById('tdescription').innerHTML=str;


  //education section

  let edu =document.getElementsByClassName("education");
  let str1="";
  for (let e of edu){
    str1 = str1 + `<li><pre> ${e.value} </pre></li>`;
  }
  document.getElementById('teducation').innerHTML = str1;


  // skills section
  let  skill=document.getElementsByClassName("skills");
  let str3="";
  for (let e of skill){
    str3 = str3 + `<li><pre> ${e.value}</pre> </li>`;
  }
  document.getElementById('tskills').innerHTML = str3;

// project section 

let  proj=document.getElementsByClassName("projects");
  let str4="";
  for (let e of proj){
    str4 = str4 + `<li><pre> ${e.value}</pre> </li>`;
  }
  document.getElementById('tprojects').innerHTML = str4;





  // Call function to display uploaded photo
  displayUploadedPhoto();


  document.getElementById("form").style.display="none";
  document.getElementById("cv-templet").style.display="block";
}





// function created for uploading photo

  function displayUploadedPhoto() {
    const fileInput = document.getElementById('photoUpload');
    const file = fileInput.files[0];
    const profilePhoto = document.getElementById('tphotoUpload');

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            profilePhoto.src = e.target.result;
        };

        reader.readAsDataURL(file);
    }
}





// function for preview form 

function previewForm(){
  document.getElementById("form").style.display="block";
  document.getElementById("cv-templet").style.display="none";

}


// function for preview resume 
function previewTemplet(){
  document.getElementById("form").style.display="none";
  document.getElementById("cv-templet").style.display="block";
}


// finction for print cs 
function printCv(){
  window.print();
}

// add alert function for name 
function validateForm() {
  var name = document.getElementById("name").value;
  if (name == "") {
    alert("Name must be filled out");
    return false;
  }
  return true;
}