
 
// // export default app;
// import express from 'express';
// import db from './config/db.js';
// import itemRouter from './routes/itemRouter.js';
// import methodOverride from 'method-override';
// import cors from 'cors';
// let app = express();
// //db connection
// db;
// app.set("view engine","ejs");
// //processes incoming json data
// // app.use(express.json());
// //processes incoming form data
// app.use(express.urlencoded({extended:true}))
// app.use(cors());

// app.use(express.json());
// //to serve static files
// app.use(express.static("public"))

// //middeleware 
// app.use(methodOverride('_method'));

// //router instance
// app.use("/api/v1/item",itemRouter);

// // app.get("/home",(req,res,next)=>{
// //     res.render("home",{name:"Shankar"})
// // })


// export default app;
import express from 'express';
import cors from 'cors';
import itemRouter from './routes/itemRouter.js';
import db from './config/db.js';

const app = express();
db; // call your DB connect function

app.use(cors());
app.use(express.json());
app.use('/api/item', itemRouter);

export default app;
