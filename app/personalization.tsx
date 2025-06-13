import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

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
    router.push('/signup');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Let's Personalize</Text>
      <Text style={styles.subtitle}>Your Account</Text>

      <Text style={styles.question}>Question 1*</Text>
      <TextInput
        style={styles.input}
        placeholder="Answer to question 1"
        value={q1}
        onChangeText={setQ1}
      />

      <Text style={styles.question}>Question 2*</Text>
      <TextInput
        style={styles.input}
        placeholder="Answer to question 2"
        value={q2}
        onChangeText={setQ2}
      />

      <Text style={styles.question}>Question 3*</Text>
      {choices.map(choice => (
        <TouchableOpacity
          key={choice}
          style={[styles.choice, q3.includes(choice) && styles.choiceSelected]}
          onPress={() => toggleChoice(choice)}
        >
          <Text style={[styles.choiceText, q3.includes(choice) && styles.choiceTextSelected]}>{choice}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 4 },
  subtitle: { fontSize: 18, color: '#666', marginBottom: 24 },
  question: { fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
  input: { borderColor: '#ccc', borderWidth: 1, borderRadius: 8, padding: 12, marginBottom: 16 },
  choice: { padding: 12, borderRadius: 8, borderWidth: 1, borderColor: '#ccc', marginBottom: 8 },
  choiceSelected: { backgroundColor: '#00ff99', borderColor: '#00ff99' },
  choiceText: { fontSize: 14, color: '#000' },
  choiceTextSelected: { color: '#fff' },
  button: { backgroundColor: '#000', paddingVertical: 12, paddingHorizontal: 32, borderRadius: 8, alignSelf: 'center', marginTop: 24 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
