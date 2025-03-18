# RabbitMQ Learning Projects 🚀

This repository contains small projects built while learning **RabbitMQ**. Each project demonstrates different messaging patterns and use cases.

## 📌 Prerequisites
- [Docker](https://www.docker.com/) installed  
- [Node.js](https://nodejs.org/) installed  
- RabbitMQ running in a Docker container  

## 🚀 Running RabbitMQ
Start a RabbitMQ container with authentication:

```sh
docker run -d --hostname my-rabbit --name rmq -p 5672:5672 -p 15672:15672 \
  -e RABBITMQ_DEFAULT_USER=yash \
  -e RABBITMQ_DEFAULT_PASS=pass \
  rabbitmq:management
```

- **Port 5672** → AMQP protocol (used by applications)  
- **Port 15672** → RabbitMQ Management UI (`http://localhost:15672`)  

## 📂 Projects List
Each folder contains a separate RabbitMQ-based project:
- `/publisher-subscriber` → Example of **publish-subscribe pattern**  
- `/work-queue` → Example of **task queue processing**  
- `/rpc` → Example of **RPC-style messaging**  

## ⚡ Running a Project
Navigate to the project folder and install dependencies:

```sh
cd project-folder
npm install
node index.js
```

## 🔗 RabbitMQ Management UI
Access RabbitMQ dashboard at:  
👉 **[http://localhost:15672](http://localhost:15672)**  
Login with username `yash` and password `pass`.  

## 📖 Learning Resources
- [RabbitMQ Official Docs](https://www.rabbitmq.com/documentation.html)  
- [AMQP 0.9.1 Model](https://www.rabbitmq.com/tutorials/amqp-concepts.html)  

---

This keeps it **simple, structured, and easy to use**. Happy learning! 🚀

