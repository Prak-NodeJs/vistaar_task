const express = require('express');
const app = express();
const dotenv = require('dotenv');
console.log(__dirname)
dotenv.config();

const cors = require('cors'); 
const passport = require('passport');
const session = require('express-session');
const { customerRoutes } = require('./routes/customer.route');
const { connectToDB } = require('./config/connection');
const { accountsRoutes } = require('./routes/account.route');
require('./utils/passport');

const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true, 
};

app.use(cors(corsOptions)); 

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

// DB connection
connectToDB();

app.use('/v1/customer', customerRoutes);
app.use('/v1/customer/accounts', accountsRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server error';
  res.status(statusCode).json({ success: 'error', message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port number ${PORT}`);
});
