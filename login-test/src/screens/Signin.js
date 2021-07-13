import React, { useContext, useState, useRef } from 'react';
import { ThemeContext } from 'styled-components/native';
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

const LOGO='https://firebasestorage.googleapis.com/v0/b/rn-chat-55bad.appspot.com/o/linist_logo.png?alt=media';

const Signin = ({navigation}) => {
    const insets = useSafeAreaInsets();
    const theme = useContext(ThemeContext);

    //useState를 이용해서 email, password 상태 변수를 만든다
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const refPassword = useRef(null);

    const _handleSigninBtnPress = () => {
        console.log('signin');
    }

    return (
        <Container insets={insets}>
            <Image url={LOGO} />
            <Input
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
                returnKeyType="done"
                value={password}
                onChangeText={setPassword}
                isPassword={true}
                onSubmitEditing={_handleSigninBtnPress}
            />
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
    );
};

export default Signin;