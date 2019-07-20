import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from '../Publics/redux/store'

import Book from '../Screens/Book';
import Home from '../Screens/Home'
import BookDesc from '../Screens/BookDesc'
import Borrow from '../Component/common/Edit'

class Routing extends Component {
    render(){
        return(
        <Provider store={store}>
            <div>
                <Router>
                    <Route exact path ={'/book'} component={Home} />
                    <Route exact path={'/book'} component={Book} />
                    <Route path={'/book/desc/:bookid'} component={BookDesc}/>
                    <Route exact path={'/book/desc/edit/:bookid'} component={Borrow}/>
                </Router>
            </div>
        </Provider>
        )
    }
}

export default Routing;