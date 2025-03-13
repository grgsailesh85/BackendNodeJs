## Folder Structure
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
