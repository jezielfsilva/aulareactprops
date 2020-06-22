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
                    <button className="Click" onClick={() => this.display('nascar')}>clickar</button>
                    <button className="Click" onClick={() => this.display('azul')}>clickar</button>
                    <button className="Click" onClick={() => this.display('carro')}>clickar</button>
                    <h1 className="Title">{this.state.appear}</h1>
                    {this.state.appear === 'nascar' && <img className="Photo" src= 'https://www.nascar.com/wp-content/uploads/sites/7/2019/01/2019-jan21-team-previews-main-image-625x340.jpg' />}
                    {this.state.appear === 'azul' && <img className="Photo" src= 'https://www.tuningparts.com.br/blog/wp-content/uploads/2014/05/nascar-3.jpg' />}
                    {this.state.appear === 'carro' && <img className="Photo" src= 'https://techcrunch.com/wp-content/uploads/2010/02/nascar.jpg' />}
                </div>
            )
        }
    
}

export default Properties;