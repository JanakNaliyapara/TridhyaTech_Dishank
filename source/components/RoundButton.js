import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../assets/styles';
import {TTFadeView} from '.';

export default function RoundButton(props) {
  return (
    <TTFadeView>
      <TouchableOpacity onPress={props.onPress} activeOpacity={0.7}>
        <LinearGradient
          start={{x: 3, y: 0}}
          end={{x: 0, y: 1}}
          colors={['#4568DC', '#B06AB3']}
          style={[props.style, styles.center, styles.TTsocial_button]}>
          <Image source={props.image} style={styles.icons} />
        </LinearGradient>
      </TouchableOpacity>
    </TTFadeView>
  );
}
