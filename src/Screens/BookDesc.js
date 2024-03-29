import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getBookById } from '../Publics/redux/action/book';
import { deleteBook } from '../Publics/redux/action/book';
import Borrow from '../Component/common/Borrow';
import Return from '../Component/common/Return';
import './assets/bookDesc.css';

class BookDesc extends Component {
	state = {
		books: []
	};
	componentDidMount = async () => {
		await this.props.dispatch(getBookById(this.props.match.params.bookid));
		this.setState({
			books: this.props.book
		});
	};
	delete = async () => {
		await this.props.dispatch(deleteBook(this.props.match.params.bookid));
	};
	render() {
		const { books } = this.state;
		const list = books.bookList;
		console.log(list);
		return (
			<div>
				{list &&
					list.length > 0 &&
					list.map((data) => {
						return (
							<div className="bookDetail">
								<div>
									<ul>
										<li>
											<Link to="/book">Back</Link>
										</li>{localStorage.status === "0" || null ? (<div>
										<li>
											<Link to={`/book/desc/edit/${data.idBook}`}>Edit</Link>
										</li>
										<li>
											<Link to={'/book'} onClick={this.delete.bind(this)}>
												Delete
											</Link>
										</li></div>):""}
									</ul>
									<img className="header" src={data.image} alt={data.bookName} />
								</div>
								<div className="content">
									<img className="image" src={data.image} alt={data.bookName} />
									<p className="title">{data.bookName}</p>
									{localStorage.status === "1" ? data.Status === 1 && Number(localStorage.idUser) === data.idUser  ? (
										<Return id={data.idBook} style={{position:"absolute"}}/>
									) : data.Status===0 ?(
										<Borrow id={data.idBook}/>
									):"":""}<div><p><b>{data.author}</b></p></div>
									<div
										style={{
											borderRadius: '40px',
											width: '150px',
											float: 'left',
											marginRight: '40px',
											textAlign: 'center'
										}}
									>
										{data.Status === 1 ? (
											<p style={{ backgroundColor: '#ff0980', borderRadius: '40px' }}>
												Tidak Tersedia
											</p>
										) : (
											<p style={{ backgroundColor: '#5ee31e', borderRadius: '40px' }}>Tersedia</p>
										)}
										
									</div>
									
									<p className="text" style={{ paddingTop: '60px' }}>
										{data.desc}{' '}
									</p>
								</div>
							</div>
						);
					})}
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		book: state.book
	};
};
export default connect(mapStateToProps)(BookDesc);
