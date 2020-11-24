import Icon from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 30px;
  border-bottom-width: 0.5px;
  border-bottom-color: #fff;
`;

export const BorderLeft = styled.View`
  width: 20px;
  height: 45px;
  background: #ffce00;
  border-radius: 10px;
  margin-left: -10px;
  margin-right: 10px;
`;

export const TitleBox = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  margin-left: 10px;
  font-weight: bold;
  color: #fff;
  font-size: 20px;
`;

export const Description = styled.Text`
  font-size: 15px;
  color: #fff;

  padding: 0 20px 5px 30px;
`;

export const RepoInfoBox = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const StarsBox = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 30px;
`;

export const StarsNumber = styled.Text`
  color: #fff;
  font-size: 15px;
  margin-left: 7px;
`;

export const LockBox = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 18px;
`;

export const LockButton = styled(Icon)`
  color: #63bf1f;
  margin-right: 15px;
`;

export const UnlockButton = styled(Icon)`
  color: #cc042a;
`;
