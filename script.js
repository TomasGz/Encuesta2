document.getElementById('login-form').addEventListener('submit', function(e)) {
    e.preventDefault();

    var username = document.getElementById('mail').value;
    var password = document.getElementById('pass').value;
    var userType = document.getElementById('user-type').value;

    if (userType === 'employee' && username === 'mail' && password === 'pass'){
        
    } else if (userType === 'coordinator' && username === 'coordinador' && password === 'pass' )

    
}