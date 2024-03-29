/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';


type Props = {};
export default class App extends Component<Props> {

    constructor(props){
      super(props)
      this.state = {altura: 0, massa: 0, resultado:0, resultadoText:""}
      this.calcular = this.calcular.bind(this)
    }

    calcular(){

     let imc = this.state.massa/ (this.state.altura * this.state.altura)
    
     let s = this.state
     s.resultado = imc
     

    //< 16 Magreza grave
    //16 a < 17 Magreza Moderada
    //17 a < 18,5 Magreza Leve 
    //18,5 a < 25 saudável
    //25 a < 30 Sobrepeso
    //30 a < 35 Obsidade Grau I
    // 35 a < 40 Obsidade Grau II ( severa )
    // > 40 Obsidade Grau III

    if(s.resultado < 16){
      s.resultadoText = "Magreza Grave"
    }else if(s.resultado < 17){
      s.resultadoText = "Magreza Moderada"

    }else if(s.resultado < 17){
      s.resultadoText = "Magreza Moderada"
    }else if(s.resultado < 18.5){
      s.resultadoText = "Magreza Leve"
    }else if(s.resultado < 25){
      s.resultadoText = "Saudável"
    }else if(s.resultado < 30){
      s.resultadoText = "Sobrepeso"
    }else if(s.resultado < 35){
      s.resultadoText = "Obsidade Grau I"
    }else if(s.resultado < 40){
      s.resultadoText = "Obsidade Grau II"
    }else {
      s.resultadoText = "Obsidade Grau III"
    }

    this.setState(s)

    }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.entradas}>
         <TextInput placeholder="Altura" keyboardType="numeric" style={styles.input} onChangeText={(massa)=>{this.setState({massa})}}/>
         <TextInput placeholder="Massa" keyboardType="numeric" style={styles.input} onChangeText={(altura)=>{this.setState({altura})}}/>
       </View>

      <TouchableOpacity style={styles.button} onPress={this.calcular}><Text style={styles.buttonText}>Calcular</Text></TouchableOpacity>
      <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
      <Text style={[styles.resultado, {fontSize:35}]}>{this.state.resultadoText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  entradas:{
    flexDirection: 'row',   
  },
  input:{
    height:80,
    textAlign:"center",
    width:"50%",
    fontSize:50,
    marginTop:24, 
    color:"gray"
  },
  button:{
    backgroundColor:"#89ffa5"
  },
  buttonText:{
    alignSelf: 'center',
    padding: 30, //afastar um do outro
    fontSize: 25,
    color:"#6dc4a4",
    fontWeight: 'bold'
  },
  resultado: {
    alignSelf: "center",
    color:"lightgray",
    fontSize:65,
    padding:15

  }
 
});
