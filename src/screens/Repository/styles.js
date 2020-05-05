import styled from 'styled-components/native'
import { FontAwesome, AntDesign } from '@expo/vector-icons'

import { scaleFontSize } from '../../fonts/utils/ScaleFontSize'

export const Container = styled.View`
  flex: 1;
`

export const Text = styled.Text`
  font-size: ${scaleFontSize(16)}px;
`

export const Header = styled.Text`
  font-size: ${scaleFontSize(24)}px;
  font-weight: bold;
  margin: 10px 0px 10px 0px;
`

export const RepoInfoView = styled.View`
  flex: 0.3;
  padding: 14px;
  background-color: white;
`

export const RepoStarsForksView = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 10px;
`

export const IconStarEmpty = styled(FontAwesome).attrs({
  name: 'star-o',
  size: 16,
  color: 'black',
})``

export const IconFork = styled(AntDesign).attrs({
  name: 'fork',
  size: 16,
  color: 'black',
})``

export const ViewCodeTouchable = styled.TouchableOpacity`
  flex: 0.05;
  flex-direction: row;
  padding: 14px;
  background-color: white;
  border-top-width: 1px;
  border-top-color: #e5e5e5;
  align-items: center;
`