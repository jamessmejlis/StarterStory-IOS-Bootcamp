import { supabase } from '@/lib/supabase';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    if (password !== confirm) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password });
    setLoading(false);
    if (error) Alert.alert('Error', error.message);
    else router.replace('/(tabs)');
  };

  const isFormValid = email.trim() !== '' && password.trim() !== '' && confirm.trim() !== '';

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
          <View style={styles.infoBanner}>
            <Text style={styles.infoText}>you & your partner will create individual accounts & link them in app!</Text>
          </View>
          
          <View style={styles.logoContainer}>
            <Image source={require('../assets/images/icon.png')} style={styles.logo} />
          </View>
          
          <Text style={styles.title}>Sign up</Text>
          <Text style={styles.subtitle}>you deserve better</Text>
          
          <Text style={styles.label}>Email<Text style={styles.required}>*</Text></Text>
          <TextInput
            style={styles.input}
            placeholder="ras@gmail.com"
            placeholderTextColor="#bbb"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
          
          <Text style={styles.label}>Password<Text style={styles.required}>*</Text></Text>
          <TextInput
            style={styles.input}
            placeholder="enter a secure password"
            placeholderTextColor="#bbb"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          
          <TextInput
            style={styles.input}
            placeholder="confirm your password"
            placeholderTextColor="#bbb"
            secureTextEntry
            value={confirm}
            onChangeText={setConfirm}
          />
          
          <TouchableOpacity 
            style={[styles.button, !isFormValid && styles.buttonDisabled]} 
            onPress={handleSignUp} 
            disabled={loading || !isFormValid} 
            activeOpacity={isFormValid ? 0.8 : 1}
          >
            <Text style={[styles.buttonText, !isFormValid && styles.buttonTextDisabled]}>
              {loading ? 'Signing Up...' : '🤝 Sign Up'}
            </Text>
          </TouchableOpacity>
          
          <View style={styles.policyRow}>
            <TouchableOpacity><Text style={styles.policyLink}>Privacy Policy</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.policyLink}>Terms of Service</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.policyLink}>EULA</Text></TouchableOpacity>
          </View>
          
          <View style={styles.footer}>
            <TouchableOpacity onPress={() => router.push('/login')}>
              <Text style={styles.footerLink}>Already A User?</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  keyboardAvoid: { flex: 1 },
  container: { flexGrow: 1, justifyContent: 'flex-start', alignItems: 'center', padding: 24, backgroundColor: '#fff', paddingBottom: 40 },
  infoBanner: { backgroundColor: '#E0D4FF', borderRadius: 12, padding: 16, marginBottom: 30, width: '100%' },
  infoText: { fontSize: 16, fontWeight: '500', color: '#333', textAlign: 'center' },
  logoContainer: { marginBottom: 30, alignItems: 'center' },
  logo: { width: 100, height: 100, resizeMode: 'contain' },
  title: { fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginBottom: 8, color: '#111' },
  subtitle: { fontSize: 20, color: '#111', textAlign: 'center', marginBottom: 30, fontWeight: '400' },
  label: { fontSize: 18, fontWeight: 'bold', alignSelf: 'flex-start', marginBottom: 8, color: '#111', marginTop: 16 },
  required: { color: 'red', fontSize: 18 },
  input: { backgroundColor: '#f3f3f3', borderRadius: 12, padding: 16, marginBottom: 16, fontSize: 16, color: '#222', width: '100%' },
  button: { backgroundColor: '#000', paddingVertical: 18, paddingHorizontal: 48, borderRadius: 32, marginTop: 20, width: '100%', alignItems: 'center', marginBottom: 20 },
  buttonDisabled: { backgroundColor: '#ccc' },
  buttonText: { color: '#fff', fontSize: 28, fontWeight: 'bold', textAlign: 'center' },
  buttonTextDisabled: { color: '#888' },
  policyRow: { flexDirection: 'row', justifyContent: 'center', marginVertical: 12, flexWrap: 'wrap' },
  policyLink: { marginHorizontal: 8, fontSize: 14, color: '#000', textDecorationLine: 'underline' },
  footer: { marginTop: 16, alignItems: 'center', width: '100%' },
  footerLink: { color: '#000', fontSize: 16, fontWeight: 'bold', textDecorationLine: 'underline' },
});
