dpd.users.get(this.owner, (function(owner) {
    if(owner) {
        this.owner = { id: owner.id, username: owner.username, name: owner.name };
    }
}).bind(this));