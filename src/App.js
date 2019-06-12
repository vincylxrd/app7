import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Logo from './components/Topo';
import Botao from './components/Botao';
import Figura from './components/Figura';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      escolhaUsuario: '',
      escolhaMaquina: '',
      resultado: ''
    }
  }

  jokenpo(escolhaUsuario){
    const opcao = ['PEDRA', 'PAPEL','TESOURA'];
    const escolhaMaquina = opcao[Math.floor(Math.random() * opcao.length)];
    let resultado = '';

    if(escolhaMaquina === 'PEDRA'){
      if(escolhaUsuario === 'PEDRA'){
        resultado = 'Empate';
      }else if(escolhaUsuario === 'PAPEL'){
        resultado = 'Usuário Ganhou!';
      } else{
        resultado = 'Usuário Perdeu!';
      }
    }
    if(escolhaMaquina === 'PAPEL'){
      if(escolhaUsuario === 'PEDRA'){
        resultado = 'Usuário Perdeu!';
      }else if(escolhaUsuario === 'PAPEL'){
        resultado = 'Empate!';
      } else{
        resultado = 'Usuário Ganhou!';
      }
    }
    if(escolhaMaquina === 'TESOURA'){
      if(escolhaUsuario === 'TESOURA'){
        resultado = 'Empate!';
      }else if(escolhaUsuario === 'PAPEL'){
        resultado = 'Usuário Perdeu!';
      } else{
        resultado = 'Usuário Ganhou!';
      }
    }

    this.setState({
      escolhaUsuario,
      escolhaMaquina,
      resultado
    });
  }


  render() {
    return (
      <View style={estilo.container}>
        <Logo />
        <View style={estilo.botao}>
          <Botao texto='PEDRA' cor='#841584' Func={() =>{this.jokenpo('PEDRA')}} />
          <Botao texto='TESOURA' cor='#66ff66' Func={() =>{this.jokenpo('TESOURA')}} />
          <Botao texto='PAPEL' cor='#339966' Func={() =>{this.jokenpo('PAPEL')}} />
        </View>
        <View style={estilo.placar}>
          <Text>{this.state.resultado}</Text> 
          <Text>Escolha da Usuário:</Text>
          <Figura nome={this.state.escolhaUsuario}/>
          <Text>Escolha da Maquina:</Text>
          <Figura nome={this.state.escolhaMaquina}/>
         
        </View>
      </View>
    );
  }
}

const estilo = StyleSheet.create({
  container: {
    flex:1
  },
  botao: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent:'space-around'
  },
  placar: {
    marginTop: 10,
    flexDirection: 'column',
    alignItems:'center'
  }
})