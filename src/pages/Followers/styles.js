import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10
  },
  followerContainer: {
    width: '100%',
    height: '10%',
    backgroundColor: 'white',
    elevation: 2,
    marginBottom: 10,
    flexDirection: 'row',
    borderRadius: 8,
    alignItems: 'center',
  },
  followerImage: {
    width: '20%',
    height: '80%',
    borderRadius: 100,
    resizeMode: 'contain',
  },
  followerUsername: {
    fontWeight: 'bold'
  }
})