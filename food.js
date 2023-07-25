//  function verifyPassword(){
//  var pw = document.getElementById("password").value;
//  var confirm_password = document.getElementById("confirm_password").value;
//  if (pw.value != confirm_password.value){
//     alert("password does not match")
// }
// //  if(pw.length < 8) {  
// //      alert("pasword must be more than 8 characters!");
// //      return false;  
// //  }
//   }  
  function verifyPassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm_password").value;
    var mail = document.getElementById("email").value;
    if (password == confirmPassword) {
        alert("Registration successful!");
    } else {
        alert("Password does not match!")
    }
}
function refer(event) {
event.preventDefault();

          var email = document.getElementById("username").value;
          var password = document.getElementById("pword").value;

          if (email === "admin@gmail.com" && password === "user") {
               window.location.replace("orderpg.html");
          } else {
              alert("Invalid information");
              return;
          }
    }
function login_form_submit()
{
  var farmerID=document.getElementById("customer").value;
  localStorage.setItem("id", farmerID);
  return false;
}
document.getElementById("farmer").innerHTML=localStorage.getItem("id");