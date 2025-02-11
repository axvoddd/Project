const express = require('express');
const path = require('path');
const app = express();
const cookie = require('cookie-parser')
const mysql = require('mysql2');

require('dotenv').config({path: __dirname + "/.env"})  

const db = mysql.createPool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 3306,
});

db.query('select * from eggsql.egg',(err,res) =>{
  if(err)
    console.log(err)
  else
    console.log(res)
})
// db.connect((err) => {
//   if (err)
//     console.log(err)
//   else 
//     console.log('Connected to MySQL Database!');
//   // Example query
//   // connection.query('SELECT * FROM project_egg.member', (err, results, fields) => {
//   //   if (err) throw err;
//   //   console.log(results);
//   // });
// });
// ตั้งค่าให้เสิร์ฟไฟล์ static จากโฟลเดอร์ public
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); // รองรับ form data

const filePath = path.join(__dirname, 'public');

// เสิร์ฟไฟล์ HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/login.html'));
});

app.get('/sign_up', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/sign_up.html'));
});
app.get('/working', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/html/working.html'));
});
// เสิร์ฟไฟล์ Contact
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/contact.html'));
});
app.get('/feature-temperature.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/html/feature-temperature.html'));
});
app.get('/feature-innovation.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/html/feature-innovation.html'));
});
app.get('/feature-security.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/html/feature-security.html'));
});
// รันเซิร์ฟเวอร์
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

app.post('/egg_data' , (req,res) =>{
  var sql = 'INSERT INTO project_egg.egg (userID, eggType, Temperature, Moisture, EggTurningTime, HatchingDay, NumberOfEggs)'
  db.query(sql + 'VALUE (?,?,?,?,?,?,?)',[],(error, results) =>{
    if(error)
      console.log(err);
    else
      console.log('Insert success')

  })
})

app.post('/verify', (req, res) => {
  console.log('verifyyyyyy')
  const { username, password } = req.body;
  console.log(username)
  console.log(password)

    const sql = 'SELECT * FROM member WHERE username = ? and password = ?';
    db.query(sql, [username,password], (error, results) => {
      if (error) {
        console.error(error);
        res.redirect('/login');
      } else {
        if (results.length == 0) {
          res.redirect('/login');
        } else {
          db.query('SELECT * FROM member WHERE username = ?', [username], (err, results) => {
            if (err) {
              console.log(err);
            } else {
              const user = results[0];
              console.log(user.role)
              if (user.role == 'admin') {  // เช็คว่าเป็น admin หรือไม่
                const admin_name = user.username;
                console.log('Welcome admin');

                res.sendFile(path.join(__dirname, 'public/html/index.html'));
              } else {
                console.log('Welcome user');

                res.sendFile(path.join(__dirname, 'public/html/index.html'));
              }
            }
          });
        }
      }
    });

});

const session = require('express-session');

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 900000 }
}));
// Middleware ตรวจสอบการล็อกอิน
function isAuthenticated(req, res, next) {
  if (req.session.username) {
    return next();
  } else {
    res.redirect('/html/login.html');
  }
}

// ใช้ middleware ในหน้า admin และ main
app.get('/html/index', isAuthenticated, (req, res) => {
  res.render('admin');
});

app.get('/login',(req,res) => {
  const username = req.cookies.username
  console.log(username)
  if(username){
      res.redirect('/html/index.html')
  }
  else
      res.render('html/login.html')  
})

