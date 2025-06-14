import { PersonalizationAnswers, personalizationAtom } from '@/lib/atoms';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useSetAtom } from 'jotai';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const progressMessages = [
  'determining your compatibility type',
  'analyzing your relationship patterns',
  'personalizing your experience',
  'almost done...'
];

export default function PersonalizingScreen() {
  const router = useRouter();
  const setPersonalization = useSetAtom(personalizationAtom);
  const { q1, q2, q3 } = useLocalSearchParams<{ q1?: string; q2?: string; q3?: string | string[] }>();

  const [messageIndex, setMessageIndex] = useState(0);
  const progressAnim = useRef(new Animated.Value(0)).current;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // q3 may be a string or array depending on navigation
    const answers: PersonalizationAnswers = {
      q1: q1 || '',
      q2: q2 || '',
      q3: Array.isArray(q3) ? q3 : q3 ? [q3] : [],
    };
    setPersonalization(answers);

    // Animate percentage
    Animated.timing(progressAnim, {
      toValue: 100,
      duration: 7000,
      useNativeDriver: false,
    }).start();

    // Animate messages
    let msgIdx = 0;
    const msgInterval = setInterval(() => {
      msgIdx = (msgIdx + 1) % progressMessages.length;
      setMessageIndex(msgIdx);
    }, 2000);

    // Update progress state for display
    const progressListener = progressAnim.addListener(({ value }) => {
      setProgress(Math.round(value));
    });

    // Go to signup after 7 seconds
    const timer = setTimeout(() => {
      clearInterval(msgInterval);
      progressAnim.removeListener(progressListener);
      router.replace('/signup');
    }, 7000);

    return () => {
      clearInterval(msgInterval);
      progressAnim.removeListener(progressListener);
      clearTimeout(timer);
    };
  }, [q1, q2, q3, setPersonalization, router, progressAnim]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Generating</Text>
        <Text style={styles.subtitle}>your first experience</Text>
        
        <View style={styles.logoContainer}>
          <Image source={require('../assets/images/icon.png')} style={styles.logo} />
        </View>
        
        <Text style={styles.progress}>{progress}% complete</Text>
        <Text style={styles.progressSub}>{progressMessages[messageIndex]}</Text>
        
        <View style={styles.flexGrow} />
        
        <View style={styles.button}>
          <Text style={styles.buttonText}>Please Wait</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24, backgroundColor: '#fff' },
  title: { fontSize: 36, fontWeight: 'bold', marginBottom: 0, textAlign: 'center', color: '#111', marginTop: 0 },
  subtitle: { fontSize: 24, color: '#111', marginBottom: 60, textAlign: 'center', fontWeight: '400' },
  logoContainer: { marginVertical: 60, alignItems: 'center' },
  logo: { width: 120, height: 120, resizeMode: 'contain' },
  progress: { fontSize: 24, color: '#ccc', marginTop: 40, marginBottom: 12, textAlign: 'center', fontWeight: '500' },
  progressSub: { fontSize: 18, color: '#ccc', marginBottom: 20, textAlign: 'center' },
  flexGrow: { flex: 1 },
  button: { backgroundColor: '#000', paddingVertical: 20, paddingHorizontal: 48, borderRadius: 32, marginTop: 20, width: '100%', alignItems: 'center', marginBottom: 12 },
  buttonText: { color: '#fff', fontSize: 32, fontWeight: 'bold', textAlign: 'center' },
}); 