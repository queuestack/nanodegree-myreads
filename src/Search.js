import React from 'react'
import { PropTypes } from 'prop-types'
import SearchBar from './SearchBar'
import SearchResult from './SearchResult'
import { search } from './BooksAPI'

class Search extends React.Component {
    static propTypes = {
        books: PropTypes.array,
        handleShelfChange: PropTypes.func
    }    
    
    state = {
        query: '',
        searchedBooks: []
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
        search(query, 20).then((searchedBooks) => { 
            if (!searchedBooks || searchedBooks.error) {
                this.setState({searchedBooks: []});
                return;
            }

            searchedBooks = searchedBooks.map(searchedBook => {
                const bookInShelf = this.props.books.find(book => book.id === searchedBook.id);
                searchedBook.shelf = bookInShelf ? bookInShelf.shelf : 'none';
                return searchedBook;
            });

            console.log(searchedBooks);

            this.setState({
                searchedBooks
            });
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
                    books={this.state.searchedBooks}
                    handleShelfChange={this.props.handleShelfChange}
                />
            </div>    
        )    
    }
}

export default Search;