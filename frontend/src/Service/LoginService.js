const LoginService={
    onLogin
}

function onLogin(formData){
    return fetch('http://localhost:8000/login/onLogin',{
        method:"POST",
        // headers:{
        //     'Content-Type':'application/x-www-form-urlencoded'
        // },
        body:formData
    }).then(function(res){ return res.json(); }).catch(err=>console.log(err));
}

export default LoginService