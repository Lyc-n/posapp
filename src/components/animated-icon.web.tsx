import { Image } from 'expo-image';
import { View } from 'react-native';
import Animated, { Keyframe, Easing } from 'react-native-reanimated';

const DURATION = 300;

export function AnimatedSplashOverlay() {
  return null;
}

const keyframe = new Keyframe({
  0: {
    transform: [{ scale: 0 }],
  },
  60: {
    transform: [{ scale: 1.2 }],
    easing: Easing.elastic(1.2),
  },
  100: {
    transform: [{ scale: 1 }],
    easing: Easing.elastic(1.2),
  },
});

const logoKeyframe = new Keyframe({
  0: {
    opacity: 0,
  },
  60: {
    transform: [{ scale: 1.2 }],
    opacity: 0,
    easing: Easing.elastic(1.2),
  },
  100: {
    transform: [{ scale: 1 }],
    opacity: 1,
    easing: Easing.elastic(1.2),
  },
});

const glowKeyframe = new Keyframe({
  0: {
    transform: [{ rotateZ: '-180deg' }, { scale: 0.8 }],
    opacity: 0,
  },
  [DURATION / 1000]: {
    transform: [{ rotateZ: '0deg' }, { scale: 1 }],
    opacity: 1,
    easing: Easing.elastic(0.7),
  },
  100: {
    transform: [{ rotateZ: '7200deg' }],
  },
});

export function AnimatedIcon() {
  return (
    <View className="justify-center items-center w-32 h-32">
      {/* Glow Layer */}
      <Animated.View
        entering={glowKeyframe.duration(60 * 1000 * 4)}
        className="w-50.25 h-50.25 absolute"
      >
        <Image
          className="w-50.25 h-50.25 absolute"
          source={require('@/assets/images/logo-glow.png')}
        />
      </Animated.View>

      {/* Background Gradient Layer (Pengganti animated-icon.module.css) */}
      <Animated.View
        entering={keyframe.duration(DURATION)}
        className="w-32 h-32 absolute rounded-[40px] bg-linear-to-b from-[#3C9FFE] to-[#0274DF]"
      />

      {/* Logo Image Layer */}
      <Animated.View
        className="justify-center items-center"
        entering={logoKeyframe.duration(DURATION)}
      >
        <Image
          className="absolute w-19 h-17.75"
          source={require('@/assets/images/expo-logo.png')}
        />
      </Animated.View>
    </View>
  );
}