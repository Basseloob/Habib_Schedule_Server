const verify = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  // 1) Get the token :
  const accessToken = req.header("jwtAccessToken");

  // 2) Check if the user is logged in :
  if (!accessToken) {
    res.json({ error: "user not logged in !" });
  }

  try {
    // 3)  compare the accessToken with the secret key in "./client/pages/Login.js" :
    const validToken = verify(accessToken, "importantsecret");

    if (validToken) {
      return next();
    } else {
      res.json({ error: "could not find the access token" });
    }
  } catch (err) {
    return res.json({ error: err });
  }
};

module.exports = { validateToken };
