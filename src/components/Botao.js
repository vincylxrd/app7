import React, {Component} from 'react';
import {Button} from 'react-native';
import {PropTypes} from 'prop-types';
const logo = require('../img/jokenpo.png');

export default class Botao extends Component {
    static propTypes ={
        texto: PropTypes.string,
        cor: PropTypes.string,
        Func: PropTypes.func
    }
  render() {
    return (
        <Button 
        title={this.props.texto}
        color={this.props.cor}
        onPress={this.props.Func}/>

    );
  }
}