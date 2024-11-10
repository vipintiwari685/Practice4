const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

function getWelcomeMessage() {
  return 'Welcome to our service!';
}
app.get('/welcome', (req, res) => {
  res.send(getWelcomeMessage());
});

app.get('/greet', (req, res) => {
  let username = req.query.username;
  res.send(getGreetingMessage(username));
});
function getGreetingMessage(username) {
  return 'Hello, ' + username + '!';
}

app.get('/check-password',(req,res)=>{
let password = req.query.password;
res.send(checkPassword(password));
});

function checkPassword(password){
  if(password.length >=15){
    return "Password is strong";
  }else {
    return "Password is weak";
  }
}
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
