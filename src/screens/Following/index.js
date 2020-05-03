import React, { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

import { Api } from '../../services'

import {
  AppContainer,
  FollowContainer,
  FollowImage,
  FollowInfo,
  TextBold,
} from './styles'

function FollowingBox({ user, navigation }) {

  async function handleSelect(){
    const followingUser = await Api.getUser(user.login)
    navigation.push('Profile', followingUser)
  }

  return (
    <FollowContainer>
      <FollowInfo>
        <FollowImage source={{ uri: user.avatar_url }}/>
        <TextBold>{ user.login }</TextBold>
      </FollowInfo>
      <TouchableOpacity onPress={() => handleSelect()}>
        <MaterialIcons name="chevron-right" size={38} color="gray" />
      </TouchableOpacity>
    </FollowContainer>
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
    let followingInfo = await Api.
      getSocialInfoFromPage(`https://api.github.com/users/${user.login}/following`, page)
    setFollowing(following.concat(followingInfo))
    setPage(page + 1)
    setRefreshing(false)
  }

  return (
    <AppContainer>
      { isLoading ? <ActivityIndicator size="large" color="black"/> 
        : <FlatList showsVerticalScrollIndicator={false}
            data={following}
            renderItem={ following => <FollowingBox user={following.item} navigation={navigation}/>}
            keyExtractor={ following => String(following.id) }  
            refreshing={refreshing}
            onEndReached={getData}
            onEndReachedThreshold={1}
          />
      }
    </AppContainer>
  );
}
