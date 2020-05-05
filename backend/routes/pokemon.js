const router = require('express').Router();
let Pokemon = require('../models/pokemon.model');

router.route('/').get((req, res) => {
  Pokemon.find()
    .then(pokemon => res.json(pokemon))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/create').post((req, res) => {
  console.log("Create");

  const name = req.body.name;
  const num = req.body.num;
  const height = req.body.height;
  const weight = req.body.weight;
  const category = req.body.category;
  const ability = req.body.ability;

  const newPokemon = new Pokemon({
    name,
    num,
    height,
    weight,
    category,
    ability
  });

  newPokemon.save()
    .then(() => res.json('Pokemon added!'))
    .catch(err => res.status(400).json('Error ' + err));

});

router.route('/:id').get((req, res) => {
  Pokemon.findById(req.params.id)
    .then(pokemon => res.json(pokemon))
    .catch(err => res.status(400).json('Error ' + err));
});

router.route('/:id').delete((req, res) => {
  Pokemon.findByIdAndDelete(req.params.id)
    .then(() => req.json('Pokemon deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Pokemon.findById(req.params.id)
    .then(pokemon => {
      pokemon.name = req.body.name;
      pokemon.num = req.body.num;
      pokemon.height = req.body.height;
      pokemon.weight = req.body.weight;
      pokemon.category = req.body.category;
      pokemon.ability = req.body.ability;

      pokemon.save()
        .then(() => res.json('Pokemon updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
