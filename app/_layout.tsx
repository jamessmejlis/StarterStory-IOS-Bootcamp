import { useColorScheme } from '@/hooks/useColorScheme';
import { supabase } from '@/lib/supabase';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import 'react-native-reanimated';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  const [isSignedIn, setIsSignedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      setIsSignedIn(!!data.session);
    };
    checkSession();
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsSignedIn(!!session);
    });
    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  if (!loaded || isSignedIn === null) {
    return null;
  }
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack initialRouteName={isSignedIn ? '(tabs)' : 'index'}>
        {isSignedIn
          ? [
              <Stack.Screen key="tabs" name="(tabs)" options={{ headerShown: false }} />,
              <Stack.Screen key="not-found" name="+not-found" />
            ]
          : [
              <Stack.Screen key="index" name="index" options={{ headerShown: false }} />,
              <Stack.Screen key="onboarding1" name="onboarding1" options={{ headerShown: false }} />,
              <Stack.Screen key="onboarding2" name="onboarding2" options={{ headerShown: false }} />,
              <Stack.Screen key="onboarding3" name="onboarding3" options={{ headerShown: false }} />,
              <Stack.Screen key="onboardingChoice" name="onboardingChoice" options={{ headerShown: false }} />,
              <Stack.Screen key="onboardingPathos" name="onboardingPathos" options={{ headerShown: false }} />,
              <Stack.Screen key="onboardingEthos" name="onboardingEthos" options={{ headerShown: false }} />,
              <Stack.Screen key="onboardingLogos" name="onboardingLogos" options={{ headerShown: false }} />,
              <Stack.Screen key="personalization" name="personalization" options={{ headerShown: false }} />,
              <Stack.Screen key="personalizingscreen" name="personalizingscreen" options={{ headerShown: false }} />,
              <Stack.Screen key="signup" name="signup" options={{ headerShown: false }} />,
              <Stack.Screen key="login" name="login" options={{ headerShown: false }} />,
              <Stack.Screen key="not-found" name="+not-found" />
            ]
        }
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
