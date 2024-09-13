function registration (){
    event.preventDefault()
    var fname = document.getElementById("fname")
    var email = document.getElementById("email")
    var phoneNumber = document.getElementById("phoneNumber")
    var password = document.getElementById("password")
    var cpassword = document.getElementById("cpassword")
    console.log(fname.value,email.value,phoneNumber.value,password.value,cpassword.value)
    
var userdata ={
    fname: fname.value,
    email:email.value,
    phoneNumber:phoneNumber.value,
    password:password.value,
    cpassword:cpassword.value,
}
console.log(userdata);
localStorage.setItem("userdata", JSON.stringify(userdata))
// var getData = localStorage.getItem("userdata")
// var parsedata = JSON.parse(getData)
// console.log(parsedata)

setTimeout(() =>{
window.location.href = "./dashboard.html"
}, 2000

);
}

function getLocalData(){
    var getData = localStorage.getItem("userdata")
var parsedata = JSON.parse(getData)
console.log(parsedata)

var getLocalDataDiv = document.getElementById("getLocalDataDiv")
getLocalDataDiv.innerHTML =`
<ul>
                <li>Name:</li>
                <li>Email:</li>
                <li>phoneNumber:</li>
            </ul>
           

`
}

