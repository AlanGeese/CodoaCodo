const express = require ("express")
const cors = require ("cors") 
const postRouter = require ("./routes/postRouter.js")
const app = express()
const port = 3030

const db = require ("./data/db.js")
app.use(cors())
app.use(express.json())
app.get ("/",(req,res)=>{
res.send ("Principal")
})

app.use ("/posteos",postRouter) /*categoria*/
const conexionDB = async ()=>{
    try {
        await db.authenticate()
        console.log(`Ok`);
    } catch (error) {
        console.log(`Error:${error}`);
    }
}


app.listen (port,()=>{
    conexionDB()
    console.log(`Servidor ${port}`);
})

