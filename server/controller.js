const sequelize = require('./sequelize');

module.exports = {
  signUp: (req, res) => {
    console.log(req.body);
    let user = {
      username: req.body.name,
      email: req.body.email,
      password: req.body.password,
    };
    user.push();
    res.status(200).send(req.body);
  },
  logIn: (req, res) => {
    console.log(req.body);
    res.status(200).send(req.body);
  },
};
