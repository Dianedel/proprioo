import React from 'react';
import '../index.css';

class Property extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn : false };
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        console.log(this.state.isToggleOn);
        return (
            <div className="property">
            <h1>Caractéristique du bien : </h1>
            <p>Type : </p>
            <p>Nombre de pièces : </p>
            <p>Surface en m2 : </p>
            <p>Prix : </p>
            <p>Cave : </p>
            <p>Jardin en m2 : </p>
            <button onClick={this.handleClick}>{this.state.isToggleOn ? 'Liste des acheteurs potentiels' : 'Afficher les acheteurs potentiels'}</button>
            </div>
        );
        console.log(this.state.isToggleOn);
    }
}

export default Property;