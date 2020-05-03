import React, { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList } from 'react-native'

import { ChevronButton } from '../../components/'

import { Api } from '../../services'

import {
  AppContainer,
  FollowContainer,
  FollowImage,
  FollowInfo,
  TextBold,
} from './styles'

function FollowerBox({ user, navigation }) {

  async function handleSelect(){
    const followerUser = await Api.getUser(user.login)
    navigation.push('Profile', followerUser)
  }

  return (
    <FollowContainer>
      <FollowInfo>
        <FollowImage source={{ uri: user.avatar_url }}/>
        <TextBold>{ user.login }</TextBold>
      </FollowInfo>
      <ChevronButton onPress={() => handleSelect()}/>
    </FollowContainer>
  )
}

export default function Followers(props) {
  const { route: { params: user }, navigation } = props

  const [followers, setFollowers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const [page, setPage] = useState(1)

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
    const followersInfo = await Api.getSocialInfoFromPage(user.followers_url, page)
    setFollowers(followers.concat(followersInfo))
    setPage(page + 1)
    setRefreshing(false)
  }

  return (
    <AppContainer>
      { isLoading ? <ActivityIndicator size="large" color="black"/> 
        : <FlatList data={followers}
            renderItem={ follower => <FollowerBox user={follower.item} navigation={navigation} />}
            keyExtractor={ follower => String(follower.id) }  
            refreshing={refreshing}
            onEndReached={getData}
            onEndReachedThreshold={1}
          />
      }
    </AppContainer>
  );
}
