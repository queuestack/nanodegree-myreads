import React from 'react'
import SearchBar from './SearchBar'
import SearchResult from './SearchResult'
import { search } from './BooksAPI'

class Search extends React.Component {
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
                />
            </div>    
        )    
    }
}

export default Search;