import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../assets/styles';
import {InputBox, RoundButton} from '../components';
import {onFacebookLogin, onGoogleLogin} from '../Functions';
import {GoogleSignin} from '@react-native-community/google-signin';

export default class Login extends Component {
  constructor(props) {
    super();
    this.unsubscribe = null;
  }

  Divider() {
    return <View style={styles.divider} />;
  }

  componentDidMount() {
    GoogleSignin.configure({
      webClientId:
        '828266245104-sle0apadcruc7u5davpodim3apar8tvg.apps.googleusercontent.com',
    });
  }

  render() {
    return (
      <View style={[styles.container, {backgroundColor: '#FFFFFF'}]}>
        <LinearGradient
          start={{x: 1.9, y: 0}}
          end={{x: 0, y: 1}}
          colors={['#4568DC', '#B06AB3']}
          style={styles.loginTop}>
          <Text
            style={{
              fontFamily: 'DancingScript-Medium',
              color: '#FFFFFF',
              fontSize: 40,
            }}>
            Tridhya Tech
          </Text>
        </LinearGradient>

        <View
          style={[
            styles.container,
            styles.center,
            {
              paddingVertical: '5%',
              paddingHorizontal: '5%',
              backgroundColor: '#FFFFFF',
            },
          ]}>
          <InputBox title={'UserId'} />

          <this.Divider />

          <InputBox title={'Password'} password />

          <this.Divider />

          <Text style={styles.inputText}>Forgot Password ?</Text>

          <this.Divider />

          <TouchableOpacity activeOpacity={0.9} style={styles.button}>
            <LinearGradient
              start={{x: 1.9, y: 0}}
              end={{x: 0, y: 1}}
              colors={['#4568DC', '#B06AB3']}
              style={[styles.container, styles.center, {borderRadius: 5}]}>
              <Text style={styles.TTmed_text}>Sign In</Text>
            </LinearGradient>
          </TouchableOpacity>

          <this.Divider />

          <Text style={styles.inputText}> --- Login With Social --- </Text>

          <this.Divider />

          <View style={styles.TTsocial_view}>
            <RoundButton
              onPress={() => onFacebookLogin(this.props)}
              image={require('../assets/imgs/fb.png')}
            />
            <RoundButton
              onPress={() => onGoogleLogin(this.props)}
              image={require('../assets/imgs/google.png')}
            />
          </View>
        </View>
      </View>
    );
  }
}
