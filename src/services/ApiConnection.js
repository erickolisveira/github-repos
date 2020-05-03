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

module.exports = {
  getUser,
  getRepositories,
  getSocialInfoFromPage,
}