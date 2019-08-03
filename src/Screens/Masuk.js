import React, { Component } from 'react';
import { connect } from 'react-redux'
import { login } from '../Publics/redux/action/user'
import swal from 'sweetalert';
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
        };
    }
    render() {
        const log = () => {
            this.state.user.push({
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
            });
            loginuser()
            
            console.log(this.state.user);
        };
        let loginuser = async () => {
            await this.props.dispatch(login(this.state.user[0]))
            .then (()=>{
                swal({
                    title: "Login",
                    text: "Login Success",
                    icon: "success",
                    button: "OK"
                }).then(() => {
                    window.location.href = '/book';
                  })
            })
            .catch(()=>{
                swal({
                    title: "Login Failed",
                    text: "Email Or Password Wrong !!!",
                    icon: "warning",
                    buttons: "OK"
                }).then(() => {
                    window.location.href = '/book/login';
                  })
            })
        };
        return (
            <div style={{ borderRadius: 5, width: 500, marginLeft: "50%", transform: "translateX(-50%)", overflow: "hidden", boxShadow: "0.5px 0.5px 2px #ddd", paddingBottom: 20, paddingTop: 60 }}>
                <div style={{ padding: "10px 40px", width: "100%", boxSizing: "border-box", boxShadow: "0.5px 0.5px 2px #ddd" }}>
                    <h2>Login</h2>
                </div>
                <div style={{ padding: "10px 40px", width: "100%", overflow: "hidden", boxSizing: "border-box", boxShadow: "0px 0px 0.1px #ddd" }}>
                    <div>
                        <p>Email</p>
                        <input type='email'style={{ padding: "10px 20px", fontSize: "10pt", borderRadius: 5, border: "1px solid #ddd", width: "100%", boxSizing: "border-box" }} id="email" required/>
                    </div>
                    <div>
                        <p>Password</p>
                        <input style={{ padding: "10px 20px", fontSize: "10pt", borderRadius: 5, border: "1px solid #ddd", width: "100%", boxSizing: "border-box" }} type="password" id="password" required />
                    </div>

                    <div>
                        <br></br>
                       <button style={{ padding: 15, width: "100%", borderRadius: '5px', border: "0px", backgroundColor: "#24f555", color: "white", fontSize: "15pt", cursor: "pointer" }}
                            onClick={log.bind(this)} >Login</button>
                        <p>Belum Punya akun ? <a href={'/book/register'} style={{ textDecoration: "none", color: "black" }}>Daftar Disini</a></p>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        user: state.user
    };
};
export default connect(mapStateToProps) (Register);