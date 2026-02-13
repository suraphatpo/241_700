const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const port = 8000;

let users =[];
let counter = 1;

/**
GET /users - ดึงข้อมูลผู้ใช้ทั้งหมด
POST /users - เพิ่มผู้ใช้ใหม่
GET /users/:id - ดึงข้อมูลผู้ใช้ตาม id
PUT /users/:id - เเก้ไขข้อมูลผู็ใช้ตาม id ที่บีนทึก
DELETE /users/:id - ลบผู็ใช้ตาม id ที่บันทึก 
 */

// path = GET /users
app.get('/users',(req, res)=>{
    res.json(users);
});

// path = POST /user
app.post('/user',(req, res)=>{
    let user = req.body;
    user.id = counter;
    counter += 1;

    users.push(user);
    res.json({
        massage: 'User added successfully', 
        user:user
    });
});

// path = PUT /user/:id
app.patch('/user/:id', (req, res)=>{
    let id = req.params.id;
    let updateUser = req.body;
    // หา user จาก id ที่ส่งมา
    let selectedIndex = users.findIndex(user =>user.id == id);

    //update ข้อมูล users นั้น
    if(updateUser.firstname){
        users[selectedIndex].firstname = updateUser.firstname;
    }
    if(updateUser.lastname){
        users[selectedIndex].lastname = updateUser.lastname;
    }

    res.json({
        Message: ' User updates successfully',
        data: {
            user: updateUser,
            indexUpdate: selectedIndex
        }
    });
    //ส่ง users ที่ update กลับไป
});

app.delete('/user/:id', (req, res)=>{
    let id = req.params.id;

    // หา index จาก id ที่ต้องการลบ
    let selectedIndex = users.findIndex(user =>user.id == id);

    // ลบ user ออกจาก users 
    delete users[selectedIndex];
    res.json({
        Message: ' User deleted successfully',
        indexDelete: selectedIndex
    });
});

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
});