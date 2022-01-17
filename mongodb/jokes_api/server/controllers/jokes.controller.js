const Joke = require("../models/jokes.model");

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({ jokes: allJokes }))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
};

module.exports.findRandomJoke = (req, res) => {
    Joke.find()
        .then(allJokes => {
            let randomIndex = Math.floor(Math.random()*allJokes.length);
            let randomJoke = allJokes[randomIndex];
            res.json({ randomJoke: randomJoke });
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
};

module.exports.findSingleJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(singleJoke => res.json({ joke: singleJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
};

module.exports.createNewJoke = (req, res) => {
    console.log(req.body);
    Joke.create(req.body)
        .then(newJoke => res.json({ joke: newJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
};

module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true})
        .then(updatedJoke => res.json({ joke: updatedJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
};

module.exports.deleteExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
};