import express from "express";
import bodyParser from "body-parser";
import { database, connectToDb } from "./database.js";

const app = express();
app.use(bodyParser.json());
app.use(express.json());

app.get("/api/articles/:name", async(req,res) => {
    const { name } = req.params;
    const article = await database.collection("articles").findOne({name});
    if(article) {
        res.send(article);
    }
    else{
        res.status(404).send(`Sorry article is not found!!!`);
    }
    
});


app.put("/api/articles/:name/upvotes", async(req,res) => {
    const { name } = req.params;
    //Update the upvotes
    await database.collection("articles").updateOne(
        {name}, 
        {$inc: { upvotes: 1 },
    });
   const article = await database.collection("articles").findOne({name});
   if(article) {
    // res.send(`Article  now has ${article.upvotes} upvotes.`);
    res.json(article);
   }

    else{
        res.status(404).send(`Sorry article  not found!!!`);
    }
    
});

//adding comments
app.post("/api/articles/:name/comments", async(req,res) => {
  const {name} = req.params;
  const { postedBy, text} = req.body;
  await database.collection("articles").updateOne(
    {name},
    {$push : {comments : {postedBy, text}}
});
const article = await database.collection("articles").findOne({name});

  if(article){
    // article.comments.push({postedBy, text});
    res.json(article);
  }
  else{
    res.status(404).send(`Sorry article with  this name  not found!!!`);
}
});


connectToDb(() => {
    console.log("Successfully connected to database");
    app.listen(8000, () => {
        console.log("i am listening on port 8000");
    });
})
