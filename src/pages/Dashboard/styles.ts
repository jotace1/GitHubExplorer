import styled from 'styled-components/native';

export const FullContainer = styled.View`
  background: #292929;
`;

export const Header = styled.View`
  background: #1f1f1f;
  width: 100%;
  height: 150px;

  flex-direction: row;
  justify-content: space-between;
`;

export const UserName = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 21px;
  margin: 24px 0 0 10px;
`;

export const SignOutButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  height: 30px;
  margin: 24px 25px 0 0;
`;

export const SignOutText = styled.Text`
  color: #fff;
  font-size: 21px;
  margin-right: 10px;
`;

export const Container = styled.View`
  background: #292929;
  flex: 1;
  align-items: center;
`;

export const Avatar = styled.Image`
  height: 130px;
  width: 130px;
  border-radius: 65px;
  border: 4px solid #fff;
  margin-top: -60px;
`;

export const ProfileInfo = styled.View`
  width: 100%;
  margin-top: 40px;
`;

export const ProfileNameBox = styled.View`
  width: 100%;
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

export const ProfileName = styled.Text`
  color: #fff;
  font-size: 26px;
  font-weight: bold;
`;

export const ProfileEmail = styled.Text`
  color: #fff;
  font-size: 18px;
  margin-left: 22px;
`;

export const ProfileLocation = styled.Text`
  margin-top: 5px;
  color: #fff;
  font-size: 18px;
  margin-left: 22px;
`;

export const InfoContainer = styled.View`
  margin-top: 30px;
  background: #5252525d;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  padding: 10px 0 10px 0;
`;

export const InfoBox = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const InfoNumber = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 40px;
`;

export const InfoLabel = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export const BioContainer = styled.View`
  margin-top: 40px;
  width: 100%;
`;

export const BioTitleBox = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BioTitle = styled.Text`
  font-size: 26px;
  color: #fff;
  font-weight: bold;
`;

export const BioText = styled.Text`
  color: #fff;
  padding: 20px;
  font-size: 18px;
  margin-bottom: 50px;
`;
