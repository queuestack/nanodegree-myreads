import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends React.Component {
    static propTypes = {
        books: PropTypes.arrayOf(PropTypes.object),
        bookshelfType: PropTypes.string.isRequired,
        handleShelfChnage: PropTypes.func
    }

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.bookshelfType}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books && this.props.books.map((book) => {
                            return (
                                <Book 
                                    key={book.title} 
                                    book={book} 
                                    handleShelfChange={this.props.handleShelfChange}
                                />
                            )
                        })}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf;