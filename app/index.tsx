import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const nextPath = `/onboarding1`;
const loginPath = `/login`;

export default function Start() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.flexGrow} />
      <Image source={require('../assets/images/icon.png')} style={styles.logo} resizeMode="contain" />
      <Text style={styles.title}>Anchor</Text>
      <Text style={styles.subtitle}>Finally, an app that gets{"\n"}your attachment struggles</Text>
      <Text style={styles.paragraph}>You know your patterns.{"\n"}You see yourself spiralling,{"\n"}shutting down, or criticizing again.</Text>
      <Text style={styles.paragraph}>You're ready to break the cycle{"\n"}and learn what to do instead.</Text>
      <View style={styles.flexGrow} />
      <TouchableOpacity style={styles.button} onPress={() => router.push(nextPath)}>
        <Text style={styles.buttonText}>Let’s Start Healing</Text>
      </TouchableOpacity>
      <Pressable onPress={() => router.push(loginPath)}>
        <Text style={styles.signInText}>or Sign In here</Text>
      </Pressable>
      <View style={styles.spacer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 18, backgroundColor: '#fff' },
  spacer: { height: 24 },
  logo: { width: 90, height: 90, marginBottom: 24 },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 10, textAlign: 'center', color: '#111', fontFamily: 'SpaceMono' },
  subtitle: { fontSize: 18, color: '#111', marginBottom: 18, textAlign: 'center', fontFamily: 'SpaceMono' },
  paragraph: { fontSize: 15, color: '#111', marginBottom: 8, textAlign: 'center', fontFamily: 'SpaceMono' },
  flexGrow: { flex: 0.5 },
  button: { backgroundColor: '#000', paddingVertical: 14, paddingHorizontal: 32, borderRadius: 20, marginBottom: 8, width: '100%' },
  buttonText: { color: '#fff', fontSize: 22, fontWeight: 'bold', textAlign: 'center', fontFamily: 'SpaceMono' },
  signInText: { color: '#111', fontSize: 16, textAlign: 'center', textDecorationLine: 'underline', marginBottom: 18, fontFamily: 'SpaceMono' },
});