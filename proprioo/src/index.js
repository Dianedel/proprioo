import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import home from './home.png';
import Property from './js/property';
import Customers from './js/customers';

class Home extends React.Component {
    render() {
        return (
            <div>
            <div className="maison">
                <img src={home} alt="home" />
            </div>
            <Property />
            </div>
                );
            }
        }



//--------------------------------------------------
ReactDOM.render(<Home />, document.getElementById('root'));
