import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  followerInfo:{
    flexDirection: 'row',
    flex: 1,
    height: '100%',
    alignItems: 'center'
  }, 
  followerContainer: {
    width: '100%',
    height: 70,
    backgroundColor: 'white',
    elevation: 2,
    marginBottom: 5,
    flexDirection: 'row',
    borderRadius: 8,
    alignItems: 'center',
  },
  flatList: {
    flex: 1,
    width: '100%',
    padding: 10
  },
  followerImage: {
    width: '20%',
    height: '80%',
    borderRadius: 100,
    resizeMode: 'contain',
    marginHorizontal: 10
  },
  followerUsername: {
    fontWeight: 'bold'
  }
})