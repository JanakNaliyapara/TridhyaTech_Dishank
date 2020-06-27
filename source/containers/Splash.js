import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../assets/styles';

export default class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Login');
    }, 2000);
  }

  render() {
    return (
      <LinearGradient
        start={{x: 0, y: 1.7}}
        end={{x: 1, y: 0}}
        colors={['#4568DC', '#B06AB3']}
        style={[styles.container, styles.center]}>
        <Text style={[styles.TTsub_title, {fontSize: 30}]}>
          Welcome to the world of
        </Text>
        <Text style={styles.TTtitle}>Tridhya Tech</Text>
      </LinearGradient>
    );
  }
}
