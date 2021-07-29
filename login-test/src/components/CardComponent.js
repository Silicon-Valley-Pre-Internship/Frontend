import React from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { Profile } from '../screens';

class CardComponent extends Component{
    render(){
        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../assets/me.jpg')}/>
                        <Body>
                            <Text>UserName</Text>
                            <Text note>July 29, 2021</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem>
                    <Image soure={require('../assets/profile.png')} style={{height: 200, width: null, flex: 1}} />
                </CardItem>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default CardComponent;