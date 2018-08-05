import React from 'react'
import { PropTypes } from 'prop-types'

class Book extends React.Component {
    static propTypes = {
        imageLinks: PropTypes.object,
        title: PropTypes.string,
        authors: PropTypes.arrayOf(PropTypes.string)
    }

    render() {
        return (
            <li>
                <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.imageLinks.thumbnail}")` }}></div>
                    <div className="book-shelf-changer">
                    <select>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                    </div>
                </div>
                <div className="book-title">{this.props.title}</div>
                <div className="book-authors">
                    {
                        this.props.authors && this.props.authors.map((author, i)=>{
                        return this.props.authors.length === i+1 ? `${author}` : `${author}, `;
                        })
                    }
                </div>
                </div>
            </li>  
        )      
    }
}
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
                                    imageLinks={book.imageLinks} 
                                    title={book.title}
                                    authors={book.authors}
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