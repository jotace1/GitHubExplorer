import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';
export const Container = styled.View`
  background: #292929;
  flex: 1;
`;

export const Header = styled.View`
  padding: 24px;
  background: #1f1f1f;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 15px;
`;

export const RepoTitle = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const RepoBox = styled.View`
  margin-top: 30px;
  background: #292929;
  flex: 1;
`;
