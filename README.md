# Auction Club

Auction Club is a full-stack auction application where users can buy and sell vintage items through bidding. The application provides authentication, image uploading, and a secure bidding system.

## Features

### User Authentication
- Users can **sign up** and **sign in** securely.
- Passwords are **hashed** using `bcrypt` for security.
- Authentication is handled using **JWT (JSON Web Token)**.

### Auction Features
- **Create Auctions**: Users can list vintage items for bidding by providing item details and an image.
- **Place Bids**: Logged-in users can place bids on available auction items.
- **View Auctions**: All users can view auction items and their details.
- **Auction Expiry**: Auctions are closed after the specified **closing time**.

### Image Uploading
- Users can upload images while creating an auction listing.
- Images are stored in a dedicated `/uploads` folder in the backend.
- Uploaded images are served statically via Express.

### Security
- **JWT Authentication** ensures only authorized users can bid or create auctions.
- Passwords are securely stored using `bcrypt` hashing.
- API endpoints are protected using authentication middleware.

## Tech Stack

### Frontend
- React.js
- React Router for navigation
- Axios for API requests

### Backend
- Node.js with Express.js
- MongoDB with Mongoose
- Multer for image uploads
- JWT for authentication
- Bcrypt for password hashing

## Installation & Setup

### Prerequisites
- Node.js installed
- MongoDB installed and running

### Steps

1. **Clone the repository**
   ```sh
   git clone https://github.com/yourusername/auction-club.git
   cd auction-club
   ```

2. **Backend Setup**
   ```sh
   cd backend
   npm install
   npm start
   ```

3. **Frontend Setup**
   ```sh
   cd frontend
   npm install
   npm start
   ```

4. **Environment Variables**
   - Create a `.env` file in the backend directory.
   - Add the following variables:
     ```env
     MONGO_URI=your_mongodb_connection_string
     SECRET_KEY=your_jwt_secret_key
     ```

## API Endpoints

### Authentication
- `POST /signup` - Register a new user
- `POST /signin` - Log in and receive a JWT token

### Auctions
- `GET /auctions` - Get all auction items (requires authentication)
- `GET /auctions/:id` - Get details of a specific auction item
- `POST /auction` - Create a new auction (requires authentication)

## Contributing
- Fork the repository
- Create a new branch (`feature/your-feature`)
- Commit changes and push
- Open a Pull Request

## License
This project is open-source and available under the MIT License.

