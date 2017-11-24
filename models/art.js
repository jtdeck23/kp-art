const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArtSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String
  }
});

const Art = mongoose.model('art', ArtSchema);

module.exports = Art;
