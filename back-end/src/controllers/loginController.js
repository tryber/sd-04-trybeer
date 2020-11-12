const authentication = require('../auth/authentication');
const {
  ERR_EMAIL_NOT_FOUND,
  ERR_INVALID_PASSWORD,
} = require('../utils/errorTypes');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userInfo = await authentication.login(email, password);
    res.status(200).json(userInfo);
  } catch (err) {
    console.log(err);
    if (
      err.message === ERR_EMAIL_NOT_FOUND ||
      err.message === ERR_INVALID_PASSWORD
    ) {
      res.status(401).json({ message: 'Incorrect email or password' });
    }
  }
};

module.exports = {
  login,
};
