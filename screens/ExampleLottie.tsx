import LottieView from "lottie-react-native";

export function ExampleLottie() {
    return (
        <LottieView
            autoPlay
            loop
            source={require("../assets/animation.json")}
            style={{
                width: 100,
                height: 100
            }}
        />
    );
}