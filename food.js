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
   
    if (password == "") {
        alert("Error: The password field is Empty.");
    } else if (password == confirmPassword) {
        alert("Registration successful!");
    } else {
        alert("Please make sure your passwords match.")
    }
}