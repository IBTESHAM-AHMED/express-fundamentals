import express from "express"

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('This is Root Route!')
})

app.listen(port, () => {
  console.log(`Express server is listening on port ${port}`)
})