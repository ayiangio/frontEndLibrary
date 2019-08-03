import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from '../Publics/redux/store'

import Book from '../Screens/Book'
import Home from '../Screens/Home'
import BookDesc from '../Screens/BookDesc'
import Borrow from '../Component/common/Edit'
import Masuk from '../Screens/Masuk'
import Register from '../Screens/Register'
import ProfileUser from '../Screens/ProfileUser'
import Account from '../Component/common/Profile'
import History from '../Component/common/HistoryBorrow'
import HistoryAll from '../Component/common/HistoryBorrowAdmin'
import Users from '../Component/common/MemberList'
class Routing extends Component {
    render(){
        return(
        <Provider store={store}>
            <div>
                <Router>
                    <Route exact path ={'/book'} component={Home} />
                    <Route exact path={'/book'} component={Book} />
                    <Route path={'/book/profile'} component={ProfileUser} />
                    <Route exact path={'/book/profile'} component={Account} />
                    <Route path={'/book/profile/history'} component={History} />
                    <Route path={'/book/profile/users'} component={Users} />
                    <Route path={'/book/profile/historyall'} component={HistoryAll} />
                    <Route exact path={'/book/register'} component={Register} />
                    <Route exact path={'/book/login'} component={Masuk} />
                    <Route path={'/book/desc/:bookid'} component={BookDesc}/>
                    <Route exact path={'/book/desc/edit/:bookid'} component={Borrow}/>
                </Router>
            </div>
        </Provider>
        )
    }
}

export default Routing;