import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Col, Input } from 'reactstrap';
import '../assets/button.css';
import { getBookById } from '../../Publics/redux/action/book';
import { editBook } from '../../Publics/redux/action/book';
//import Flex from './'
class Borrow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: true,
            books: [],
            tmp:[]
		};

		this.toggle = this.toggle.bind(this);
	}
	componentDidMount = async () => {
		await this.props.dispatch(getBookById(this.props.match.params.bookid));
		this.setState({
			books: this.props.book
		});
	};
	toggle() {
		this.setState({
			modal: !this.state.modal
		});
	}
    changeHandle = (e) =>{
        const name = e.currentTarget.name
        const val = e.currentTarget.value
        this.state.books[name] = val
        this.setState({books:this.state.books})
        
    }
	render() {
		const editbooks = () => {
            let idCat = '';
			switch (this.state.books.catName) {
				case 'Sosial':
					idCat = 4;
					break;
				case 'Teknologi':
					idCat = 3;
					break;
				case 'Filsafat':
					idCat = 2;
					break;
				default:
					idCat = 1;
			}
			this.state.tmp.push({
		        bookName: this.state.books.bookName,
				author: this.state.books.author,
				desc: this.state.books.desc,
				locRack: this.state.books.locRack,
				image: this.state.books.image,
				idCat,
				statusBorrow : Number(this.state.books.Status)
			});
			edit()
			this.setState((prevState) => ({
				modal: !prevState.modal
			}));
			console.log(this.state.tmp);
		};
		let edit = async () => {
			await this.props.dispatch(editBook((this.state.tmp[0]),this.state.books.idBook));
		};
		const { books } = this.state;
		const list = books.bookList;
		list &&
			list.length > 0 &&
			list.map((item, index) => {
				return this.setState({
                    books: item
				});
            });
        
		return (
			<div>
				<Modal isOpen={this.state.modal} toggle={this.toggle} className="{this.props.className} modal-lg">
					<ModalHeader toggle={this.toggle}>
						<b>Book Data</b>
					</ModalHeader>
					<ModalBody>
						<Form >
							<FormGroup row >
								<Label sm={3} size="lg">
									Title 
								</Label>
								<Col sm={9}>
									<Input
										type="text"
										name="bookName"
										id="title"
										placeholder="Title..."
										bsSize="lg"
                                        value={this.state.books.bookName}                                  
										onChange={this.changeHandle}
									/>
								</Col>
							</FormGroup>
							<FormGroup row >
								<Label sm={3} size="lg">
									Author
								</Label>
								<Col sm={9}>
									<Input
										type="text"
										name="author"
										id="title"
										placeholder="Author..."
										bsSize="lg"
                                        value={this.state.books.author}                                  
										onChange={this.changeHandle}
									/>
								</Col>
                            </FormGroup>
                            <FormGroup row>
								<Label sm={3} size="lg">
									Category
								</Label>
								<Col sm={9}>
									<select value={this.state.books.catName}                                  
                                            onChange={this.changeHandle}>
										<option value='Umum'>Umum</option>
										<option value='Filsafat'>Filsafat</option>
										<option value='Teknologi'>Teknologi</option>
										<option value='Sosial'>Sosial</option>
									</select>
								</Col>
							</FormGroup>
                            <FormGroup row >
								<Label sm={3} size="lg">
									Description
								</Label>
								<Col sm={9}>
									<Input
										type="textarea"
										name="desc"
										id="title"
										placeholder="Desc..."
										bsSize="lg"
                                        value={this.state.books.desc}                                  
										onChange={this.changeHandle}
									/>
								</Col>
							</FormGroup>
						</Form>
					</ModalBody>
					<ModalFooter>
                    <Link to={`/book/desc/${this.state.books.idBook}`}><button class="buttonSave" onClick={editbooks.bind(this)}>
							SAVE
						</button></Link>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		book: state.book
	};
};
export default connect(mapStateToProps)(Borrow);
