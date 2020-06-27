import React from 'react';
import {View, TextInput} from 'react-native';
import styles from '../assets/styles';
import LinearGradient from 'react-native-linear-gradient';
import TTFadeView from './TTFadeView';

export default function Iputbox(props) {
  const {title, style, password} = props;
  return (
    <TTFadeView style={styles.inputbox}>
      <LinearGradient
        start={{x: 1.9, y: 0}}
        end={{x: 0, y: 1}}
        colors={['#4568DC', '#B06AB3']}
        style={styles.inputbox}>
        <TextInput
          placeholder={title}
          placeholderTextColor="#B06AB3"
          secureTextEntry={password ? true : false}
          style={[
            style,
            styles.container,
            styles.inputText,
            {backgroundColor: '#FFFFFF', borderRadius: 5},
          ]}
        />
      </LinearGradient>
    </TTFadeView>
  );
}
