const userUrlbase = 'https://api.github.com/users/'

async function getUser(username) {
  let user = await fetch(userUrlbase + username)
  user = await user.json()
  return user
}

async function getRepositories(reposUrl) {
  let repositories = await fetch(reposUrl)
  repositories = await repositories.json()
  return repositories
}

async function getSocialInfoFromPage(socialUrl, page){
  let socialInfo = await fetch(`${socialUrl}?page=${page}`)
  socialInfo = await socialInfo.json()
  return socialInfo
}

async function getRepoLastCommit(userLogin, userRepo) {
  let repoLastCommit = await fetch(`https://api.github.com/repos/${userLogin}/${userRepo}/commits`)
  repoLastCommit = await repoLastCommit.json()
  return await getRepositoryNode(repoLastCommit[0].commit.tree.url)
}

async function getRepositoryNode(treeUrl) {
  let localNode = await fetch(treeUrl)
  localNode = await localNode.json() 
  let nodeArray = []

  localNode.tree.map(node => {
    nodeArray = nodeArray.concat(node)
  })

  return nodeArray
}

module.exports = {
  getUser,
  getRepositories,
  getSocialInfoFromPage,
  getRepoLastCommit,
}