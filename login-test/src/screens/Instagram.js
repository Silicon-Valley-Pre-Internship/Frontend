import React from 'react';
import styled from 'styled-components/native';
import {Button} from '../components';

const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.background};
`;

const Instagram = () => {

    return (
        <Container>
            <Button
                title="instagram"
            />
        </Container>
    );
};

export default Instagram;