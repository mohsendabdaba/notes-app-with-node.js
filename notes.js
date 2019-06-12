// console.log("starting app.js");
// var add = (x,y)=>{ return x+y};
// var sub = (x,y)=>{ return x-y};
// module.exports.add= function(x,y){
//     return x+y;
// }
// module.exports={
//     add,
//     sub
// }

const  fs = require('fs');

var fetchnotes= ()=>{
    try{
        return  JSON.parse(fs.readFileSync('notes.txt'));
    } catch (err){
        return [];
    }
}

var  addingnote = (title,body) => {

var notes=fetchnotes();
 var note = {
    title,
    body,
 };
 var double = notes.filter(note=> note.title===title);
if (double.length===0){
 notes.push(note);
fs.writeFileSync('notes.txt',JSON.stringify(notes))
lognote(note);
} else {
    console.log("STOP:title already exists. ");
} 
}
var removenote =(title)=>{
    var notes=fetchnotes();
    var filterednotes= notes.filter((note) => note.title !==title)

    fs.writeFileSync('notes.txt',JSON.stringify(filterednotes))
} 
var readnote =(title)=>{
    var notes=fetchnotes();
    var filterednotes= notes.filter((note) => note.title ===title);

    lognote(filterednotes[0]);
}

var getAll=()=>{
    var notes=fetchnotes();
    console.log(notes)
    notes.forEach(note => lognote(note));
}
var lognote=(note)=>{
    console.log("********************");
    console.log(`Title:${note.title}`);
    console.log(`Body:${note.body}`);
}
module.exports = {
        addingnote,
        removenote,
        readnote,
        getAll,
    }