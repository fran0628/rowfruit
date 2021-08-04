// CRUD SQL

class User {
    constructor(name, account, password, gender, phone, email, address, avatar) {
      this.id = 0
      this.name = name
      this.account = account
      this.password = password
      this.gender = gender
      this.phone = phone
      this.email = email
      this.address = address
      this.avatar = avatar 
      this.valid = 0
    }
  
    addUserSQL() {
      let sql = `INSERT INTO member_list(name, account, password, gender, phone, email, address, valid ) \
                     VALUES('${this.name}', '${this.account}', '${this.password}', '${this.gender}','${this.phone}','${this.email}', '${this.address}', 0)`
      return sql
    }
  
    updateUserByIdSQL(id) {
      let sql = `UPDATE member_list \
                 SET name = '${this.name}', account = '${this.account}', password = '${this.password}', gender = '${this.gender}', phone = '${this.phone}', email = '${this.email}', address = '${this.address}', avatar = '${this.avatar}',valid = ${this.valid} \
                 WHERE id =  ${id}`
      return sql
    }
  
    // static是與實例化無關
    static getUserByIdSQL(id) {
      let sql = `SELECT * FROM member_list WHERE id = ${id}`
      return sql
    }
  
    // login用
    getUserUserByUsernameAndPasswordSQL() {
      let sql = `SELECT * FROM member_list WHERE account = '${this.account}' AND password = '${this.password}' LIMIT 0,1`
      return sql
    }
  
    // static是與實例化無關
    static getUserByQuerySQL(query) {
      const where = []
  
      if (query.name) where.push(`name = '${query.name}'`)
      if (query.email) where.push(`email = '${query.email}'`)
      if (query.account) where.push(`account = '${query.account}'`)
  
      let sql = ''
  
      if (where.length) sql = `SELECT * FROM member_list WHERE ` + where.join(' AND ')
      else sql = `SELECT * FROM member_list`
  
      return sql
    }
  
    static deleteUserByIdSQL(id) {
      let sql = `DELETE FROM member_list WHERE ID = ${id}`
      return sql
    }
  
    static getAllUserSQL() {
      let sql = `SELECT * FROM member_list`
      return sql
    }
  }
  
  //export default User
  module.exports = User
  