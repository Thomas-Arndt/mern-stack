const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const { User } = require('../models/user.model');

// CREATE / REGISTER
module.exports.createNewUser = (req, res) => {
    User.create(req.body)
        .then(newUser => {
            const userToken = jwt.sign({
                id: newUser._id
            }, process.env.SECRET_KEY);
            res
                .cookie("usertoken", userToken, {httpOnly: true})
                .json({ msg: "Success!", userEmail: newUser.email, userName:newUser.firstName })
        })
        .catch(err => res.status(400).json(err));
    };
    
// READ
module.exports.findAllUsers = (req, res) => {
    User.find()
        .then(allUsers => res.json({ users: allUsers }))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
};

module.exports.findOneUser = (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(user => res.json({ user: user }))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
};

module.exports.findOneUserByEmail = (req, res) => {
    User.findOne({ email: req.params.email })
        .then(user => res.json({ user: user }))
        .catch(err => res.json({ message: 'Something went wrong', error: err}))
};

// UPDATE
module.exports.updateOneUser = (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true, runValidators: true})
        .then(updatedUser => res.json({ updatedUser: updatedUser}))
        .catch(err => res.status(400).json(err));
};

// DELETE
module.exports.deleteUser = (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
};



// LOGIN
module.exports.login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });

    if(user === null){
        return res.status(400).json({ message: "Invalid email/password." });
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);

    if(!validPassword){
        return res.status(400).json({ message: "Invalid email/password." });
    }

    const userToken = jwt.sign({
        id: user._id
    }, process.env.SECRET_KEY);

    res
        .cookie("usertoken", userToken, { httpOnly: true })
        .json({ msg: "This response has a cookie.", userEmail: user.email, userName: user.firstName });
}

// LOGOUT
module.exports.logout = (req, res) => {
    res.clearCookie('usertoken');
    res.sendStatus(200);
}

// AUTHORIZE
module.exports.authorize = (req, res) => {
    jwt.verify(req.cookies.usertoken, process.env.SECRET_KEY, (err, payload) => {
        if (err) {
            res.status(401).json({verified: false});
        } 
        else {
            res.status(200).json({verified: true});
        }
    });
}