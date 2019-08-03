
import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { getUser } from '../../Publics/redux/action/user';
import { connect } from 'react-redux';

class Profile extends Component {
    state = {
        user: {}
    };
    componentDidMount = async () => {
        await this.props.dispatch(getUser(localStorage.idUser));
        this.setState({
            user: this.props.user
        });
    };
    render() {
        const { user } = this.state;
        const list = user.userList;
        console.log(list);
        // eslint-disable-next-line no-lone-blocks
        {
            list &&
                list.length > 0 &&
                list.map((data) => {
                    return (this.setState({
                        user: data.userList
                    }));
                })
        }
        console.log(this.state.user)
        return (
            <div style={{ width: "25%", paddingTop: '7%', float: 'left' }}>
                <ListGroup>
                    <ListGroupItem>FullName : {this.state.user.fullName}</ListGroupItem>
                    <ListGroupItem>Email    : {this.state.user.email}</ListGroupItem>
                </ListGroup>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user.userList
    };
};
export default connect(mapStateToProps)(Profile);
