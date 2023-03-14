import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Platform, SafeAreaView } from 'react-native';

import Posts from './components/Posts';
import Menu from './components/MenuFooter';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  useEffect(() => {
    const verifyLogin = async() => {
      try{
        const login = await AsyncStorage.getItem('@loginUser')
        if(login !== null){
          console.log(`USUARIO LOGADO:: ${login}`);
        }else{
          console.log(`USUARIO NAO LOGADO:::REDIRECIONAR PARA LOGIN`);
        }
      }catch(e){
          console.log(`ERRO::: ${e}`);
      }
    }
    verifyLogin();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='dark-content' color='#fff' />
      
      <Posts />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? 20 : 0,
    flex: 1,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
});
