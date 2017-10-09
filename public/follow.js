$(document).ready(function() {
  $('.follow-user').click(function() {
    let target_id = $(this).data('id');
    let target_user = $(this).data('name');;

    // If current_user is following target, then do not follow.
    dpd.users.me(function(results) {
      // In results, in 'following' array, find if the id exists
      let is_following = results.following.find(function(value) {
        return value === target_id;
      });

      // If the value (the target_user id), doesn't exist in current_user's
      // 'following' array, then current_user follows target_user.
      if (!is_following) {
        dpd.users.put(me.id, {
          following: {$push: target_id }
        }, function(error) {
          alert(error);
        });

        dpd.users.put(id, {
          following: {$push: me.id}
        });
      } else {
        alert('You are already following ' + target_user);
      }
    });
  });
});
