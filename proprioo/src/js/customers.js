import React from 'react';
import '../index.css';

class Customers extends React.Component {
    render() {
        return (
            <div className="customers">
                <h1>Acheteurs potentiels</h1>
                <p>Prénom - Nom </p>
                <p>N° de téléphone : </p>
                <p>E-mail : </p>
                <p>Surface souhaitée : </p>
                <p>Nombre de pièces souhaité : </p>
                <p>Budget : </p>
            </div>
        )
    }
}

export default Customers;