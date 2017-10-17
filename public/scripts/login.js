let me = {};

dpd.users.me(function(result, error) {

  if (result) {
    me = result;
    $('.hamburger').show();
    $('#user-info').html('Hi ' + result.name + '! <a onclick="dpd.users.logout(function(result, error) {window.location.reload()});" href="#" style="color: #fff"><u>Logout</u></a>');
    $('#login').hide();
    $('#logout').show();
    $('.must-log').show();
  } else {
    $('#user-info').html('<a href="login.html"><button class="btn-top">Sign in</button></a><a href="register.html"><button class="btn-top">Register</button></a>');
    $('.hamburger').hide();
    $('#login').show();
    $('#logout').hide();
    $('.must-log').hide();
  }
});

function login(username, password) {
  dpd.users.login({
    username: username,
    password: password
  }, function(session, error) {
      if (error) {
        return alert(error.message);
      }

      window.location.href = '/';
  });
};

function logout() {
  dpd.users.logout(function() {
    window.location.href = '/';
  });
};


$(document).ready(function(){
  $('#login-button').click(function(e){

    let username = $('#username').val();
    let password = $('#password').val();
    login(username, password);

    e.preventDefault();
  });

  $('#logout').click(function (e){
    logout();
  })
});
