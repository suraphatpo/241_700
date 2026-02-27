const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql2/promise')
app.use(bodyParser.json());
const port = 8000;

let conn = null;

const initMySQL = async () =>{
    conn = await mysql.createConnection({
        host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'webdb',
            port: 8700
    });
    console.log('Connected to MySQL database');
}

//path = GET /users สำหรับดึงข้อมูล users ทั้งหมด
app.get('/testdb-new', async (req, res) => {
        const results = await conn.query('SELECT * FROM users');
        res.json(results[0]);  
});

//path = POST /users สำหรับเพิ่ม user ใหม่
app.post('/users', async (req, res) => {
    try{
        let user = req.body;
    const results = await conn.query('INSERT INTO users SET ?',user);
    console.log('result: ',results);
    res.json({
        message: 'User added susscessfully',
        data: results[0]
    });
    } catch (error){
        console.error('Error inserting user:', error);
        res.status(500).json({ message: 'Error adding user'});
    }
})

//path = GET /users/:id สำหรับดึงข้อมูล user ตาม id 
app.get ('/users/:id', async (req, res)=>{
    try{
        let id = req.params.id;
        const results = await conn.query('SELECT * FROM users WHERE id = ?',id);
        if (result[0].legth === 0 ){
            throw { statusCode: 404,message:'User not found'};
        } 
        res.json(results[0][0]);
    } catch(error){
        consloe.error('Error fetching user:',error);
        let statusCode = error.statusCode || 500;
        res.status(statusCode).json({
            message: 'Error fetching user',
            error: error.message
        });
    }
}) 

//PUT /users/:id สำหรับแก้ไขข้อมูล user ที่มี id ตรงกับที่ส่งมา
app.put('/users/:id', async (req, res) => {
    try {
        let id = req.params.id
        let updatedUser = req.body;
        const results = await conn.query('UPDATE users SET ? WHERE id = ?', [updatedUser, id])
        if (results[0].affectedRows == 0) {
            throw { statusCode: 404, message: 'User not found' };
        }
        res.json({
            message: 'User updated successfully',
            data: updatedUser
        });
    }
    catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({message: 'Error updating user'});
    }
})

// DELETE /users/:id สำหรับลบ user ที่มี id ตรงกับที่ส่งมา
app.delete('/users/:id', async (req, res) => {
    try {
        let id = req.params.id
        const results = await conn.query('DELETE FROM users WHERE id = ?', id)
        res.json({
            message: 'User deleted successfully',
            data: results[0]
        });
    }
    catch (error) {
        console.error('Error deleting user:', error);
        let statusCode = error.statusCode || 500;
        res.status(statusCode).json({message: 'Error deleting user'});
    }
})

/**
GET /users - ดึงข้อมูลผู้ใช้ทั้งหมด
POST /users - เพิ่มผู้ใช้ใหม่
GET /users/:id - ดึงข้อมูลผู้ใช้ตาม id
PUT /users/:id - เเก้ไขข้อมูลผู็ใช้ตาม id ที่บีนทึก
DELETE /users/:id - ลบผู็ใช้ตาม id ที่บันทึก 
 */

// // path = GET /users
// app.get('/users',(req, res)=>{
//     res.json(users);
// });

// // path = POST /user
// app.post('/user',(req, res)=>{
//     let user = req.body;
//     user.id = counter;
//     counter += 1;

//     users.push(user);
//     res.json({
//         massage: 'User added successfully', 
//         user:user
//     });
// });

// // path = PUT /user/:id
// app.patch('/user/:id', (req, res)=>{
//     let id = req.params.id;
//     let updateUser = req.body;
//     // หา user จาก id ที่ส่งมา
//     let selectedIndex = users.findIndex(user =>user.id == id);

//     //update ข้อมูล users นั้น
//     if(updateUser.firstname){
//         users[selectedIndex].firstname = updateUser.firstname;
//     }
//     if(updateUser.lastname){
//         users[selectedIndex].lastname = updateUser.lastname;
//     }

//     res.json({
//         Message: ' User updates successfully',
//         data: {
//             user: updateUser,
//             indexUpdate: selectedIndex
//         }
//     });
//     //ส่ง users ที่ update กลับไป
// });

// app.delete('/user/:id', (req, res)=>{
//     let id = req.params.id;

//     // หา index จาก id ที่ต้องการลบ
//     let selectedIndex = users.findIndex(user =>user.id == id);

//     // ลบ user ออกจาก users 
//     delete users[selectedIndex];
//     res.json({
//         Message: ' User deleted successfully',
//         indexDelete: selectedIndex
//     });
// });

app.listen(port, async () => {
    await initMySQL();
    console.log(`Server is running on http://localhost:${port}`);
});