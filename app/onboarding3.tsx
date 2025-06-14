import { useRouter } from 'expo-router';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

//Change this to whichever onboarding you choose (/onboardingPathos,/onboardingEthos,/onboardingLogos)
const nextPath = `/onboardingPathos`

export default function Onboarding3() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.topRow}>
          <Image source={require('../assets/images/icon.png')} style={styles.logo} />
          <View style={styles.progressContainer}>
            <Text style={styles.progress}>Onboarding </Text>
            <Text style={styles.progressPercent}>85%</Text>
          </View>
        </View>
        
        <View style={styles.contentContainer}>
          <Image source={require('../assets/images/illustration_3.png')} style={styles.illustration} />
          
          <View style={styles.textContainer}>
            <Text style={styles.title}>
              <Text style={styles.highlight}>Know your worth</Text>
            </Text>
            <Text style={styles.subtitle}>
              Our app helps you keep{"\n"}peaceful, respectful{"\n"}relationships.
            </Text>
            <Text style={styles.description}>
              Immediate clarity on{"\n"}issues, so no anxiety takes{"\n"}over.
            </Text>
          </View>
        </View>
        
        <TouchableOpacity style={styles.button} onPress={() => router.push(nextPath)}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  container: { 
    flex: 1, 
    paddingHorizontal: 24, 
    paddingTop: 20,
    paddingBottom: 40,
    backgroundColor: '#fff' 
  },
  topRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    width: '100%', 
    marginBottom: 30 
  },
  logo: { 
    width: 50, 
    height: 50, 
    resizeMode: 'contain' 
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  progress: { 
    fontSize: 16, 
    color: '#000', 
    fontWeight: '600' 
  },
  progressPercent: {
    fontSize: 16,
    color: '#999',
    fontWeight: '400'
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  illustration: { 
    width: '100%', 
    maxWidth: 300, 
    height: 280, 
    resizeMode: 'contain',
    marginBottom: 40 
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 40
  },
  title: { 
    fontSize: 32, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    color: '#111', 
    lineHeight: 38,
    marginBottom: 20
  },
  subtitle: { 
    fontSize: 20, 
    color: '#666', 
    textAlign: 'center',
    lineHeight: 26,
    fontWeight: '400',
    marginBottom: 16
  },
  description: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
    lineHeight: 24,
    fontWeight: '400'
  },
  button: { 
    backgroundColor: '#000', 
    paddingVertical: 18, 
    paddingHorizontal: 48, 
    borderRadius: 25, 
    width: '100%' 
  },
  buttonText: { 
    color: '#fff', 
    fontSize: 20, 
    fontWeight: 'bold', 
    textAlign: 'center' 
  },
  highlight: { 
    backgroundColor: '#E6FF7C', 
    paddingHorizontal: 4, 
    paddingVertical: 2,
    borderRadius: 4
  },
});
