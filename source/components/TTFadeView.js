import React, {Component} from 'react';
import {Animated} from 'react-native';

export default class TTFadeView extends Component {
  constructor() {
    super();
    this.state = {
      startValue: new Animated.Value(0),
      endValue: 1,
      duration: 500,
    };
    Animated.timing(this.state.startValue, {
      toValue: this.state.endValue,
      duration: this.state.duration,
      useNativeDriver: true,
    }).start();
  }

  startAnimation = () => {
    Animated.timing(this.state.startValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  render() {
    const animatedStyle = {
      opacity: this.state.animation,
    };

    return (
      <Animated.View
        style={[this.props.style, {opacity: this.state.startValue}]}>
        {this.props.children}
      </Animated.View>
    );
  }
}
