import React from 'react'
import { TouchableOpacity } from 'react-native'

import {
  Text,
  TextBio, 
  ProfileContainer, 
  ProfileImage, 
  ProfileSocialBox,
  ProfileLocationBox,
  MapMarker,
  SocialBoxAtom,
} from './styles'

export default function ProfileBox({ user, navigation }) {
  return (
    <ProfileContainer>
      <ProfileImage source={{ uri: user.avatar_url }} />
      <Text bold fontSize='20'>{ user.name || user.login }</Text>
      <Text color='gray' fontSize='16'>{ user.login }</Text>
      <TextBio>{ user.bio }</TextBio>
      <ProfileSocialBox>
        <TouchableOpacity onPress={() => navigation.push('Following', user)}>
          <SocialBoxAtom>
            <Text bold color='gray'>Seguindo</Text>
            <Text bold>{ user.following }</Text>
          </SocialBoxAtom>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push('Followers', user)}>
          <SocialBoxAtom>
            <Text bold color='gray'>Seguidores</Text>
            <Text bold>{ user.followers }</Text>
          </SocialBoxAtom>
        </TouchableOpacity>
      </ProfileSocialBox>
      <ProfileLocationBox>
        <MapMarker />
        <Text fontSize='16'>{ user.location || 'Sem localização' }</Text>
      </ProfileLocationBox>
    </ProfileContainer>

  )
}