import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getToken } from '../../Publics/redux/action/user';
class Navbar extends Component {
    state = {
        user: []
    };
    componentDidMount = async () => {
        const toked = localStorage.jwtToken
        console.log(toked)
        await this.props.dispatch(getToken(toked))    //    
        this.setState({
            user: this.props.user
        });
    };
    render() {
        
        
        return (            
            <div>
                {this.state.user === undefined ? "":
                <p style={{
                    marginBlockStart: '0px',
                    padding: '20px',
                    boxShadow: '2px 1px 7px #999',
                    fontSize: '30px',
                    fontWeight: 'Bold',
                    paddingLeft: '40px',
                }}><Link to={'/book'} style={{ textDecoration: 'none', color: 'black', outline: 'none' }}> BOOKS </Link>
                    <div style={{
                        float: "right", fontSize: "15px",
                        fontWeight: "normal", textAlign: "center", paddingTop: "10px"
                    }}>
                        {localStorage.fullName != null ? <a href={'/book/profile'}><p>Hai {localStorage.fullName}</p> </a> : <div><a href="/book/register" style={{ textDecoration: "none", color: "blue", outline: "none" }}><label style={{ paddingRight: '20px' }}>Sign Up </label> </a>
                            <a href="/book/login" style={{ textDecoration: "none", color: "blue", outline: "none" }}><label> Login</label></a></div>}
                    </div></p>}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user.userList
    };
};
export default connect(mapStateToProps)(Navbar);
