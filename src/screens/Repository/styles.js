import styled from 'styled-components/native'
import { FontAwesome, AntDesign, Octicons } from '@expo/vector-icons'

import { scaleFontSize } from '../../fonts/utils/ScaleFontSize'

export const Container = styled.View`
  flex: 1;
`

export const Text = styled.Text`
  color: ${props => props.color || 'black'}; 
  font-size: ${scaleFontSize(16)}px;
`

export const Header = styled.Text`
  font-size: ${scaleFontSize(24)}px;
  font-weight: bold;
  margin: 10px 0px 10px 0px;
`

export const RowCenterView = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 15px;
`

export const OwnerImage = styled.Image`
  width: 10%;
  height: 120%;
  resize-mode: contain;
  border-radius: 30px;
`

export const RepoInfoView = styled.View`
  width: 100%;
  height: 200px;
  padding: 14px;
  background-color: white;
`

export const RepoStarsForksView = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  margin: 10px 0px 10px 0px;
`

export const IconStarEmpty = styled(FontAwesome).attrs({
  name: 'star-o',
  size: scaleFontSize(16),
  color: 'black',
})`
  margin-right: 5px;
`

export const IconFork = styled(AntDesign).attrs({
  name: 'fork',
  size: scaleFontSize(16),
  color: 'black',
})`
  margin-right: 5px;
`

export const IconFileCode = styled(Octicons).attrs({
  name: 'file-code',
  size: scaleFontSize(32),
  color: 'black'
})`
  margin-right: 15px;
`

export const IconCommit = styled(Octicons).attrs({
  name: 'git-commit',
  size: scaleFontSize(32),
  color: 'black'
})`
  margin-right: 15px;
`

export const ViewCodeTouchable = styled.TouchableOpacity`
  width: 100%;
  height: 70px;
  flex-direction: row;
  padding: 14px;
  background-color: white;
  border-top-width: 1px;
  border-top-color: #e5e5e5;
  align-items: center;
`