console.log('starting app.js')

const  fs = require('fs');
const  yargs = require('yargs');
const  notes = require('./notes.js');

// console.log("Process",process.argv);
// console.log(yargs.argv);

 var title = yargs.argv.title;
 var body = yargs.argv.body;
 var command = yargs.argv._[0];

if (command==='add'){
   console.log('adding note');
 notes.addingnote(title,body);
}else if  (command==='remove'){
   console.log('removing note');
 notes.removenote(title);
}else if  (command==='read'){
   console.log('reading note');
   notes.readnote(title);
}else if  (command==='list'){
   console.log('listing all notes');
  notes.getAll();
}else {
   Console.log('unknown command was used!' )
}




//  console.log(title,body,command)
// console.log(notes.add(2,5));
// console.log(notes.sub(2,5));