import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Personalization() {
  const router = useRouter();
  const [q1, setQ1] = useState('');
  const [q2, setQ2] = useState('');
  const [q3, setQ3] = useState<string[]>([]);
  const choices = [
    'I take my time and love comfort',
    'I run around and do a lot of things',
    'I use my time wisely for value',
    'I don\'t know how I use my time'
  ];

  const toggleChoice = (choice: string) => {
    setQ3(prev => prev.includes(choice) ? prev.filter(c => c !== choice) : [...prev, choice]);
  };

  const handleContinue = () => {
    if (q1.trim() && q2.trim() && q3.length > 0) {
      router.push({ pathname: '/personalizingscreen', params: { q1, q2, q3 } });
    }
  };

  const isFormValid = q1.trim() !== '' && q2.trim() !== '' && q3.length > 0;

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        style={styles.keyboardAvoid}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <ScrollView 
          contentContainerStyle={styles.container} 
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.logoContainer}>
            <Image source={require('../assets/images/icon.png')} style={styles.logo} />
          </View>
          
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Lets personalize</Text>
            <Text style={styles.subtitle}>your account</Text>
          </View>

          <View style={styles.formContainer}>
            <Text style={styles.question}>Your Name<Text style={styles.required}>*</Text></Text>
            <TextInput
              style={styles.input}
              placeholder="Answer to question 1"
              placeholderTextColor="#bbb"
              value={q1}
              onChangeText={setQ1}
            />

            <Text style={styles.question}>Your Partners Name<Text style={styles.required}>*</Text></Text>
            <TextInput
              style={styles.input}
              placeholder="Answer to question 2"
              placeholderTextColor="#bbb"
              value={q2}
              onChangeText={setQ2}
            />

            <Text style={styles.question}>Choose One<Text style={styles.required}>*</Text></Text>
            <View style={styles.choicesContainer}>
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
            </View>
          </View>

          <TouchableOpacity 
            style={[styles.button, !isFormValid && styles.buttonDisabled]} 
            onPress={handleContinue} 
            activeOpacity={isFormValid ? 0.8 : 1}
            disabled={!isFormValid}
          >
            <Text style={[styles.buttonText, !isFormValid && styles.buttonTextDisabled]}>Continue</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  keyboardAvoid: { flex: 1 },
  container: { 
    flexGrow: 1, 
    paddingHorizontal: 24, 
    backgroundColor: '#fff' 
  },
  logoContainer: { 
    alignItems: 'center', 
  },
  logo: { 
    width: 100, 
    height: 100, 
    resizeMode: 'contain' 
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: { 
    fontSize: 42, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    color: '#111',
    lineHeight: 48,
  },
  subtitle: { 
    fontSize: 42, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    color: '#111',
    lineHeight: 48
  },
  formContainer: {
    flex: 1,
    width: '100%',
    marginBottom: 30
  },
  question: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 16, 
    color: '#111', 
    marginTop: 24 
  },
  required: { 
    color: 'red', 
    fontSize: 24 
  },
  input: { 
    backgroundColor: '#f5f5f5', 
    borderRadius: 12, 
    padding: 18, 
    marginBottom: 20, 
    fontSize: 18, 
    color: '#222', 
    width: '100%' 
  },
  choicesContainer: {
    marginTop: 8
  },
  choice: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#f5f5f5', 
    borderRadius: 12, 
    paddingVertical: 18, 
    paddingHorizontal: 18, 
    marginBottom: 12, 
    width: '100%' 
  },
  choiceSelected: { 
    backgroundColor: '#E6FF7C' 
  },
  checkbox: { 
    width: 24, 
    height: 24, 
    borderRadius: 6, 
    borderWidth: 2, 
    borderColor: '#ccc', 
    backgroundColor: '#fff', 
    marginRight: 16, 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  checkboxSelected: { 
    borderColor: '#222', 
    backgroundColor: '#E6FF7C' 
  },
  checkboxInner: { 
    width: 12, 
    height: 12, 
    borderRadius: 2, 
    backgroundColor: '#222' 
  },
  choiceText: { 
    fontSize: 18, 
    color: '#888', 
    flex: 1,
    lineHeight: 22
  },
  choiceTextSelected: { 
    color: '#222', 
    fontWeight: '500' 
  },
  button: { 
    backgroundColor: '#000', 
    paddingVertical: 18, 
    paddingHorizontal: 48, 
    borderRadius: 25, 
    width: '100%', 
    alignItems: 'center' 
  },
  buttonDisabled: { 
    backgroundColor: '#ccc' 
  },
  buttonText: { 
    color: '#fff', 
    fontSize: 24, 
    fontWeight: 'bold', 
    textAlign: 'center' 
  },
  buttonTextDisabled: { 
    color: '#888' 
  },
});
