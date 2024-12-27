# RabbitMQ provider

This project is a simple demonstration of how to work with RabbitMQ using Node.js and TypeScript. It includes an Express server that can send and receive messages to and from a RabbitMQ queue.

## Prerequisites

- Node.js
- Yarn
- RabbitMQ server

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/iamifechi/rabbitmq-provider
    cd rabbitmq-provider
    ```

2. Install dependencies:
    ```sh
    yarn install
    ```

3. Create a `.env` file in the  directory and add your RabbitMQ URL and queue name:
    ```env
    RABBITMQ_URL=amqp://localhost:5672
    RABBITMQ_QUEUE=your_queue_name
    PORT=4001
    ```

## Usage

1. Build the project:
    ```sh
    yarn build
    ```

2. Start the server:
    ```sh
    yarn start
    ```

3. To run the server in development mode:
    ```sh
    yarn dev
    ```

## API Endpoints

- `POST /api/v1/task/send-task`: Send a task to the RabbitMQ queue.

## Project Structure

- : Configuration files.
- : Express controllers.
- : Express middlewares.
- : API routes.
- : Services for interacting with RabbitMQ.
- : Utility functions.

## License

This project is licensed under the MIT License.
