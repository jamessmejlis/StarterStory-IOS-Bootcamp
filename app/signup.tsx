import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { supabase } from '@/lib/supabase';

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
    else router.replace('(tabs)');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up</Text>
      <Text style={styles.subtitle}>so you can start your recommended journey</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm your password"
        secureTextEntry
        value={confirm}
        onChangeText={setConfirm}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp} disabled={loading}>
        <Text style={styles.buttonText}>{loading ? 'Signing Up...' : 'Sign Up'}</Text>
      </TouchableOpacity>
      <View style={styles.policyRow}>
        <TouchableOpacity><Text style={styles.policyLink}>Privacy Policy</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.policyLink}>Terms of Service</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.policyLink}>EULA</Text></TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => router.push('/login')}>
          <Text style={styles.link}>Already a User?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', padding:24 },
  title: { fontSize:28, fontWeight:'bold', textAlign:'center', marginBottom:8 },
  subtitle:{ fontSize:16, color:'#666', textAlign:'center', marginBottom:24 },
  input:{ borderColor:'#ccc', borderWidth:1, borderRadius:8, padding:12, marginBottom:12 },
  button:{ backgroundColor:'#000', padding:16, borderRadius:8, alignItems:'center', marginTop:8 },
  buttonText:{ color:'#fff', fontSize:16, fontWeight:'bold' },
  footer:{ marginTop:16, alignItems:'center' },
  link:{ color:'#000', textDecorationLine:'underline' },
  policyRow: { flexDirection: 'row', justifyContent: 'center', marginVertical: 8 },
  policyLink: { marginHorizontal: 8, fontSize: 12, color: '#000', textDecorationLine: 'underline' }
});
