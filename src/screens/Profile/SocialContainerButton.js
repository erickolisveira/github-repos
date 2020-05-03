import React from 'react'
import { TouchableOpacity } from 'react-native'

import {
  Text,
  SocialBoxAtom,
} from './styles'

export default function SocialContainerButton(props) {
  const { mainText, followNumber, onPress } = props
  return(
    <TouchableOpacity onPress={onPress}>
      <SocialBoxAtom>
        <Text bold color='gray'>{ mainText }</Text>
        <Text bold>{ followNumber }</Text>
      </SocialBoxAtom>
    </TouchableOpacity>
  )
}