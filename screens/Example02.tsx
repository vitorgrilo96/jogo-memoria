import { Button, View, StyleSheet } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from "react-native-reanimated";

export function Example02() {
    const translateX = useSharedValue(0);

    const handlePress = () => {
        translateX.value += 50;
    }

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{
            translateX: withSpring(translateX.value * 2)
        }]
    }));

    return (
        <View>
            <Animated.View style={[styles.box, animatedStyles]} />
            <Button title="Clique aqui bem aqui" onPress={handlePress} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        height: 100,
        width: 100,
        backgroundColor: 'cyan',
        borderRadius: 20,
        marginVertical: 16
    }
});  