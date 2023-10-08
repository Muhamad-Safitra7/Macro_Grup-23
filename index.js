document.getElementById("myButton").addEventListener("click", function() {
    window.location.href = "homepage.html"; // Replace with your desired URL
  });
const loginsec=document.querySelector('.login-section')
const loginlink=document.querySelector('.login-link')
const registerlink=document.querySelector('.register-link')
registerlink.addEventListener('click',()=>{
    loginsec.classList.add('active')
})

loginlink.addEventListener('click',()=>{
    loginsec.classList.remove('active')
})
