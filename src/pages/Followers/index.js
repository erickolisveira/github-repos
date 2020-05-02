import React, { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';

import {
  AppContainer,
  FollowContainer,
  FollowImage,
  FollowInfo,
  TextBold,
} from './styles'

function FollowerBox({ user }) {
  return (
    <FollowContainer>
      <FollowInfo>
        <FollowImage source={{ uri: user.avatar_url }}/>
        <TextBold>{ user.login }</TextBold>
      </FollowInfo>
    </FollowContainer>
  )
}

export default function Followers({ navigation, route }) {
  const [followers, setFollowers] = useState([])
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
    let _followers = await fetch(`${user.followers_url}?page=${page}`)
    _followers = await _followers.json()
    setFollowers(followers.concat(_followers))
    setPage(page+1)
    setRefreshing(false)
  }

  return (
    <AppContainer>
      { isLoading ? <ActivityIndicator size="large" color="black"/> 
        : <FlatList data={followers}
            renderItem={ follower => <FollowerBox user={follower.item} />}
            keyExtractor={ follower => String(follower.id) }  
            refreshing={refreshing}
            onEndReached={getData}
            onEndReachedThreshold={1}
          />
      }
    </AppContainer>
  );
}
