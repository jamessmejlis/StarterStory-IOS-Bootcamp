import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const nextPath = `/onboarding1`;
const loginPath = `/login`;

export default function Start() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.topSpacer} />
      <View style={styles.logoContainer}>
        <Image source={require('../assets/images/icon.png')} style={styles.logo} />
      </View>
      <Text style={styles.title}>Know Your Worth</Text>
      <Text style={styles.subtitle}>Relationships made easy</Text>
      <View style={styles.flexGrow} />
      <TouchableOpacity style={styles.button} onPress={() => router.push(nextPath)}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
      <Pressable onPress={() => router.push(loginPath)}>
        <Text style={styles.signInText}>or Sign In here</Text>
      </Pressable>
      <View style={styles.bottomSpacer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingHorizontal: 24, 
    backgroundColor: '#fff' 
  },
  topSpacer: { flex: 0.8 },
  logoContainer: { 
    backgroundColor: 'transparent', 
    borderRadius: 32, 
    paddingVertical: 20, 
    paddingHorizontal: 20, 
    marginBottom: 40,
    alignItems: 'center'
  },
  logo: { 
    width: 120, 
    height: 120, 
    resizeMode: 'contain' 
  },
  title: { 
    fontSize: 48, 
    fontWeight: 'bold', 
    marginBottom: 16, 
    textAlign: 'center', 
    color: '#111',
    lineHeight: 52
  },
  subtitle: { 
    fontSize: 24, 
    color: '#666', 
    marginBottom: 60, 
    textAlign: 'center',
    fontWeight: '400'
  },
  flexGrow: { flex: 1 },
  button: { 
    backgroundColor: '#000', 
    paddingVertical: 18, 
    paddingHorizontal: 48, 
    borderRadius: 25, 
    marginBottom: 16, 
    width: '100%',
    maxWidth: 320
  },
  buttonText: { 
    color: '#fff', 
    fontSize: 24, 
    fontWeight: 'bold', 
    textAlign: 'center' 
  },
  signInText: { 
    color: '#111', 
    fontSize: 18, 
    textAlign: 'center', 
    textDecorationLine: 'underline', 
    marginBottom: 20,
    fontWeight: '500'
  },
  bottomSpacer: { height: 50 },
});
