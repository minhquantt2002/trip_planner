import Button from '@/components/Button';
import { onboarding } from '@/constants/images';
import { router } from 'expo-router';
import { useRef, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';

const WelcomePage = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === onboarding.length - 1;

  return (
    <SafeAreaView className='flex h-full items-center justify-between bg-white'>
      <ScrollView scrollEnabled={false}>
        <TouchableOpacity
          onPress={() => {
            router.replace('/(auth)/sign-in');
          }}
          className='flex w-full items-end justify-end p-5'
        >
          <Text className='text-md font-InterSemiBold text-black'>Skip</Text>
        </TouchableOpacity>
        <Swiper
          ref={swiperRef}
          loop={false}
          dot={
            <View className='mx-1 h-[4px] w-[32px] rounded-full bg-[#E2E8F0]'></View>
          }
          activeDot={
            <View className='mx-1 h-[4px] w-[32px] rounded-full bg-[#0286FF]'></View>
          }
          onIndexChanged={(index) => {
            setActiveIndex(index);
          }}
          index={activeIndex}
        >
          {onboarding.map((item) => (
            <View
              key={item.id}
              className='flex items-center justify-center p-5'
            >
              <Image
                source={item.image}
                className='h-[300px] w-full'
                resizeMode='contain'
              />
              <View className='mt-10 flex w-full flex-row items-center justify-center'>
                <Text className='font-InterBold mx-5 text-3xl text-black'>
                  {item.title}
                </Text>
              </View>
              <Text className='text-md font-InterMedium mx-5 mt-3 text-center text-[#858585]'>
                {item.description}
              </Text>
            </View>
          ))}
        </Swiper>
      </ScrollView>
      <Button
        title={isLastSlide ? 'Get started' : 'Next'}
        onPress={() =>
          isLastSlide
            ? router.replace('/(auth)/sign-up')
            : swiperRef.current?.scrollBy(1)
        }
        className='mb-5 mt-10 w-11/12'
      />
    </SafeAreaView>
  );
};

export default WelcomePage;
