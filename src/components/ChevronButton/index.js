import React from 'react'
import { TouchableOpacity } from 'react-native'

import {
  Icon,
} from './styles'

const ChevronButton = (props) => {
  const { onPress } = props
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  )
}

export default ChevronButton