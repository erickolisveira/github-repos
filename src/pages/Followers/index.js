import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Image, FlatList } from 'react-native';

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
  const [refreshing, setRefreshing] = useState(false)
  const [page, setPage] = useState(0)

  const { params } = route
  const user = params

  useEffect(() => {
    async function getFollowers() {
      setIsLoading(true)
      let _followers = await fetch(`${user.followers_url}?page=${page}`)
      _followers = await _followers.json()
      setFollowers(_followers)
      setIsLoading(false)
    }
    getFollowers()
  }, [])

  async function getMoreData() {
    setPage(page+1)
    console.log(page)
    setRefreshing(true)
    let _followers = await fetch(`${user.followers_url}?page=${page}`)
    _followers = await _followers.json()
    setFollowers(followers.concat(_followers))
    setRefreshing(false)
  }

  return (
    <View style={styles.container}>
      { isLoading ? <ActivityIndicator size="large" color="black"/> 
        : <FlatList data={followers} 
            style={styles.flatList}
            renderItem={follower  => <FollowerBox user={follower.item} />}
            keyExtractor={ follower => follower.id }  
            refreshing={refreshing}
            onRefresh={() => getMoreData()}
          />
      }
    </View>
  );
}
