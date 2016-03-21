function clicked() {
  
  var user = document.getElementById('username');
  var pass = documn et.getElementById('password');
  
  var coruser = "test";
  var corpass = "123";
  
  if(user.value == coruser) {
   
   if(pass.value == corpass) {
   
   window.aler("You are logged in as "+ user.value);
   } else {
       window.aler("Incorrect username or password");
    }
  } else {
       window.aler("Incorrect username or password");
    }
}
