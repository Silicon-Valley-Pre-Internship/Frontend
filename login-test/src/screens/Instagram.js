import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import styled from 'styled-components/native';

import CardComponent from '../components/CardComponent'

const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.background};
`;

class Instagram extends Component {

    static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-home" style={{ color: tintColor }} />
        )
    }

    render() {
        return (
            <Container style={styles.container}>
                    <CardComponent imageSource="1" likes="101" />
                    <CardComponent imageSource="2" likes="201" />
                    <CardComponent imageSource="3" likes="301" />
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});

export default Instagram;