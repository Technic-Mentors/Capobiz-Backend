const connectToMongo = require('./db')
connectToMongo()

const express = require('express')
const bodyParser = require('body-parser');

const cors = require('cors')
const app = express()
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

app.use(express.json())
app.use(cors())

app.use('/uploads', express.static('uploads'));
app.use('/api/auth', require('./routes/auth'))

app.listen(8002 ,()=>{
    console.log('App listing at http://localhost:8002')
    })
    
