import React from "react";
import { View, Text, Keyboard, StyleSheet, TextInput, TouchableOpacity, ImageBackground, Image, KeyboardAvoidingView, Animated, TouchableWithoutFeedback } from "react-native";
import * as firebase from "firebase";

export default class LoginScreen extends React.Component {
    state = {
        email: "",
        password: "",
        errorMessage: null
    };

    handleLogin = () => {
        const { email, password } = this.state;

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error => this.setState({ errorMessage: error.message }));
    };

   

    render() {
        return (
          <ImageBackground
            source={require("../components/images/mainww.png")}
            style={styles.container}
          >
            <TouchableWithoutFeedback
              onPress={Keyboard.dismiss}
              accessible={false}
            >
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
                      marginTop: "6%",
                    }}
                  />

                  <View style={styles.errorMessage}>
                    {this.state.errorMessage && (
                      <Text style={styles.error}>
                        {this.state.errorMessage}
                      </Text>
                    )}
                  </View>

                  <View style={styles.form}>
                    <View>
                      <Text style={styles.inputTitle}>Email Address</Text>
                      <TextInput
                        style={styles.input}
                        returnKeyType={"next"}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        onChangeText={(email) => this.setState({ email })}
                        onSubmitEditing={() => {
                          this.secondTextInput.focus();
                        }}
                        value={this.state.email}
                      ></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                      <Text style={styles.inputTitle}>Password</Text>
                      <TextInput
                        style={styles.input}
                        returnKeyType={"done"}
                        secureTextEntry
                        autoCapitalize="none"
                        onChangeText={(password) => this.setState({ password })}
                        value={this.state.password}
                        ref={(input) => {
                          this.secondTextInput = input;
                        }}
                      ></TextInput>
                    </View>
                  </View>

                  <TouchableOpacity
                    style={styles.button}
                    onPress={this.handleLogin}
                  >
                    <Text style={{ color: "#FFF", fontWeight: "500" }}>
                      Sign in
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{ alignSelf: "center", marginTop: 32 }}
                    onPress={() => this.props.navigation.navigate("Register")}
                  >
                    <Text style={{ color: "#414959", fontSize: 13 }}>
                      New to Varsity Soccer?
                      <Text style={{ fontWeight: "500", color: "#E9446A" }}>
                        {" "}
                        Sign Up
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
        flex: 1

    },
    greeting: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center"
    },
    errorMessage: {
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30
    },
    error: {
        color: "#E9446A",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center"
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30
    },
    inputTitle: {
        color: "#fff",
        fontSize: 10,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor: "#fff",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#fff"
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    },

});
   

