import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Onboarding() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>App Name</Text>
      <Text style={styles.subtitle}>One Liner For Your App</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/personalization')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/login')}>
        <Text style={styles.link}>or Sign In here</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#666', marginBottom: 24 },
  button: { backgroundColor: '#000', paddingVertical: 12, paddingHorizontal: 32, borderRadius: 8, marginBottom: 12 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  link: { color: '#000', textDecorationLine: 'underline', fontSize: 14 }
});
