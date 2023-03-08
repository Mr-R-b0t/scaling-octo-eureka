const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.get('/', (req, res) =>
res.json({message :'Hello World'})
)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log('Server started on port ${PORT}'))

