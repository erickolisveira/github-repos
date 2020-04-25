import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10
  },
  profileContainer: {
    width: '100%',
    height: 340,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 8,
    elevation: 2,
    marginBottom: 10,
  },
  profileImage: {
    width: '30%',
    height: '30%',
    borderRadius: 100,
    resizeMode: 'contain',
    marginVertical: 10
  },
  profileUsername: {
    fontWeight: 'bold',
    fontSize: 22,
  }, 
  profileSubUsername: {
    fontSize: 16, 
    color: 'gray',
  },
  profileBio: {
    alignItems: 'center', 
    justifyContent: 'center',
    paddingHorizontal: '10%',
    flex: 1,
    marginTop: 10,
    textAlign: 'center',
  },
  profileSocialInfoBox: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  profileSocialAtomBox: {
    alignItems: 'center',
  },
  profileFollowText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'gray'
  },
  profileFollowNumber: {
    fontWeight: 'bold',
  },
  profileLocationBox: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileLocationText: {
    fontSize: 16,
    marginLeft: 2
  },
  repositorieBox: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 110,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 2,
    marginBottom: 5,
    borderTopWidth: 8,
    borderTopColor: 'black',
    padding: 10
  },
  yourRepositories: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  repositorieInfo: {
    flex: 1
  },
  repositorieName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5
  },
  repositorieDescription: {
    marginBottom: 5
  },
  repositorieLanguage: {

  }
})