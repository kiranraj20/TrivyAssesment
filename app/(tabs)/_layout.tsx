import { Tabs } from "expo-router";
import NavBar from "../components/navBar";

const TabsLayout = () => {
  return (
    <Tabs initialRouteName="index" screenOptions={{ headerShown: false }} tabBar={(props) => <NavBar {...props} />}>
      <Tabs.Screen name="home" options={{ title: 'Home' }} />
      <Tabs.Screen name="index" options={{ title: 'Yolo' }} />
      <Tabs.Screen name="ginie" options={{ title: 'Ginie' }} />
    </Tabs>
  );
};

export default TabsLayout;