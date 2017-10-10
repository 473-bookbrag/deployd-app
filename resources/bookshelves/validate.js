cancelUnless(me, 'You must be logged in to add a bookshelf', 401);
cancelUnless(isMe(this.owner), 'Cannot add a bookshelf for that user', 401);