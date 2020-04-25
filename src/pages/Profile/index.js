import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

import RepoColorPicker from '../../utils/RepoColorPicker'

import styles from './styles';

function ProfileBox({ user }) {
  return (
    <View style={styles.profileContainer}>
      <Image style={styles.profileImage} source={{ uri: user.avatar_url }} />
      <Text style={styles.profileUsername}>{user.name || user.login}</Text>
      <Text style={styles.profileSubUsername}>{user.login}</Text>
      <Text style={styles.profileBio}>{user.bio}</Text>
      <View style={styles.profileSocialInfoBox}>
        <View style={styles.profileSocialAtomBox}>
          <Text style={styles.profileFollowText}>Seguindo</Text>
          <Text style={styles.profileFollowNumber}>{user.following}</Text>
        </View>
        <View style={styles.profileSocialAtomBox}>
          <Text style={styles.profileFollowText}>Seguidores</Text>
          <Text style={styles.profileFollowNumber}>{user.followers}</Text>
        </View>
      </View>
      <View style={styles.profileLocationBox}>
        <MaterialCommunityIcons name="map-marker" size={20} color="gray" />
        <Text style={styles.profileLocationText}>{user.location}</Text>
      </View>
    </View>
  )
}

function NoDescription(){
  return (
    <Text>Repositório sem descrição!</Text>
  )
}

function Repositorie({ repo }) {
  if(repo.description === null){
    repo.description = <NoDescription />
  }

  return (
    <View style={[styles.repositorieBox, { borderTopColor: RepoColorPicker(repo.language)}]}>
      <View style={styles.repositorieInfo}>
        <Text style={styles.repositorieName}>{repo.name}</Text>
        <Text style={styles.repositorieDescription}>{repo.description.length > 150 ? repo.description.substring(0, 150).concat('...') : repo.description}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={[ styles.repositorieLanguageCircle, { backgroundColor: RepoColorPicker(repo.language)}]} />
          <Text>{repo.language}</Text>
        </View>
      </View>
      <TouchableOpacity>
        <MaterialIcons  name="chevron-right" size={38} color="gray" />
      </TouchableOpacity>
    </View>
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
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={{flex: 1, padding: 10}}>
        <ProfileBox user={params}/>
        <View style={styles.yourRepositories}>
          <Text style={[styles.profileUsername, { fontSize: 18 } ]}>Repositórios de {params.name || params.login}</Text>
        </View>
          { isLoading ? <ActivityIndicator size="large" color="black"/> 
            : repos.map(repo => <Repositorie key={repo.node_id} repo={repo}/>)}
      </View>
    </ScrollView>
  )
}
