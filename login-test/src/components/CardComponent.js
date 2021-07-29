import React from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

class CardComponent extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>CardComponent</Text>
            </View>
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