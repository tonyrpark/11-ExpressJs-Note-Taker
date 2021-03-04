// Variable Declaration
const fs = require("fs");
const path = require("path");

// READFILE portion
module.exports = (app) => {
  fs.readFile("db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    var notes = JSON.parse(data);
  });
};

// API Routes
app.get("/api/notes",function(req,res){
    res.json(notes); 
});

// Setup the /api/notes post route
app.post("/api/notes",function(req,res){
    let newNote = req.body;
    notes.push(newNote); 
    updateDb(); 
    return console.log("Added new note:" + newNote.title);
}); 

// Retrieve note with specific ID
app.get("/api/notes/:id",function(req,res){
    res.json(notes[req.paramds.id]);
}); 

// Delete note
app.delete("/api/notes/:id", function(req,res)
{
    notes.splice(req.paramds.id,1);
    updateDb(); 
    console.log("Deleted note with id" + req.paramds.id); 
});
})