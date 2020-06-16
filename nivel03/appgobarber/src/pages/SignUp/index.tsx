import React, { useRef } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import logoImg from '../../assets/logo.png';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import Input from '../../components/Input';
import { BackToSignIn, BackToSignInText, Container, Title } from './styles';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
const SignUp: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={logoImg} />
            <View>
              <Title>Crie sua conta</Title>
            </View>
            <Form ref={formRef} onSubmit={() => {}}>
              <Input
                autoCorrect={true}
                autoCapitalize="words"
                name="name"
                icon="user"
                placeholder="Nome"
              />
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                name="email"
                icon="mail"
                placeholder="E-mail"
              />
              <Input
                secureTextEntry
                name="password"
                icon="lock"
                placeholder="Senha"
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />
            </Form>
            <Button onPress={() => formRef.current?.submitForm()}>
              Entrar
            </Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <BackToSignIn onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} color={'#fff'} />
        <BackToSignInText>Voltar para logon</BackToSignInText>
      </BackToSignIn>
    </>
  );
};

export default SignUp;
