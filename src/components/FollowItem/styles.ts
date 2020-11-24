import Icon from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 30px;
  border-bottom-width: 0.5px;
  border-bottom-color: #fff;
  flex-direction: row;
  align-items: center;
`;

export const BorderLeft = styled.View`
  width: 20px;
  height: 45px;
  background: #ffce00;
  border-radius: 10px;
  margin-left: -10px;
  margin-right: 10px;
`;

export const FirstBox = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SecondBox = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Avatar = styled.Image`
  height: 64px;
  width: 64px;
  border-radius: 32px;
  border: 3px solid #fff;
`;

export const Name = styled.Text`
  margin-right: 110px;
  color: #fff;
  font-size: 19px;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity``;
