import styled from 'styled-components/native'
import { scaleFontSize } from '../../fonts/utils/ScaleFontSize'

export const ScrollViewContainer = styled.ScrollView`
  flex: 1;
`

export const ViewContainer = styled.View`
  padding: 10px 10px 10px;
`

export const ViewAlignLeft = styled.View`
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 10px;
`

export const TextBase = styled.Text`
  color: ${props => props.color ? props.color : '#000'};
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  font-size: ${props => props.fontSize ? scaleFontSize(props.fontSize) : 14}px;
`

export const ProfileContainer = styled.View`
  width: 100%;
  height: 340px;
  background-color: #fff;
  align-items: center;
  border-radius: 8px;
  elevation: 2;
  margin-bottom: 10px;
`

export const ProfileImage = styled.Image`
  width: 30%;
  height: 30%;
  border-radius: ${340/2}px;
  resize-mode: contain;
  margin: 10px 0 10px;
`

export const TextBio = styled(TextBase)`
  padding: 0 10% 0 10%;
  margin-top: 10px;
  text-align: center;
`

export const ProfileSocialBox = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`

export const SocialBoxAtom = styled.View`
  align-items: center;
`

export const ProfileLocationBox = styled(ProfileSocialBox)`
  justify-content: center;
`

export const RepositoryContainer = styled.View`
  width: 100%;
  height: 110px;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-radius: 8px;
  elevation: 2;
  margin: 0 0 5px 0px;
  border-top-width: 8px;
  border-top-color: ${props => props.repoColor ? props.repoColor : '#000'};
  padding: 10px;
`

export const RepositoryInfo = styled.View`
  flex: 1;
` 

export const LanguageContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

export const LanguageCircle = styled.View`
  width: 10px;
  height: 10px;
  margin-right: 10px;
  border-radius: 5px;
  background-color: ${props => props.repoColor ? props.repoColor : '#000'};
`