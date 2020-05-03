import React, { useState } from 'react';
import { TouchableOpacity, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

import { Container, 
  SearchBarContainer, 
  SearchInput, 
  BasicText, 
  Logo, 
  ProfileContainer, 
  ProfileImage, 
  ProfileInfo, 
  Username,
} from './styles'

import userJson from './temp'

function ProfileBox({ user, navigation }) {

  if(user.bio === null){
    user.bio = "< Usuário sem bio >"
  }

  return (
    <ProfileContainer>
      <ProfileImage source={{ uri: user.avatar_url }}/>
      <ProfileInfo>
        <Username fontSize='16'>{user.name || user.login}</Username>
        <BasicText>
          { user.bio.length > 150 
            ? user.bio.substring(0, 100).concat('...') 
            : user.bio }
        </BasicText>
      </ProfileInfo>
      <TouchableOpacity onPress={() => navigation.navigate('Profile', user)}>
          <MaterialIcons name="chevron-right" size={32} color="gray" />
      </TouchableOpacity>
    </ProfileContainer>
  )
}

function WelcomeMessage() {
  return (
    <>
      <Logo source={require('../../assets/Octocat.png')} />
      <BasicText>Pesquise um usuário no github para ver seus repositórios!</BasicText>
    </>
  )
}

function ErrorMessage() {
  return <BasicText>Usuário não encontrado!</BasicText>
}

export default function Main({ navigation }) {
  const [search, setSearch] = useState('')
  const [user, setUser] = useState({}) 
  const [isLoading, setIsLoading] = useState(false)

  async function searchUser(){
    setIsLoading(true)
    //const getUsers = await fetch(`https://api.github.com/users/${search}`)
    //const userJson = await getUsers.json()
    setUser(userJson) 
    setIsLoading(false)
  }
  
  return (
    <Container>
      <SearchBarContainer>
        <MaterialIcons name="search" size={32} color="gray"/>
        <SearchInput value={search}
          placeholder="Usuário do github"
          onChangeText={text => setSearch(text)}/>
        <TouchableOpacity onPress={() => searchUser()}>
          <MaterialIcons name="chevron-right" size={32} color="gray" />
        </TouchableOpacity>
      </SearchBarContainer>
        { isLoading ? <ActivityIndicator size="large" color="black"/> 
            : user.login ? <ProfileBox user={user} navigation={navigation} /> 
            : user.message ? <ErrorMessage /> 
            : <WelcomeMessage /> }
    </Container>
  )
}
