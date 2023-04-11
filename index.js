const http = require('http')
const express = require('express')
// const app = express()

let notes = [  {    id: 1,    content: "The Biz Is Therapy",    important: true  },  {    id: 2,    content: "The Purple Book Is Not God",    important: false  },  {    id: 3,    content: "GET and POST are the most important methods of HTTP protocol",    important: true  }]

const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' })
  response.end(JSON.stringify(notes))
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)


// const express = require('express')
// const app = express()

// let notes = [ 
//  ...notes
// ]

// app.get('/', (request, response) => {
//   response.send('<h1>Hey World!</h1>')
// })

app.get('/api/notes/id:', (request, response) => {
  const id = Number(request.params.id)
  
  const note = notes.find(note => note.id === id )

   if (note) {
     response.json(note)
             } else {
     response.status(404).end()
   }

  
  response.json(notes)
})
  
  


// const PORT = 3001
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// })