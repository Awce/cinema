const moongose = require('mongoose')
const Schema = moongose.Schema

const movieSchema = new Schema({
    title: {
      required: "Este campo es requerido",
      type: String
    },
    img: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    duration: {
      type: Number
    }
  }, {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  })

module.exports = moongose.model("Movie", movieSchema);