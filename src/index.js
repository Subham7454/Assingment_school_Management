
import app from './app.js';
import db from './config/db.js';

const port = process.env.PORT || 3000;


db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to MySQL database');


    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
});
