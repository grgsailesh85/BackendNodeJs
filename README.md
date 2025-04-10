# Node.js, Express & MongoDB Backend Learning

Welcome to my backend learning repository! 🚀  
This repo documents my journey into backend development using **Node.js**, **Express.js**, and **MongoDB**.  
It includes mini-projects, best practices, and real-world features like **e-commerce API** development and **user authentication**.

---

## 🧠 What You'll Find Here

- RESTful e-commerce API (Products, Orders)
- Full-featured **User Authentication** (JWT, bcrypt)
- Role-based access control (Admin/User/Merchant)
- CRUD operations using Express and MongoDB
- API design with proper routing, validation & error handling
- MongoDB integration using Mongoose
- Environment variable management with `dotenv`

---

## 🛒 E-commerce API Features

- Add, update, delete products (Admin only)
- View product list and single product details
- Cart operations: add/remove/update items
- Place orders (Authenticated users only)

---

## 🔐 Authentication Features

- Register and login with email & password
- Password hashing with bcrypt
- JWT-based session management
- Route protection using middleware
- User roles: Admin, Customer and Merchant

---

## 🛠️ Tech Stack

| Tech        | Description                            |
|-------------|----------------------------------------|
| Node.js     | JavaScript runtime                     |
| Express.js  | Web framework                          |
| MongoDB     | NoSQL database                         |
| Mongoose    | ODM for MongoDB                        |
| JWT         | JSON Web Token for authentication      |
| bcrypt      | Password hashing                       |
| Postman     | API testing                            |
| dotenv      | Manage environment variables           |

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


