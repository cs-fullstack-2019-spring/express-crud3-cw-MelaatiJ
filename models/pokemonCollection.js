const mongoose = require("mongoose");
const Schema = mongoose.Schema;



var PokemonCollectionSchema = new Schema(
    {
        pokedexNumber : Number,
        name : String,
        hp : Number,
        attack : Number,
        defense : Number,
        speed : Number,
        spAtk : Number,
        spDef : Number,
        mainType : String,

});


module.exports = mongoose.model("pokedex", PokemonCollectionSchema);