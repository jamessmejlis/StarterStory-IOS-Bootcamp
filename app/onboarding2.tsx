import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Onboarding2() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>{'< Back'}</Text>
      </TouchableOpacity>
      <View style={styles.spacer} />
      <Image source={require('../assets/images/icon.png')} style={styles.logo} resizeMode="contain" />
      <View style={styles.flexGrow} />
      <Text style={styles.title}>
        “We Want{"\n"}Solutions!!”
      </Text>
      <Text style={styles.subtitle}>But traditional help{"\n"}isn't working</Text>
      <View style={styles.bulletList}>
        <Text style={styles.bullet}><Text style={styles.bold}>Therapy?</Text> "It’s so expensive" or "I live too far away"</Text>
        <Text style={styles.bullet}><Text style={styles.bold}>Self-help books?</Text> Too theoretical. You need help in the moment when you're activated.</Text>
        <Text style={styles.bullet}><Text style={styles.bold}>Friends' advice?</Text> "Just communicate better" isn't helpful when your nervous system is hijacked.</Text>
        <Text style={styles.bullet}><Text style={styles.bold}>More self-awareness?</Text> You already know what you do wrong. You need to know what to do instead.</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/onboarding3')}>
        <Text style={styles.buttonText}>Exactly My Experience</Text>
      </TouchableOpacity>
      <View style={styles.spacer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 18, backgroundColor: '#fff' },
  spacer: { height: 16 },
  logo: { width: 70, height: 70, marginBottom: 16 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10, textAlign: 'center', color: '#111', fontFamily: 'SpaceMono' },
  subtitle: { fontSize: 18, fontWeight: 'bold', color: '#111', marginBottom: 10, textAlign: 'center', fontFamily: 'SpaceMono' },
  bulletList: { alignSelf: 'stretch', marginBottom: 12 },
  bullet: { fontSize: 15, color: '#111', marginBottom: 8, fontFamily: 'SpaceMono' },
  bold: { fontWeight: 'bold' },
  flexGrow: { flex: 0.5 },
  button: { backgroundColor: '#000', paddingVertical: 14, paddingHorizontal: 32, borderRadius: 32, marginBottom: 8, width: '100%' },
  buttonText: { color: '#fff', fontSize: 20, fontWeight: 'bold', textAlign: 'center', fontFamily: 'SpaceMono' },
  backButton: { position: 'absolute', top: 72, left: 12, padding: 6, zIndex: 10 },
  backButtonText: { fontSize: 15, color: '#111', fontFamily: 'SpaceMono' },
});
