import React from 'react';

class Properties extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            appear: '',
        }

    }
        display = (naTela) => {
            this.setState({
                appear: naTela
            });
        }

        render () {
            return (
                <div>
                    <button onClick={() => this.display('nascar')}>clickar</button>
                    <button onClick={() => this.display('azul')}>clickar</button>
                    <button onClick={() => this.display('carro')}>clickar</button>
                    <h1>{this.state.appear}</h1>
                </div>
            )
        }
    
}

export default Properties;