const amqplib = require("amqplib");

async function sendMessage(msg = "Hello World !") {
  try {
    const connection = await amqplib.connect("amqp://yash:pass@localhost:8080");
    const channel = await connection.createChannel();

    const queue = "hello";
    await channel.assertQueue(queue, {
      durable: false,
    });

    channel.sendToQueue(queue, Buffer.from(msg));
    console.log(`Sent -> ${msg}`);

    setTimeout(() => connection.close(), 800);
  } catch (error) {
    console.error("Error in Sending Message : ", error);
  }
}

const arr = [
  "some random message",
  "some another random message",
  "yet another one goes",
  "somethings really serious is going on now",
  "This is the End.....",
];

let i = 0;

const ref = setInterval(
  () => (i < arr.length ? sendMessage(arr[i++]) : clearInterval(ref)),
  10
);
