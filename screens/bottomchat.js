// Aboutscreen.js
import React from 'react';
import { Button, StyleSheet, View, Text, ActivityIndicator, ImageBackground } from 'react-native';

<View style={styles.container}>
    <TouchableOpacity
        activeOpacity={0.6}
        style={styles.cameraButton}
        onPress={this.props.handleCameraPress} >
        <Icon name='md-camera' style={styles.cameraIcon} />
    </TouchableOpacity>
    <TextInput
        style={styles.textInput}
        placeholder={CHAT_INPUT_PLACEHOLDER}
        returnKeyType={'send'}
        onChangeText={message => this.setState({ message })}
        value={this.state.message}
        blurOnSubmit={false}
        ref={'chatInputRef'} />
    <Button
        onPress={this.props.onSend}
        containerStyle={styles.sendButtonContainer}
        style={styles.sendButton} >
        Send
        </Button>
</View>


const styles = StyleSheet.create({
    container: {
        flex: 1,
    
    }
});