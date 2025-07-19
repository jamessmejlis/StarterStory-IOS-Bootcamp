import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Onboarding1() {
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
        “I feel like I’m{"\n"}the problem”
      </Text>
      <Text style={styles.subtitle}>Sound familiar?</Text>
      <View style={styles.bulletList}>
        <Text style={styles.bullet}><Text style={styles.check}>✓</Text> You're <Text style={styles.bold}>spiralling</Text> after 3 hours without a text</Text>
        <Text style={styles.bullet}><Text style={styles.check}>✓</Text> You <Text style={styles.bold}>shut down</Text> every time they want to "talk"</Text>
        <Text style={styles.bullet}><Text style={styles.check}>✓</Text> You catch yourself <Text style={styles.bold}>criticizing</Text> them into changing</Text>
        <Text style={styles.bullet}><Text style={styles.check}>✓</Text> You're <Text style={styles.bold}>exhausting</Text> your partner (and yourself)</Text>
        <Text style={styles.bullet}><Text style={styles.check}>✓</Text> You <Text style={styles.bold}>abandon</Text> them before they can abandon you</Text>
        <Text style={styles.bullet}><Text style={styles.check}>✓</Text> You know your pattern but <Text style={styles.bold}>don’t know</Text> how to stop</Text>
      </View>
      <Text style={styles.infoText}>You're not broken.{"\n"}You're just using outdated survival strategies.</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/onboarding2')}>
        <Text style={styles.buttonText}>This Is Me</Text>
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
  bullet: { fontSize: 15, color: '#111', marginBottom: 4, fontFamily: 'SpaceMono' },
  check: { fontWeight: 'bold', color: '#111' },
  bold: { fontWeight: 'bold' },
  infoText: { fontSize: 16, color: '#111', textAlign: 'center', marginVertical: 16, fontFamily: 'SpaceMono' },
  flexGrow: { flex: 0.5 },
  button: { backgroundColor: '#000', paddingVertical: 14, paddingHorizontal: 32, borderRadius: 32, marginBottom: 8, width: '100%' },
  buttonText: { color: '#fff', fontSize: 20, fontWeight: 'bold', textAlign: 'center', fontFamily: 'SpaceMono' },
  backButton: { position: 'absolute', top: 72, left: 12, padding: 6, zIndex: 10 },
  backButtonText: { fontSize: 15, color: '#111', fontFamily: 'SpaceMono' },
});
