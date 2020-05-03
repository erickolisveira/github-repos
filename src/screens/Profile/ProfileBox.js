import React from 'react'
import { TouchableOpacity } from 'react-native'

import SocialContainerButton from './SocialContainerButton'

import {
  Text,
  TextBio, 
  ProfileContainer, 
  ProfileImage, 
  ProfileSocialBox,
  ProfileLocationBox,
  MapMarker,
} from './styles'

export default function ProfileBox(props) {
  const { user, navigation } = props
  
  const navigateFollowing = () => navigation.push('Following', user)
  const navigateFollowers = () => navigation.push('Followers', user)

  return (
    <ProfileContainer>
      <ProfileImage source={{ uri: user.avatar_url }} />
      <Text bold fontSize='20'>{ user.name || user.login }</Text>
      <Text color='gray' fontSize='16'>{ user.login }</Text>
      <TextBio>{ user.bio }</TextBio>
      <ProfileSocialBox>
        <SocialContainerButton 
          onPress={() => navigateFollowing()} 
          mainText='Seguindo'
          followNumber={ user.following }/>
        <SocialContainerButton
          onPress={() => navigateFollowers()}
          mainText='Seguidores'
          followNumber={ user.followers }
          />
      </ProfileSocialBox>
      <ProfileLocationBox>
        <MapMarker />
        <Text fontSize='16'>{ user.location || 'Sem localização' }</Text>
      </ProfileLocationBox>
    </ProfileContainer>
  )
}