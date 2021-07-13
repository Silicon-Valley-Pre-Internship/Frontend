import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { MaterialIcons } from '@expo/vector-icons';

const ButtonContainer = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.imgBtnBackground};
    position: absolute;
    bottom: 0;
    right: 0;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
`;

const ButtonIcon = styled(MaterialIcons).attrs(({theme}) => ({
    name: 'photo-camera',
    size: 22,
    color: theme.imgBtnIcon,
}))``;

const PhotoButton = ({onPress}) => {
    return (
        <ButtonContainer onPress={onPress}>
            <ButtonIcon />
        </ButtonContainer>
    );
};

const Container = styled.View`
    margin-bottom: 30px;
`;

const ProfileImage = styled.Image`
    background-color: ${({ theme }) => theme.imgBackground};
    width: 100px;
    height: 100px;
    border-radius: 50px;
`;

const Image = ({ url, showButton }) => {
    return (
        <Container>
            <ProfileImage source={{ uri: url }} />
            {showButton && <PhotoButton />}
        </Container>
    );
};

Image.defaultProps = {
    url: 'https://firebasestorage.googleapis.com/v0/b/rn-chat-55bad.appspot.com/o/profile.png?alt=media'
}

Image.propTypes = {
    url: PropTypes.string,
    showButton: PropTypes.bool,
};

export default Image;