# MERN Migration Setup Guide

This is a complete MERN Stack conversion of the Hager Bet Restaurant website from legacy PHP/HTML to modern React/Node.js/MongoDB.

## What Changed

### Before (Legacy Stack)
- Frontend: HTML, CSS, JavaScript
- Backend: PHP with MySQLi
- Database: MySQL

### After (MERN Stack)
- Frontend: React with Vite
- Backend: Express.js with Node.js
- Database: MongoDB with Mongoose

## UI/UX Preservation

All original styling and user interface elements have been preserved:
- Same color scheme (#e67e22 orange accent, dark theme)
- Same layout and design structure
- Same functionality for reservations and reviews
- Same navigation and page structure
- Same responsive design

## Quick Start

### 1. Install Dependencies

```bash
# From root directory
npm install

# Install server dependencies
cd server && npm install

# Install client dependencies
cd ../client && npm install
cd ..
```

### 2. Setup MongoDB

**Option A: Local MongoDB**
- Install MongoDB from https://www.mongodb.com/try/download/community
- MongoDB runs on `mongodb://localhost:27017` by default

**Option B: MongoDB Atlas (Cloud)**
- Create a free account at https://www.mongodb.com/cloud/atlas
- Create a database and get your connection string
- Update `MONGODB_URI` in `server/.env`

### 3. Create Environment Files

**Server (.env)**
Create `server/.env`:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/hagerbetdb
NODE_ENV=development
```

**Client (.env)**
Create `client/.env`:
```
VITE_API_URL=http://localhost:5000/api
```

### 4. Copy Images

Copy the images folder to the client public directory:
```bash
cp -r Images client/public/images
```

### 5. Run the Application

```bash
# From root directory - runs both server and client
npm run dev
```

Visit:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## File Organization

### Key Files

**Server Side:**
- `server/server.js` - Express server entry point
- `server/models/Reservation.js` - MongoDB model for reservations
- `server/models/Review.js` - MongoDB model for reviews
- `server/routes/reservations.js` - API routes for reservations
- `server/routes/reviews.js` - API routes for reviews

**Client Side:**
- `client/src/App.jsx` - Main React app with routing
- `client/src/pages/Home.jsx` - Home page
- `client/src/pages/Menu.jsx` - Menu page
- `client/src/pages/About.jsx` - About page
- `client/src/pages/Reservation.jsx` - Reservation form page
- `client/src/pages/Review.jsx` - Review form and list page
- `client/src/utils/api.js` - API client using Axios

## Data Flow

1. **User interacts with React component** (e.g., fills reservation form)
2. **Component calls API** via `reservationsAPI.create(data)`
3. **Axios sends HTTP POST** to `http://localhost:5000/api/reservations`
4. **Express route handler** processes the request
5. **Mongoose saves to MongoDB** using the Reservation model
6. **Response returns to client** with success/error message
7. **React updates state** and shows confirmation

## Differences from Original

### What's the Same
- Visual design and styling
- All pages and functionality
- Navigation structure
- Menu items and prices
- Contact information

### What's Different (Improvements)
- **Better performance**: React SPA vs page reloads
- **Modern architecture**: Component-based UI
- **Type safety**: Node.js instead of PHP
- **API-first design**: Clean REST API
- **Database scalability**: MongoDB instead of MySQL
- **Development experience**: Hot reload in development

## API Usage Examples

### Create Reservation
```javascript
const response = await reservationsAPI.create({
  customerName: "John Doe",
  customerEmail: "john@example.com",
  reservationDate: "2025-02-14",
  reservationTime: "19:00",
  guests: 4
});
```

### Get All Reviews
```javascript
const response = await reviewsAPI.getAll();
// Returns: { success: true, data: [...reviews] }
```

### Submit Review
```javascript
const response = await reviewsAPI.create({
  name: "Jane Smith",
  rating: 5,
  message: "Amazing food and service!"
});
```

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9

# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### MongoDB Connection Error
- Check if MongoDB is running: `mongosh`
- Verify connection string in `server/.env`
- If using Atlas, check whitelist IP and connection string

### Images Not Loading
- Ensure `Images` folder is copied to `client/public/images`
- Check file paths in components (should be `/images/filename.jpg`)

### CORS Errors
- CORS is enabled in `server/server.js`
- Verify client and server are running on correct ports

## Deployment

### Frontend (Vercel/Netlify)
1. `npm run build` in client folder
2. Deploy `client/dist` folder
3. Set `VITE_API_URL` to production backend URL

### Backend (Railway/Heroku)
1. Set production environment variables
2. Deploy server folder
3. MongoDB Atlas for cloud database

## Next Steps

1. Test all functionality (reservations, reviews)
2. Add images to `client/public/images/`
3. Set up MongoDB database
4. Deploy to production
5. Monitor for errors using backend logs

## Support

For technical questions or issues, refer to:
- Express.js docs: https://expressjs.com
- React docs: https://react.dev
- MongoDB docs: https://docs.mongodb.com
- Vite docs: https://vitejs.dev
