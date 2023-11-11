const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validateToken } = require("../middlewares/authMiddleWare");

// Register - Create New User :---------------------------------------------------------------------------------------
router.post("/register", async (req, res) => {
  // 1)
  const { username, password, confirmPasswor } = req.body;

  // 2) Hash the Password :
  bcrypt.hash(password, 12).then((hashedPass) => {
    // 3)
    Users.create({
      username: username,
      password: hashedPass,
    });

    // 4)
    res.json("SUCCESS");
  });
});

// Login :-------------------------------------------------------------------------------------------------------------
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const findUser = await Users.findOne({ where: { username: username } });

  if (!findUser) {
    res.json({ error: "This user does not exist" });
  }

  bcrypt.compare(password, findUser.password).then(async (match) => {
    if (!match) res.json({ error: "Wrong Username or Password!" });

    // Creating the jsonwebtoken AFTER signin in :
    const secretKey = "importantsecret";
    const jwtAccessToken = jwt.sign(
      { userame: findUser.username, id: findUser.id },
      secretKey
    );
    console.log(jwtAccessToken);

    res.json({ token: jwtAccessToken, username: username, id: findUser.id });
  });
});

// Find All Users :-------------------------------------------------------------------------------------------------------------
router.get("/registeredUsers", async (req, res) => {
  const registeredUsers = await Users.findAll();

  res.json({ registeredUsers: registeredUsers });
});

module.exports = router;
