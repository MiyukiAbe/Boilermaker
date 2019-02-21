const {db} = require('./server/db')

const Kitten = require('./server/db/models/Kitten')

const kitten = [{
    name: 'Chopi',
    type: 'white'
},
{
  name: 'Momo',
  type: 'Brown'
}

];
  


// const seed = async () => {
//   await db.sync({force: true})

//   // seed your database here!
//   await Promise.all(campuses.map(campuse => {
//     return Campuses.create(campuse);
//   }));
  
//   await Promise.all(students.map(student => {
//     return Students.create(student);
//   }));
  

//   console.log(green('Seeding success!'))
//   db.close()
// }

// seed()
//   .catch(err => {
//     console.error(red('Oh noes! Something went wrong!'))
//     console.error(err)
//     db.close()
//   })
