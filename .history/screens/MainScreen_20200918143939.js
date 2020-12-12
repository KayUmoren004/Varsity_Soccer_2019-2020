import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  FlatList,
  ScrollView,
  LayoutAnimation,
  Button,
  Image,
} from "react-native";

import * as firebase from "firebase";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  NavigationContainer,
  createAppContainer, useNavigation
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import Ionicons from "react-native-vector-icons/Ionicons";
import TeamChat from "./ChatScreen";
import Fire from "./Fire";
import HomeScreen from "./HomeScreen";
import GamesScreen from "./GamesScreen";
import LeagueTable from "./LeagueTable";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./Coach/LoginScreen";
import GameCenter from "./Gamecenter"
import * as Permissions from "expo-permissions";
import { Notifications } from "expo";

class AccountScreen extends React.Component {
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    headerShown: true,
  };
  state = {
    email: "",
    displayName: "",
    name: "",
  };

  componentDidMount() {
    const { email, displayName } = firebase.auth().currentUser;

    this.setState({ email, displayName });
  }

  signOutUser = () => {
    firebase.auth().signOut();
  };

  sendPushNotification = () => {
    let token = "ExponentPushToken[4aq1wQCh6YjG9vWJyyEPZR]";
    let response = fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: token,
        sound: "default",
        title: "Demo",
        body: "Demo notificaiton",
      }),
    });
  };

  render() {
    return (
      <ImageBackground
        source={require("../components/images/mainww.png")}
        style={styles.container}
      >
        <View style={styles.container}>
          <Text style={{ color: "#fff" }}>Hi {this.state.displayName}!</Text>

          <TouchableOpacity
            style={{ marginTop: 32 }}
            onPress={this.signOutUser}
          >
            <Text style={{ color: "#fff" }}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    marginTop: 32,
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#fff",
    borderRadius: 30,
    paddingHorizontal: 16,
    color: "#fff",
    fontWeight: "600",
  },
  container2: {
    flex: 1,
  },
  header: {
    fontWeight: "800",
    fontSize: 30,
    color: "#000",
    marginTop: 32,
  },
  continue: {
    height: 70,
    width: 70,
    borderRadius: 70 / 2,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 40,
  },
});

const GCStack = createStackNavigator();



const HomeStack = createStackNavigator();

function HomeStackScreen({GameCenter}) {
  const navigation = useNavigation();

  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#6948f4",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          borderColor: "#000",
        },
      }}
    >

    
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          headerRight: () => (
            <TouchableOpacity
            onPress={() => navigation.navigate('GameCenter')}
            >
             
              <Image
                source={require("../components/img_530882.png")}
                style={{
                  height: 40,
                  width: 40,
                  marginRight: 10,
                  marginBottom: 5,
                }}
              />
            </TouchableOpacity>
          ),
        }}
      />

    </HomeStack.Navigator>
  );
}

const GamesStack = createStackNavigator();

function GamesStackScreen() {
  return (
    <GamesStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#2163f6",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <GamesStack.Screen
        name="Games Screen"
        component={GamesScreen}
        options={{ title: "Games" }}
      />
    </GamesStack.Navigator>
  );
}

const GameCenterStack = createStackNavigator();

function GameCenterStackScreen() {
  return (
    <GameCenterStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#2163f6",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <GameCenterStack.Screen
        name="Game Center"
        component={GameCenter}
        options={{ title: "Game Center" }}
      />
    </GameCenterStack.Navigator>
  );
}

const TableStack = createStackNavigator();

function TableStackScreen() {
  return (
    <TableStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#0e9c8e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <TableStack.Screen
        name="League Table"
        component={LeagueTable}
        options={{ title: "League Standings" }}
      />
    </TableStack.Navigator>
  );
}

const ChatStack = createStackNavigator();

