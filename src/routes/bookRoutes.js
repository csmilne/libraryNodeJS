const express = require('express');
const bookRouter = express.Router();

function router(nav) {

    const books = [
        {
            title: 'War and Peace',
            author: 'John Doe',
            genre: 'Historical Fiction',
            read: false
        },
        {
            title: 'Les Miserables',
            author: 'Steve Smith',
            genre: 'Historical Fiction',
            read: false
        }
    ];

    bookRouter.route('/')
        .get((req, res) => {
            res.render(
                'bookListView',
                {
                    nav,
                    title: 'Library',
                    books
                });

        })

    bookRouter.route('/:id')
        .get((req, res) => {
            const { id } = req.params;
            res.render(
                'bookView',
                {
                    nav,
                    title: 'Library',
                    book: books[id]
                });
        });

        return bookRouter;
}

module.exports = router;