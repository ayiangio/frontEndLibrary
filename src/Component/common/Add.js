import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Form,
	FormGroup,
	Label,
	Col,
	Input
} from 'reactstrap';
import '../assets/button.css';
import { postBook } from '../../Publics/redux/action/book';
import swal from 'sweetalert';
class Add extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false,
			book: [],
			file:null
		};

		this.toggle = this.toggle.bind(this);
        this.onChangeFile = this.onChangeFile.bind(this)
	}

	toggle() {
		this.setState({
			modal: !this.state.modal
		});
	}
	onChangeFile = (e) => {
        console.log(e.target.files[0])
        this.setState({
            file: e.target.files[0],
        })
    }
	render() {
		const bookAdd = () => {
			let idCat = '';
			switch (this.state.category) {
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
			const dataFile = new FormData()
			dataFile.append('image', this.state.file)
			dataFile.append('bookName', this.state.title)
			dataFile.append('author', this.state.author)
			dataFile.append('locRack', this.state.locRack)
			dataFile.append('desc', this.state.desc)
			dataFile.append('idCat', idCat)
			// this.state.book.push({
			// 	dataFile
			// });
			add(dataFile)
			this.setState((prevState) => ({
				modal: !prevState.modal
			}));
			console.log(this.state.book);
		};
		let add = async (data) => {
			await this.props.dispatch(postBook(data)).then(() => {
				swal({
					title: "Succes",
					text: "Add Success !!",
					icon: "success",
					button: "OK"
				})
			})
				.catch(() => {
					swal({
						title: "Add Failed",
						text: "Book Is Avalaible",
						icon: "warning",
						buttons: "OK"
					}).then(() => {
						window.location.href = '/book';
					})
				})
		};
		return (
			<div>
				<button class="button2" onClick={this.toggle}>
					{localStorage.status === "0" ? <label>ADD</label> : <label>Donate</label>}
				</button>
				<Modal isOpen={this.state.modal} toggle={this.toggle} className="{this.props.className} modal-lg">
					<ModalHeader toggle={this.toggle}>
						<b>Add Data</b>
					</ModalHeader>
					<ModalBody>
						<Form>
							<FormGroup row>
								<Label sm={3} size="lg">
									Title
								</Label>
								<Col sm={9}>
									<Input
										type="text"
										name="title"
										onChange={(e) => this.setState({ title: e.target.value })}
										id="title"
										placeholder="Title..."
										bsSize="lg"
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label sm={3} size="lg">
									Author
								</Label>
								<Col sm={9}>
									<Input
										type="text"
										name="title"
										onChange={(e) => this.setState({ author: e.target.value })}
										id="title"
										placeholder="Author..."
										bsSize="lg"
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label sm={3} size="lg">
									Image
								</Label>
								<Col sm={9}>
									<Input
										type="file"
										name="title"
										onChange={this.onChangeFile}
										id="title"
										placeholder="Image..."
										bsSize="lg"
										style={{ height: 40, fontSize: 12 }}
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label sm={3} size="lg">
									Category
								</Label>
								<Col sm={9}>
									<select onChange={(e) => this.setState({ category: e.target.value })}>
										<option >Umum</option>
										<option>Filsafat</option>
										<option>Teknologi</option>
										<option>Sosial</option>
									</select>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label sm={3} size="lg">
									Location
								</Label>
								<Col sm={9}>
									<Input
										type="text"
										name="title"
										onChange={(e) => this.setState({ location: e.target.value })}
										id="title"
										placeholder="Location..."
										bsSize="lg"
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label sm={3} size="lg">
									Description
								</Label>
								<Col sm={9}>
									<Input
										type="textarea"
										name="desc"
										onChange={(e) => this.setState({ desc: e.target.value })}
										id="desc"
										placeholder="Desciption..."
									/>
								</Col>
							</FormGroup>
						</Form>
					</ModalBody>
					<ModalFooter>
						<button class="buttonSave" onClick={bookAdd.bind(this)}>
							SAVE
						</button>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		book: state.book
	};
};
export default connect(mapStateToProps)(Add);
