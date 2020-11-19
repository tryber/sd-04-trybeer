const validateJWT = require('../validateJWT');

const authMiddleware = (required = true) => async (req, res, next) => {
  const user = await getUser(req);

  if (!user && required) return res.redirect(`/login?redirect=${encodeURIComponent(req.url)}`);

  if (!user && !required) return next();

  const { password, ...userData } = user;
  req.pass = user.password;
  // console.log('pass auth', req.pass);
  req.user = userData;

  return next();
};

module.exports = authMiddleware;
