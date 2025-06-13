import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { supabase } from '@/lib/supabase';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) Alert.alert('Error', error.message);
    else router.replace('(tabs)');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back</Text>
      <Text style={styles.subtitle}>Ready to continue?</Text>
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
      <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
        <Text style={styles.buttonText}>{loading ? 'Logging In...' : 'Login'}</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => router.push('/signup')}>
          <Text style={styles.link}>Need to make a new account?</Text>
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
  link:{ color:'#000', textDecorationLine:'underline' }
});
