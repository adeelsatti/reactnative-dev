import { Dimensions, Platform, StyleSheet } from 'react-native'
import { moderateScale, scale } from 'react-native-size-matters'
import Images from './Images'
import { MetricsHorizontal, MetricsMod } from './index'
// local imports

const WINDOW_WIDTH = Dimensions.get('window').width
const WINDOW_HEIGHT = Dimensions.get('window').height

const colorSet = {
  mainThemeBackgroundColor: '#ffffff',
  mainThemeForegroundColor: '#3875e8',
  mainTextColor: '#151723',
  mainSubtextColor: '#7e7e7e',
  hairlineColor: '#e0e0e0',
  subHairlineColor: '#f2f2f3',
  tint: '#3068CC',
  greyishWhite: '#CECED0',
  facebook: '#4267b2',
  navyBlue: '#000080',
  grey: 'grey',
  lightGreyishI: '#c9c6cc',
  lightGreyishVII: '#C4C9B9',
  lightGreyishVI: '#dfdfdf',
  purpleLightII: 'rgba(123, 72, 191, 0.06)',
  greyish: '#e5e5e5',
  trackColor: '#DCE1F3',
  greyishI: '#d6d6d6',
  greyishIIII: '#C5C5C5',
  lightGreyish: '#f7f7f7',
  whiteSmoke: '#f5f5f5',
  headerStyleColor: '#ffffff',
  headerTintColor: '#000000',
  bottomStyleColor: '#ffffff',
  lightPurpleIII: '#FEFCFF',
  bottomTintColor: 'grey',
  mainButtonColor: '#e8f1fd',
  subButtonColor: '#eaecf0',
  black: '#060606',
  blackN: '#393939',
  headerBack: '#A0A0A1',
  blackX: '#6E6D71',
  blackXX: '#949494',
  blackXXX: '#b3b3b3',
  blackXXXX: '#696969',
  blackXXXXX: '#8A8A8F',
  blackXXXXXX: 'rgba(57, 57, 57, 0.6)',
  blackIX: 'rgba(57, 57, 57, 0.3)',
  darkBlack: '#3a3a3a',
  xGreen: '#14b14d',
  greenI: '#1ab14d',
  white: '#ffffff',
  placeholderBG: '#DADADA',
  placeholderFG: '#EEEEEE',
  semiWhite: 'rgba(255, 255, 255, 0.2)',
  semiWhiteI: 'rgba(255, 255, 255, 0.5)',
  semiWhiteII: 'rgba(255, 255, 255, 0.16)',
  semiWhiteIII: 'rgba(192,192,192, 0.8)',
  semiWhiteIV: 'rgba(50, 50, 50, 0.6)',
  rbSheetBar: 'rgba(232, 228, 240, 0.6)',
  steel: '#D0D0D0',
  green: '#67DA00',
  greenX: '#4cbe00',
  greenXX: '#32A136',
  greenXXX: '#9ECF5D',
  ferozy: '#1AC7A7',
  sea: '#8FCAD9',
  lightSea: '#E4F1FF',
  unreadColor: '#E5F1FF',
  purple: '#7A48C0',
  purpleI: 'rgba(122,72,192,0.7)',
  purpleLight: '#8782c0',
  purpleLightI: '#DBD1EA',
  purpleLightIII: '#F3EFF9',
  semiPurple: 'rgba(123, 72, 191, 0.09)',
  semiPurpleI: 'rgba(116, 78, 186, 0.05)',
  lightPurple: 'rgba(123, 72, 191, 0.4)',
  lightPurpleI: 'rgba(122, 72, 192, 0.3)',
  lightPurpleII: 'rgba(123, 72, 191, 0.1)',
  lightSilver: 'rgba(104, 104, 104, 0.08)',
  lightSilverII: 'rgba(105, 105, 105, 0.06)',
  semiBlack: 'rgba(0,0,0,0.5)',
  semiBlackI: 'rgba(0,0,0,0.3)',
  purpleII: 'rgba(115, 77, 185, 0.6)',
  pink: '#F20077',
  red: 'red',
  redI: '#E45A59',
  lightRedI: '#FED2D1',
  darkRedI: '#FA1C19',
  lightRedIII: '#FC6F53',
  lightPink: '#F6B2FF',
  lightPinkI: 'rgba(227, 35, 120, 0.09)',
  silver: '#cdcdcd',
  silverI: '#C1C1C1',
  silverII: '#C4C4C4',
  transparent: 'rgba(0,0,0,0)',
  greyishII: '#bebebe',
  greyishVIX: '#616161',
  greyishXXI: '#BEBCBD',
  greyishXI: '#767676',
  greyishXIII: '#EDEDF3',
  greyishLight: '#ebebeb',
  greyishIII: '#727272',
  greyishIV: '#686868',
  greyishV: '#393939', // rgb(57,57,57)
  greyishVI: '#636363', // rgb(99,99,99)
  greyishVII: '#E8E8E8', // rgb(99,99,99)
  greyishVIII: '#F1EFF6',
  greyishIX: '#979797',
  greyishX: '#B4B4B4',
  greyishXX: 'rgba(123, 72, 191, 0.09)',
  greyishXXX: 'rgba(57,57,57, 0.4)',
  greyishXXXI: 'rgba(243, 243, 245, 0.83)',
  darkGreyIII: '#757575',
  darkGrey: '#727272',
  placeholder: '#bfbebe',
  backdrop: '#7F7A86',
  offWhite: '#f3f4fa',
  offWhiteNew: '#F2F2F2',
  offWhiteX: '#fbfbfb',
  offWhiteI: '#F3F3F5',
  offWhiteII: 'rgba(0,0,0,0.5)',
  grad1: '#565656',
  grad2: '#C7C7C7',
  dividerColor: '#DADADA',
  pinkI: '#E22478',
  pinkII: '#e32378',
  blue: '#6099FD',
  blueI: '#007AFF',
  blueII: 'rgba(21,107,261,1)',
  whitish: '#E0E0E1',
  greyX: '#F2F2F5',
  greyXI: '#D2D1D1',
  backdropII: 'rgba(0,0,0,0.6)',
  backdropIII: 'rgba(0,0,0,0.8)',

  lightWhite: 'rgba(255, 255, 255, 0.5)',

  yellowGrad1: 'rgb(255,255,255)',
  yellowGrad2: 'rgb(239,241,234)',
  yellow: '#FFB71A',
  semiGreyish: 'rgba(105, 105, 105, 0.06)',
  lightGreen: 'rgba(76, 175, 80, 0.07)',
  lightGreenI: '#DBEFDC',
  lightGreenII: '#48BD8E',
  lightGreenIV: 'rgba(72, 189, 142, 0.13)',
  lightGreenV: 'rgba(72, 189, 142, 0.16)',
  darkGreenI: '#4CAF50',
  lightYellow: 'rgba(255, 198, 2, 0.07)',
  lightYellowI: '#FFFF99',
  yellowI: '#FEE69F',
  lightRed: 'rgba(250, 28, 25, 0.06)',
  lightRedII: 'rgba(252, 111, 83, 0.13)',
  lightGray: 'rgba(57, 57, 57, 0.06)',
  lightBlack: 'rgba(57, 57, 57, 0.5)',
  lightBlackVII: 'rgba(57, 57, 57, 0.7)',
  lightBlue: 'rgba(81, 142, 238, 0.13)',
  lightRedProgress: 'rgba(249, 46, 44, 0.1)',
  darkBlue: '#518EEE',
  fadeColor: 'rgba(0,0,0,0.4)',
  fadeColorII: 'rgba(0,0,0,0.03)',

  lightOrange: 'rgba(242, 150, 65, 0.1)',
  darkOrange: '#F29641',

  greyWhite: 'rgba(122, 72, 192, 0.29)',

  purpleBlue: '#7B48BF',
  greyWhiteI: 'rgba(105, 105, 105, 0.06)',
  darkGreyII: '#686868',
  lightBlueText: '#518EF8',
  lightGreyText: 'rgba(81, 142, 248, 0.1)',
  textBlur: 'rgba(57, 57, 57, 0.3)',
  whiteBlur: 'rgba(255, 255, 255, 0.7)',
  whiteBlurI: 'rgba(255, 255, 255, 0.4)',
  whiteBlurII: 'rgba(255, 255, 255, 0.5)',
  whiteBlurIII: 'rgba(255, 255, 255, 0.1)',
  lightGreyishII: 'rgba(246, 246, 246, 0.9)',
  whiteBlurIV: 'rgba(57, 57, 57, 0.2)',
  darkRed: '#F92E2C',
  lightPinkish: 'rgba(249, 46, 44, 0.09)',
  purpleLine: '#C8B6E2',
  greyBackGround: 'rgba(218, 218, 218, 0.7)',
  modalBackgroundColor: 'rgba(21, 5, 47, 0.4)',
  darkPurple: '#230F42',
  lightBlueI: '#27CCCC',
  darkBlackGrey: '#222222',
  parrotGreen: '#3DBFA7',
  parrotGreenLight: '#3DBFB8',
  lightGreyI: '#CACAD0',
  darkGreyI: '#434343',
  mashPurple: '#7A48C0',
  barBlue: '#2B5EB8',
  barBlueII: '#153574',
  borderPurple: 'rgba(122, 72, 192, 0.5)'
}

