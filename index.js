const http = require('http');
const fs = require("fs")


let fruits = ["apple" ,"mango" , "graphes"]

const server = http.createServer((req,res)=>{
    const home = fs.readFileSync("./home.text" , "utf-8")
    const homeData = fs.readFileSync("./home.html" , "utf-8")
    const about = fs.readFileSync("./about.text" , "utf-8")
    const nav = fs.readFileSync("./nav.text" , "utf-8")

    console.log(req.url)

    if(req.url === '/home'){
        res.writeHead(200,{
            'Content-Type' : "text/html"
        })
        res.end(homeData)
    }else if(req.url === '/about'){
        res.end(about)
    }else if(req.url === '/nav'){
        res.end(nav)
    }else if(req.url === '/homed'){
        res.end(home)
    }else{
        res.end("my website")
    }
    // res.end(country)
})


server.listen(3000,()=>{
    console.log("server is ruinng")
})