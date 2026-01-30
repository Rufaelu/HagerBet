# Hager Bet Restaurant - MERN Stack

A modern MERN (MongoDB, Express, React, Node.js) stack restaurant website for Hager Bet, an authentic Ethiopian restaurant.

## Project Structure

```
├── server/                 # Node.js/Express backend
│   ├── models/            # MongoDB models (Reservation, Review)
│   ├── routes/            # API routes
│   ├── server.js          # Express server entry point
│   ├── package.json       # Server dependencies
│   └── .env               # Environment variables
│
├── client/                # React frontend
│   ├── src/
│   │   ├── pages/         # React pages (Home, Menu, About, etc.)
│   │   ├── components/    # Reusable components (Navbar, Footer)
│   │   ├── styles/        # CSS files
│   │   ├── utils/         # API utilities
│   │   └── App.jsx        # Main App component
│   ├── index.html         # HTML entry point
│   ├── vite.config.js     # Vite configuration
│   └── package.json       # Client dependencies
│
├── Images/                # Restaurant images
├── package.json           # Root package.json (monorepo scripts)
└── README.md             # This file
```

## Features

- **Home Page**: Hero section with call-to-action
- **Menu**: Dynamic menu with categories (Vegan, Non-Vegan, Beverages, Extras)
- **About**: Restaurant information and heritage
- **Reservations**: Book a table with date, time, and guest count
- **Reviews**: Customer reviews with star ratings
- **Backend API**: RESTful API for reservations and reviews
- **MongoDB**: Data persistence for reservations and reviews
- **Responsive Design**: Mobile-friendly interface

## Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **CSS3** - Styling

## Installation

### Prerequisites
- Node.js (v18+)
- MongoDB (local or cloud instance)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hager-bet-mern
   ```

2. **Install root dependencies**
   ```bash
   npm install
   ```

3. **Setup Backend**
   ```bash
   cd server
   npm install
   ```

   Create `.env` file in the server directory:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/hagerbetdb
   NODE_ENV=development
   ```

4. **Setup Frontend**
   ```bash
   cd ../client
   npm install
   ```

   Create `.env` file in the client directory:
   ```
   VITE_API_URL=http://localhost:5000/api
   ```

5. **Copy Images**
   ```bash
   cp -r ../Images public/images
   ```

## Running the Application

### Development Mode (Recommended)

From the root directory, run both server and client simultaneously:

```bash
npm run dev
```

This will:
- Start the Express server on http://localhost:5000
- Start the Vite dev server on http://localhost:3000

### Individual Startup

**Start the server only:**
```bash
npm run server:dev
```

**Start the client only:**
```bash
npm run client:dev
```

### Production Build

Build the client:
```bash
npm run build
```

## API Endpoints

### Reservations
- `POST /api/reservations` - Create a new reservation
- `GET /api/reservations` - Get all reservations
- `GET /api/reservations/:id` - Get a specific reservation
- `PUT /api/reservations/:id` - Update a reservation
- `DELETE /api/reservations/:id` - Delete a reservation

### Reviews
- `POST /api/reviews` - Create a new review
- `GET /api/reviews` - Get all reviews
- `GET /api/reviews/:id` - Get a specific review
- `PUT /api/reviews/:id` - Update a review
- `DELETE /api/reviews/:id` - Delete a review

## Database Schema

### Reservation Model
```javascript
{
  customerName: String,
  customerEmail: String,
  reservationDate: Date,
  reservationTime: String,
  guests: Number,
  status: String (enum: 'booked', 'confirmed', 'cancelled'),
  createdAt: Date,
  updatedAt: Date
}
```

### Review Model
```javascript
{
  name: String,
  rating: Number (1-5),
  message: String,
  createdAt: Date,
  updatedAt: Date
}
```

## Environment Variables

### Server (.env)
- `PORT` - Server port (default: 5000)
- `MONGODB_URI` - MongoDB connection string
- `NODE_ENV` - Environment (development/production)

### Client (.env)
- `VITE_API_URL` - Backend API URL

## Deployment

### Deploy to Vercel/Netlify (Frontend)
1. Build the client: `npm run build`
2. Deploy the `client/dist` folder

### Deploy to Heroku/Railway (Backend)
1. Set environment variables
2. Deploy the server folder
3. Update the frontend API URL to point to the deployed backend

## Future Enhancements

- User authentication and accounts
- Menu management system
- Advanced reservation management
- Payment integration
- Order history
- Email notifications
- Admin dashboard

## License

This project is private and owned by Hager Bet Restaurant.

## Contact

For inquiries or support, please contact:
- Email: info@hagerbet.com
- Phone: 301-382-4311
- Address: 161 Linden Avenue, London
