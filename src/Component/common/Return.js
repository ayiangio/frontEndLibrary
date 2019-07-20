import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Col, Input } from 'reactstrap';
import '../assets/button.css';
import { getBorrow } from '../../Publics/redux/action/borrow';
import { updateBorrow } from '../../Publics/redux/action/borrow';
//import Flex from './'
class Borrow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false,
			borrow: [],
			id: this.props.id,
			penalty: 0
		};

		this.toggle = this.toggle.bind(this);
	}
	componentDidMount = async () => {
		await this.props.dispatch(getBorrow(this.props.id));
		this.setState({
			borrow: this.props.borrow
		});
		const list = this.state.borrow.borrowList;
		list &&
			list.length > 0 &&
			list.map((item, index) => {
				return this.setState({
					borrow: this.convert(item.expireDate),
					id: item.idBook
				});
			});
	};
	toggle() {
		this.setState({
			modal: !this.state.modal
		});
	}
	convert = (date) => {
		let result = 0;
		let tanggal = Date.parse(date);
		let newTanggal = Date.parse(new Date());
		result = ((newTanggal-tanggal)/86400000) * 3000
		if (result < 0 )
		{
			return 0;
		} 
		else {
			return result;
		}
		// let expireDay = newDate.getDate();
		// let month = newDate.getMonth();
		
		// let newDay = newData.getDate();
		// let newMonth = newData.getMonth();
		// if (month == newMonth) {
		// 	if (expireDay >= newDay) {
		// 		result = 0;
		// 	} else {
		// 		result = -1 * ((newDay - expireDay) * 2000);
		// 	}
		// }
		
		// return result;
	};
	render() {
		const up = () => {
			update();
			this.setState({
				modal: false
			});
		};
		let update = async () => {
			await this.props.dispatch(updateBorrow(this.state.id, this.state.borrow));
		};

		return (
			<div>
				<button class="button" onClick={this.toggle} style={{ position:"absolute",backgroundColor: 'firebrick',}}>
					Return
				</button>
				<Modal isOpen={this.state.modal} toggle={this.toggle} className="{this.props.className} modal-lg">
					<ModalHeader toggle={this.toggle}>
						<b>Biaya Denda</b>
					</ModalHeader>
					<ModalBody>
						<Form>
							<FormGroup row>
								<Label sm={3} size="lg">
									Denda
								</Label>
								<Col sm={9}>
									<Input
										type="text"
										name="expireDate"
										id="title"
										placeholder="Title..."
										bsSize="lg"
										value={this.state.borrow}
									/>
								</Col>
							</FormGroup>
						</Form>
					</ModalBody>
					<ModalFooter>
					<Link to={`/book/desc/${this.state.id}`}><button class="buttonSave" onClick={up.bind(this)}>
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
		borrow: state.borrow
	};
};
export default connect(mapStateToProps)(Borrow);
