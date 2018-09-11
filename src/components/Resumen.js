import React,{Component} from 'react';
import {primeraMayuscula} from '../Helpers';

class Resumen extends Component {
    mostrarResumen = () => {
        const {marca, year, plan} = this.props.datos;

        if (!marca || !year || !plan) return null;

        return (
            <div className="resumen">
                <h2>Resumen de cotizacion</h2>
                <ul>
                    <li>Marca: {primeraMayuscula(marca)}</li>
                    <li>Plan: {primeraMayuscula(plan)}</li>
                    <li>Año del auto: {year}</li>
                </ul>
            </div>
        )

    }
    render() {
        
        return (
            <div>
                {this.mostrarResumen()}
            </div>
        )
    }
}

export default Resumen;