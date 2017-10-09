let me = {};

dpd.users.me(function(result, error) {

  if (result) {
    me = result;
    $('#user-info').html(JSON.stringify(result));
    $('#login').hide();
    $('#logout').show();
  } else {
    $('#user-info').html('You are not logged in.');
    $('#login').show();
    $('#logout').hide();
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
