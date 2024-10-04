import type { PropsWithChildren, ReactElement, ReactNode } from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';

import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const HEADER_HEIGHT = 250;

interface CustomScrollViewProps {
  headerImage?: ReactElement;
  headerBackgroundColor?: { dark: string; light: string };
  children: ReactNode;
}

interface HeaderImageProps {
  scrollRef: any;
  headerImage?: ReactElement;
  headerBackgroundColor?: { dark: string; light: string };
}

const HeaderImage = ({
  scrollRef,
  headerImage,
  headerBackgroundColor,
}: HeaderImageProps) => {
  const colorScheme = useColorScheme() ?? 'light';
  const scrollOffset = useScrollViewOffset(scrollRef);

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [2, 1, 1]
          ),
        },
      ],
    };
  });
  return (
    <Animated.View
      style={[
        styles.header,
        { backgroundColor: headerBackgroundColor?.[colorScheme] },
        headerAnimatedStyle,
      ]}
    >
      {headerImage}
    </Animated.View>
  );
};

const CustomScrollView = ({
  headerImage,
  headerBackgroundColor,
  children,
}: CustomScrollViewProps) => {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();

  return (
    <SafeAreaView>
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
        {headerImage && (
          <HeaderImage
            scrollRef={scrollRef}
            headerBackgroundColor={headerBackgroundColor}
            headerImage={headerImage}
          />
        )}
        <ThemedView>{children}</ThemedView>
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 250,
    overflow: 'hidden',
  },
});

export default CustomScrollView;
