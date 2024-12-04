
import mysql from 'mysql2';
import dotenv from 'dotenv';


dotenv.config();

const db = mysql.createConnection({
    uri: process.env.DB_URI,
});


db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL server');


    db.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`, (err) => {
        if (err) {
            console.error('Error creating database:', err);
            return;
        }
        console.log(`Database ${process.env.DB_NAME} created or already exists.`);


        db.changeUser({ database: process.env.DB_NAME }, (err) => {
            if (err) {
                console.error('Error switching to database:', err);
                return;
            }
            console.log(`Using database ${process.env.DB_NAME}`);


            const createTableQuery = `
                CREATE TABLE IF NOT EXISTS schools (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    name VARCHAR(255) NOT NULL,
                    address VARCHAR(255) NOT NULL,
                    latitude FLOAT NOT NULL,
                    longitude FLOAT NOT NULL
                );
            `;
            db.query(createTableQuery, (err) => {
                if (err) {
                    console.error('Error creating table:', err);
                    return;
                }
                console.log('Schools table created or already exists');
            });
        });
    });
});

export default db;
