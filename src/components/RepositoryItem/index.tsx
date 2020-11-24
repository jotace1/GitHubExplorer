import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  BorderLeft,
  Title,
  Description,
  TitleBox,
  RepoInfoBox,
  StarsBox,
  StarsNumber,
  LockBox,
  LockButton,
  UnlockButton,
} from './styles';

interface RepositoryItemProps {
  repository: object;
}

const RepositoryItem: React.FC<RepositoryItemProps> = ({repository}) => {
  return (
    <Container>
      <TitleBox>
        <BorderLeft />
        <Title>{repository.name}</Title>
      </TitleBox>
      <Description>{repository.description}</Description>

      <RepoInfoBox>
        <StarsBox>
          <Icon name="star" size={20} color="#FFCE00" />
          <StarsNumber>{repository.stargazers_count}</StarsNumber>
        </StarsBox>
        <LockBox>
          <LockButton name="lock" size={25} />
          <UnlockButton name="unlock" size={25} />
        </LockBox>
      </RepoInfoBox>
    </Container>
  );
};

export default RepositoryItem;
