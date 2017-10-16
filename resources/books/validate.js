cancelUnless(me, 'You must be logged in to add a book', 401);
dpd.bookshelves.get(this.bookshelf, function(result, error) {
    cancelUnless(result && isMe(result.owner.id), 'Cannot add a book to that bookshelf', 401);
});