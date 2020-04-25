import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

import styles from './styles'

function ProfileBox({ user, navigation }) {

  if(user.bio === null){
    user.bio = "<Usuário sem bio>"
  }

  return (
    <View style={styles.profileContainer}>
      <Image style={styles.profileImage} source={{ uri: user.avatar_url }}/>
      <View style={styles.profileInfo}>
        <Text style={styles.profileInfoMainText} >{user.name || user.login}</Text>
        <Text>{user.bio.length > 150 ? user.bio.substring(0, 100).concat('...') : user.bio }</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Profile', user)}>
          <MaterialIcons style={styles.searchIcon} name="chevron-right" size={32} color="gray" />
      </TouchableOpacity>
    </View>
  )
}

function ProfileNotFound() {
  return (
    <>
      <Image style={styles.imageLogo} source={require('../../assets/Octocat.png')} />
      <Text>Pesquise um usuário no github para ver seus repositórios!</Text>
    </>
  )
}

export default function Main({ navigation }) {
  const [search, setSearch] = useState('')
  const [user, setUser] = useState({}) 

  async function searchUser(){
    const getUsers = await fetch(`https://api.github.com/users/${search}`)
    const userJson = await getUsers.json()
    if(userJson.message === 'Not Found'){
      console.log('Usuário não encontrado!')
    }
    console.log(userJson)
    setUser(userJson)
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <MaterialIcons style={styles.searchIcon} name="search" size={32} color="gray"/>
        <TextInput value={search}
          style={styles.searchInput} 
          placeholder="Usuário do github"
          onChangeText={text => setSearch(text)}/>
        <TouchableOpacity onPress={() => searchUser()}>
          <MaterialIcons style={styles.searchIcon} name="chevron-right" size={32} color="gray" />
        </TouchableOpacity>
      </View>
        { user.login ? <ProfileBox user={user} navigation={navigation}/> : <ProfileNotFound /> }
      </View>
  )
}
