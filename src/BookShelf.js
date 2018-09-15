import React from 'react'
import Book from './Book'

const BookShelf = (props) => {
    const { books, bookshelfType, handleShelfChange } = props;

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{bookshelfType}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books && books.map((book) => {
                        return (
                            <Book 
                                key={book.title} 
                                book={book} 
                                handleShelfChange={handleShelfChange}
                            />
                        )
                    })}
                </ol>
            </div>
        </div>
    )
}

export default BookShelf;