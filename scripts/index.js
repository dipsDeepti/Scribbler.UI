
// Get the button that opens the modal
var createPostBtn = document.getElementById("createPostBtn");
var signupBtn = document.getElementById("signupbtn");
var signinBtn = document.getElementById("signinbtn");

// Get the modals
var createPostModal = document.getElementById("createpostmodal");
var signupmodal = document.getElementById("signupmodal");
var siginmodal = document.getElementById("signinmodal");


// When the user clicks the button, open the modal 
createPostBtn.onclick = function() {
    createPostModal.style.display = 'block';
    createPostModal.closest('div.modal').style.display= 'flex';
  }  

signinBtn.onclick = function() {
    siginmodal.style.display = 'block';
    siginmodal.closest('div.modal').style.display= 'flex';
}  

signupBtn.onclick = function() {
  signupmodal.style.display = 'block';
  signupmodal.closest('div.modal').style.display= 'flex';
} 

function openBlogList(){
    window.location.href = "./html/postslist.html";
  }

  // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {

if (event.target == signupmodal || event.target == createPostModal || event.target == siginmodal){
    createPostModal.style.display = "none";
    signupmodal.style.display = "none";
    siginmodal.style.display = "none";
}
  
}

function modalCloseClick(element) {
  element.closest("div.modal").style.display = "none";
}

function openSignup(){
  siginmodal.style.display = 'none';
  signupmodal.style.display = 'block';
  signupmodal.closest('div.modal').style.display= 'flex';
}