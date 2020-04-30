import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Image, FlatList, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

import styles from './styles';

function FollowingBox({ user, navigation }) {

  async function handleSelect(){
    let followingUser = await fetch(`${user.url}`)
    followingUser = await followingUser.json()
    navigation.push('Profile', followingUser)
  }

  return (
    <View style={styles.followerContainer}>
      <View style={styles.followerInfo}>
        <Image style={styles.followerImage} source={{ uri: user.avatar_url }}/>
        <Text style={styles.followerUsername}>{user.login}</Text>
      </View>
      <TouchableOpacity onPress={() => handleSelect()}>
        <MaterialIcons  name="chevron-right" size={38} color="gray" />
      </TouchableOpacity>
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
            renderItem={ following => <FollowingBox user={following.item} navigation={navigation}/>}
            keyExtractor={ following => String(following.id) }  
            refreshing={refreshing}
            onEndReached={getData}
            onEndReachedThreshold={1}
          />
      }
    </View>
  );
}
