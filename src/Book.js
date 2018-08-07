import React from 'react'
import { PropTypes } from 'prop-types'

const READING = 'Currently Reading';
const TOREAD = 'Want to Read';
const READ = 'Read';
const NONE = 'None';

class Book extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    static propTypes = {
        book: PropTypes.object,
        handleShelfChnage: PropTypes.func
    }

    state = {
        currentReadState: ''
    }

    handleChange(book, event) {
        const READING_SHELF = "currentlyReading";
        const TOREAD_SHELF = "wantToRead";
        const READ_SHELF = "read";
        let shelf;

        this.setState({
            currentReadState: event.target.value
        });

        if(event.target.value === READING) shelf = READING_SHELF;
        if(event.target.value === TOREAD) shelf = TOREAD_SHELF;
        if(event.target.value === READ) shelf = READ_SHELF;

        this.props.handleShelfChnage(book, shelf);
    }

    render() {
        const options = [READING, TOREAD, READ, NONE];

        return (
            <li>
                <div className="book">
                <div className="book-top">
                    <img 
                        className="book-cover" 
                        src={this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : ''}
                        style={{ width: 128, height: 193}}
                        alt={this.props.book.title}
                    />
                    <div className="book-shelf-changer">
                    <select
                        onChange={(event) => {this.handleChange(this.props.book, event)}}
                        value={this.state.currentReadState}
                    >
                        <option value="move" disabled>Move to...</option>
                        {options.map((option) => {
                            return (
                                <option 
                                    key={option} 
                                    value={option} 
                                >
                                    {option}
                                </option>
                            );
                        })}
                    </select>
                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">
                    {
                        this.props.book.authors && this.props.book.authors.map((author, i)=>{
                        return this.props.book.authors.length === i+1 ? `${author}` : `${author}, `;
                        })
                    }
                </div>
                </div>
            </li>  
        )      
    }
}

export default Book;