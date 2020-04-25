import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Image } from 'react-native';

import styles from './styles';

function FollowerBox({ user }) {
  return (
    <View style={styles.followerContainer}>
      <Image style={styles.followerImage} source={{ uri: user.avatar_url }}/>
      <Text style={styles.followerUsername}>{user.login}</Text>
    </View>
  )
}

export default function Followers({ navigation, route }) {
  const [followers, setFollowers] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const { params } = route
  const user = params

  useEffect(() => {
    async function getFollowers() {
      setIsLoading(true)
      let _followers = await fetch(user.followers_url)
      _followers = await _followers.json()
      setFollowers(_followers)
      setIsLoading(false)
    }
    getFollowers()
  }, [])

  return (
    <View style={styles.container}>
      { isLoading ? <ActivityIndicator size="large" color="black"/> : followers.map(follower => <FollowerBox key={follower.id} user={follower}/>) }
    </View>
  );
}
