import React from 'react'
import { Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Home from './Home'
import Search from './Search'
import { getAll, update } from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    books: []
}

  handleShelfChange = (book, shelf) => {
      book.shelf = shelf;
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([book])
      }));

      console.log(update(book, shelf));
  }

  componentDidMount() {
      getAll().then(
          (books) => {
              console.log(this.state.books)
              this.setState({
                  books
              })
          }
      )
  }

  render() {
    return (
      <div className="app">
        <Route
          exact path='/'
          render={
            ()=>{
              return (
                <Home 
                  books={this.state.books}
                  handleShelfChange={this.handleShelfChange}
                />
              )
            }
          }
        />
        <Route
          path='/search'
          render={
            ()=>{
              return (
                <Search
                  books={this.state.books}
                  handleShelfChange={this.handleShelfChange}
                />
              )
            }
          }
        />
      </div>
    )
  }
}

export default BooksApp
