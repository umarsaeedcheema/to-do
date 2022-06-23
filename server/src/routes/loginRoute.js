const jwt = require("jsonwebtoken");

module.exports = (req, res) => {
  //   console.log(req.body);
  if (req.body.pass == process.env.pass) {
    const token = jwt.sign(
      {
        userId: 1,
      },
      process.env.SECRET
    );
    res.json({
      token,
    });
  } else {
    res.status(401).send("false");
  }
};
