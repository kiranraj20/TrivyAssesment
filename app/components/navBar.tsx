import {
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
  StyleSheet,
  ImageProps,
} from "react-native";
import React, { useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import Svg, { Path } from "react-native-svg";
import { Tabs } from "expo-router";
import { useLinkBuilder, useRoute, useTheme } from "@react-navigation/native";

import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

const NavBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  // const route = useRoute();
  // const [tab, setTab] = useState(route.name);

  const icons = {
    home: (props: any) => (
      <Image
        source={require("../../assets/images/home.png")}
        width={25}
        height={27}
        {...props}
      />
    ),
    index: (props: any) => (
      <Image
        source={require("../../assets/images/scanner.png")}
        width={25}
        height={25}
        {...props}
      />
    ),
    ginie: (props: any) => (
      <Image
        source={require("../../assets/images/ginie.png")}
        width={25}
        height={25}
        {...props}
      />
    ),
  };

  const { colors } = useTheme();
  // const { buildHref } = useLinkBuilder();

  return (
    // <View
    //   style={{
    //     position: "absolute",
    //     bottom: 0,
    //     left: 0,
    //     right: 0,
    //     flexDirection: "row",
    //     justifyContent: "space-around",
    //     alignItems: "center",
    //     backgroundColor: "black",
    //     paddingVertical: 10,
    //     zIndex: 1,
    //   }}
    // >
    //   <View
    //     style={{
    //       width: 1000,
    //       height: 1000,
    //       borderTopWidth: 1,
    //       borderRightWidth: 0.1,
    //       borderLeftWidth: 0.1,
    //       borderColor: "white",
    //       position: "absolute",
    //       top: 0,
    //       left: "50%",
    //       transform: [{ translateX: "-50%"}, {translateY: "-1.5%" }],
    //       borderRadius: 1000,
    //     }}
    //   />
    //   <Pressable  onPress={()=>setTab("home")} >
    //     <View style={{ flexDirection: "column", alignItems: "center", gap: 10, opacity: tab==='home'?1:0.5 }}>
    //       <View
    //         style={{
    //           padding: 15,
    //           borderWidth: 1,
    //           borderColor: "white",
    //           borderRadius: 50,
    //           borderBottomWidth: 0,
    //         }}
    //       >
    //         <Image
    //           source={require("../assets/images/home.png")}
    //           width={25}
    //           height={27}
    //         />
    //       </View>
    //       <Text style={{ color: "white", fontSize: 14, fontWeight: 500 }}>
    //         home
    //       </Text>
    //     </View>
    //   </Pressable>
    //   <Pressable onPress={()=>setTab("yolo")} >
    //     <View style={{ flexDirection: "column", alignItems: "center", gap: 10, paddingBottom: 15, opacity: tab==='index'?1:0.5 }}>
    //       <View
    //         style={{
    //           padding: 25,
    //           borderWidth: 1,
    //           borderColor: "white",
    //           borderRadius: 50,
    //           borderBottomWidth: 0,
    //         }}
    //       >
    //         <Image
    //           source={require("../assets/images/scanner.png")}
    //           width={25}
    //           height={25}
    //         />
    //       </View>
    //       <Text style={{ color: "white", fontSize: 14, fontWeight: 500 }}>
    //         yolo pay
    //       </Text>
    //     </View>
    //   </Pressable>
    //   <Pressable  onPress={()=>setTab("ginie")} >
    //     <View style={{ flexDirection: "column", alignItems: "center", gap: 10, opacity: tab==='ginie'?1:0.5 }}>
    //       <View
    //         style={{
    //           padding: 15,
    //           borderWidth: 1,
    //           borderColor: "white",
    //           borderRadius: 50,
    //           borderBottomWidth: 0,
    //         }}
    //       >
    //         <Image
    //           source={require("../assets/images/ginie.png")}
    //           width={25}
    //           height={25}
    //         />
    //       </View>
    //       <Text style={{ color: "white", fontSize: 14, fontWeight: 500 }}>
    //         ginie
    //       </Text>
    //     </View>
    //   </Pressable>
    // </View>
    <View style={styles.navbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = (e: any) => {
          e.stopPropagation();
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });
          console.log(route.name);

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            style={[styles.tabItem, { opacity: isFocused ? 1 : 0.5 }] as any}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <View style={[styles.icon, { padding: isFocused ? 20 : 15 }]}>
              {icons[route.name as keyof typeof icons]({
                color: "white",
                padding: isFocused ? 20 : 0,
              })}
            </View>
            <Text style={{ color: "white", fontSize: isFocused?18:15, fontWeight: 500 }}>
              {typeof label === "string"
                ? label
                : label({
                    focused: isFocused,
                    color: isFocused ? colors.primary : colors.text,
                    position: "beside-icon",
                    children: "",
                  })}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    backgroundColor: "black",
    paddingVertical: 10,
  },
  tabItem: {
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
  },
  icon: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 50,
    borderBottomWidth: 0,
  },
});
