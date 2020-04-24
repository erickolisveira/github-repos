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
    color: 'gray'
  },
  profileBio: {
    marginTop: 10,
    width: '80%',
    textAlign: 'center'
  },
  profileSocialInfoBox: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20
  },
  profileSocialAtomBox: {
    alignItems: 'center'
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -15,
    marginTop: 10
  },
  profileLocationText: {
    fontSize: 16,
    marginLeft: 2
  },
  repositorieBox: {
    width: '100%',
    height: 100,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 8,
    elevation: 2,
    marginBottom: 5,
    borderTopWidth: 8,
    borderTopColor: 'black'
  }
})