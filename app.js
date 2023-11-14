import express from 'express';
import fs from 'fs';
import pkg from 'pg';

const { Pool } = pkg;

const app = express();

const index = fs.readFileSync('public/index.html', 'utf8');
const routes = ['', '/', '/feed', '/profile', '/settings', '/login', '/settings/profile-settings', '/settings/change-password', '/settings/change-email'];

routes.forEach((route) => {
  app.get(`/app${route}`, (req, res) => res.type('html').send(index));
});

app.use(express.static('public'));
app.use(express.json());

const port = process.env.PORT || 3000;

const pool = new Pool({
  user: 'twitter_data_base_user',
  host: 'dpg-cjri4861208c73a2ceig-a.oregon-postgres.render.com',
  database: 'twitter_data_base',
  password: 'KDq4Mrt2Eoz7Ps5t1WZwEgFWe1q3Dp8I',
  port: '5432',
  ssl: {
    rejectUnauthorized: false,
  },
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
