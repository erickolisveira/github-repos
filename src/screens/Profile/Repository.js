import React from 'react'

import RepoColorPicker from '../../utils/RepoColorPicker'
import { ChevronButton } from '../../components'

import {
  Text,
  RepositoryContainer,
  RepositoryInfo,
  LanguageCircle,
  LanguageContainer
} from './styles'

export default function Repository({ repo }) {
  if(!repo.description){
    repo.description = 'Repositório sem descrição!'
  }

  let repoColor = RepoColorPicker(repo.language)

  return (
    <RepositoryContainer repoColor={ repoColor }>
      <RepositoryInfo>
        <Text bold fontSize='16'>{ repo.name }</Text>
        <Text color='gray'>
          { repo.description.length > 150 
            ? repo.description.substring(0, 150).concat('...') 
            : repo.description }
        </Text>
        <LanguageContainer>
          <LanguageCircle repoColor={ repoColor }/>
          <Text>{ repo.language }</Text>
        </LanguageContainer>
      </RepositoryInfo>
      <ChevronButton />
    </RepositoryContainer>
  )
}