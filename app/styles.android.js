

import { StyleSheet } from 'react-native'
import colors from './colors'

export default StyleSheet.create({

  navHeader: {
    backgroundColor: colors.headerBGColor,
  },

  navHeaderText: {
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

  formContainer: {
    padding: 10,
  },

  normalText: {
    fontSize: 12,
    color: colors.primaryColor,
  },

  brandCard : {
    maxHeight: 200,
    maxWidth: null,
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
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.primaryColor,
    alignSelf: 'center',

  },

  questionText: {
    fontSize: 10,
    color: colors.primaryColor,
    marginTop: 6,
    marginBottom: 6,
  },

  contentText: {
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

  backButton : {
    marginLeft:10,
    marginTop:10
  },

  bigIconContainer : {
    margin:20,
    alignSelf: 'center',
  },

  bigText : {
    fontSize: 16,
    color: colors.primaryColor,
    textAlign: 'center'
  },

  xBigText : {
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
  }


});
