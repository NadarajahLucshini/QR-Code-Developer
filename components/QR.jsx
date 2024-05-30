import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import ViewShot from 'react-native-view-shot';

const QR = () => {
    const [qr, setQr] = useState('');

    const handleChange = (text) => {
        setQr(text);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>QR Generator</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={handleChange}
                    value={qr}
                    placeholder="Nombre del QR"
                />
            </View>
            <View style={styles.qrContainer}>
            {qr ? (
                        <QRCode
                            value={qr}
                            size={320}
                            backgroundColor="#fff"
                        />
                    ) : (
                        <Text style={styles.placeholderText}>Your QR Code will appear here</Text>
                    )}
            </View>

            <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Download QR Code</Text>
            </TouchableOpacity>

            
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f0f4f7',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
    },
    inputContainer: {
        marginBottom: 30,
        width: '80%',
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#fff',
        paddingLeft: 15,
        fontSize: 18,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    qrContainer: {
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    button: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#007bff',
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    placeholderText: {
        fontSize: 16,
        color: '#888',
    },
});

export default QR;

