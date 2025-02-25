import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  Animated,
  Easing,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import NavBar from "./navBar";
import * as Font from "expo-font";
import { useEffect, useRef, useState } from "react";
import Card from "./card";

export default function Index() {
  const [freeze, setFreeze] = useState(true);

  const loadFonts = async () => {
    await Font.loadAsync({
      Stalker: require("../assets/fonts/Stalker1.ttf"),
    });
  };

  useEffect(() => {
    loadFonts();
  }, []);

  const handleFreeze = () => {
    freeze ? setFreeze(false) : setFreeze(true);
  };

  const AnimatedImageBackground =
    Animated.createAnimatedComponent(ImageBackground);
  const Ionicon = Animated.createAnimatedComponent(Ionicons);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const colorAnim = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["red", "white"],
  });

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <StatusBar barStyle={"light-content"} backgroundColor={"black"} />
      <View
        style={{
          backgroundColor: "black",
          padding: 20,
          flex: 1,
          width: "100%",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <Text style={{ fontSize: 24, color: "white", fontWeight: "800" }}>
          select payment mode
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: "white",
            fontWeight: "400",
            opacity: 0.7,
          }}
        >
          choose your preferred payment method to make payment.
        </Text>
        <View style={{ flexDirection: "row", paddingVertical: 20, gap: 10 }}>
          <Pressable>
            <Text
              style={{
                fontSize: 16,
                color: "white",
                fontWeight: "600",
                paddingVertical: 10,
                paddingHorizontal: 30,
                borderWidth: 1,
                borderColor: "white",
                borderRadius: 50,
                borderBottomWidth: 0,
              }}
            >
              pay
            </Text>
          </Pressable>
          <Pressable>
            <Text
              style={{
                fontSize: 16,
                color: "#A90808",
                fontWeight: "600",
                paddingVertical: 10,
                paddingHorizontal: 30,
                borderWidth: 1,
                borderColor: "#A90808",
                borderRadius: 50,
                borderBottomWidth: 0,
              }}
            >
              card
            </Text>
          </Pressable>
        </View>
        <Text
          style={{
            fontSize: 12,
            color: "white",
            fontWeight: "400",
            opacity: 0.4,
            paddingTop: 40,
          }}
        >
          YOUR DIGITAL DEBIT CARD
        </Text>
        <View
          style={{
            paddingVertical: 20,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {freeze ? (
            <AnimatedImageBackground
              source={require("../assets/images/BackgroundBlur.png")}
              resizeMode="cover"
              style={{
                width: 186,
                height: 296,
                borderRadius: 16,
                flexDirection: "column",
                justifyContent: "space-between",
                opacity: fadeAnim,
              }}
            />
          ) : (
            <Card />
          )}
          <Pressable
            onPress={() => handleFreeze()}
            style={{
              paddingHorizontal: 20,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Ionicon
              name="snow"
              size={20}
              color={freeze?'red':'white'}
              style={{
                borderWidth: 0.5,
                padding: 20,
                borderColor: freeze?'red':'white',
                borderRadius: 50,
                borderBottomWidth: 0,
              }}
            />
            <Animated.Text
              style={{
                color: freeze?'red':'white',
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              {freeze?'unfreeze':'freeze'}
            </Animated.Text>
          </Pressable>
        </View>
      </View>
      <NavBar />
    </SafeAreaView>
  );
}
