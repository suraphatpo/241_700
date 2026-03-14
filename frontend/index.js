const BASE_URL = "http://localhost:8000";
let mode = 'CREATE' //เพิ่มข้อมูลใหม่ 
let selectdId = "";
window.onload = async () =>{
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    console.log("id",id);
    if(id){
        mode = "EDIT";
        selectdId = id;
        //1. ดึงข้อมูล user เก่ามาเเสดง
            try{
                const response = await axios.get(`${BASE_URL}/users/${id}`);
                console.log("response", response.data);
                const user = response.data
                //2. จะนำข้อมูล user ที่ได้มาเเสดงในฟอร์ม เพื่อให้ผู้ใช้เเก้ไชช้อมูล
                 let firstNameDOM = document.querySelector('input[name=firstname]');
                let lastNameDOM = document.querySelector('input[name=lastname]');
                let ageDOM = document.querySelector('input[name=age]');
                let descriptionDOM = document.querySelector('textarea[name=description]');

                firstNameDOM.value = user.firstName;
                lastNameDom.value = user.lastName;
                ageDom.value = user.age;
                descriptionDOM.value = user.description;

                let genderDOM = document.querySelectorAll('input[name=gender]');
                let interestDOMs = document.querySelectorAll('input[name=interests]');

                for(let i = 0; i< genderDOMs.length; i++){
                    if (genderDOMs[i].value == user.gender){
                        genderDOMs[i].checked = true;
                    }
                }
                for(let i = 0;i< interestDOMs.length; i++){
                    if(user.interests.includes(interestDOMs[i].valuse)){
                        interestDOMs[i].cheched = true;
                    }
                }
                
            }catch (error){
                console.log("error",error)
            }
    }
}

const validateData = (userData) => {
    let errors = [];
    if (!userData.firstName) {
        errors.push('กรุณากรอกชื่อ');
    }
    if (!userData.lastName) {
        errors.push('กรุณากรอกนามสกุล');
    }
    if (!userData.age) {
        errors.push('กรุณากรอกอายุ');
    }
    if (!userData.gender) {
        errors.push('กรุณาเลือกเพศ');
    }
    if (!userData.interests) {
        errors.push('กรุณาเลือกงานอดิเรก');
    }
    if (!userData.description) {
        errors.push('กรุณากรอกคำอธิบาย');
    }
    return errors;
}
const submitData = async () => {
    let firstNameDOM = document.querySelector('input[name=firstname]');
    let lastNameDOM = document.querySelector('input[name=lastname]');
    let ageDOM = document.querySelector('input[name=age]');
    let genderDOM = document.querySelector('input[name=gender]:checked') || {};
    let interestDOMs = document.querySelectorAll('input[name=interests]:checked') || {};
    let descriptionDOM = document.querySelector('textarea[name=description]');

    let messageDOM = document.getElementById('message');
    try {
        let interest = ''
        for (let i = 0; i < interestDOMs.length; i++) {
            interest += interestDOMs[i].value
            if (i != interestDOMs.length - 1) {
                interest += ','
            }
        }

        let userData = {
            firstName: firstNameDOM.value,
            lastName: lastNameDOM.value,
            age: ageDOM.value,
            gender: genderDOM.value,
            description: descriptionDOM.value,
            interests: interest
        }
        console.log('submitData', userData);

        const errors = validateData(userData);
        if (errors.length > 0) {
            throw {
                message: 'กรุณากรอกข้อมูลให้ครบถ้วน',
                errors: errors
            }
        }

        if (mode== "CREATE"){
            const response = await axios.post(`${BASE_URL}/users`, userData);
            console.log("response", response.data);
        }else{
            const response = await axios.put(`${BASE_URL}/users`, userData);
            message = "เเก้ไขข้อมูลสำเร็จ";
            console.log("response", response.data);
        }
        messageDOM.innerText = message;
        messageDOM.className = "message susscess";

        const response = await axios.post(`${BASE_URL}/users`, userData);
        console.log('response', response);
        messageDOM.innerText = "บันทึกข้อมูลสำเร็จ";
        messageDOM.className = "message success";
    } catch (error) {
        console.log('Error Message:', error.message);
        console.log('Error Details:', error.errors);

        if (error.response) {
        console.error('Error response:', error.response);
        error.message = error.response.data.message
        error.errors = error.response.data.errors
        }
        let htmlData = '<div>'
        htmlData += `<div>` + error.message + `</div>`;
        htmlData += '<ul>';
        for (let i = 0; i < error.errors.length; i++) {
            htmlData += `<li>` + error.errors[i] + `</li>`;
        }
        htmlData += '</ul>';
        htmlData += '<div>';
 

        messageDOM.innerHTML = htmlData;
        messageDOM.className = "message danger";
    }
} 