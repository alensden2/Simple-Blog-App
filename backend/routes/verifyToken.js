const jwt = require("jsonwebtoken");
// middleware to make the route check for auth token 
function auth(req, res, next) {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Access Denied");

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET); // gives the payload thats the id
    req.user = verified;
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
}
