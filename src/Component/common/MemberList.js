
import React, { Component } from 'react';
import { Table, Button} from 'reactstrap';
import { getAllUser } from '../../Publics/redux/action/user';
import { deleteUser } from '../../Publics/redux/action/user';
import { connect } from 'react-redux';
import swal from 'sweetalert';

class Member extends Component {
    state = {
        user: []
    };
    componentDidMount = async () => {
        await this.props.dispatch(getAllUser());
        this.setState({
            user: this.props.user
        });
    };
    render() {
        const confirm = (idUser) =>{
              swal({
                title: "Are you sure?",
                text: "Once deleted, you will delete this User!!!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((buttons) => {
                if (buttons) {
                    del(idUser)
                  swal("Poof! Your book has been deleted!", {
                    icon: "success",
                  });
                  window.location.href = '/book/profile/users'
                } else {
                  swal("Your file is safe!");
                }
              }).catch((dangerMode) => {
                window.location.href = '/book/profile/users'
              })
        }        
        let del = async (idUser) => {
            await this.props.dispatch(deleteUser(idUser));
        };
        let no = 1
        return (
            <div style={{ float: 'left', paddingTop: '7%' }}>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nama Member</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {}
                        {this.state.user.map((data) => {

                            return (<tr>

                                <th scope="row">{no++}</th>
                                <td>{data.fullName}</td>
                                <td>{data.email}</td>
                                <td><Button color="danger" onClick={() => confirm(data.idUser)}>Delete</Button></td>
                            </tr>)
                        })}

                    </tbody>
                </Table>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user.userList
    };
};
export default connect(mapStateToProps)(Member);
