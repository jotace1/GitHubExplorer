import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useAuth} from '../../hooks/auth';

import RepositoryItem from '../../components/RepositoryItem';

import {Header, BackButton, RepoTitle, Container, RepoBox} from './styles';
import axios from 'axios';

const Repositories: React.FC = () => {
  const [repositories, setRepositories] = useState([]);
  const {user} = useAuth();
  const {goBack} = useNavigation();

  const loadRepos = useCallback(async () => {
    const response = await axios.get(user.repos_url);
    setRepositories(response.data);
  }, []);

  useEffect(() => {
    loadRepos();
  }, [loadRepos]);

  const handleGoBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack}>
          <Icon name="arrowleft" size={30} color="#fff" />
        </BackButton>
        <RepoTitle>{user.public_repos} repositórios</RepoTitle>
      </Header>
      <ScrollView>
        <RepoBox>
          {repositories.map((repository) => (
            <RepositoryItem key={repository.id} repository={repository} />
          ))}
        </RepoBox>
      </ScrollView>
    </Container>
  );
};

export default Repositories;
