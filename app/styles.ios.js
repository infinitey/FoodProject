

import { StyleSheet } from 'react-native'
import colors from './colors'
import fontf from './fontf'

export default StyleSheet.create({

  navHeader: {
    backgroundColor: colors.headerBGColor,
  },

  navHeaderText: {
    fontFamily: fontf.headerFont,
    fontSize: 18,
    color: colors.primaryColor,
    padding: 5,
    paddingLeft: 10,
    backgroundColor: colors.headerBGColor,
    maxWidth: 150,
  },

  container: {
      backgroundColor: colors.contentBGColor,
      flex: 1,
  },

  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    flex:1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  map: {
    flex:0.5,
    height: 200,
    width: 400,
    marginBottom:7,
  },

  formContainer: {
    paddingTop:8,
    paddingLeft:10,
    paddingRight:10,
    paddingBottom: 6,
  },

  normalText: {
    fontFamily: fontf.primaryFont,
    fontSize: 12,
    color: colors.primaryColor,
  },

  brandCard : {
    maxHeight: 200,
    maxWidth: null,
    justifyContent: 'flex-end',
  },

  storeInfoCard: {
    height: 100,
    width:400,
    marginTop: 7,
    marginBottom: 7,
    paddingTop:10,
    paddingLeft: 10,
    backgroundColor: colors.contentBGColor,


  },

  promotionImg : {
    maxHeight: 100,
    maxWidth: undefined,
    justifyContent: 'flex-end',
  },

  button: {
    borderRadius: 4,
    margin: 0,
    backgroundColor: colors.submitButtonColor,
    padding:12.5,
    marginTop: 6,
    marginBottom: 6,
  },

  btmButton: {
    borderRadius: 4,
    margin: 0,
    backgroundColor: colors.submitButtonColor,
    padding:12.5,
  },

  buttonText: {
    fontFamily: fontf.buttonFont,
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.primaryColor,
    alignSelf: 'center',

  },

  questionText: {
    fontFamily: fontf.buttonFont,
    fontSize: 10,
    color: colors.primaryColor,
    marginTop: 6,
    marginBottom: 6,
  },

  contentText: {
    fontFamily: fontf.buttonFont,
    fontSize: 12,
    color: colors.primaryColor,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 40,
    marginRight: 40,
    textAlign: 'center',
    alignSelf: 'center'
  },

  googleIconButton: {
    justifyContent: 'center',
    backgroundColor: colors.submitButtonColor,
  },

  standardMargin : {
    marginTop: 6,
    marginBottom: 6,
  },

  input : {
    flex: 1
  },

  inputContainer : {
    borderWidth: 1,
    borderBottomColor: '#CCC',
    borderColor: 'transparent',
    flexDirection: 'row',
    marginTop: 15,
    paddingBottom: 5
  },

  textIconContainer : {
    marginLeft:10,
    marginRight:20
  },

  backButton : {
    marginLeft:10,
    marginTop:10
  },

  homeButton : {
    marginLeft:15,
    marginTop:15
  },

  bigIconContainer : {
    margin:20,
    alignSelf: 'center',
  },

  bigText : {
    fontFamily: fontf.headerFont,
    fontSize: 16,
    color: colors.primaryColor,
    textAlign: 'center'
  },

  xBigText : {
    fontFamily: fontf.headerFont,
    fontSize: 24,
    color: colors.primaryColor,
    textAlign: 'center'
  },

  usernameHeader : {
    backgroundColor: colors.submitButtonColor,
    alignItems: 'center',
  },

  usernameHeaderText : {
    fontFamily: fontf.primaryFont,
    fontSize: 12,
    color: colors.primaryColor,
    textAlign: 'center',
    marginTop:10,
    marginBottom: 10,
  },

});
