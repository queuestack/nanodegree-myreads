import React from 'react'
import { PropTypes } from 'prop-types'
import Book from './Book'

class SearchResult extends React.Component {    
    static propTypes = {
        books: PropTypes.arrayOf(PropTypes.object),
        handleShelfChange: PropTypes.func
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
                                    handleShelfChange={this.props.handleShelfChange}
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