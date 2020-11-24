import React, {useCallback} from 'react';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import {
  FullContainer,
  Header,
  UserName,
  SignOutButton,
  SignOutText,
  Container,
  Avatar,
  ProfileInfo,
  ProfileNameBox,
  BorderLeft,
  ProfileName,
  ProfileEmail,
  ProfileLocation,
  InfoContainer,
  InfoBox,
  InfoNumber,
  InfoLabel,
  BioContainer,
  BioTitleBox,
  BioTitle,
  BioText,
} from './styles';
import {useAuth} from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const {user, signOut} = useAuth();
  const {navigate} = useNavigation();

  const SignOut = useCallback(() => {
    signOut();
    navigate('SignIn');
  }, []);

  const handleGoToFollowers = useCallback(() => {
    navigate('Followers');
  }, [navigate]);

  const handleGoToRepositories = useCallback(() => {
    navigate('Repositories');
  }, [navigate]);

  const handleGoToFollowing = useCallback(() => {
    navigate('Following');
  }, [navigate]);

  return (
    <ScrollView>
      <FullContainer>
        <Header>
          <UserName>#{user.login}</UserName>
          <SignOutButton onPress={SignOut}>
            <SignOutText>Sair</SignOutText>
            <Icon name="log-out" size={20} color="#D03434" />
          </SignOutButton>
        </Header>

        <Container>
          <Avatar
            source={{
              uri: user.avatar_url,
            }}
          />

          <ProfileInfo>
            <ProfileNameBox>
              <BorderLeft />
              <ProfileName>
                {user.name ? user.name.toUpperCase() : 'Nome não disponível'}
              </ProfileName>
            </ProfileNameBox>
            <ProfileEmail>
              {user.email ? user.email : 'Email não disponível'}
            </ProfileEmail>
            <ProfileLocation>{user.location}</ProfileLocation>
          </ProfileInfo>

          <InfoContainer>
            <InfoBox onPress={handleGoToFollowers}>
              <InfoNumber>{user.followers}</InfoNumber>
              <InfoLabel>Seguidores</InfoLabel>
            </InfoBox>
            <InfoBox onPress={handleGoToFollowing}>
              <InfoNumber>{user.following}</InfoNumber>
              <InfoLabel>Seguindo</InfoLabel>
            </InfoBox>
            <InfoBox onPress={handleGoToRepositories}>
              <InfoNumber>{user.public_repos}</InfoNumber>
              <InfoLabel>Repos</InfoLabel>
            </InfoBox>
          </InfoContainer>

          <BioContainer>
            <BioTitleBox>
              <BorderLeft />
              <BioTitle>BIO</BioTitle>
            </BioTitleBox>
            <BioText>{user.bio ? user.bio : 'Não possui biografia'}</BioText>
          </BioContainer>
        </Container>
      </FullContainer>
    </ScrollView>
  );
};

export default Dashboard;
