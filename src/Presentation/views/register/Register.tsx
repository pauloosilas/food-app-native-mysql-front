import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text, View, Image, TextInput, ToastAndroid, StyleSheet, ScrollView } from 'react-native'

import { RoundedButton } from '../../../Presentation/components/RoundedButton';
import { CustomTextInput } from '../../components/CustomTextInput';
import  useViewModel   from './ViewModel';
import RegisterStyles from './Styles';

export const RegisterScreen = () => {
    const navigation = useNavigation()
    const {name, lastname, email, phone, password, confirmPassord, onChange, register} = useViewModel()

    return (
        <View style={RegisterStyles.container}>
          <Image 
              source={require('../../../../assets/chef.jpg')} 
              style={RegisterStyles.imageBackground} 
          /> 
          <View style={RegisterStyles.logoContainer}>
            <Image 
              source={require('../../../../assets/user_image.png')}
              style={RegisterStyles.logoImage}
            />
            <Text style={RegisterStyles.logoText}>Selecione uma imagem...</Text>
          </View>
          <View style={RegisterStyles.form}>

            <ScrollView>

                <Text style={RegisterStyles.formText}>Cadastro</Text>
                
                <CustomTextInput
                  placeholder='Nome'
                  keyboardType='default'
                  image={require('../../../../assets/user.png')}
                  property = 'name'
                  onChangeText = { onChange }
                  value= {name}
                />

                <CustomTextInput
                  placeholder='Sobrenome'
                  keyboardType='default'
                  image={require('../../../../assets/my_user.png')}
                  property = 'lastname'
                  onChangeText = { onChange }
                  value= {lastname}
                />
                <CustomTextInput
                  placeholder='Email'
                  keyboardType='email-address'
                  image={require('../../../../assets/email.png')}
                  property = 'email'
                  onChangeText = { onChange }
                  value= {email}
                />
              
              <CustomTextInput
                  placeholder='Telefone'
                  keyboardType='numeric'
                  image={require('../../../../assets/phone.png')}
                  property = 'phone'
                  onChangeText = { onChange }
                  value= { phone }
                />
            
              <CustomTextInput
                  placeholder='Senha'
                  keyboardType='default'
                  image={require('../../../../assets/password.png')}
                  property = 'password'
                  onChangeText = { onChange }
                  value= { password }
                  secureTextEntry={true}
                />
            
              <CustomTextInput
                  placeholder='Confirmar Senha'
                  keyboardType='default'
                  image={require('../../../../assets/confirm_password.png')}
                  property = 'confirmPassord'
                  onChangeText = { onChange }
                  value= { confirmPassord }
                  secureTextEntry={true}
                />
        

                
                <View style= {{ marginTop: 30}}>
                  <RoundedButton 
                        text='Cadastrar-se'
                        //register -> ViewModel/
                                                // Domain/useCases/auth/RegisterAuth
                                                // Data/repositories/AuthRespository
                                                // implements /Domain/repositories/AuthRepository

                        onPress={() => register()}/>
                 </View>
            
    
                </ScrollView>
            
             
          </View>   
        </View>
      );
    }
