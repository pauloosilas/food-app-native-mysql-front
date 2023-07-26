import React, { useState, useEffect } from 'react'
import { LoginAuthUseCase } from '../../../Domain/useCases/auth/LoginAuth'
import { SaveUserUseCase } from '../../../Domain/useCases/auth/userLocal/SaveUser'
import { GetUserUseCase } from '../../../Domain/useCases/auth/userLocal/GetUser'

const HomeViewModel = () => {
    const [errorMessage, setErrorMessage] = useState('')
    const [values, setValues] = useState({
        email: '',
        password: '',
    })

    useEffect(()=>{
      getUserSession()
    },[])

    const getUserSession = async() =>{
      const user = await GetUserUseCase();
      console.log('Usuario sessao: ' + JSON.stringify(user))
    }
    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value  })
    }

    const login = async () => {
      if(isValidForm()){
        const response = await LoginAuthUseCase(values.email, values.password)
        console.log('Response: ' + JSON.stringify(response));
        if(!response.success){
          setErrorMessage(response.message);
        }else{
          await SaveUserUseCase(response.data)
        }
      }
    }

   const isValidForm = ():boolean => {
    if(values.email === ''){
      setErrorMessage('Informe seu email...');
      return false
    }
    if(values.password === ''){
      setErrorMessage('Digite uma senha...');
      return false
    }
    return true
   } 

  return ({
    ...values,
    onChange,
    login,
    errorMessage
  })
}
export default HomeViewModel;