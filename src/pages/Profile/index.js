import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

import RepoColorPicker from '../../utils/RepoColorPicker'

import { 
  ScrollViewContainer,
  ViewContainer,
  ViewAlignLeft,
  TextBase, 
  TextBio, 
  ProfileContainer, 
  ProfileImage, 
  ProfileSocialBox,
  ProfileLocationBox,
  SocialBoxAtom,
  RepositoryContainer,
  RepositoryInfo,
  LanguageCircle,
  LanguageContainer
} from './styles'

function ProfileBox({ user, navigation }) {
  return (
    <ProfileContainer>
      <ProfileImage source={{ uri: user.avatar_url }} />
      <TextBase bold fontSize='20'>{ user.name || user.login }</TextBase>
      <TextBase color='gray' fontSize='16'>{ user.login }</TextBase>
      <TextBio>{ user.bio }</TextBio>
      <ProfileSocialBox>
        <TouchableOpacity onPress={() => navigation.push('Following', user)}>
          <SocialBoxAtom>
            <TextBase bold color='gray'>Seguindo</TextBase>
            <TextBase bold>{ user.following }</TextBase>
          </SocialBoxAtom>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push('Followers', user)}>
          <SocialBoxAtom>
            <TextBase bold color='gray'>Seguidores</TextBase>
            <TextBase bold>{ user.followers }</TextBase>
          </SocialBoxAtom>
        </TouchableOpacity>
      </ProfileSocialBox>
      <ProfileLocationBox>
        <MaterialCommunityIcons name="map-marker" size={20} color='gray' />
        <TextBase fontSize='16'>{ user.location || 'Sem localização' }</TextBase>
      </ProfileLocationBox>
    </ProfileContainer>

  )
}

function NoDescription(){
  return (
    <TextBase color='gray'>Repositório sem descrição!</TextBase>
  )
}

function Repository({ repo }) {
  if(repo.description === null){
    repo.description = <NoDescription />
  }

  let repoColor = RepoColorPicker(repo.language)

  return (
    <RepositoryContainer repoColor={ repoColor }>
      <RepositoryInfo>
        <TextBase bold fontSize='16'>{ repo.name }</TextBase>
        <TextBase color='gray'>
          { repo.description.length > 150 
            ? repo.description.substring(0, 150).concat('...') 
            : repo.description }
        </TextBase>
        <LanguageContainer>
          <LanguageCircle repoColor={ repoColor }/>
          <TextBase>{ repo.language }</TextBase>
        </LanguageContainer>
      </RepositoryInfo>
      <TouchableOpacity>
        <MaterialIcons name="chevron-right" size={38} color="gray" />
      </TouchableOpacity>
    </RepositoryContainer>
  )
}

export default function Profile({ navigation, route }) {
  const { params } = route
  const [repos, setRepos] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function getRepos() {
      setIsLoading(true)
      let repositories = await fetch(params.repos_url)
      repositories = await repositories.json()
      setIsLoading(false)
      setRepos(repositories)
    } 
    getRepos()
  }, [])

  return (
    <ScrollViewContainer showsVerticalScrollIndicator={false}>
      <ViewContainer>
        <ProfileBox user={params} navigation={navigation}/>
        <ViewAlignLeft>
          <TextBase bold fontSize='20'>Repositórios de {params.name || params.login}</TextBase>
        </ViewAlignLeft>
          { isLoading ? <ActivityIndicator size="large" color="black"/> 
            : repos.length === 0 ? <TextBase>Usuário sem repositórios</TextBase> 
            : repos.map(repo => <Repository key={repo.node_id} repo={repo}/>) }
      </ViewContainer>
    </ScrollViewContainer>
  )
}
