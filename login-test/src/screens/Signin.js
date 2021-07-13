import React, { useContext, useState, useRef } from 'react';
import { ThemeContext } from 'styled-components/native';
import styled from 'styled-components';
import { Button, Image, Input, ErrorMessage } from '../compoments';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { signin } from '../firebase';
import { Alert } from 'react-native';
import { validateEmail, removeWhitespace } from '../utils';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 0 20px;
  padding-top: ${({insets: {top}}) => top}px;
  padding-bottom: ${({insets: {bottom}}) => bottom}px;
`;

const LOGO='https://firebasestorage.googleapis.com/v0/b/rn-chat-55bad.appspot.com/o/linist_logo.png?alt=media';

const Signin = ({navigation}) => {
    const insets = useSafeAreaInsets();
    const theme = useContext(ThemeContext);

    //useState를 이용해서 email, password 상태 변수를 만든다
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const refPassword = useRef(null);

    const _handleEmailChange = email => {
        const changedEmail = removeWhitespace(email);
        setEmail(changedEmail);
        setErrorMessage(
            validateEmail(changedEmail) ? '' : 'Please verify your email'
        );
    };

    const _handlePasswordChange = password => {
        setPassword(removeWhitespace(password));
    };

    const _handleSigninBtnPress = async () => {
        try{
            const user = await signin({email, password});
            navigation.navigate('Profile', { user });
        }
        catch (e) {
            Alert.alert('Signin Error', e.message);
        }
    }

    return (
        <KeyboardAwareScrollView 
            extraScrollHeight={20}
            contentContainerStyle={{ flex: 1 }}
        >
        <Container insets={insets}>
            <Image url={LOGO} />
            <Input
                label="Email"
                placeholder="Email"
                returnKeyType="next"
                value={email}
                onChangeText={_handleEmailChange}
                onSubmitEditing={() => refPassword.current.focus()}
            />
            <Input
                ref={refPassword}
                label="Password"
                placeholder="Password"
                returnKeyType="done"
                value={password}
                onChangeText={_handlePasswordChange}
                isPassword={true}
                onSubmitEditing={_handleSigninBtnPress}
            />
            <ErrorMessage message={errorMessage} />
            <Button title="sign in" onPress={_handleSigninBtnPress} />
            <Button 
                title="or sign up"
                onPress={() => navigation.navigate('Signup')}
                containerStyle={{ marginTop: 0, backgroundColor: 'transparent' }}
                textStyle={{color: theme.btnTextLink, fontSize: 18}}
            />
            {/* <Button title="MainScreen" onPress={() => navigation.navigate('MainScreen')} /> */}
            {/* <Button title="Background" onPress={() => navigation.navigate('Background')} /> */}
        </Container>
        </KeyboardAwareScrollView>
    );
};

export default Signin;