const IOS_NAV_BAR_HEIGHT = 44
const IOS_STATUS_BAR_HEIGHT = 20
const ANDROID_NAV_BAR_HEIGHT = 56
const ANDROID_STATUS_BAR_HEIGHT = 24

module.exports = {
  navBarContainer: {},
  statusBarIOS: {
    height: IOS_STATUS_BAR_HEIGHT,
    backgroundColor: '#eee',
  },
  statusBarAndroid: {
    height: ANDROID_STATUS_BAR_HEIGHT,
    backgroundColor: '#eee',
  },
  navBar: {
    backgroundColor: '#eee',
    borderTopWidth: 0,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navBarIOS: {
    height: IOS_NAV_BAR_HEIGHT,
    paddingLeft: 8,
    paddingRight: 8,
  },
  navBarAndroid: {
    height: ANDROID_NAV_BAR_HEIGHT,
    padding: 16,
  },
  navBarButtonIOS: {
    marginLeft: 0,
  },
  navBarButtonAndroid: {
    marginLeft: 16,
  },
  navBarButtonText: {
    fontSize: 17,
    letterSpacing: 0.5,
    color: '#999',
  },
  navBarTitleText: {
    fontSize: 17,
    letterSpacing: 0.5,
    color: '#333',
    fontWeight: '500',
    textAlign: 'center',
  },
}
