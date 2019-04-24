const db = {
  users: [
    {
      id: 'test',
      password: 'test',
      name: 'Ramesh Meduri'
    }
  ],
  findById: function(id) {
    let result = db.users.filter((u) => u.id === id);
    if (result.length) {
      let user = Object.assign({}, result[0]);
      return user;
    }
  }
};

export default db;
