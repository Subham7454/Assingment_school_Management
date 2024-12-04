
import db from '../config/db.js';
import haversine from '../utils/haversine.js';

export const addSchool = (req, res) => {
    const { name, address, latitude, longitude } = req.body;

    if (!name || !address || !latitude || !longitude) {
        return res.status(400).json({ error: 'All fields are required.' });
    }
    if (typeof latitude !== 'number' || typeof longitude !== 'number') {
        return res.status(400).json({ error: 'Latitude and Longitude must be numbers.' });
    }

    const sql = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
    db.query(sql, [name, address, latitude, longitude], (err, result) => {
        if (err) {
            console.error('Error inserting into database:', err);
            return res.status(500).json({ error: 'Database insertion failed.' });
        }
        res.status(201).json({ message: 'School added successfully', schoolId: result.insertId });
    });
};

export const listSchools = (req, res) => {
    const userLat = parseFloat(req.query.latitude);
    const userLong = parseFloat(req.query.longitude);

    if (!userLat || !userLong) {
        return res.status(400).json({ error: 'Latitude and Longitude are required as query parameters.' });
    }

    const sql = 'SELECT * FROM schools';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching from database:', err);
            return res.status(500).json({ error: 'Database query failed.' });
        }

        const sortedSchools = results.map((school) => {
            const schoolCoords = { latitude: school.latitude, longitude: school.longitude };
            const userCoords = { latitude: userLat, longitude: userLong };
            const distance = haversine(userCoords, schoolCoords);
            return { ...school, distance };
        }).sort((a, b) => a.distance - b.distance);

        res.status(200).json(sortedSchools);
    });
};
