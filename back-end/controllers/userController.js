const userLogin = (req, res) => {
  try {
    const { token, user } = req;
    const data = { token, user };
    
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send('Nao conseguiu logar')
  }
};

module.exports = {
  userLogin,
}
