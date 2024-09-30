import type { PropsWithChildren, ReactElement, ReactNode } from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';

import { ThemedView } from '@/components/ThemedView';

const HEADER_HEIGHT = 250;

interface CustomScrollViewProps {
  headerImage?: ReactElement;
  headerBackgroundColor: { dark: string; light: string };
  children?: ReactNode | undefined;
}

interface HeaderImageProps extends CustomScrollViewProps {
  scrollRef: any;
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
        { backgroundColor: headerBackgroundColor[colorScheme] },
        headerAnimatedStyle,
      ]}
    >
      {headerImage}
    </Animated.View>
  );
};

export default function CustomScrollView({
  children,
  headerImage,
  headerBackgroundColor,
}: CustomScrollViewProps) {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();

  return (
    <ThemedView style={styles.container}>
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
        {headerImage && (
          <HeaderImage
            scrollRef={scrollRef}
            headerBackgroundColor={headerBackgroundColor}
            headerImage={headerImage}
          />
        )}
        <ThemedView style={styles.content}>{children}</ThemedView>
      </Animated.ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 250,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: 'hidden',
  },
});
