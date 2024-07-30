# Vistaar_Task

### Prerequisites

- Node.js (v14 or later)
- MongoDB

### Installation

1. Clone the repository:
    ```bash
    git 
    ```

2. Install dependencies for the client:
    ```bash
    cd frontend
    npm install
    ```

3. Install dependencies for the server:
    ```bash
    npm install
    ```

4. Set up environment variables:
    - Copy the `sample_env.env` file to `.env` in the `root` directory.
    - Update the `.env` file with the necessary environment variables.

    ```bash
    cp sample_env.env .env
    ```

    Open the `.env` file and configure your environment variables according to your setup.

5. Start the development servers:
    - For the client application:
      ```bash
      cd ./frontend
      npm start
      ```
    - For the server application:
      ```bash
      npm start
      ```

6. Open your browser and navigate to `http://localhost:3000`.