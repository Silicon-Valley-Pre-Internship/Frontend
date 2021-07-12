//버튼의 형식 지정 (iOS, Android)
import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const Container = styled.View`
    background-color:  ${({theme}) => theme.btnBackground};
    padding: 10px;
    margin: 10px 0;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;

const Title = styled.Text`
    font-size: 24px;
    color: ${({theme}) => theme.btnTitle};
`;

const Button = ({title, onPress, containerStyle, textStyle}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Container style={containerStyle}>
                <Title style={textStyle}>{title}</Title>
            </Container>
        </TouchableOpacity>
    );
};

Button.propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    containerStyle: PropTypes.object,
    textStyle: PropTypes.object,
};

export default Button;