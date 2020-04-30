import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Image, FlatList } from 'react-native';

import styles from './styles';

function FollowingBox({ user }) {
  return (
    <View style={styles.followerContainer}>
      <Image style={styles.followerImage} source={{ uri: user.avatar_url }}/>
      <Text style={styles.followerUsername}>{user.login}</Text>
    </View>
  )
}

export default function Following({ navigation, route }) {
  const [following, setFollowing] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const [page, setPage] = useState(1)

  const { params } = route
  const user = params

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
    let _following = await fetch(`https://api.github.com/users/${user.login}/following?page=${page}`)
    _following = await _following.json()
    setFollowing(following.concat(_following))
    setPage(page + 1)
    setRefreshing(false)
  }

  return (
    <View style={styles.container}>
      { isLoading ? <ActivityIndicator size="large" color="black"/> 
        : <FlatList data={following} 
            style={styles.flatList}
            renderItem={ following => <FollowingBox user={following.item} />}
            keyExtractor={ following => String(following.id) }  
            refreshing={refreshing}
            onEndReached={getData}
            onEndReachedThreshold={1}
          />
      }
    </View>
  );
}
