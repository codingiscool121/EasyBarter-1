import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, Keyboard, TextInput } from 'react-native';
import firebase from 'firebase';
import db from '../config'
import { render } from 'react-dom';

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            emailId:"",
            password:"",
        }
    }
//creating text inputs for login and signup

login=(emailId,password)=>{
    console.log(emailId);

firebase.auth().signInWithEmailAndPassword(emailId,password).then(()=>{
    return(
        alert("Welcome,"+ emailId +"!")
    )
}).catch(error=>{
    alert("We could not sign you in. Here is the error we got: "+ error.message + " Please try to fix this error, and then try again.");
})
}
signup=(emailId,password)=>{
    console.log(emailId);
    firebase.auth().createUserWithEmailAndPassword(emailId,password).then(()=>{
        return(
            alert("You have been successfully signed up.")
        )
    }).catch(error=>{
        alert("We could not sign you up, and here is the error we got when we tried: "+ error.message + " Please try to fix this error, and then try again.");
    })
    }

render(){
    return(
        <View>
        <Text style={styles.title}> Login To EasyBarter</Text>
        <TextInput style={styles.loginBox} placeholder="Email(example@domain.com) " keyboardType='email-address'
        onChangeText={text=>{
            this.setState({
                emailId:text
            })
        }}
        />
      <TextInput style={styles.loginBox} placeholder="Enter Your Password" secureTextEntry={true}
      onChangeText={text=>{
          this.setState({
              password:text
          })
      }}
      />
      <TouchableOpacity onPress={()=>{
          this.login(
              this.state.emailId,this.state.password
          )
      }} style={styles.text}>
        <Text>Login</Text>      
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
          this.signup(
              this.state.emailId,this.state.password
          )
      }} style={styles.text}>
        <Text>Sign Up Here</Text>      
      </TouchableOpacity>
        </View>
    )
}
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        marginTop:50,
        backgroundColor:'white',
    },
    loginBox:{
        width:300,
        height:40,
        borderWidth:1.5,
        fontSize:20,
        margin:10,
        paddingLeft:10,
        alignSelf:"center",
        justifyContent: 'center',
        borderColor:"#c39b77"
    },
    text:{
        fontSize:30,
        textAlign:"center",
        marginBottom:50,
        alignSelf:"center",
        backgroundColor:'#c39b77',
        height:60,
        width:120,
        paddingTop:13,
        borderWidth:3,
        borderRadius:1,
        justifyContent:"center"
    },

    title:{
        fontSize: 40,
        textAlign:'center',
        alignSelf: 'center',
        color:"#c39b77"
    }
})





    



