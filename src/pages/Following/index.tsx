import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {ScrollView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {
  Container,
  Header,
  BackButton,
  FollowerTitle,
  FollowBox,
  Message,
} from './styles';

const Following: React.FC = () => {
  const {goBack} = useNavigation();
  const handleGoBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack}>
          <Icon name="arrowleft" size={30} color="#fff" />
        </BackButton>
        <FollowerTitle>Seguindo</FollowerTitle>
      </Header>
      <FollowBox>
        <Message>Área em desenvolvimento</Message>
      </FollowBox>
    </Container>
  );
};

export default Following;
