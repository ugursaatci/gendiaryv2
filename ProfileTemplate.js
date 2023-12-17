import React from 'react';
import { Ionicons, Feather } from '@expo/vector-icons';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileTemplate = ({ username, pfp }) => {
  return (
    <View style={styles.container}>
      <Image source={pfp} style={styles.pfp} resizeMode="cover" />
      
      <Ionicons name="settings-outline" size={24} color="white" style={[styles.iconTopRight, styles.shadow]} />
      <Ionicons name="md-share-outline" size={24} color="white" style={[styles.iconBottomRight, styles.shadow]} />
      <Text style={[styles.username, styles.shadow]}>{username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
  pfp: {
    width: '100%',
    height: 250, // Yükseklik değerini sabit bir değer olarak belirledik
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: "white",
  },
  iconTopLeft: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  iconTopRight: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  iconBottomRight: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  shadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.7)', // Gölge rengi
    textShadowOffset: { width: 0, height: 1 }, // Gölge konumu
    textShadowRadius: 2, // Gölge yumuşaklığı
  },
});

export default ProfileTemplate;