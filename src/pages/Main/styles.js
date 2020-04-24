import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10
  },
  searchBarContainer: {
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 2,
    borderRadius: 8,
    marginBottom: 10
  },
  searchIcon: {
    paddingHorizontal: 10
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 5
  },
  imageLogo: {
    height: '20%',
    resizeMode: 'contain',
  },
  profileContainer: {
    width: '100%',
    height: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 2,
    borderRadius: 8,
    marginBottom: 10
  },
  profileImage: {
    width: '20%',
    height: '100%',
    borderRadius: 100,
    resizeMode: 'contain',
    margin: 10,
  },
  profileInfo: {
    flex: 1,
  },
  profileInfoMainText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5
  }
})