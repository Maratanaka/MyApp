import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Example() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Videó háttér */}
      <video
  src="https://raw.githubusercontent.com/Maratanaka/MyApp/master/assets/images/9694804-uhd_2160_4096_25fps%20(1).mp4"
  autoPlay
  loop
  muted
  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
/>


      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={require('../../assets/images/logo3.png')}
            style={styles.headerImg}
            resizeMode="contain"
            accessibilityLabel="App Logo"
          />
          <Text style={styles.title}>
            Sign in to <Text style={{ color: '#ffffffff' }}>MyApp</Text>
          </Text>
          <Text style={styles.subtitle}>
            Get access to your portfolio and more
          </Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Email address</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
              keyboardType="email-address"
              onChangeText={email => setForm({ ...form, email })}
              placeholder="john@example.com"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.email}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              autoCorrect={false}
              clearButtonMode="while-editing"
              onChangeText={password => setForm({ ...form, password })}
              placeholder="********"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              secureTextEntry={true}
              value={form.password}
            />
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity onPress={() => { /* handle onPress */ }}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Sign in</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => { /* handle link */ }}>
            <Text style={styles.formLink}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => { /* handle link */ }}>
          <Text style={styles.formFooter}>
            Don't have an account?{' '}
            <Text style={{ textDecorationLine: 'underline' }}>Sign up</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000', // Fekete háttér
  },
  container: {
    padding: 24,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 36,
  },
  headerImg: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 30,
  },
  title: {
    fontSize: 31,
    fontWeight: '700',
    color: '#8d8d8dff',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
  },
  form: {
    marginTop: 20,
  },
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#ffffffff',
    marginBottom: 8,
  },
  inputControl: {
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: '#C9D3DB',
  },
  formAction: {
    marginTop: 40, // Gomb lejjebb
    marginBottom: 16,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#a8a8a8ff',
    borderColor: '#000000ff',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
  formLink: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffffff',
    textAlign: 'center',
    marginTop: 60,
  },
  formFooter: {
    paddingVertical: 10,
    fontSize: 15,
    fontWeight: '600',
    color: '#9a9a9aff',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
});
