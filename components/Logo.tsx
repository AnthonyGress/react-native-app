import { useState } from 'react';
import { Animated, Easing, Image } from 'react-native';

const Logo = () => {
    const spinValue = new Animated.Value(0);

    const handleAnimation = () => {
      Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 10000,
        easing: Easing.linear,
        useNativeDriver: true
      })).start()
    };


    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
      })

    const animatedStyle = {
        height: 100,
        width: '25%',
      transform: [
        {
          rotate: spin,
        },
      ],
    };

    handleAnimation();

  return (
    <Animated.Image style={animatedStyle} source={require('../assets/images/logo.png')} />
    // <Image style={{height: 100, width: '25%'}} source={require('../assets/images/logo.png')}/>
  )
}

export default Logo
