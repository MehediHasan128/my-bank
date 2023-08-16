document.getElementById('btnLogin').addEventListener('click', function(){
    const userEmail = document.getElementById('userEmail');
    const email = userEmail.value;
    const userPassword = document.getElementById('userPassword');
    const password = userPassword.value;
    
    if(email === 'ami@tmi.com' && password === '123'){
        window.location.href = 'bank.html';
    }
    else{
        alert('invalid user');
    }
})