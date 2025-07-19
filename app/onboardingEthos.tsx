import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function OnboardingEthos() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>{'< Back'}</Text>
      </TouchableOpacity>
      <View style={styles.spacer} />
      <Image source={require('../assets/images/icon.png')} style={styles.logo} resizeMode="contain" />
      <View style={styles.flexGrow} />
      <Text style={styles.title}>“This actually works{"\n"}for people like me!”</Text>
      <Text style={styles.subtitle}>Your pocket companion{"\n"}for stressful moments</Text>
      <View style={styles.bulletList}>
        <Text style={styles.bullet}><Text style={styles.emoji}>🧑‍🔬</Text> <Text style={styles.bold}>Evidence-based approach</Text> - combines attachment science, nervous system regulation, and somatic therapy</Text>
        <Text style={styles.bullet}><Text style={styles.emoji}>🥰</Text> <Text style={styles.bold}>Built for YOUR brain</Text> - we know anxious minds need different support than avoidant minds</Text>
        <Text style={styles.bullet}><Text style={styles.emoji}>📊</Text> <Text style={styles.bold}>Tested with real people</Text> just like you – anxious, avoidant, and everything in between</Text>
        <Text style={styles.bullet}><Text style={styles.emoji}>💡</Text> <Text style={styles.bold}>Your Anchor companion understands:</Text>{"\n"}
          <Text style={styles.bulletSub}>• Why you do what you do (it's not your fault){"\n"}</Text>
          <Text style={styles.bulletSub}>• What your nervous system needs (safety first){"\n"}</Text>
          <Text style={styles.bulletSub}>• How to heal without hurting (gentle progress)</Text>
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/personalization')}>
        <Text style={styles.buttonText}>Start My Healing Journey</Text>
      </TouchableOpacity>
      <View style={styles.spacer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 18, backgroundColor: '#fff' },
  spacer: { height: 16 },
  logo: { width: 70, height: 70, marginBottom: 16 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10, textAlign: 'center', color: '#111', fontFamily: 'SpaceMono' },
  subtitle: { fontSize: 15, fontWeight: 'bold', color: '#111', marginBottom: 10, textAlign: 'center', fontFamily: 'SpaceMono' },
  bulletList: { alignSelf: 'stretch', marginBottom: 12 },
  bullet: { fontSize: 13, color: '#111', marginBottom: 8, fontFamily: 'SpaceMono' },
  bulletSub: { fontSize: 13, color: '#111', marginLeft: 16, fontFamily: 'SpaceMono' },
  emoji: { fontSize: 15 },
  bold: { fontWeight: 'bold' },
  flexGrow: { flex: 0.5 },
  button: { backgroundColor: '#000', paddingVertical: 14, paddingHorizontal: 32, borderRadius: 32, marginBottom: 8, width: '100%' },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold', textAlign: 'center', fontFamily: 'SpaceMono' },
  backButton: { position: 'absolute', top: 72, left: 12, padding: 6, zIndex: 10 },
  backButtonText: { fontSize: 15, color: '#111', fontFamily: 'SpaceMono' },
});
