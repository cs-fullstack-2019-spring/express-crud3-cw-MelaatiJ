//import express

const express = require("express");
const router = express.Router();
//import my model
var PokedexCollection = require("../models/pokemonCollection");

//
// var PokemonCollectionSchema = new Schema(
//     {
//         pokedexNumber : Number,
//         name : String,
//         hp : Number,
//         attack : Number,
//         defense : Number,
//         speed : Number,
//         spAtk : Number,
//         spDef : Number,
//         mainType : String,
//
//     });

// get function that shows all the pokemon
router.get("/pokemon", (request, response) => {
    PokedexCollection.find({}, (errors, results) => {
        if(errors){
            response.send(errors)
        }
        else{
            response.send(results)
        }
    });
});

// post request that creates a pokemon
router.post("/pokemon", (request, response) => {
    PokedexCollection.create(
        {
            pokedexNumber:request.body.pokedexNumber,
            name:request.body.name,
            hp: request.body.hp,
            attack:request.body.attack,
            defense :request.body.defense,
            speed:request.body.speed,
            spAtk : request.body.spAtk,
            spDef : request.body.spDef,
            mainType : request.body.mainType,

        }, (errors) => {
            if(errors){
                response.send(errors)
            }
            else{
                response.send(request.body)
            }
        });
    response.render("add_pokemon")
});

//delete post that requires an id and deletes one by the pokedex number
router.delete("/pokemon/:pokedexNumber", (request, response) => {
    PokedexCollection.deleteOne({
        pokedexNumber: request.params.pokedexNumber,
    }, (errors) => {
        if(errors){
            response.send(errors)
        }
        else{
            response.redirect("/")
        }
    });
    response.render("delete_pokemon")
});

// put request that updates one by te pokedex number
router.put("/pokemon/:pokedexNumber", (request, response) => {
    PokedexCollection.updateOne({pokedexNumber:request.params.pokedexNumber}, (errors, results) => {
        if(errors){
            response.send(errors)
        }
        else{
            response.redirect("/")
        }
    })
});


module.exports = router;