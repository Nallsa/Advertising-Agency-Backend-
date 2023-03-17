const mongoose = require('mongoose');

const visitCardSchema = mongoose.Schema({
  name: {
    type: String,
    default: 'Визитки',
  },
  typePaper: {
    type: Number,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
  delivery: {
    type: Boolean,
    default: false,
  },
  price: {
    type: Number,
    required: true,
  },
});

const VisitCard = mongoose.model('VisitCard', visitCardSchema);

module.exports = VisitCard;
