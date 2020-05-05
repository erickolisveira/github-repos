import React, { useEffect } from "react";

import { Api } from "../../services";

import { 
  Container, 
  Text,
  RepoInfoView, 
  Header, 
  RepoStarsForksView, 
  ViewCodeTouchable, 
  IconStarEmpty ,
  IconFork
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
        <Text>{repo.owner.login}</Text>
        <Header>{repo.name}</Header>
        <Text>{repo.description}</Text>
        <RepoStarsForksView>
          <IconStarEmpty />
          <Text>{repo.stargazers_count} stars</Text>
          <IconFork />
          <Text>{repo.forks_count} forks</Text>
        </RepoStarsForksView>  
      </RepoInfoView>
      <ViewCodeTouchable>
        <Text>Ver código</Text>
      </ViewCodeTouchable>
    </Container>
  );
}
