const express = require('express')
const app = express()
const PORT = 3000 // The code below doesn't work unless port is set to 3000. It complains about something already listening on 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})