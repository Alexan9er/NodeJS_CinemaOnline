module.exports = {
  rabbitMQ: {
    url:
      process.env.RABBITMQ_URL ||
      "amqp://hovwehjy:Gm16-MuTDBO5jnwJnwCc2YQrgX_zYbRL@elephant.rmq.cloudamqp.com/hovwehjy",
    logsQueue: "cinema-logs",
    emailsQueue: "cinema-emails"
  }
};
