import React, {Component} from 'react';

import Navbar from '../Component/common/Navbar'
import Search from '../Component/common/Search'
class Home extends Component {  
  render() {
    return (
        <div>
            <Navbar/>
            <Search/>
        </div>
    );
  }
}

export default Home;