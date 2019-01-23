import React, { Component } from 'react';
import PageRouter from './components/pagerouter';
import {Link} from 'react-router-dom';
import Layout from './layout';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
<div className="demo-big-content">
            <Layout>

            <PageRouter/>
          </Layout>
</div>
    );
  }
}

export default App;
