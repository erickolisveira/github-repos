import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'

import { scaleFontSize } from '../../fonts/utils/ScaleFontSize'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 10px;
`

export const SearchIcon = styled(MaterialIcons).attrs({
  name: 'search',
  size: 32,
  color: 'gray',
})``

export const SearchBarContainer = styled.View`
  width: 100%;
  height: 60px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 8px;
  elevation: 2;
  padding: 10px 10px;
  margin-bottom: 10px;
`

export const SearchInput = styled.TextInput.attrs({
  style: {
    fontFamily: 'Lato-Bold',
  }
})`
  flex: 1;
  padding-left: 10px;
`

export const BasicText = styled.Text`
  font-family: 'Lato-Regular';
  font-size: ${props => props.fontSize ? scaleFontSize(props.fontSize) : scaleFontSize(14)}px;
`

export const Logo = styled.Image`
  width: 50%;
  height: 20%;
  resize-mode: contain;
`

export const ProfileContainer = styled.View`
  width: 100%;
  height: 100px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  elevation: 2;
  border-radius: 8px;
  margin-bottom: 10px;
`

export const ProfileImage = styled.Image`
  width: 20%;
  height: 100%;
  border-radius: 100px;
  resize-mode: contain;
  margin: 10px;
`

export const ProfileInfo = styled.View`
  flex: 1;
`

export const Username = styled(BasicText)`
  font-weight: bold;
  margin-bottom: 5px;
`