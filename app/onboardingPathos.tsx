import { useRouter } from 'expo-router';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function OnboardingPathos() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.topRow}>
          <Image source={require('../assets/images/icon.png')} style={styles.logo} />
          <View style={styles.progressContainer}>
            <Text style={styles.progress}>Onboarding </Text>
            <Text style={styles.progressPercent}>95%</Text>
          </View>
        </View>
        
        <View style={styles.contentContainer}>
          <View style={styles.messageContainer}>
            <Text style={styles.message}>
              You&apos;re not crazy.{"\n"}You&apos;re just unheard.
            </Text>
          </View>
          
          <Image source={require('../assets/images/illustration_4.png')} style={styles.illustration} />
          
          <View style={styles.truthCard}>
            <Text style={styles.cardTitle}>🍵 The Truth About Our App</Text>
            <Text style={styles.cardText}>
              Our app focuses on helping you and your partner stay calm, seen, and connected.
            </Text>
            <Text style={styles.cardSubtext}>
              Even when things get hard. At your pace. At your privacy.
            </Text>
          </View>
        </View>
        
        <TouchableOpacity style={styles.button} onPress={() => router.push('/personalization')}>
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
  messageContainer: {
    backgroundColor: '#F5F5F0',
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 24,
    marginBottom: 30,
    alignSelf: 'stretch'
  },
  message: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#111',
    lineHeight: 30
  },
  illustration: { 
    width: '100%', 
    maxWidth: 280, 
    height: 240, 
    resizeMode: 'contain',
    marginBottom: 30 
  },
  truthCard: { 
    backgroundColor: '#6366F1', 
    borderRadius: 16, 
    padding: 24, 
    width: '100%',
    alignSelf: 'stretch'
  },
  cardTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#fff', 
    marginBottom: 16 
  },
  cardText: { 
    fontSize: 16, 
    color: '#fff', 
    marginBottom: 12, 
    lineHeight: 22,
    fontWeight: '400'
  },
  cardSubtext: { 
    fontSize: 16, 
    color: '#fff', 
    lineHeight: 22,
    fontWeight: '400'
  },
  button: { 
    backgroundColor: '#000', 
    paddingVertical: 18, 
    paddingHorizontal: 48, 
    borderRadius: 25, 
    width: '100%',
    marginTop: 20
  },
  buttonText: { 
    color: '#fff', 
    fontSize: 20, 
    fontWeight: 'bold', 
    textAlign: 'center' 
  },
});
