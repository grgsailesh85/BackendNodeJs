# Node.js, Express & MongoDB Backend Learning

Welcome to my backend learning repository! 🚀  
This repo showcases my hands-on experience with backend development using **Node.js**, **Express.js**, and **MongoDB**.  
It includes a full **e-commerce API**, **user authentication**, and **Khalti payment gateway integration**.

---

## 🧠 What You'll Find Here

- RESTful E-commerce API (Product, Cart, Orders)
- User Authentication using JWT & bcrypt
- Role-based access control (Admin/User)
- MongoDB database design using Mongoose
- Middleware & validation handling
- **Khalti Payment Gateway** integration
- Environment setup using `dotenv`

---

## 🛒 E-commerce API Features

- Product CRUD operations (Admin)
- Cart management: add/update/remove items
- Place and view orders (Authenticated users)
- Order status updates (Admin)

---

## 🔐 Authentication Features

- User registration & login
- Password hashing (bcrypt)
- JWT-based authentication
- Route protection & role checks

---

## 💳 Khalti Payment Integration

- Verified payments through **Khalti API**
- Secure backend implementation for payment verification
- Linked to order processing and status update

---

## 🛠️ Tech Stack

| Tech        | Description                            |
|-------------|----------------------------------------|
| Node.js     | JavaScript runtime                     |
| Express.js  | Web framework                          |
| MongoDB     | NoSQL database                         |
| Mongoose    | MongoDB object modeling                |
| JWT         | User authentication                    |
| bcrypt      | Password hashing                       |
| Khalti API  | Payment gateway                        |
| dotenv      | Environment variables                  |

---

## 📁 Project Structure



```
📁Repo
│
├──📁node_modules                                     # Installed dependencies (from npm)
│
├──📁src                                              # Main source code
│    │
│    ├──📜app.js                                      # Main Express app file
│    │
│    ├──📜server.js                                   # Entry point (Starts the server)
│    │
│    ├──📁config/                                     # Connecting with the mongodb server
│    │    │
│    |    ├──📜database.js                           
│    │    
│    ├──📁models/                                    # Defines database structure
│    │    │
│    |    ├──📜product.js          
│    │     
│    ├──📁route/                                     # Defines API paths
│    │    │
│    │    ├──📜productroute.js                       # Routes for product-related API endpoints
│    │    
│    ├──📁controller/                                # Defines API paths
│    │    │
│    │    ├──📜productcontroller.js                  # Handles incoming requests and responses
│    │
│    ├──📁service/                                   # Business logic & external API calls 
│         │
│         ├──📜productservices.js                    # Business logic for product operations
│
├──📜.env
│
├──📜package.json
│
├──📜README.md
```


