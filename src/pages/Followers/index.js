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
  const [page, setPage] = useState(1)

  const { params } = route
  const user = params

  console.log(page)

  useEffect(() => {
    async function _getData(){
      setIsLoading(true)
      await getData()
      setIsLoading(false)
    }
    _getData()
  }, [])

  async function getData() {
    setRefreshing(true)
    let _followers = await fetch(`${user.followers_url}?page=${page}`)
    _followers = await _followers.json()
    setFollowers(followers.concat(_followers))
    setPage(page+1)
    setRefreshing(false)
  }

  return (
    <View style={styles.container}>
      { isLoading ? <ActivityIndicator size="large" color="black"/> 
        : <FlatList data={followers} 
            style={styles.flatList}
            renderItem={ follower => <FollowerBox user={follower.item} />}
            keyExtractor={ follower => String(follower.id) }  
            refreshing={refreshing}
            onEndReached={getData}
            onEndReachedThreshold={1}
          />
      }
    </View>
  );
}
