import React, {useCallback, useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import api from '../../services/api';
import {useAuth} from '../../hooks/auth';

import {
  Container,
  InputBox,
  SubmitButton,
  SubmitLabel,
  Error,
  Input,
} from './styles';
import {Text} from 'react-native';

const SignIn: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const {signIn} = useAuth();
  const {navigate} = useNavigation();

  const handleSignIn = useCallback(async () => {
    setError('');
    if (inputValue.length) {
      try {
        signIn(inputValue);
      } catch (err) {
        setError('usuario invalidado');
      }

      if (!error) {
        navigate('Tabs');
      }
    } else {
      setError('Campo obrigatório');
    }
  }, [inputValue, navigate, signIn, error]);

  return (
    <Container>
      <Icon name="github" size={130} color="#FFCE00" />
      <InputBox>
        <Input
          placeholder="Usuário"
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        />
        {error ? <Error>{error}</Error> : undefined}
      </InputBox>

      <SubmitButton onPress={handleSignIn}>
        <SubmitLabel style={{fontSize: 20, fontWeight: 'bold'}}>
          ENTRAR
        </SubmitLabel>
        <Icon name="arrowright" size={20} />
      </SubmitButton>
    </Container>
  );
};

export default SignIn;
