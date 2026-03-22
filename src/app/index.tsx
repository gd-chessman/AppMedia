import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
    return (
        <SafeAreaView>
            <View>
                <Text className='text-2xl text-red-600'>Nativewind</Text>
                <Text className='text-3xl'>Hello World</Text>
            </View>
            <View className='viewBox' />
        </SafeAreaView>
    );
}