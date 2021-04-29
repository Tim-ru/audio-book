import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

// import LinearGradient from 'react-native-linear-gradient';

function HomeScreen({ navigation }) {

    const Options = React.useState(0);
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTintColor: "#750CF2"

        });
    }, [navigation, Options]);
    return (
        <View style={styles.main}>
            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={styles.textLogo}>AudioBook</Text>
                </View>

                <View style={styles.title}>
                    <Text style={styles.titleText}>Last book</Text>
                </View>

                <View style={styles.cont}>
                    <LinearGradient
                        // Background Linear Gradient
                        colors={['rgba(0,0,0,0.8)', 'transparent']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.background}
                    />
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    main: {
        fontFamily: 'Poppins',
        width: '100%',
        flex: 1,
        alignItems: 'center',

    },
    container: {
        alignItems: 'center',
        width: '80%',
    },
    header: {
        height: 70,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 10,
        textAlign: 'left',

    },
    navbar: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    textLogo: {
        textAlign: 'left',
        fontSize: 24,
        fontWeight: 600,
    },
    title: {
        fontFamily: 'Poppins',
        width: '100%',
        textAlign: 'left',
        marginTop: 44,
        marginBottom: 18,
    },
    titleText: {
        fontSize: 18,
        fontWeight: 600,
    },
    tipRect: {
        height: 230,
        width: '100%',
        backgroundColor: 'orange',
    },


    // 
    cont: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
    },
    background: {
        left: 0,
        right: 0,
        top: 0,
        width: 100,
        height: 230,
    },

})

export default HomeScreen