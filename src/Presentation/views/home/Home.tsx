import React, {useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, TextInput, ToastAndroid, View, TouchableOpacity } from 'react-native';
import { RoundedButton } from '../../../Presentation/components/RoundedButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import useViewModel from './ViewModel' 
import { CustomTextInput } from '../../components/CustomTextInput';

import HomeStyles from './Styles'

export const HomeScreen = () => {

  const { email, password, errorMessage, onChange, login } = useViewModel();

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    if(errorMessage !== ''){
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage])

    return (
        <View style={HomeStyles.container}>
          <Image 
              source={require('../../../../assets/chef.jpg')} 
              style={HomeStyles.imageBackground} 
          /> 
          <View style={HomeStyles.logoContainer}>
            <Image 
              source={require('../../../../assets/logo.png')}
              style={HomeStyles.logoImage}
            />
            <Text style={HomeStyles.logoText}>FOOD APP</Text>
          </View>
          <View style={HomeStyles.form}>
            <Text style={HomeStyles.formText}>Entrar</Text>
            
            <CustomTextInput 
              image={require('../../../../assets/email.png')}
              placeholder='Email'
              keyboardType='email-address'
              property='email'
              onChangeText={onChange}
              value={ email }
            />
    
            <CustomTextInput 
              image={require('../../../../assets/password.png')}
              placeholder='Senha'
              keyboardType='default'
              property='password'
              onChangeText={onChange}
              value={ password }
              secureTextEntry={ true }
            />
                
            <View style= {{ marginTop: 30}}>
              <RoundedButton 
                    text='LOGIN'
                    onPress={() => login()}/>
            </View>
            
    
            <View style={styles.formRegister}>
              <Text>Não tem uma conta?</Text>
              <TouchableOpacity 
                onPress={() => navigation.navigate("RegisterScreen")}>
                <Text style={styles.formRegisterText}>Registre-se</Text>
              </TouchableOpacity>
            </View>
             
          </View>   
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'black',
      },
      imageBackground: {
        width: '100%',
        height:'100%',
        opacity: 0.7,
        bottom:'30%',
      },
      form: {
        width: '100%',
        height:'40%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 30
      },
      logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: '15%'
      },
      logoImage:{
        width: 100,
        height:100,
      },
      logoText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold',
      },
      formIcon:{
        width: 25,
        height: 25,
        marginTop: 5,
      },
      formTextInput: {
        flex:1,
        borderBottomWidth:1,
        borderBottomColor: '#AAAAAA',
        marginLeft: 15,
      },
      formInput: {
        flexDirection: 'row',
        marginTop: 20,
      },
      formText: {
        fontWeight: 'bold',
        fontSize:16,
      },
     
      formRegister: {
        flexDirection: 'row',
        justifyContent:'center',
        marginTop: 25
      },
      formRegisterText: {
        fontStyle: 'italic',
        color: 'orange',
        borderBottomWidth: 1,
        borderBottomColor: 'orange',
        fontWeight: 'bold',
        marginLeft: 10,
      }
    });
    