    import {StyleSheet} from 'react-native'
    
    const RegisterStyles = StyleSheet.create({
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
          height:'74%',
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 10,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          padding: 23
        },
        logoContainer: {
          position: 'absolute',
          alignSelf: 'center',
          top: '3%',
          alignItems: 'center'
        },
        logoImage:{
          width: 100,
          height:100,
        },
        logoText: {
          color: '#fff',
          textAlign: 'center',
          fontSize: 20,
          marginTop: 5,
          fontWeight: 'bold',
        },
        formText: {
          fontWeight: 'bold',
          fontSize:16,
        },
        formTextInput: {
          flex:1,
          borderBottomWidth:1,
          borderBottomColor: '#AAAAAA',
          marginLeft: 15,
        },
        formInput: {
          flexDirection: 'row',
          marginTop: 18,
        },
        formIcon:{
          width: 25,
          height: 25,
          marginTop: 5,
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
  
      export default RegisterStyles