const router = require('express').Router();
const Booklibrary = require("../model/Booklibrary");
//add a new book

router.post("/add", async(req, res) => {
    try{
        const newBook = new Booklibrary({

           name : req.body.name,
           year:req.body.year,
           author:req.body.author,
           domain:req.body.domain,
           isavailable:req.body.isavailable,

        })

        const book = await newBook.save();
        res.status(200).json(book);
   }
   catch(err){
       res.status(500).json(err);
   }
})

//Read 

router.get("/library", async(req,res) =>{
    const name = req.query.name;
    try{
       let books;
       if(name){
           books = await Booklibrary.find({name})
       } 
       else{
           books = await Booklibrary.find();
       }
       res.status(200).json(books);
    }
    catch(err){
        res.status(500).json(err)
        console.log(err)
    }
})

//update

router.put("/:id" , async(req, res) => {
    try{
    const book =await Booklibrary.findById(req.params.id);
    console.log(book.name);
    console.log(req.body.name);
       try{
         const updatedBook = await Booklibrary.findByIdAndUpdate(
             req.params.id,
             {
             $set:req.body
         },
         {new:true}
         );
         res.status(200).json(updatedBook);
       }
       catch(err){
        res.status(500).json(err);
        console.log(err);
       }
    }   
    catch(err) {
        res.status(500).json(err);
        console.log(err);
    }

});

//delete

router.delete("/:id" , async(req, res) => {
    try{
    const book =await Booklibrary.findById(req.params.id);
        await book.delete()
         res.status(200).json("Post has been deleted...");
       }
       catch(err){
        res.status(500).json(err);
        console.log(err);
       }
    }
    )

module.exports = router