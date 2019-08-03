import React, { Component } from 'react';
import { Link,Redirect } from 'react-router-dom'
import { ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';
import { logout } from '../Publics/redux/action/user'
import Navbar from '../Component/common/Navbar'
import swal from 'sweetalert';
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: []
        };
    }
    render() {
        const del = async () => {
            await this.props.dispatch(logout(localStorage.idUser));
            localStorage.removeItem('idUser')
            localStorage.removeItem('jwtToken')
            localStorage.removeItem('fullName')
            localStorage.removeItem('email')
            localStorage.removeItem('status')
            swal({
                text: "Thank You",
                icon: "success",
                button: "OK"
            }).then(() => {
                window.location.href = '/book';
              })
        };
        return (
            <div><Navbar />
            {localStorage.jwtToken ? <div style={{ width: "25%", paddingTop: '7%', float: 'left' }}>
                    <ListGroup>
                        <Link to={'/book/profile/'}><ListGroupItem>Account</ListGroupItem></Link>
                        {localStorage.status === "0" ? <Link to={'/book/profile/historyall'}><ListGroupItem>History Borrow
                    </ListGroupItem></Link> : <Link to={'/book/profile/history'}><ListGroupItem>History Borrow
                    </ListGroupItem></Link>}
                        {localStorage.status === "0" ? <Link to={'/book/profile/users'}><ListGroupItem>List Member</ListGroupItem> </Link> : <ListGroupItem>Reset Password</ListGroupItem>}
                        <Link onClick={del.bind(this)}><ListGroupItem>Logout</ListGroupItem></Link>
                    </ListGroup>
                </div> : <Redirect to={'/book/login'}/>}
                
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