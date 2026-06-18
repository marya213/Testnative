import React from "react";
import { View, Text, Image, StyleSheet, ImageSourcePropType } from "react-native";

type ProfileCardProps = {
  name: string;
  title: string;
  imageUri?: string;
  image?: ImageSourcePropType;
};

export default function ProfileCard({ name, title, imageUri, image }: ProfileCardProps) {
  const imageSource = image ?? (imageUri ? { uri: imageUri } : undefined);

  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.profileImage} />
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.titleText}>{title}</Text>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Voir le profil</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "85%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    alignItems: "center",
    padding: 24,
    marginTop: 20, // petit espace en haut
    marginBottom: 20, // petit espace en bas
    // iOS shadow
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    // Android elevation
    elevation: 6,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  nameText: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  titleText: {
    fontSize: 14,
    color: "#888888",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#4A90E2",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});