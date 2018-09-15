import React from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import BookList from './BookList'

class Home extends React.Component {
    static propTypes = {
        books: PropTypes.object,
        handleShelfChange: PropTypes.func
    }

    render() {
        const { books, handleShelfChange } = this.props;
        console.log(books);

        return (
            <div className="list-books">
                <div className="list-books-title">
                <h1>MyReads</h1>
                </div>
                <BookList 
                    books={books}
                    handleShelfChange={handleShelfChange}
                />
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>       
        ) 
    }    
}

export default Home;