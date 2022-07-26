const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

//myAPP
var users = [
    {
        username: "junior",
        password: "junior123",
        id: 1
    },
    {
        username: "josh",
        password: "qwert",
        id: 2
    },
    {
        username: "berryallan",
        password: "blabla",
        id: 3
    }
] 

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/main.html');
})

app.get('/users',(req,res) => {
    res.send(users);
})

app.get('/users/delete',(req,res)=> {
    res.sendFile(__dirname + '/deleteUser.html')
})

app.post('/users/delete',(req,res)=> {
    const usr = req.body;
    const foundUser = users.find((user) => user.username === usr.username);

    if(foundUser != undefined){
        const id = foundUser.id;
        if(foundUser.password === usr.password){
            users = users.filter((user) => user.id !== id);
            res.redirect('/users')
        }
        else{
            res.send("Wrong username or password.");
        }
    }
    else{
        res.send("username not found");
    }

})




//func para ouvir na porta 3000
app.listen('3000',() => console.log("Servidor ligado na porta 3000..."));
