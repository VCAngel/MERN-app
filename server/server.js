import path from 'path'
import express from 'express'
import { MongoClient } from 'mongodb'
import devBundle from './devBundle'
import template from '../template'

const app = express()

//-> Check for env variable and compile
devBundle.compile(app)

//-> Serving static files from dist/
const CURRENT_WORKING_DIR = process.cwd()
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

//-> Rendering template at #root
app.get('/', (req, res) => {
    res.status(200).send(template())
})

//-> Start server listening on specified port
let port = process.env.PORT || 3000
app.listen(port, function onStart(err) {
    if (err) {
        console.error(err)
    }
    console.info('Server started on port %s.', port)
})

//-> Connection to MongoDB
try {
    const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/mernSetup'

    MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
        if (err) {
            return
        }
        console.info("Connected successfully to mongodb server")

        db.close()
    })
} catch (e) {
    console.error(e)
}