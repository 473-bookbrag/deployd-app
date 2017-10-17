dpd.users.me(function(r, e) {
    if (r) {
        var x = '';
        for (var i in r.following) {
            dpd.users.get(r.following[i], function(result) {
                var name = result.name;
                x += '<span style=\"display:block\">' + name + '</span>';
                $('#user-list2').html(x);
                console.log(x);
            });
        }
    }
});
