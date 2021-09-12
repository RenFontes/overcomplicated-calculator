module.exports = {

  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASS || "dev_password",
  database: process.env.DB_NAME || "occalc-db",
  host: process.env.DB_HOST || "127.0.0.1",
  dialect: "postgres",

  seederStorage: "sequelize",
  seederStorageTableName: "seeds",

  migrationStorage: "sequelize",
  migrationStorageTableName: "migrations",

  define: {
    underscored: true
  }
}