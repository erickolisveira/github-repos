import React from 'react';
import { Text } from 'react-native';

import { 
  Container 
} from './styles';

export default function Repository(props) {
  const { route: { params: { repoNode, repo} }, navigation } = props

  return (
    <Container>
      <Text>{ repo.name }</Text>
      { repoNode.map(node => <Text key={node.sha} >{node.path}</Text>) }
    </Container>
  )
}