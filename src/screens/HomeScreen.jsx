import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function HomeScreen({ navigation }) {
    const Options = React.useState(0);
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTintColor: "#750CF2"

        });
    }, [navigation, Options]);
    return (
        <View style={styles.main}>
            <View style={styles.header}>

                <Text style={styles.textLogo}>AudioBook</Text>

            </View>
            <Text>Home!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        height: 70,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#641E8E',
        paddingBottom: 10,
    },
    navbar: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    textLogo: {
        fontFamily: 'Poppins',
        fontSize: 24,
    },
    navButton: {
        borderWidth: 2,
        borderColor: '#750CF2'
    }

})

export default HomeScreen