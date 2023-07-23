import React, { useState } from 'react'
import { RegisterAuthUseCase } from '../../../Domain/useCases/auth/RegisterAuth';

 const RegisterViewModel = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [ values, setValues ] = useState({
    name: '',
    lastname: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword:''
  });

  const onChange = (property: string, value: any) => {
    setValues({...values, [property]: value })
  }
  const register = async () => {
    if(isValidForm()){
      const response = await RegisterAuthUseCase(values);
      console.log('Result: ' + JSON.stringify(response));  
    }
  }

  const isValidForm = ():boolean => {
    if(values.name === ''){
      setErrorMessage('Adicione seu nome...')
      return false
    }
    if(values.lastname === ''){
      setErrorMessage('Adicione seu sobrenome...')
      return false
    }
    if(values.email === ''){
      setErrorMessage('Adicione seu email...')
      return false
    }
    if(values.phone === ''){
      setErrorMessage('Adicione seu numero de telefone...')
      return false
    }
    if(values.password === ''){
      setErrorMessage('Adicione uma senha...')
      return false
    }
    if(values.confirmPassword === ''){
      setErrorMessage('Confirme sua senha...')
      return false
    }

    if(values.password !== values.confirmPassword){
      setErrorMessage('As senhas não coincidem')
      return false
    }
    return true;
  }
  return {
    ...values,
    onChange,
    register,
    isValidForm,
    errorMessage
  }
 }
export default RegisterViewModel;









