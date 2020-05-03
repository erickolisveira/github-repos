import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native'

import ProfileBox from './ProfileBox'
import Repository from './Repository'

import { 
  ScrollViewContainer,
  ViewContainer,
  ViewAlignLeft,
  Text
} from './styles'

export default function Profile(props) {
  const { route: { params: user } , navigation } = props
  const [repos, setRepos] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function getRepos() {
      setIsLoading(true)
      let repositories = await fetch(user.repos_url)
      repositories = await repositories.json()
      setIsLoading(false)
      setRepos(repositories)
    } 
    getRepos()
  }, [])

  return (
    <ScrollViewContainer showsVerticalScrollIndicator={false}>
      <ViewContainer>
        <ProfileBox user={user} navigation={navigation}/>
        <ViewAlignLeft>
          <Text bold fontSize='20'>Repositórios de { user.name || user.login }</Text>
        </ViewAlignLeft>
          { isLoading ? <ActivityIndicator size="large" color="black"/> 
            : repos.length === 0 ? <Text>Usuário sem repositórios</Text> 
            : repos.map(repo => <Repository key={repo.node_id} repo={repo}/>) }
      </ViewContainer>
    </ScrollViewContainer>
  )
}
