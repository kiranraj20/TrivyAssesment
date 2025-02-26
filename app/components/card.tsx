import { View, Text, ImageBackground, Animated, Easing, Pressable } from "react-native";
import React, { useEffect, useRef, useState } from "react";

import { SvgUri } from "react-native-svg";
import { faker } from "@faker-js/faker";
import Ionicons from "@expo/vector-icons/Ionicons";
import Bank from "../../assets/svg/Bank";
import Logo from "../../assets/svg/Logo";
import Copy from "../../assets/svg/Copy";
import Rupay from "../../assets/svg/Rupay";
import Union from "../../assets/svg/Union";

const AnimatedImageBackground =
  Animated.createAnimatedComponent(ImageBackground);

const card = () => {

  const [showCVV, setShowCVV] = useState(false);
  const handleCVV = () => {
    showCVV ? setShowCVV(false) : setShowCVV(true);
  }

  const[cardNumber] = useState(faker.finance.creditCardNumber({issuer: "63[7-9]#-####-####-###L"}));
  const[cvv] = useState(faker.finance.creditCardCVV());
  const rows = cardNumber.split("-");

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000, // 1 second animation
      easing: Easing.inOut(Easing.ease), // Ease-in-out effect
      useNativeDriver: true, // Better performance
    }).start();
  }, [fadeAnim]);

  return (
    <AnimatedImageBackground
      source={require("../../assets/images/Background.png")}
      resizeMode="cover"
      style={{
        width: 186,
        height: 296,
        borderRadius: 16,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Animated.View
        style={{
          padding: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          opacity: fadeAnim,
        }}
      >
        <Logo />
        <Bank />
      </Animated.View>
      <View
        style={{
          padding: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flex: 0.8,
        }}
      >
        <Animated.View
          style={{
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            position: "relative",
            gap: 7.5,
            opacity: fadeAnim,
          }}
        >
          {rows.map((row, index) => (
            <Text
              key={index}
              style={{
                color: "white",
                fontSize: 18,
                fontWeight: 600,
                marginHorizontal: 10,
                fontFamily: "Stalker",
              }}
            >
              {row}
            </Text>
          ))}
          <Union
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              transform: [{ translateX: "-50%" }],
            }}
          />
          <Union
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: [{ translateX: "-50%" }, { translateY: "-30%" }],
            }}
          />
          <Union
            style={{
              position: "absolute",
              left: "50%",
              bottom: 0,
              transform: [{ translateX: "-50%" }],
            }}
          />
        </Animated.View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 25,
            flex: 1,
            paddingHorizontal: 20,
          }}
        >
          <Animated.View style={{ opacity: fadeAnim }}>
            <Text
              style={{
                color: "white",
                fontSize: 12,
                fontWeight: 600,
                opacity: 0.5,
              }}
            >
              expiry
            </Text>
            <Text style={{ color: "white", fontSize: 14, fontWeight: 600 }}>
              12/25
            </Text>
          </Animated.View>
          <Animated.View style={{ opacity: fadeAnim }}>
            <Text
              style={{
                color: "white",
                fontSize: 12,
                fontWeight: 600,
                opacity: 0.5,
              }}
            >
              CVV
            </Text>
            <Animated.View
              style={{
                width:'100%',
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 10,
                opacity: fadeAnim,
              }}
            >
              <Text style={{ color: "white", fontSize: 16, fontWeight: 600 }}>
                {showCVV ? cvv : "•••"}
              </Text>
              <Pressable onPress={() => handleCVV()}>
                <Ionicons
                  name="eye-off-outline"
                  size={20}
                  color="red"
                  style={{}}
                />
              </Pressable>
            </Animated.View>
          </Animated.View>
        </View>
      </View>
      <View
        style={{
          padding: 10,
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 10,
        }}
      >
        <Animated.View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            opacity: fadeAnim,
          }}
        >
          <Copy width={18} />
          <Text style={{ color: "red", fontSize: 15, fontWeight: 600 }}>
            {" "}
            copy details
          </Text>
        </Animated.View>
        <Animated.View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            opacity: fadeAnim,
          }}
        >
          <Rupay />
        </Animated.View>
      </View>
    </AnimatedImageBackground>
  );
};

export default card;
