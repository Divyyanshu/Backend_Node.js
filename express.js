const express = require('express');
const fs = require('fs')

const app = express();

// middleware
app.use(express.json())


app.use((req, res ,next)=>{
    const date = new Date()
    const time = date.toLocaleTimeString()
    // create logger 
console.log(`${req.method} hit on the ${req.url} route at ${time}`)
next()
})

// read api get the data get api
app.get('/get_products', (req, res) => {
    const home = fs.readFileSync("./home.txt", "utf-8");

    if (home) {
        res.json({
            data: home,
            message: 'file found successfully'
        });
    } else {
        res.status(404).json({
            message: "file not found"
        })
    }
})

// products ko crate krne ki api
app.post('/create_product' , (req,res)=>{
     console.log(req.body)
})

// update api prouduct ko update karte hai to id ka uselena hoga

app.put('/product/update/:id', (req,res) => {
    const { id } = req.params
    console.log(req.params)
    const updatedData = req.body
    console.log(req.body)
    res.status(200).json(
        {
            updatedData
        }
    )
})

// app.post('/login' , (req,res)=>{
//     res.send('login req')
//     console.log(req.body)
// })


// app.get('/register' ,(req,res)=>{
//  res.send('register req')
// })



app.listen(5000, () => {
    console.log("server is running")
})