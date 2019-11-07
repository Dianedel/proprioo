import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import home from './home.png';

class Home extends React.Component {
    render() {
        return (
            <div className="maison">
                <img src={home} alt="home" />
            </div>
                );
            }
        }



//--------------------------------------------------
ReactDOM.render(<Home />, document.getElementById('root'));
