dpd.users.me(function(r, e) {
    if (r) {
        var x = '';
        for (var i in r.followers) {
            dpd.users.get(r.followers[i], function(result) {
                var name = result.name;
                x += '<span style=\"display:block\">' + name + '</span>';
                $('#user-list3').html(x);
            });
        }
    }
});
