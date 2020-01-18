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
  },
  rabbitMQ: {
    url:
      process.env.RABBITMQ_URL ||
      "amqp://hovwehjy:Gm16-MuTDBO5jnwJnwCc2YQrgX_zYbRL@elephant.rmq.cloudamqp.com/hovwehjy",
    logsQueue: "cinema-logs",
    emailsQueue: "cinema-emails"
  }
};
