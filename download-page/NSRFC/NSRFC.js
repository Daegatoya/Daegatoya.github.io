const low = require("lowdb");
const http = require('http');
const WebSocketServer = require('websocket').server;
const server = http.createServer();
const PORT = 9898;
server.listen(PORT);
const wsServer = new WebSocketServer({
    httpServer: server
});
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("C:/Users/3very/OneDrive/Desktop/NSRFC/Applications/Databases/users.json");
const db = low(adapter);
const readline = require("readline")
let i = 0;
var rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})
var token = '';
let char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
for(var j = 0; j < 11; j++){
    token = token + char.charAt(Math.floor(Math.random() * char.length));
}
const chalk = require("chalk");
const { Console } = require("console");
db.defaults({
    Users: [{Name: "", Password: "", Position: ""}, {}]
  }).write();

    console.log(chalk.cyan("\t\t-----------------------------------------"));
    console.log(chalk.cyan("\t\t National Space Research & Forces Corps "));
    console.log(chalk.cyan("\t\t-----------------------------------------"));
    console.log(chalk.red(chalk.bold("\t\t       ! RESTRICTED ACCESS ONLY ! ")));
    console.log("\n");

  function Login(username)
  {
    if(db.get("Users").find({
        Name: username
    }).value()){

        function LoginPass(password){
if(db.get("Users").find({
Name: username,
Password: password
}).value()){
    console.log(chalk.green(chalk.bold("\n\t\t! Access Granted !\n")));
    console.log(chalk.bold(chalk.blue(`\nWelcome, ${username}!\n`)))
    console.log(chalk.bold(chalk.cyan(`\nWebsite : https://daegatoya.github.io/download-page/\n`)))
    
    wsServer.on('request', function(request) {
        const connection = request.accept(null, request.origin);
        connection.on('message', function() {
            connection.sendUTF(token)
            console.log(token)
        })
    })
  }
  else{
    console.log(chalk.red("\nWrong password."))
    throw chalk.red(chalk.bold('\nERROR: WRONG PASSWORD. DISCONNECTING...\n'))
  }
}
rl.question(chalk.bold(chalk.yellow("Please, enter your password : ")), (z) => {
    LoginPass(z)
    })
}
else{ console.log(chalk.red("\nThis user doesn't exist."))
          throw chalk.red(chalk.bold('\nERROR: USER NOT FOUND. DISCONNECTING...\n'))
      }
  }
  rl.question(chalk.bold(chalk.yellow("Please, login by entering your username : ")), (x) => {
    Login(x)
  })