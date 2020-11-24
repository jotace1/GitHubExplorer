import React, {useCallback, useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

import FollowItem from '../../components/FollowItem';

import {
  Container,
  Header,
  BackButton,
  FollowerTitle,
  FollowBox,
} from './styles';
import {useAuth} from '../../hooks/auth';
import axios from 'axios';

const Followers: React.FC = () => {
  const [followers, setFollowers] = useState([]);
  const {user} = useAuth();
  const {goBack} = useNavigation();

  const loadFollowers = useCallback(async () => {
    const response = await axios.get(user.followers_url);

    setFollowers(response.data);
  }, [user.followers_url]);

  useEffect(() => {
    loadFollowers();
  }, [loadFollowers]);

  const handleGoBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack}>
          <Icon name="arrowleft" size={30} color="#fff" />
        </BackButton>
        <FollowerTitle>{user.followers} seguidores</FollowerTitle>
      </Header>
      <ScrollView>
        <FollowBox>
          {followers.map((follower) => (
            <FollowItem key={follower.id} follower={follower} />
          ))}
        </FollowBox>
      </ScrollView>
    </Container>
  );
};

export default Followers;
