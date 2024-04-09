const mongoose = require('mongoose');
require('dotenv').config();
const URI=`mongodb+srv://ykperez276:Perez20051@cluster0.hb0insz.mongodb.net/`

mongoose.connect(URI);

module.exports=mongoose;