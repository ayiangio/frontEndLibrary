import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addUser } from '../Publics/redux/action/user'
import swal from 'sweetalert';
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
        };
    }
    render() {
        const add = () => {
            this.state.user.push({
                fullName: document.getElementById('fullname').value,
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
            });
            adduser()
            // console.log(this.state.user);
        };
        let adduser = async () => {
            await this.props.dispatch(addUser(this.state.user[0]))
                .then(() => {
                    swal({
                        title: "Register",
                        text: "Register Success !!",
                        icon: "success",
                        button: "OK"
                    }).then(() => {
                        window.location.href = '/book/login';
                    })
                })
                .catch(() => {
                    swal({
                        title: "Register Failed",
                        text: "Email is not Avalaible",
                        icon: "warning",
                        buttons: "OK"
                    })
                })
        };


        return (
            <div>
                <div style={{ borderRadius: 5, width: 500, marginLeft: "50%", transform: "translateX(-50%)", overflow: "hidden", boxShadow: "0.5px 0.5px 2px #ddd", paddingBottom: 20, paddingTop: 60 }}>
                    <div style={{ padding: "10px 40px", width: "100%", boxSizing: "border-box", boxShadow: "0.5px 0.5px 2px #ddd" }}>
                        <h2>Register</h2>
                    </div>
                    <div style={{ padding: "10px 40px", width: "100%", overflow: "hidden", boxSizing: "border-box", boxShadow: "0px 0px 0.1px #ddd" }}>
                        <div>
                            <p>Full Name</p>
                            <input style={{ padding: "10px 20px", fontSize: "10pt", borderRadius: 5, border: "1px solid #ddd", width: "100%", boxSizing: "border-box" }}
                                id="fullname" required/>
                        </div>
                        <div>
                            <p>Email</p>
                            <input type='email' style={{ padding: "10px 20px", fontSize: "10pt", borderRadius: 5, border: "1px solid #ddd", width: "100%", boxSizing: "border-box" }}
                                id="email" required/>
                        </div>
                        <div>
                            <p>Password</p>
                            <input style={{ padding: "10px 20px", fontSize: "10pt", borderRadius: 5, border: "1px solid #ddd", width: "100%", boxSizing: "border-box" }} type="password"
                                id="password" required/>
                        </div>
                        <div>
                            <p></p>
                            <button
                                onClick={add.bind(this)}
                                style={{
                                    padding: 15,
                                    width: "100%",
                                    borderRadius: '5px',
                                    border: "0px",
                                    backgroundColor: "#24f555",
                                    color: "white", fontSize: "15pt",
                                    cursor: "pointer"
                                }}>Register </button>
                            <p>Sudah Punya akun ? <a href={'/book/login'} style={{ textDecoration: "none", color: "black" }}>Login Disini</a></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
} const mapStateToProps = state => {
    return {
        user: state.user
    };
};
export default connect(mapStateToProps)(Register);