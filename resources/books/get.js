dpd.bookshelves.get(this.bookshelf, (function(bookshelf) {
    if(bookshelf) {
        this.bookshelf = { id: bookshelf.id, name: bookshelf.name };
        dpd.users.get(bookshelf.owner, (function(owner) {
            if(owner) {
                this.owner = { id: owner.id, username: owner.username, name: owner.name };
            }
        }).bind(this)); 
    }
}).bind(this));