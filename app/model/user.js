module.exports = app => {
  const { STRING } = app.Sequelize;
  const User = app.model.define('user', {
    name:STRING
  });
  return User;
};