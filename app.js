const express = require('express');
const AdminRoutes = require('./routes/AdminRoutes')
const DashboardRoutes = require('./routes/DashboardRoutes')
const HomepageRoutes = require('./routes/HomepageRoutes')
const UserRoutes = require('./routes/UserRoutes')

const app = express();

// Configure EJS as the view engine
app.set('view engine', 'ejs');

// Mount the router at a specific path
app.use('/', AdminRoutes)
app.use('/', DashboardRoutes)
app.use('/', HomepageRoutes)
app.use('/', UserRoutes)

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});