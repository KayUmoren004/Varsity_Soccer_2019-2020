import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  Animated,
  Keyboard
} from "react-native";

import * as firebase from "firebase";
import Fire from "./Fire";

export default class SignUpScreen extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    displayName: "",
    errorMessage: null,
  };

  signup = () => {
    const update = {
      displayName: this.state.name,
    };

    try {
      const { email, password } = this.state;
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
          if (firebase.auth().currentUser) {
            if (Fire.uid) {
              firebase
                .database()
                .ref("Users/" + Fire.uid)
                .set({
                  Name: this.state.name,
                  Email: this.state.email,
                })
                .then(firebase.auth().currentUser.updateProfile(update));
            }
          }
        });
      console.log("Account created");

      // Navigate to the Home page, the user is auto logged in
    } catch (error) {
      console.log(error.toString());
    }
  };

  render() {
    return (
      <ImageBackground
        source={require("../components/images/mainww.png")}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
            enabled
          >
            <View style={styles.container}>
              <Image
                resizeMethod="resize"
                resizeMode="contain"
                source={require("../components/images/scs1.png")}
                style={{
                  width: "100%",
                  height: "20%",
                  marginBottom: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                  marginTop: 25,
                }}
              />
              <Text style={styles.greeting}>{`Sign up to get started.`}</Text>

              <View style={styles.errorMessage}>
                {this.state.errorMessage && (
                  <Text style={styles.error}>{this.state.errorMessage}</Text>
                )}
              </View>

              <View style={styles.form}>
                <View>
                  <Text style={styles.inputTitle}>Full Name</Text>
                  <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    onChangeText={(name) => this.setState({ name })}
                    value={this.state.name}
                    returnKeyType={"next"}
                    onSubmitEditing={() => {
                      this.firstTextInput.focus();
                    }}
                  ></TextInput>
                </View>

                <View style={{ marginTop: 32 }}>
                  <Text style={styles.inputTitle}>Email Address</Text>
                  <TextInput
                    style={styles.input}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}
                    onSubmitEditing={() => {
                      this.secondTextInput.focus();
                    }}
                    ref={(input) => {
                      this.firstTextInput = input;
                    }}
                  ></TextInput>
                </View>

                <View style={{ marginTop: 32 }}>
                  <Text style={styles.inputTitle}>Password</Text>
                  <TextInput
                    style={styles.input}
                    secureTextEntry
                    returnKeyType={"done"}
                    autoCapitalize="none"
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                    ref={(input) => {
                      this.secondTextInput = input;
                    }}
                  ></TextInput>
                </View>
              </View>

              <TouchableOpacity style={styles.button} onPress={this.signup}>
                <Text style={{ color: "#FFF", fontWeight: "500" }}>
                  Sign up
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ alignSelf: "center", marginTop: 32 }}
                onPress={() => this.props.navigation.navigate("Login")}
              >
                <Text style={{ color: "#414959", fontSize: 13 }}>
                  Already a User?
                  <Text style={{ fontWeight: "500", color: "#E9446A" }}>
                    {" "}
                    Login
                  </Text>
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  greeting: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
  },
  errorMessage: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
  },
  error: {
    color: "#E9446A",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
  },
  form: {
    marginBottom: 38,
    marginHorizontal: 30,
  },
  inputTitle: {
    color: "#fff",
    fontSize: 10,
    textTransform: "uppercase",
  },
  input: {
    borderBottomColor: "#fff",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: "#fff",
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: "#E9446A",
    borderRadius: 4,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
  },
});
