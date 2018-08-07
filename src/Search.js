import React from 'react'
import { PropTypes } from 'prop-types'
import SearchBar from './SearchBar'
import SearchResult from './SearchResult'
import { search } from './BooksAPI'

class Search extends React.Component {
    static propTypes = {
        books: PropTypes.object,
        handleShelfChange: PropTypes.func
    }    
    state = {
        query: '',
        books: []
    }

    handleChange = (event) => {
        const query = event.target.value
        console.log(query);

        this.setState({
            query
        });

        this.fetchBooks(query);
    }

    fetchBooks = (query) => {
        search(query, 20).then((books) => {
            this.setState({
                books
            })
            console.log(books);
        });      
    }

    render() {
        return (
            <div className="search-books">
                <SearchBar 
                    query={this.state.query}
                    handleChange={this.handleChange}
                />
                <SearchResult 
                    books={this.state.books}
                    handleShelfChange={this.props.handleShelfChange}
                />
            </div>    
        )    
    }
}

export default Search;