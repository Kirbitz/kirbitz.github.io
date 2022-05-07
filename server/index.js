import Express from 'express'

// Creates a new Express app to run locally on a machine
const app = new Express()

// Tracks the requests made to the server
app.use((req, res, next) => {
  console.log(`${req.method} at ${req.path}`)
  next()
})

// Serves the static page to the base URL
app.use(Express.static('docs'))

// Connection created on "localhost:8000"
app.listen(8000)
console.log('Listening on port 8000')