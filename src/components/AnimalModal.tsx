import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Colors } from "@/constants/colors";
import { AnimalInfo } from "@/types";

const { width, height } = Dimensions.get("window");

interface AnimalModalProps {
  visible: boolean;
  onClose: () => void;
  animal: AnimalInfo;
}

const AnimalModal: React.FC<AnimalModalProps> = ({
  visible,
  onClose,
  animal,
}) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="fullScreen"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        {/* Image Section with Close Button */}
        <View style={styles.imageContainer}>
          <Image source={animal.image} style={styles.animalImage} />

          {/* Close Button */}
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Image
              source={require("../../assets/icons/cross.png")}
              style={styles.closeIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Content Section */}
        <View style={styles.contentContainer}>
          <ScrollView
            style={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContentContainer}
          >
            <View style={styles.infoSection}>
              <Text style={styles.zoneText}>{animal.zone}</Text>
              <Text style={styles.animalName}>{animal.name}</Text>

              {/* Distance Container */}
              <View style={styles.distanceContainer}>
                <View style={styles.distanceInfo}>
                  <Image
                    source={require("../../assets/icons/walk.png")}
                    style={styles.distanceIcon}
                  />
                  <Text style={styles.distanceText}>{animal.distance}</Text>

                  <TouchableOpacity>
                    <Text style={styles.mapButtonText}>Map</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <Text style={styles.description}>{animal.description}</Text>

              <Text style={styles.facts}>{animal.facts}</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  imageContainer: {
    position: "relative",
    height: height * 0.45, // 45% of screen height
  },
  animalImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  closeButton: {
    position: "absolute",
    top: 50,
    left: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  closeIcon: {
    width: 36,
    height: 36,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scrollContent: {
    flex: 1,
  },
  scrollContentContainer: {
    flexGrow: 1,
  },
  infoSection: {
    padding: 24,
    paddingTop: 32,
  },
  zoneText: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginBottom: 8,
    letterSpacing: 1.5,
    fontWeight: "500",
  },
  animalName: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.text,
    marginBottom: 24,
    lineHeight: 34,
  },
  distanceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: Colors.lightGray,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    width: "50%",
  },
  distanceInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  distanceIcon: {
    width: 16,
    height: 16,
    marginRight: 8,
    tintColor: Colors.textSecondary,
  },
  distanceText: {
    fontSize: 14,
    color: Colors.textSecondary,
    fontWeight: "500",
    marginRight: 12,
  },
  mapButtonText: {
    color: Colors.secondary,
    fontSize: 12,
    fontWeight: "600",
  },
  description: {
    fontSize: 16,
    color: Colors.text,
    lineHeight: 26,
    marginBottom: 24,
    textAlign: "left",
  },
  facts: {
    fontSize: 16,
    color: Colors.text,
    lineHeight: 26,
    textAlign: "left",
  },
});

export default AnimalModal;
