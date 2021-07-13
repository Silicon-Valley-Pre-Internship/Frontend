import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Button, Image, Input } from '../compoments';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 0 20px;
  padding-top: ${({insets: {top}}) => top}px;
  padding-bottom: ${({insets: {bottom}}) => bottom}px;
`;

const Signup = () => {
    const insets = useSafeAreaInsets();

    //useState를 이용해서 email, password 상태 변수를 만든다
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const refEmail = useRef(null);
    const refPassword = useRef(null);
    const refPasswordConfirm = useRef(null);

    const _handleSignupBtnPress = () => {
        console.log('signup');
    }

    return (
        <Container insets={insets}>
            <Image />
            <Input
                label="Name"
                placeholder="Name"
                returnKeyType="next"
                value={name}
                onChangeText={setName}
                onSubmitEditing={() => refEmail.current.focus()}
            />
            <Input
                ref={refEmail}
                label="Email"
                placeholder="Email"
                returnKeyType="next"
                value={email}
                onChangeText={setEmail}
                onSubmitEditing={() => refPassword.current.focus()}
            />
            <Input
                ref={refPassword}
                label="Password"
                placeholder="Password"
                returnKeyType="next"
                value={password}
                onChangeText={setPassword}
                isPassword={true}
                onSubmitEditing={() => refPasswordConfirm.current.focus()}
            />
            <Input
                ref={refPasswordConfirm}
                label="Password Confirm"
                placeholder="Password"
                returnKeyType="next"
                value={passwordConfirm}
                onChangeText={setPasswordConfirm}
                isPassword={true}
                onSubmitEditing={_handleSignupBtnPress}
            />
            <Button title="sign up" onPress={_handleSignupBtnPress} />
            
        </Container>
    );
};

export default Signup;