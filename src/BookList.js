import React from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

class BookList extends React.Component {
    static propTypes = {
        books: PropTypes.arrayOf(PropTypes.object),
        handleShelfChnage: PropTypes.func
    }

    render() {
        const READING_SHELF = 'currentlyReading';
        const TOREAD_SHELF = 'wantToRead';
        const READ_SHELF = 'read';

        const readingBooks = this.props.books.filter((book) => {
            return book.shelf === READING_SHELF;
        })
        const toReadBooks = this.props.books.filter((book) => {
            return book.shelf === TOREAD_SHELF;
        })
        const readBooks = this.props.books.filter((book) => {
            return book.shelf === READ_SHELF;
        })

        return (
            <div className="list-books-content">
                <div>
                    <BookShelf 
                        bookshelfType="Currently Reading"
                        books={readingBooks}
                        handleShelfChange={this.props.handleShelfChange}
                    />
                    <BookShelf
                        bookshelfType="Want to Read"
                        books={toReadBooks}
                        handleShelfChange={this.props.handleShelfChange}
                    />
                    <BookShelf
                        bookshelfType="Read"
                        books={readBooks}
                        handleShelfChange={this.props.handleShelfChange}
                    />
                </div>
            </div>            
        )        
    }
}

export default BookList;