const navThemeConstants = {
  light: {
    backgroundColor: '#fff',
    fontColor: '#000',
    activeTintColor: '#3875e8',
    inactiveTintColor: '#ccc',
    hairlineColor: '#e0e0e0',
    inputFormattingDirCol: 'red'
  },
  dark: {
    backgroundColor: '#000',
    fontColor: '#ffffff',
    activeTintColor: '#3875e8',
    inactiveTintColor: '#888',
    hairlineColor: '#222222',
    inputFormattingDirCol: 'white'
  },
  main: '#3875e8'
}

const imageSet = {
  shopertinoLogo: Images.shopertinoLogo,
  boederImgSend: Images.boederImgSend,
  boederImgReceive: Images.boederImgReceive,
  textBoederImgSend: Images.textBoederImgSend,
  textBoederImgReceive: Images.textBoederImgReceive,
  chat: Images.chat_icon,
  file: Images.file,
  like: Images.like_icon,
  notification: Images.notification_icon,
  photo: Images.photo,
  pin: Images.pin,
  video: Images.video,
  audio: Images.audio,
  audioPlay: Images.audioPlay_icon,
  videoPlay: Images.videoPlay,
  clock: Images.clock_icon
}

const iconSet = {
  menuHamburger: Images.menuHamburger,
  homeUnfilled: Images.homeUnfilled,
  homefilled: Images.homefilled,
  search: Images.search_icon,
  magnifier: Images.magnifier,
  commentUnfilled: Images.commentUnfilled,
  commentFilled: Images.commentFilled,
  friendsUnfilled: Images.friendsUnfilled,
  friendsFilled: Images.friendsFilled,
  profileUnfilled: Images.profileUnfilled,
  profileFilled: Images.profileFilled,
  camera: Images.camera_icon,
  cameraFilled: Images.cameraFilled,
  inscription: Images.inscription,
  more: Images.more,
  send: Images.send,
  pinpoint: Images.pinpoint,
  checked: Images.checked_icon,
  bell: Images.bell_icon,
  surprised: Images.surprised,
  laugh: Images.laugh,
  cry: Images.cry,
  thumbsupUnfilled: Images.thumbsupUnfilled,
  heartUnfilled: Images.heartUnfilled,
  like: Images.like_icon_sm,
  love: Images.love,
  angry: Images.angry,
  cameraRotate: Images.cameraRotate,
  libraryLandscape: Images.libraryLandscape,
  logout: Images.logout_icon
}

