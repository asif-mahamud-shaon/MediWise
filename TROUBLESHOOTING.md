# Login Troubleshooting Guide

## Common Login Issues

### 1. "Cannot connect to server" Error
**Problem:** Backend server is not running or not accessible.

**Solution:**
```bash
# Make sure backend is running
cd backend
npm run dev

# You should see:
# Server is running on port 5000
# Database connection established successfully.
```

### 2. "Invalid credentials" Error
**Problem:** Admin user doesn't exist or password is wrong.

**Solution:**
- Make sure the backend has started successfully and created the admin user
- Check backend console for: "Default admin user created: admin@mediwise.com / admin123"
- If admin user wasn't created, restart the backend server

**Default Admin Credentials:**
- Email: `admin@mediwise.com`
- Password: `admin123`

### 3. Database Connection Error
**Problem:** PostgreSQL is not running or database doesn't exist.

**Solution:**
1. Start PostgreSQL service
2. Create the database:
   ```sql
   CREATE DATABASE mediwise_db;
   ```
3. Verify backend `.env` file has correct credentials:
   ```
   DB_NAME=mediwise_db
   DB_USER=postgres
   DB_PASSWORD=1234
   ```

### 4. CORS Error
**Problem:** Frontend cannot communicate with backend.

**Solution:**
- Verify backend `server.js` has CORS enabled (it should be)
- Check that backend is on `http://localhost:5000`
- Check that frontend is on `http://localhost:3000`

## Quick Fix Steps

1. **Start Backend:**
   ```bash
   cd backend
   npm run dev
   ```
   Wait for: "Database connection established successfully."

2. **Verify Admin User Creation:**
   Look for this message in backend console:
   ```
   Default admin user created: admin@mediwise.com / admin123
   ```

3. **Start Frontend:**
   ```bash
   cd frontend
   npm run dev
   ```

4. **Try Login Again:**
   - Email: `admin@mediwise.com`
   - Password: `admin123`

## If Still Not Working

1. Check browser console (F12) for detailed error messages
2. Check backend console for any error messages
3. Verify database is running: `psql -U postgres -l` (should list mediwise_db)
4. Try creating a new user via registration page first

