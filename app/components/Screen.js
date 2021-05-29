import React from 'react';
import {StyleSheet, View} from 'react-native';
import Constants from 'expo-constants';

export default function Screen({ children }) {
    return (
        <View style={styles.screen}>
            <View style={{flex: 1}}>
                {children}
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: 'orange',
        width: '100%'
    },
});
