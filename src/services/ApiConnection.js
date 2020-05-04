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

async function getRepoLastCommit() {
  let repoLastCommit = await fetch('https://api.github.com/repos/Eldeerick/github-repos/commits')
  repoLastCommit = await repoLastCommit.json()
  await getRepositoryTree(repoLastCommit[0].commit.tree.url)
}

async function getRepositoryTree(treeUrl) {
  let localNode = await fetch(treeUrl)
  localNode = await localNode.json() 
  
  localNode.tree.map(node => {
    if(node.type === 'blob'){
      console.log('File: ' + node.path)
    }
    if(node.type === 'tree'){
      console.log('Folder: ' + node.path)
    }
  })
  
}

module.exports = {
  getUser,
  getRepositories,
  getSocialInfoFromPage,
  getRepoLastCommit,
}