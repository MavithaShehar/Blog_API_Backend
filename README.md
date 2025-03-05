# Backend API

## Setup Instructions
1. **Clone the repository:**
   ```bash
   git clone https://github.com/MavithaShehar/Blog_API_Backend.git
   
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up environment variables:**  
   Create a `.env` file and add:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```
4. **Run the server:**
   ```bash
   npm run dev
   ```

## 📌 API Endpoints
### **Authentication**
| Method | Endpoint      | Description          |
|--------|-------------|----------------------|
| POST   | `/api/register` | Register a new user |
| POST   | `/api/login`    | User login & get token |

### **Posts**
| Method | Endpoint               | Description              |
|--------|----------------------|--------------------------|
| GET    | `/api/posts`        | Get all posts          |
| POST   | `/api/posts`        | Create a new post      |
| PUT    | `/api/posts/:id`   | Update a post by ID    |
| DELETE | `/api/posts/:id`  | Delete a post by ID    |



## 🚀 Postman Collection / cURL Commands
### **Option : Postman Collection**
1. Open **Postman** → Click **Import** → Select **"Export Collection"**.


### **Option : cURL Commands**

### User

```bash
# Register a new user
curl -X POST http://localhost:3000/api/register \
     -H "Content-Type: application/json" \
     -d '{"username": "john", "email": "john@example.com", "password": "john1111"}'
```
```bash
# Login
curl -X POST http://localhost:3000/api/login \
     -H "Content-Type: application/json" \
     -d '{"email": "john@example.com", "password": "john1111"}'
```

### Post

```bash
# Get all posts (requires JWT token)
curl --location 'localhost:3000/api/posts'
```

```bash
# Get posts by Id (requires JWT token)
curl --location 'http://localhost:3000/api/posts/ {add id}'
```

```bash
# Create a post (requires JWT token)
curl --location 'localhost:3000/api/posts' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2M3YWQwYzhiM2EwNjlmNGIzZjk2NzEiLCJpYXQiOjE3NDExMzkyMTYsImV4cCI6MTc0MTE0MjgxNn0.XH3-s8kvUpPZSU2bqL6MJBNFVhMBdIpavcRSRyG6NOc' \
--data '{ 
  "title": "First Post 01",
  "content": "This is the content for the first post.",
  "author": "create user Id",  
  "createdAt": "2025-03-05T12:00:00Z",
  "updatedAt": "2025-03-05T12:00:00Z"
}
'
```

```bash
# Update posts by Id (requires JWT token)
curl --location --request PUT 'http://localhost:3000/api/posts/ {use user id}' \
--header 'Content-Type: application/json' \
--data '{
    "title": "My First Blog Post 02",
    "content": "This of my first blog post.",
    "author": "use user id" 
}
'
```

```bash
# Delete posts by Id (requires JWT token)
curl --location --request DELETE 'http://localhost:3000/api/posts/67c74cdb17b070f8f4bcae69' \
--header 'Content-Type: application/json' \
--data '
'
```





