import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import '../assets/search.css';
class Search extends Component {
	searchBook = async (e) => {

        await axios.get('http://localhost:5000/book/filter?search=' + e.target.value)
            .then(response =>
                this.props.searchBooks(response.data.result)
            )
            .catch(response =>
                this.props.searchBooks([])
            )
}
	render() {
		return (
			<div>
				<center>
					<input class="search" placeholder="Search Book ..." onChange={this.searchBook}/>
				</center>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
    return {
        books: state.books
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        searchBooks: (data) => dispatch({ type: "SEARCH_BOOK", search: data })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search)
