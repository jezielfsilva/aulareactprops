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
                    {this.state.appear === 'nascar' && <img src= 'https://www.nascar.com/wp-content/uploads/sites/7/2019/01/2019-jan21-team-previews-main-image-625x340.jpg' />}
                </div>
            )
        }
    
}

export default Properties;