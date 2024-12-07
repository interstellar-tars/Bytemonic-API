const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Hardcoded credentials for demonstration (replace with a secure database in production)
const USERS = [
    { username: 'admin', password: 'Rbx.Jira45' },
];

// Login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = USERS.find(
        (u) => u.username === username && u.password === password
    );

    if (user) {
        res.status(200).json({ success: true });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
