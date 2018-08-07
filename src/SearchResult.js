import React from 'react'
import { PropTypes } from 'prop-types'
import Book from './Book'

class SearchResult extends React.Component {    
    static propTypes = {
        books: PropTypes.arrayOf(PropTypes.object)
    }    

    render() {
        const books = this.props.books;

        return (
            <div className="search-books-results">
                <ol className="books-grid">
                    {books && !books.error && books.map((book) => {
                            return (
                                <Book
                                    key={book.industryIdentifiers[0].identifier}
                                    book={book}
                                />
                            )
                        })
                         
                    }
                </ol>
            </div>            
        )        
    }
}

export default SearchResult;