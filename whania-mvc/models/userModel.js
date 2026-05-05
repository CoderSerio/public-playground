/**
 * User Model — 数据层示例
 */
class UserModel {
  constructor() {
    // 模拟数据库，实际可替换为 MongoDB / MySQL / Pg 等
    this.users = [
      { id: 1, name: 'Admin', email: 'admin@example.com' }
    ];
  }

  findAll() {
    return this.users;
  }

  findById(id) {
    return this.users.find(u => u.id === parseInt(id));
  }

  create(data) {
    const user = { id: this.users.length + 1, ...data };
    this.users.push(user);
    return user;
  }
}

module.exports = new UserModel();
