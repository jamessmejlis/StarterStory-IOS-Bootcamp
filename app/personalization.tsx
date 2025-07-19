import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Personalization() {
  const router = useRouter();
  const [q1, setQ1] = useState('');
  const [q2, setQ2] = useState('');
  const [q3, setQ3] = useState<string[]>([]);
  const choices = ['choice 1', 'choice 2', 'choice 3', 'choice 4'];

  const toggleChoice = (choice: string) => {
    setQ3(prev => prev.includes(choice) ? prev.filter(c => c !== choice) : [...prev, choice]);
  };

  const handleContinue = () => {
    router.push({ pathname: '/personalizingscreen', params: { q1, q2, q3 } });
  };

  return (
    <KeyboardAvoidingView 
      style={styles.keyboardAvoidingView} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>{'< Back'}</Text>
        </TouchableOpacity>
        <View style={styles.spacer} />
        <View style={styles.spacer} />
        <Image source={require('../assets/images/icon.png')} style={styles.logo} resizeMode="contain" />
        <Text style={styles.title}>Lets personalize</Text>
        <Text style={styles.subtitle}>your account</Text>

        <Text style={styles.question}>Question 1<Text style={styles.required}>*</Text></Text>
        <TextInput
          style={styles.input}
          placeholder="Answer to question 1"
          placeholderTextColor="#bbb"
          value={q1}
          onChangeText={setQ1}
        />

        <Text style={styles.question}>Question 2<Text style={styles.required}>*</Text></Text>
        <TextInput
          style={styles.input}
          placeholder="Answer to question 2"
          placeholderTextColor="#bbb"
          value={q2}
          onChangeText={setQ2}
        />

        <Text style={styles.question}>Question 3<Text style={styles.required}>*</Text></Text>
        {choices.map(choice => (
          <TouchableOpacity
            key={choice}
            style={[styles.choice, q3.includes(choice) && styles.choiceSelected]}
            onPress={() => toggleChoice(choice)}
            activeOpacity={0.8}
          >
            <View style={[styles.checkbox, q3.includes(choice) && styles.checkboxSelected]}>
              {q3.includes(choice) ? <View style={styles.checkboxInner} /> : null}
            </View>
            <Text style={[styles.choiceText, q3.includes(choice) && styles.choiceTextSelected]}>{choice}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.button} onPress={handleContinue} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
        <View style={styles.spacer} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardAvoidingView: { flex: 1, backgroundColor: '#fff' },
  scrollContainer: { flexGrow: 1, justifyContent: 'flex-start', alignItems: 'center', padding: 24, paddingTop: 60, paddingBottom: 40 },
  spacer: { height: 24 },
  logo: { width: 70, height: 70, marginBottom: 16 },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 0, textAlign: 'center', color: '#111', marginTop: 0 },
  subtitle: { fontSize: 20, color: '#111', marginBottom: 24, textAlign: 'center', fontWeight: '400' },
  question: { fontSize: 18, fontWeight: 'bold', marginBottom: 8, color: '#111', alignSelf: 'flex-start' },
  required: { color: 'red', fontSize: 18 },
  input: { backgroundColor: '#f3f3f3', borderRadius: 10, padding: 12, marginBottom: 18, fontSize: 16, color: '#222', width: '100%' },
  choice: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f3f3f3', borderRadius: 10, paddingVertical: 10, paddingHorizontal: 12, marginBottom: 12, width: '100%' },
  choiceSelected: { backgroundColor: '#7CFFB2' },
  checkbox: { width: 22, height: 22, borderRadius: 5, borderWidth: 2, borderColor: '#ccc', backgroundColor: '#fff', marginRight: 12, alignItems: 'center', justifyContent: 'center' },
  checkboxSelected: { borderColor: '#222', backgroundColor: '#7CFFB2' },
  checkboxInner: { width: 12, height: 12, borderRadius: 2, backgroundColor: '#fff' },
  choiceText: { fontSize: 16, color: '#888' },
  choiceTextSelected: { color: '#222', fontWeight: 'bold' },
  button: { backgroundColor: '#000', paddingVertical: 14, paddingHorizontal: 32, borderRadius: 18, marginTop: 18, width: '100%', alignItems: 'center', marginBottom: 18 },
  buttonText: { color: '#fff', fontSize: 20, fontWeight: 'bold', textAlign: 'center' },
  backButton: { position: 'absolute', top: 72, left: 12, padding: 6, zIndex: 10 }, // Adjusted top value for alignment
  backButtonText: { fontSize: 15, color: '#111', fontFamily: 'SpaceMono' },
});
