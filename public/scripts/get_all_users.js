dpd.users.get(function(result, error) {
    dpd.users.me(function(r, e) {
        //if the user is logged in, show options to follow another user
        if (r) {
            var x = '';
            for (var i in result) {
                //show results that isn't me
                if (result[i].id != me.id) {
                    x += '<button data-id=\"' + result[i].id + '\" data-name=\"' + result[i].name + '\" class=\"follow-user\" style=\"display:block\">' + 'Follow ' + result[i].name;
                }
            }
            $('#user-list').html(x);
        }
    });

});
