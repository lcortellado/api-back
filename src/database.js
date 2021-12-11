import mongoose from 'mongoose'

const DB_URI = `mongodb+srv://luis:luis@cluster0.cajuf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose
  .connect(DB_URI, {
    keepAlive: true,
    useNewUrlParser: true,
    useUniFiedTopology: true
  })
  .then(db => console.log('DB is connected'))
  .catch(error => console.log(error))

module.exports = mongoose
