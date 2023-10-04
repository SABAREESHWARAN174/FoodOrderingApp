const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000; // Choose a port for your server

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Function to check if the email contains 'admin'
const isAdminEmail = (email) => email.includes('admin');

// Endpoint to validate the email and perform redirection
app.post('/validate-email', (req, res) => {
  const { email } = req.body;

  if (isAdminEmail(email)) {
    // Redirect to the admin page for admin users
    return res.json({ redirectTo: '/admin' });
  }

  // For non-admin users, continue to the regular page
  return res.json({ redirectTo: '/' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
