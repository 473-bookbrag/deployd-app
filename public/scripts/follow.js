$(document).on('click', '.follow-user', function() {
  let target_id = $(this).data('id');
  let target_user = $(this).data('name');
  console.log('target_id ' + target_id);
  // If current_user is following target, then do not follow.
  dpd.users.me(function(results) {

    var is_following = '';
    // If the value (the target_user id), doesn't exist in current_user's
    // 'following' array, then current_user follows target_user.

    for (var i in results.following) {
      if (results.following[i] === target_id) {
        is_following = target_id;
      }
    }

    if (is_following != target_id) {
      dpd.users.put(me.id, {
        following: {$push: target_id }
      }, function(error) {
        alert('You are now following ' + target_user);
      });

      dpd.users.put(target_id, {
        following: {$push: me.id}
      });
    } else {
      alert('You are already following ' + target_user);
    }
  });
});
