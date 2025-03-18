const amqplib = require("amqplib");

async function receiveMessage() {
  try {
    const connection = await amqplib.connect("amqp://yash:pass@localhost:8080");
    const channel = await connection.createChannel();

    const queue = "hello";
    await channel.assertQueue(queue, { durable: false });

    console.log("Waiting for messages...");

    channel.consume(queue, (msg) => {
      if (msg !== null) {
        console.log(`Received -> ${msg.content.toString()}`);
        channel.ack(msg); // Acknowledge the message
      }
    });
  } catch (error) {
    console.error("Error in receiveMessage:", error);
  }
}

receiveMessage();