const fontFamily = {
  proximaRegular: 'PROXIMANOVA-REGULAR',
  proximaBold: 'PROXIMANOVA-BOLD'
}

const fontSet = {
  xxxlarge: scale(50),
  xxlarge: scale(40),
  xmlarge: scale(35),
  xlarge: scale(30),
  largeII: scale(26),
  large: scale(25),
  largeI: scale(24),
  middleIII: scale(23),
  middleII: scale(22),
  middleI: scale(21),
  middle: scale(20),
  xmiddle: scale(18),
  xmiddleI: scale(19),
  normalI: scale(17),
  normal: scale(16),
  mediumI: scale(15),
  medium: scale(14),
  smallI: scale(13.5),
  small: scale(13),
  tiny: scale(13),
  smaller: scale(12),
  xsmall: scale(11),
  xsmallII: scale(10),
  xxsmallI: scale(9),
  xxsmall: scale(8),
  xxxsmall: scale(5),
  title: scale(30),
  content: scale(20)
}

const loadingModal = {
  color: '#FFFFFF',
  size: 20,
  overlayColor: 'rgba(0,0,0,0.5)',
  closeOnTouch: false,
  loadingType: 'Spinner' // 'Bubbles', 'DoubleBounce', 'Bars', 'Pulse', 'Spinner'
}

const sizeSet = {
  buttonWidth: '70%',
  inputWidth: '80%',
  radius: 25
}

