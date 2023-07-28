import React, { useState, useEffect } from 'react'
import { LoginAuthUseCase } from '../../../Domain/useCases/auth/LoginAuth'
import { SaveUserLocalUseCase } from '../../../Domain/useCases/userLocal/SaveUserLocal'
import { GetUserLocalUseCase } from '../../../Domain/useCases/userLocal/GetUserLocal'
import { useUserLocal } from '../../hooks/useUserLocal'


const HomeViewModel = () => {
    const [errorMessage, setErrorMessage] = useState('')
    const [values, setValues] = useState({
        email: '',
        password: '',
    })

    const { user, getUserSession } = useUserLocal();
    console.log("Usuario: ", JSON.stringify(user))

    useEffect(()=>{
      getUserSession()
    },[])

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value  })
    }

    const login = async () => {
      if(isValidForm()){
        const response = await LoginAuthUseCase(values.email, values.password)
        console.log('Response: ' + JSON.stringify(response.success));
        if(!response.success){
          setErrorMessage(response.message);
        }else{
          await SaveUserLocalUseCase(response.data)
          getUserSession();
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
    user,
    onChange,
    login,
    errorMessage
  })
}
export default HomeViewModel;