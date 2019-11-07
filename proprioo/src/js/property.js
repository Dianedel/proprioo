import React from 'react';
import '../index.css';

class Property extends React.Component {
    render() {
        return (
            <div className="property">
            <h1>Caractéristique du bien : </h1>
            <p>Type : </p>
            <p>Nombre de pièces : </p>
            <p>Surface en m2 : </p>
            <p>Prix : </p>
            <p>Cave : </p>
            <p>Jardin en m2 : </p>
            <button>Afficher les acheteurs potentiels</button>

            </div>
        )
    }
}

export default Property;