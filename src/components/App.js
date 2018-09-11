import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Resumen from './Resumen';
import Resultado from './Resultado';

import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../Helpers';

class App extends Component {

    state = {
        resultado: '',
        datos: {}
    }
    cotizarSeguro = (datos) => {
        const {marca, plan, year} = datos;
        //agregar una base de 2000

        let resultado = 2000;

        //obtener la diferencia de años y 
        const diferencia = obtenerDiferenciaAnio(year);

        //por cada año restar el 3%

        resultado -= ((diferencia * 3) * resultado) / 100;

        //americano 15% asiatico 5% y europeo 30%

        resultado = calcularMarca(marca) * resultado;

        //el plan

        let incrementoPlan = obtenerPlan(plan);

        resultado = parseFloat(incrementoPlan * resultado).toFixed(2);

        //ya tenemos el costo 

        const datosAuto = {
            marca: marca,
            plan: plan,
            year: year
        }
        this.setState({
            resultado: resultado,
            datos : datosAuto
        })
    }
    render() {
        return (
        <div className="contenedor">
            <Header titulo = "Cotizador de Seguro de auto"/>
            
            <div className="contenedor-formulario">
                <Formulario 
                    cotizarSeguro={this.cotizarSeguro}
                />
                <Resumen
                    datos={this.state.datos}
                />
                <Resultado
                    resultado={this.state.resultado}
                />
            </div>
        </div>
        );
    }
}

export default App;
