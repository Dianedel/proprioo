import React from 'react';
import '../index.css';

let obj = JSON.parse('{"id":"96890eb6-8689-5e05-9699-15cfc4c8896b","type":"house","rooms":2,"surface":44,"price":285645,"cave":false,"garden":627}')


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
            <p>Type : {(obj.type)}</p>
            <p>Nombre de pièces : {(obj.rooms)}</p>
            <p>Surface en m2 : {(obj.surface)}</p>
            <p>Prix : {(obj.price)}</p>
            <p>Cave : {(obj.cave)}</p>
            <p>Jardin en m2 : {(obj.garden)}</p>
            <button onClick={this.handleClick}>{this.state.isToggleOn ? 'Liste des acheteurs potentiels' : 'Afficher les acheteurs potentiels'}</button>
            {/* <button onClick={() => { }}>Résultats</button> */}
            </div>
        );
        console.log(this.state.isToggleOn);
    }
}

export default Property;