import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useAuth} from '../../hooks/auth';

import {
  Container,
  BorderLeft,
  FirstBox,
  Avatar,
  Name,
  Button,
  SecondBox,
} from './styles';

interface FollowItemProps {
  follower: object;
}

const FollowItem: React.FC<FollowItemProps> = ({follower}) => {
  const {navigate} = useNavigation();
  const {signOut, signIn} = useAuth();

  const handleChangeProfile = useCallback(() => {
    signOut();
    signIn(follower.login);

    navigate('Tabs');
  }, [signOut, signIn, follower.login]);

  return (
    <Container>
      <FirstBox>
        <BorderLeft />
      </FirstBox>
      <SecondBox>
        <Avatar
          source={{
            uri: follower.avatar_url,
          }}
        />
        <Name>#{follower.login}</Name>
        <Button onPress={handleChangeProfile}>
          <Icon name="arrowright" size={22} color="#fff" />
        </Button>
      </SecondBox>
    </Container>
  );
};

export default FollowItem;
