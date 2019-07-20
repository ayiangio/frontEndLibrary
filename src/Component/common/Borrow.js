import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
import { postBorrow } from '../../Publics/redux/action/borrow';
//import Flex from './'
class Borrow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false,
			borrow: [],
			id : this.props.id
		};
		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState({
			modal: !this.state.modal
		});
	}

	render() {
		const borrow = () => {
			this.state.borrow.push({        
        		idBook: this.state.id,
        		idUser: this.state.userId,
			});
			add()
			this.setState((prevState) => ({
				modal: !prevState.modal
			}));
			console.log(this.state.book);
		};
		let add = async () => {
			await this.props.dispatch(postBorrow(this.state.borrow[0]));				
		};
		return (
			<div>
				<button class="button" onClick={this.toggle} style={{position:"absolute"}} >
					Pinjam
				</button>
				<Modal isOpen={this.state.modal} toggle={this.toggle} className="{this.props.className} modal-lg">
					<ModalHeader toggle={this.toggle}>
						<b>User Data</b>
					</ModalHeader>
					<ModalBody>
						<Form>
							<FormGroup row>
								<Label sm={3} size="lg">
									User Id
								</Label>
								<Col sm={9}>
									<Input
										type="text"
										name="title"
										onChange={(e) => this.setState({ userId: e.target.value })}
										id="title"
										placeholder="User Id..."
										bsSize="lg"
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label sm={3} size="lg">
									Id Book
								</Label>
								<Col sm={9}>
									<Input
										type="text"
										name="title"
										value={this.state.id}
										id="title"
										placeholder="Id Book..."
										bsSize="lg"
									/>
								</Col>
							</FormGroup>
						</Form>
					</ModalBody>
					<ModalFooter>
						<Link to={`/book/desc/${this.state.id}`}><button  class="buttonSave" onClick={borrow.bind(this)}>
							SAVE
						</button></Link>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}
const mapStateToProps = state => {
    return {
        borrow: state.borow
    };
};
export default connect(mapStateToProps) (Borrow);
