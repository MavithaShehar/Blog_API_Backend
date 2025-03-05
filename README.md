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
### **Option 1: Postman Collection**
1. Open **Postman** → Click **Import** → Select **"Export Collection"**.


### **Option : cURL Commands**

### User

```bash
# Register a new user
curl -X POST http://localhost:3000/api/register \
     -H "Content-Type: application/json" \
     -d '{"username": "john", "email": "john@example.com", "password": "john1111"}'

# Login
curl -X POST http://localhost:3000/api/login \
     -H "Content-Type: application/json" \
     -d '{"email": "john@example.com", "password": "john1111"}'
```

### Post

```bash
# Get all posts (requires JWT token)
curl -X GET http://localhost:3000/api/posts \
     -H "Authorization: Bearer YOUR_ACCESS_TOKEN"

# Create a post (requires JWT token)
curl -X POST http://localhost:3000/api/posts \
     -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
     -H "Content-Type: application/json" \
     -d '{"title": "My Post", "content": "Hello World!", "author": "USER_ID"}'
```






