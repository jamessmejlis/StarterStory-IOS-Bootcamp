import { supabase } from '@/lib/supabase';
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { router, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import 'react-native-reanimated';

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  const [isSignedIn, setIsSignedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      setIsSignedIn(!!data.session && !!data.session.user);
    };
    checkSession();
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsSignedIn(!!session && !!session.user);
      !!session && !!session.user && setTimeout(() => {
        router.push('/')
        router.push('/(tabs)')
      })
    });
    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  if (!loaded || isSignedIn === null) {
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack
        initialRouteName={isSignedIn ? '(tabs)' : 'index'}
        screenOptions={{ headerShown: false }}
      >
        {isSignedIn
          ? [
              <Stack.Screen key="tabs" name="(tabs)" />,
              <Stack.Screen key="not-found" name="+not-found" />
            ]
          : [
              <Stack.Screen key="index" name="index" />,
              <Stack.Screen key="onboarding1" name="onboarding1" />,
              <Stack.Screen key="onboarding2" name="onboarding2" />,
              <Stack.Screen key="onboarding3" name="onboarding3" />,
              <Stack.Screen key="onboardingPathos" name="onboardingPathos" />,
              <Stack.Screen key="onboardingEthos" name="onboardingEthos" />,
              <Stack.Screen key="onboardingLogos" name="onboardingLogos" />,
              <Stack.Screen key="personalization" name="personalization" />,
              <Stack.Screen key="personalizingscreen" name="personalizingscreen" />,
              <Stack.Screen key="signup" name="signup" />,
              <Stack.Screen key="login" name="login" />,
              <Stack.Screen key="not-found" name="+not-found" />
            ]}
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
