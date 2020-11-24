import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #292929;

  align-items: center;
  justify-content: center;
`;

export const InputBox = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 60px;
  background: #fff;
  width: 340px;
  height: 56px;
  border-radius: 12px;
`;

export const Input = styled.TextInput`
  flex: 1;
  padding: 15px;
  height: 56px;
`;

export const SubmitButton = styled.TouchableOpacity`
  margin-top: 20px;
  background: #ffce00;
  width: 340px;
  height: 56px;
  border-radius: 12px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SubmitLabel = styled.Text`
  margin-right: 10px;
`;

export const Error = styled.Text`
  font-size: 14px;
  color: #eb2d2d;
  margin-right: 15px;
`;
