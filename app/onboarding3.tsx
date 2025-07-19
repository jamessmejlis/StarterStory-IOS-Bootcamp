import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

//Change this to whichever onboarding you choose (/onboardingPathos,/onboardingEthos,/onboardingLogos)
const nextPath = `/onboardingEthos`

export default function Onboarding3() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>{'< Back'}</Text>
      </TouchableOpacity>
      <View style={styles.spacer} />
      <Image source={require('../assets/images/icon.png')} style={styles.logo} resizeMode="contain" />
      <View style={styles.flexGrow} />
      <Text style={styles.title}>Meet Anchor, your{"\n"}Attachment Expert</Text>
      <Text style={styles.subtitle}>Real-time support{"\n"}when you need it most</Text>
      <View style={styles.bulletList}>
        <Text style={styles.bullet}><Text style={styles.emoji}>🧠</Text> <Text style={styles.bold}>Instant nervous system regulation</Text> - Calm your body before your mind spirals</Text>
        <Text style={styles.bullet}><Text style={styles.emoji}>💬</Text> <Text style={styles.bold}>Secure communication scripts</Text> - Know exactly what to say instead of shutting down or criticizing</Text>
        <Text style={styles.bullet}><Text style={styles.emoji}>🥰</Text> <Text style={styles.bold}>Personalized to your patterns</Text> - Anxious? Avoidant? Anchor speaks your language</Text>
        <Text style={styles.bullet}><Text style={styles.emoji}>🏢</Text> <Text style={styles.bold}>Always available</Text> - No appointments, no waiting lists, no distance barriers</Text>
        <Text style={styles.bullet}><Text style={styles.emoji}>🌱</Text> <Text style={styles.bold}>Proven techniques</Text> - Based on attachment science, not just feel-good advice</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => router.push(nextPath)}>
        <Text style={styles.buttonText}>I'm Ready - Show Me How</Text>
      </TouchableOpacity>
      <View style={styles.spacer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 18, backgroundColor: '#fff' },
  spacer: { height: 16 },
  logo: { width: 70, height: 70, marginBottom: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: 'center', color: '#111', fontFamily: 'SpaceMono' },
  subtitle: { fontSize: 16, fontWeight: 'bold', color: '#111', marginBottom: 10, textAlign: 'center', fontFamily: 'SpaceMono' },
  bulletList: { alignSelf: 'stretch', marginBottom: 12 },
  bullet: { fontSize: 14, color: '#111', marginBottom: 8, fontFamily: 'SpaceMono' },
  emoji: { fontSize: 16 },
  bold: { fontWeight: 'bold' },
  flexGrow: { flex: 0.5 },
  button: { backgroundColor: '#000', paddingVertical: 14, paddingHorizontal: 32, borderRadius: 32, marginBottom: 8, width: '100%' },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold', textAlign: 'center', fontFamily: 'SpaceMono' },
  backButton: { position: 'absolute', top: 72, left: 12, padding: 6, zIndex: 10 },
  backButtonText: { fontSize: 15, color: '#111', fontFamily: 'SpaceMono' },
});
