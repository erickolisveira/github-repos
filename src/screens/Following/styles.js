import styled from 'styled-components/native'

import { scaleFontSize } from '../../fonts/utils/ScaleFontSize'

export const AppContainer = styled.View`
  flex: 1;
  padding: 5px 0px 0px 0px;
`

export const FollowInfo = styled.View`
  flex-direction: row;
  flex: 1;
  height: 100%;
  align-items: center;
`

export const FollowContainer = styled.View`
  height: 70px;
  background-color: #fff;
  elevation: 2;
  flex-direction: row;
  border-radius: 8px;
  align-items: center;
  margin: 0px 10px 5px 10px;
`

export const FollowImage = styled.Image`
  width: 20%;
  height: 80%;
  border-radius: 100px;
  resize-mode: contain;
  margin: 0px 10px 0px 10px;
`

export const TextBold = styled.Text`
  font-weight: bold;
  font-size: ${scaleFontSize(14)}px;
`