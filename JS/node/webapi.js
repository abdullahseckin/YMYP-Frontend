//express.js => api isteklerini yazabilmemi sağlayan bir js kütüphanesi
const express = require("express");
const cors = require("cors");
const app = express();


app.use(express.json());
app.use(cors());

const todos = [];
let id = 0;


app.get("/api/hello",(req,res)=> {
    res.json({message: "Api call is succesful"})
});

// app.get("/api/todos/create/:value", (req,res)=> {
//     const value = req.params.value;

//     id++;
//     const data = {
//         id: id,
//         title: value,
//         completed: false,
//         date: new Date()
//     }

//     todos.push(data);
//     res.json({message: "Create is successful"})
// });

app.post("/api/todos/create",(req,res)=> {
    const body = req.body;
    console.log(body);
    id++;
    const data = {
        id: id,
        title: body.title,
        isCompleted: false,
        date: new Date()
    }

    todos.push(data);
    res.json({message: "Create is successful"})
})

app.get("/api/todos",(req,res)=> {
    res.json(todos);
});



app.listen(5000,()=> console.log("My webapi is running"))