const styleSet = {
  menuBtn: {
    container: {
      backgroundColor: colorSet.grayBgColor,
      borderRadius: 22.5,
      padding: 10,
      marginLeft: 10,
      marginRight: 10
    },
    icon: {
      tintColor: 'black',
      width: 15,
      height: 15
    }
  },
  searchBar: {
    container: {
      marginLeft: Platform.OS === 'ios' ? 30 : 0,
      backgroundColor: 'transparent',
      borderBottomColor: 'transparent',
      borderTopColor: 'transparent',
      flex: 1
    },
    input: {
      backgroundColor: colorSet.inputBgColor,
      borderRadius: 10,
      color: 'black'
    }
  },
  rightNavButton: {
    marginRight: 10
  },
  borderRadius: {
    main: 25,
    small: 5
  },
  textInputWidth: {
    main: '80%'
  },
  bottomRightActionBtn: {
    position: 'absolute',
    right: moderateScale(20),
    bottom: moderateScale(20)
  },
  background: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colorSet.purple
  },
  input: {
    minHeight: moderateScale(45),
    paddingHorizontal: moderateScale(15)
  },
  inputMultiLine: {
    minHeight: moderateScale(45),
    paddingHorizontal: moderateScale(15),
    ...Platform.select({
      ios: {
        paddingTop: moderateScale(10)
      }
    })
  },
  listContentContainer: {
    flexGrow: 1
  },
  settingsCommon: {
    fontSize: fontSet.small,
    color: colorSet.greyishIV,
    backgroundColor: 'transparent',
    textAlignVertical: 'center',
    paddingVertical: MetricsMod.baseMarginIII,
    paddingHorizontal: MetricsHorizontal.marginFifteen,
    textTransform: 'uppercase'
  },
  settingTopBottomWidth: {
    marginTop: MetricsMod.baseMarginII,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colorSet.dividerColor,
    backgroundColor: colorSet.white
  },
  settingSectionTopMargin: {
    marginTop: MetricsMod.fortyTwo,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colorSet.dividerColor,
    backgroundColor: colorSet.white
  },
  settingCommonBackground: {
    flex: 1,
    backgroundColor: colorSet.offWhite
  },
  settingCommonTitleStyle: {
    fontSize: fontSet.small,
    color: colorSet.greyishIV,
    textTransform: 'uppercase',
    marginLeft: scale(15)
  },
  settingCommonMarginTop: {
    marginTop: MetricsMod.twentyEight
  },
  settingCommonSearchContainer: {
    marginVertical: MetricsMod.marginFifteen
  },
  settingCommonListItem: {
    color: colorSet.blackN,
    fontFamily: fontFamily.proximaRegular,
    fontSize: fontSet.small
  },
  settingCommonListLeftRightItem: {
    flex: 1,
    color: colorSet.blackN,
    fontSize: fontSet.small,
    fontFamily: fontFamily.proximaRegular
  },
  borderTop: {
    borderTopWidth: MetricsMod.horizontalLineHeight,
    borderTopColor: colorSet.dividerColor
  },
  borderBottom: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colorSet.dividerColor
  },
  borderTopBottom: {
    borderBottomWidth: MetricsMod.horizontalLineHeight,
    borderBottomColor: colorSet.dividerColor,
    borderTopWidth: MetricsMod.horizontalLineHeight,
    borderTopColor: colorSet.dividerColor
  }
}

const requestType = {
  REQUEST_NONE: 0,
  REQUEST_TO_HIM: 1,
  REQUEST_TO_ME: 2,
  FRIEND: 3,
  PENDING_FRIEND: 4
}

const actionObj = {
  ADD: 'Add',
  CANCEL: 'Cancel',
  ACCEPT: 'Accept',
  UNFRIEND: 'Unfriend'
}

const friendActions = []
friendActions[requestType.REQUEST_NONE] = actionObj.ADD
friendActions[requestType.REQUEST_TO_HIM] = actionObj.CANCEL
friendActions[requestType.REQUEST_TO_ME] = actionObj.ACCEPT
friendActions[requestType.FRIEND] = actionObj.UNFRIEND
friendActions[requestType.PENDING_FRIEND] = actionObj.ACCEPT

const StyleDict = {
  imageSet,
  iconSet,
  fontFamily,
  colorSet,
  navThemeConstants,
  fontSet,
  sizeSet,
  styleSet,
  loadingModal,
  WINDOW_WIDTH,
  WINDOW_HEIGHT,
  requestType,
  actionObj,
  friendActions
}

export default StyleDict
