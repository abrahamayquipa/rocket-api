import express from 'express';
import fs from 'fs';

const app = express.Router();
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

app.get('/', (req, res) => {
    res.send(data.classrooms);
});

app.get('/facilities-list', (req, res) => {
    res.send(data.facilitiesList);
});

app.get('/classroom-equipment-list', (req, res) => {
    res.send(data.classroomEquipmentList);
});

app.get('/courses-list', (req, res) => {
    res.send(data.coursesList);
});

app.get('/students-list', (req, res) => {
    res.send(data.studentsList);
});

app.get('/teachers-list', (req, res) => {
    res.send(data.teachersList);
});

export default app;