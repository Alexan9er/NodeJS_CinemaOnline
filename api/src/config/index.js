module.exports = {
  server: {
    port: process.env.PORT || 5000
  },

  database: {
    name: "cinema_db",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    otherOptions: {
      dialect: "mysql",
      host: process.env.MYSQL_URL || "localhost",
      define: {
        timestamps: false,
        underscored: true
      }
    }
  }
};
