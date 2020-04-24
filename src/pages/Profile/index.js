import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

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

function Repositorie({ repo }) {

  return (
    <View style={[styles.repositorieBox, { borderTopColor: RepoColorPicker(repo.language)}]}>
      <Text>{repo.name}</Text>
      <Text>{repo.description}</Text>
      <Text>{repo.language}</Text>
    </View>
  )
}

export default function Profile({ navigation, route }) {
  const { params } = route
  const [repos, setRepos] = useState([])

  useEffect(() => {
    async function getRepos() {
      let repositories = await fetch(params.repos_url)
      repositories = await repositories.json()
      setRepos(repositories)
    } 
    getRepos()
  }, [])
  return (
    <View style={styles.container}>
      <ProfileBox user={params}/>
      <Text>Repositórios de {params.name}</Text>
      {repos.map(repo => <Repositorie key={repo.node_id} repo={repo}/>)}
    </View>
  );
}