function ChatStackScreen(navigation, route) {
  return (
    <ChatStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#2c6d6a",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <ChatStack.Screen
        name="Chat"
        component={TeamChat}
        options={{
          title: "Chat", //headerShown:false
        }}
      />
    </ChatStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#d13560",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <ProfileStack.Screen
        name="Profile"
        component={AccountScreen}
        options={{ title: "Profile" }}
      />
    </ProfileStack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home";
            } else if (route.name === "Games") {
              iconName = focused ? "ios-football" : "ios-football";
            } else if (route.name === "Table") {
              iconName = focused ? "md-reorder" : "md-reorder";
            } else if (route.name === "Chat") {
              iconName = focused ? "ios-chatboxes" : "ios-chatboxes";
            } else if (route.name === "Profile") {
              iconName = focused ? "ios-contact" : "ios-contact";
            }

            return <Icon name={iconName} size={25} color={color} />;
          },
        })}
        tabBarOptions={{
          style: {
            backgroundColor: "#000",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarColor: "#6948f4",
          }}
        />
        <Tab.Screen
          name="Games"
          component={GamesStackScreen}
          options={{
            tabBarColor: "#2163f6",
          }}
        />
        <Tab.Screen
          name="Table"
          component={TableStackScreen}
          options={{
            tabBarColor: "#0e9c8e",
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatStackScreen}
          options={{
            tabBarColor: "#2c6d6a",
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStackScreen}
          options={{
            tabBarColor: "#d13560",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

/*const TabNavigator = createMaterialBottomTabNavigator(
  {
      Home: {
          screen: HomeScreen,
          navigationOptions: {
              tabBarIcon: ({ tintColor }) => (
                  <View>
                      <Icon style={[{ color: tintColor }]} size={25} name={'ios-home'} />
                  </View>
              ),
          }
      },
      Games: {
          screen: GamesScreen,
          navigationOptions: {
              tabBarIcon: ({ tintColor }) => (
                <View>
                <Icon style={[{ color: tintColor }]} size={25} name={'ios-football'} />
            </View>
              ),
              activeColor: '#ffffff',
              inactiveColor: '#a3c2fa',
              barStyle: { backgroundColor: '#2163f6' },
          }
      },
        Table: {
        screen: LeagueTable,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <View>
              <Icon
                style={[{ color: tintColor }]}
                size={25}
                name={"md-reorder"}
              />
            </View>
          ),
          activeColor: "#ffffff",
          inactiveColor: "#d3f2ef",
          barStyle: { backgroundColor: "#0e9c8e" },
          
        },
      },
      Chat: {
          screen: TeamChat,
          navigationOptions: {
              tabBarIcon: ({ tintColor }) => (
                  <View>
                      <Icon style={[{ color: tintColor }]} size={25} name={'ios-chatboxes'} />
                  </View>
              ),
              activeColor: '#ffffff',
              inactiveColor: '#92c5c2',
              barStyle: { backgroundColor: '#2c6d6a' },
          }
      },
    
      Profile: {
          screen: AccountScreen,
          navigationOptions: {
            headerShown: false,
              tabBarIcon: ({ tintColor }) => (
                  <View>
                      <Icon style={[{ color: tintColor }]} size={25} name={'ios-contact'} />
                  </View>
              ),
              activeColor: '#ffffff',
              inactiveColor: '#ebaabd',
              barStyle: { backgroundColor: '#d13560' },
          }
      },
  },
  {
    //shifting:false,
    //labeled:true,
      keyboardHidesNavigationBar: false,
      initialRouteName: 'Home',
      activeColor: '#ffffff',
      inactiveColor: '#bda1f7',
      barStyle: { backgroundColor: '#6948f4' },
  }
);

export default createAppContainer(TabNavigator);*/

/*export default createAppContainer(
  createMaterialBottomTabNavigator({
    Home,
    Games,
    Table,
    Chat,
    Profile
  },
  {
             screenOptions={({ route }) => ({
         tabBarIcon:({ focused, color, size }) => {
           let iconName;

           if (route.name === 'Home') {
             iconName = focused
             ? 'ios-home'
             : 'ios-home';
           }else if (route.name === 'Games') {
             iconName = focused ? 'ios-football' : 'ios-football'
           }else if (route.name === 'Table') {
             iconName = focused ? 'md-reorder' : 'md-reorder'
           }else if (route.name === 'Chat') {
             iconName = focused ? 'ios-chatboxes' : 'ios-chatboxes'
           }else if (route.name === 'Profile') {
             iconName = focused ? 'ios-contact' : 'ios-contact'
           }

           return <Icon name={iconName} size={size} color={color} />
         }
       })}

      
    },
    shifting:false,
    labeled:true,
    keyboardHidesNavigationBar: false,
    initialRouteName: 'Home',
    activeColor: '#ffffff',
    inactiveColor: '#bda1f7',
    barStyle: { backgroundColor: '#6948f4' },
  },
  )
);*/
