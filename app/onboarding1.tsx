import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Onboarding1() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Problem Statement</Text>
      <Text style={styles.subtitle}>Simple clear statement that doesn’t confuse</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/onboarding2')}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center', padding:24 },
  title: { fontSize:24, fontWeight:'bold', marginBottom:12, textAlign:'center' },
  subtitle: { fontSize:16, color:'#666', marginBottom:24, textAlign:'center' },
  button: { backgroundColor:'#000', paddingVertical:12, paddingHorizontal:32, borderRadius:8 },
  buttonText: { color:'#fff', fontSize:16, fontWeight:'bold' }
});
