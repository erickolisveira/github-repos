import React, { useEffect } from "react";

import { Api } from "../../services";

import { 
  Container, 
  Text,
  RowCenterView,
  OwnerImage,
  RepoInfoView, 
  Header, 
  RepoStarsForksView, 
  ViewCodeTouchable, 
  IconStarEmpty,
  IconFork,
  IconFileCode,
  IconCommit
} from "./styles";

export default function Repository(props) {
  const {
    route: { params: repo },
  } = props;

  /*useEffect(() => {
    async function getRepositoryBaseNode() {
      const repoNode = await Api.getRepoLastCommit(repo.owner.login, repo.name);
    }
    getRepositoryBaseNode();
  }, []);*/

  //{ repoNode.map(node => <Text key={node.sha} >{node.path}</Text>) }
  return (
    <Container>
      <RepoInfoView>
        <RowCenterView>
          <OwnerImage source={{ uri: repo.owner.avatar_url }}/>
          <Text color='gray'>{repo.owner.login}</Text>
        </RowCenterView>
        <Header>{repo.name}</Header>
        <Text>{repo.description}</Text>
        <RepoStarsForksView>
          <RowCenterView>
            <IconStarEmpty />
            <Text>{repo.stargazers_count} stars</Text>
          </RowCenterView>
          <RowCenterView>
            <IconFork />
            <Text>{repo.forks_count} forks</Text>
          </RowCenterView>
        </RepoStarsForksView>  
      </RepoInfoView>
      <ViewCodeTouchable>
        <IconFileCode />
        <Text>Ver código</Text>
      </ViewCodeTouchable>
      <ViewCodeTouchable>
        <IconCommit />
        <Text>Commits</Text>
      </ViewCodeTouchable>
    </Container>
  );
}
