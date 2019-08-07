import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBook } from '../Publics/redux/action/book';
import Pagination from "react-js-pagination";
import './assets/flex.css';
import Add from '../Component/common/Add'

function text(text) {
    if (text.length > 25) {
        let textSplit = text.substr(0, 25);
        return `${textSplit} ...`;
    } else {
        let textSplit = text;
        return `${textSplit}`;
    }
}
class book extends Component {
	state = {
		books: [],
		activePage: 1
	};
	componentDidMount = async () => {
        console.log('masuk')
		await this.props.dispatch(getBook(this.state.activePage));
		await new Promise (resolve => setTimeout(resolve,400))
		this.setState({
			books: this.props.book
		});
	};
	handlePageChange = async (pageNumber) => {
		console.log(`active page is ${pageNumber}`);
        await this.props.dispatch(getBook(pageNumber))
            .then((response) => {
                this.setState({ 
					activePage : pageNumber,
					books: this.props.book 
				});
            }
            )
    }
	render() {
		const { books } = this.state;
		const list = books.bookList;
		console.log(list);
		return (
            <div >
                <Add style={{paddingBottom: '900px',}}/>
                <div class="flex">
				{list &&
					list.length > 0 &&
					list.map((item, index) => {
						return (
							<div class="div">
								<a href={`/book/desc/${item.idBook}`} class="text" style={{textDecoration: 'none', outline:'none'}}>
									<img class="img" src={item.image} alt="gambar" />
									<p class="font">{text(item.bookName)} </p>
									{item.Status === 1 ? <p style={{backgroundColor: "#ff0980",}}>Tidak Tersedia</p> : <p style={{backgroundColor: "#5ee31e"}}>Tersedia</p> }
								</a>
							</div>
						);
					})}
					<div style={{position:'absolute',marginTop:'55%'}}>
					<Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={6}
                    totalItemsCount={this.props.jumlah}
                    pageRangeDisplayed={5}
                    itemClass="page-item"
                    linkClass="page-link"
					onChange={this.handlePageChange.bind(this)}
                /></div>
                    </div>
					
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		book: state.book,
        jumlah: state.book.jumlah
	};
};

export default connect(mapStateToProps)(book);
