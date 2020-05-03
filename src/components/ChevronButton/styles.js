import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'

export const Icon = styled(MaterialIcons).attrs(props => ({
  name: 'chevron-right',
  size: props.size ? props.size : 32,
}))`
  color: ${props => props.color ? props.color : 'gray'};
`