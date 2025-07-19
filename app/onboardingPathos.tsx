import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function OnboardingPathos() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.spacer} />
      <Image source={require('../assets/images/icon.png')} style={styles.logo} resizeMode="contain" />
      <View style={styles.flexGrow} />
      <Text style={styles.title}>SHOW THE Emotion And Amplify it</Text>
      <Text style={styles.subtitle}>Maybe an image? Maybe something that really triggers that emotion?</Text>
      <View style={styles.flexGrow} />
      <TouchableOpacity style={styles.button} onPress={() => router.push('/onboarding3')}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      <View style={styles.spacer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24, backgroundColor: '#fff' },
  spacer: { height: 40 },
  logo: { width: 70, height: 70, marginBottom: 32 },
  title: { fontSize: 48, fontWeight: 'bold', marginBottom: 12, textAlign: 'center', color: '#111' },
  subtitle: { fontSize: 28, color: '#111', marginBottom: 32, textAlign: 'center' },
  flexGrow: { flex: 1 },
  button: { backgroundColor: '#000', paddingVertical: 20, paddingHorizontal: 48, borderRadius: 32, marginBottom: 12, width: '100%' },
  buttonText: { color: '#fff', fontSize: 32, fontWeight: 'bold', textAlign: 'center' },
});
