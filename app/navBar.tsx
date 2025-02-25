import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import Svg, { Path } from "react-native-svg";
import { Link } from "expo-router";
import { useRoute } from '@react-navigation/native';

const NavBar = () => {

  const route = useRoute();
  const [tab, setTab] = useState(route.name);

  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "black",
        paddingVertical: 10,
        zIndex: 1,
      }}
    >
      <View
        style={{
          width: 1000,
          height: 1000,
          borderTopWidth: 1,
          borderRightWidth: 0.1,
          borderLeftWidth: 0.1,
          borderColor: "white",
          position: "absolute",
          top: 0,
          left: "50%",
          transform: [{ translateX: "-50%"}, {translateY: "-1.5%" }],
          borderRadius: 1000,
        }}
      />
      <Link href='/home' onPress={()=>setTab("home")} >
        <View style={{ flexDirection: "column", alignItems: "center", gap: 10, opacity: tab==='home'?1:0.5 }}>
          <View
            style={{
              padding: 15,
              borderWidth: 1,
              borderColor: "white",
              borderRadius: 50,
              borderBottomWidth: 0,
            }}
          >
            <Image
              source={require("../assets/images/home.png")}
              width={25}
              height={27}
            />
          </View>
          <Text style={{ color: "white", fontSize: 14, fontWeight: 500 }}>
            home
          </Text>
        </View>
      </Link>
      <Link href='/' onPress={()=>setTab("yolo")} >
        <View style={{ flexDirection: "column", alignItems: "center", gap: 10, paddingBottom: 15, opacity: tab==='index'?1:0.5 }}>
          <View
            style={{
              padding: 25,
              borderWidth: 1,
              borderColor: "white",
              borderRadius: 50,
              borderBottomWidth: 0,
            }}
          >
            <Image
              source={require("../assets/images/scanner.png")}
              width={25}
              height={25}
            />
          </View>
          <Text style={{ color: "white", fontSize: 14, fontWeight: 500 }}>
            yolo pay
          </Text>
        </View>
      </Link>
      <Link href='/ginie' onPress={()=>setTab("ginie")} >
        <View style={{ flexDirection: "column", alignItems: "center", gap: 10, opacity: tab==='ginie'?1:0.5 }}>
          <View
            style={{
              padding: 15,
              borderWidth: 1,
              borderColor: "white",
              borderRadius: 50,
              borderBottomWidth: 0,
            }}
          >
            <Image
              source={require("../assets/images/ginie.png")}
              width={25}
              height={25}
            />
          </View>
          <Text style={{ color: "white", fontSize: 14, fontWeight: 500 }}>
            ginie
          </Text>
        </View>
      </Link>
    </View>
  );
};

export default NavBar;
