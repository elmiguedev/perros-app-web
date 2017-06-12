import React, { Component } from 'react';

// http://jsonplaceholder.typicode.com/users

class PerrosPage extends Component {
    constructor() {
        super();
        this.state = {
            mensaje: 'hola perritos',
            perros: []
        };

        this.obtenerPerros = this.obtenerPerros.bind(this);
        this.insertarPerro = this.insertarPerro.bind(this);
        this.eliminarPerro = this.eliminarPerro.bind(this);

    }

    componentWillMount() {
        this.obtenerPerros();
    }

    obtenerPerros() {
        fetch('http://localhost:5000/api/Perro')
            .then((response) => {
                console.log(response);
                return response.json()
            })
            .then((perros) => {
                console.log(perros);
                this.setState({ perros: perros });
            });
    }

    insertarPerro() {

        var metodo = this.obtenerPerros;
        var nuevoPerro = {
            nombre: this.state.nombre,
            raza: this.state.raza
        };

        console.log(nuevoPerro);

        fetch('http://localhost:5000/api/Perro', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }),
            body: JSON.stringify(nuevoPerro)
        }).then(function () {
            console.log('to ok!!');
            metodo();
        });

    }

    eliminarPerro(id) {
        var url = 'http://localhost:5000/api/Perro/' + id;
        alert(url);
        var metodo = this.obtenerPerros;
        fetch(url, {
            method: 'DELETE',
        }).then(function () {
            console.log('to ok!!');
            metodo();
        });
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div>

                <div className="row">
                    <div className="col-sm-12">
                        <h1 className="page-header">Perros</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <table className="table table-condensed table-hover">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Raza</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.perros && this.state.perros.map((perro) => {
                                    return (
                                        <tr key={perro.id}>
                                            <td>{perro.nombre}</td>
                                            <td>{perro.raza}</td>
                                            <td><button onClick={() => { this.eliminarPerro(perro.id) }}>Eliminar</button></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-4">
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre:</label>
                            <input type="text" name="nombre" className="form-control" onChange={this.handleChange.bind(this)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="raza">Raza:</label>
                            <input type="text" name="raza" className="form-control" onChange={this.handleChange.bind(this)} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" onClick={this.insertarPerro.bind(this)}>Agregar perro</button>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default PerrosPage;