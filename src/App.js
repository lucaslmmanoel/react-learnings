import React, { Component } from 'react';
import './App.css';

import List from './List';


class App extends Component {
  
  // Armazenando o estado do componente
  state = {
    items: [],
    newAcvityInput: ""
  }

  // Ao submeter o formulário
  onEnter = (event) =>{
    event.preventDefault()
    this.setState({
    items: [...this.state.items, this.state.items.push({name: this.state.newAcvityInput, done:false})]
    })
  }

  // Muda o estado baseado no que foi digitado
  onChange = (event) =>{
    this.setState({
      newAcvityInput: event.target.value
    })
  }
  
  render() {
    return (
      <div className="App">
        
        <header className="App-header">
          <h1 className="App-title">Bem vindo ao gerenciador de Tarefas</h1>
        </header>
        
        <h4>To do's</h4>
        {JSON.stringify(this.state)}
        <div className="container">
          {/* criando um form para captar as tarefas  */}

          <form onSubmit={this.onEnter}>
            <input id="tarefa" onChange={this.onChange} placeholder="Adicione uma Tarefa" />
            <label for="tarefa">Adicionar Tarefa </label>

            <br/>
            <input className="btn" type="submit"/>
          </form>

          <div>
            <div className="card z-depth-5">
              <List>

              </List>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
