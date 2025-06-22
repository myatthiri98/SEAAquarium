import React from "react";
import { Animated, Pressable, PressableProps } from "react-native";

interface AnimatedPressableProps extends PressableProps {
  children: React.ReactNode;
  scaleValue?: number;
}

export const AnimatedPressable: React.FC<AnimatedPressableProps> = ({
  children,
  scaleValue = 0.95,
  onPressIn,
  onPressOut,
  ...props
}) => {
  const scale = React.useRef(new Animated.Value(1)).current;

  const handlePressIn = (event: any) => {
    Animated.spring(scale, {
      toValue: scaleValue,
      useNativeDriver: true,
      tension: 100,
      friction: 8,
    }).start();
    onPressIn?.(event);
  };

  const handlePressOut = (event: any) => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
      tension: 100,
      friction: 8,
    }).start();
    onPressOut?.(event);
  };

  return (
    <Pressable {...props} onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <Animated.View style={{ transform: [{ scale }] }}>
        {children}
      </Animated.View>
    </Pressable>
  );
};

interface FadeInViewProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
}

export const FadeInView: React.FC<FadeInViewProps> = ({
  children,
  duration = 500,
  delay = 0,
}) => {
  const opacity = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    // Reset opacity to 0 first, then animate to 1
    opacity.setValue(0);
    Animated.timing(opacity, {
      toValue: 1,
      duration,
      delay,
      useNativeDriver: true,
    }).start();
  }, [opacity, duration, delay]);

  return <Animated.View style={{ opacity }}>{children}</Animated.View>;
};

interface SlideInViewProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "down";
  distance?: number;
  duration?: number;
  delay?: number;
}

export const SlideInView: React.FC<SlideInViewProps> = ({
  children,
  direction = "up",
  distance = 50,
  duration = 500,
  delay = 0,
}) => {
  const translateValue = React.useRef(new Animated.Value(distance)).current;

  React.useEffect(() => {
    Animated.timing(translateValue, {
      toValue: 0,
      duration,
      delay,
      useNativeDriver: true,
    }).start();
  }, [translateValue, duration, delay]);

  const getTransform = () => {
    switch (direction) {
      case "left":
        return [{ translateX: translateValue }];
      case "right":
        return [{ translateX: Animated.multiply(translateValue, -1) }];
      case "up":
        return [{ translateY: translateValue }];
      case "down":
        return [{ translateY: Animated.multiply(translateValue, -1) }];
      default:
        return [{ translateY: translateValue }];
    }
  };

  return (
    <Animated.View style={{ transform: getTransform() }}>
      {children}
    </Animated.View>
  );
};
