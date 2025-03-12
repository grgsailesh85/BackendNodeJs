## Folder Structure

`
📁 your-repo
 ┣ 📂 src
 ┃ ┣ 📜 server.js                # Main entry point of the application
 ┃ ┣ 📂 config
 ┃ ┃ ┗ 📜 database.js            # Connecting with the MongoDB server
 ┃ ┣ 📂 modules
 ┃ ┃ ┗ 📜 product.js             # Defining product schema/model
 ┃ ┣ 📂 route
 ┃ ┃ ┗ 📜 productroute.js        # Routes for product-related API endpoints
 ┃ ┣ 📂 controller
 ┃ ┃ ┗ 📜 productcontroller.js   # Handles incoming requests and responses
 ┃ ┣ 📂 service
 ┃ ┃ ┗ 📜 productservices.js     # Business logic for product operations
 ┣ 📜 .env
 ┣ 📜 package.json
 ┣ 📜 README.md
`
