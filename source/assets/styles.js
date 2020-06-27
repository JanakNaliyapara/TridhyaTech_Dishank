import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginView: {
    width: 100,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },

  loginTop: {
    width: '100%',
    height: '35%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 8,
  },

  TTtitle: {
    fontFamily: 'DancingScript-Medium',
    color: '#FFFFFF',
    fontSize: 40,
  },

  TTsub_title: {
    fontFamily: 'DancingScript-Medium',
    color: '#FFFFFF',
    fontSize: 40,
  },

  inputbox: {
    width: '100%',
    height: 45,
    padding: 2.5,
    borderRadius: 5,
    elevation: 4,
  },

  inputText: {
    fontFamily: 'Quicksand-Light',
    fontSize: 13,
    color: '#B06AB3',
  },

  TTreg_text: {
    fontFamily: 'Quicksand-Light',
    color: '#FFFFFF',
    fontSize: 12,
  },

  TTmed_text: {
    fontFamily: 'Quicksand-Regular',
    color: '#FFFFFF',
    marginVertical: 2,
    fontSize: 15,
  },

  divider: {
    width: '100%',
    height: 20,
  },

  button: {
    width: '100%',
    height: 45,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    elevation: 5,
  },

  icons: {
    width: 25,
    height: 25,
    tintColor: '#FFFFFF',
    resizeMode: 'contain',
  },

  filter_view: {
    flexDirection: 'row',
    width: '40%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  filter_back: {
    width: '100%',
    height: 50,
    elevation: 10,
  },

  TTfilter: {
    width: '80%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  list_view:{
    width: '95%',
    alignSelf: 'center',
    marginVertical: 5,
    borderRadius: 5,
    minHeight: 50,
    padding: 5,
    backgroundColor: '#B06AB3',
    elevation: 5,
  },

  check: {
    width: 30,
    height: 30,
    borderRadius: 5,
    backgroundColor: 'orange',
  },

  uncheck: {
    width: 30,
    height: 30,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },

  TTsocial_view: {
    width: '50%',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-around',
  },

  TTsocial_button: {
    width: 50,
    height: 50,
    elevation: 5,
    borderRadius: 25,
  },
});

export default styles;
