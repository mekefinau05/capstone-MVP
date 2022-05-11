const sequelize = require('./sequelize');
const bcrypt = require('bcrypt');

module.exports = {
  signUp: async (req, res) => {
    const { name, username, email, password } = req.body;
    let user = {
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };
    const checkUser = await sequelize
      .query(
        `
      SELECT * FROM users 
      WHERE username = '${username}'`
      )
      .catch((err) => console.log(err));
    if (checkUser[1].rowCount !== 0) {
      res.status(500).send('Username already exists');
    } else {
      const salt = bcrypt.genSaltSync(10);
      const passwordHash = bcrypt.hashSync(password, salt);
      await sequelize.query(`
      INSERT INTO users(name, username, email, password)
      VALUES (
        '${name}',
        '${username}',
        '${email}',
        '${passwordHash}'
      )`);
      const userInfo = await sequelize.query(`
      SELECT id, username, name FROM users
      WHERE username = '${username}'`);
      res.status(200).send(userInfo);
    }
  },
  logIn: async (req, res) => {
    const { username, password } = req.body;
    const validUser = await sequelize
      .query(
        `
    SELECT * FROM users WHERE username = '${username}'
    `
      )
      .catch((err) => console.log(err));
    if (validUser[1].rowCount === 1) {
      if (bcrypt.compareSync(password, validUser[0][0].password)) {
        let object = {
          id: validUser[0][0].id,
          name: validUser[0][0].name,
          username: validUser[0][0].username,
        };
        res.status(200).send(`Hello, ${object.name}`);
      } else {
        res.status(500).send('Password is Incorrect');
      }
    } else {
      res.status(401).send('Username is Incorrect');
    }
  },
  cartOrder: async (req, res) => {
    const { cart } = req.body;
    console.log(cart);
    let order = {
      id: req.body.id,
      name: req.body.name,
      price: req.body.price,
    };
    const orders = await sequelize.query(
      `
    INSERT INTO orders(id, price) 
    VALUES(
      '${id}', 
      '${price}'
      )
    `
    );
    res.status(200).send(order);
  },
};
