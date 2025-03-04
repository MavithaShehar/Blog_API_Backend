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



