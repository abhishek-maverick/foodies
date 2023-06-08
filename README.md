# Foodies

A food ordering application built on React.js and Node.js

## Installation

Project SetUp

Backend

```bash
  cd backend
  npm install
```

Add PORT in .env and MySQL config in config.json
example:-

```
{
  "development": {
    "username": "root",
    "password": <password>,
    "database": "foodies",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": <password>,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": <password>,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

```bash
  npm start
```

Frontend
Install ngrok.exe to create a local server
use the PORT no on which backend is running in the below command

```bash
ngrok.exe http <PORT>
Add the generated URL in Body.js, useRestaurant.js and useUrls.js accordingly
```

```bash
  cd frontend
  npm install
  npm start
```

## Demo

Insert gif or link to demo
![Screenshot (1270)](https://github.com/abhishek-maverick/foodies/assets/105659165/65d8299f-d5f7-431a-961f-c48eda076478)
