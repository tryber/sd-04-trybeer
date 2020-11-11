const userLogin = (req, res) => {
  try {
    const { token } = req;
    const { name, email, role } = req.user;
    const data = { name, email, token, role };

    res.status(200).json(data);
  } catch (error) {
    res.status(400).send('Nao conseguiu logar');
  }
};

module.exports = {
  userLogin,
};
