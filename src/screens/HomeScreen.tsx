import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

import { Colors } from "@/constants/colors";
import {
  navigationItems,
  upcomingShows,
  ticketInfo,
  parkHours,
  alligatorGarInfo,
} from "@/constants/data";
import AnimalModal from "@/components/AnimalModal";

const HomeScreen: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity>
            <Text style={styles.backButton}>←</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.headerCenter}>
          <Image
            source={require("../../assets/icons/SEA.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <TouchableOpacity style={styles.headerRight}>
          <Image
            source={require("../../assets/icons/Noti.png")}
            style={styles.notificationIcon}
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Featured Section */}
        <View style={styles.featuredSection}>
          <Image
            source={require("../../assets/icons/SEA.png")}
            style={styles.featuredImage}
          />
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.8)"]}
            style={styles.featuredOverlay}
          >
            <Text style={styles.featuredText}>
              Don't miss our{"\n"}daily Dive Feeding!
            </Text>
          </LinearGradient>
        </View>

        {/* Navigation Grid */}
        <View style={styles.navigationGrid}>
          {navigationItems.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              style={styles.navigationItem}
              onPress={() => {
                if (item.title === "Inhabitants") {
                  setModalVisible(true);
                }
              }}
            >
              <Image source={item.icon} style={styles.navigationIcon} />
              <Text style={styles.navigationText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Info Cards */}
        <View style={styles.infoSection}>
          <View style={styles.infoCard}>
            <View style={styles.infoCardHeader}>
              <Image
                source={require("../../assets/icons/Tickets.png")}
                style={styles.infoIcon}
              />
              <Text style={styles.infoTitle}>My e-tickets</Text>
            </View>
            <Text style={styles.infoSubtitle}>{ticketInfo.message}</Text>
            <TouchableOpacity>
              <Text style={styles.infoAction}>{ticketInfo.action}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.infoCard}>
            <View style={styles.infoCardHeader}>
              <Image
                source={require("../../assets/icons/Hour.png")}
                style={styles.infoIcon}
              />
              <Text style={styles.infoTitle}>Park hours</Text>
            </View>
            <Text style={styles.infoDate}>{parkHours.date}</Text>
            <Text style={styles.infoHours}>{parkHours.hours}</Text>
            <TouchableOpacity>
              <Text style={styles.infoAction}>{parkHours.action}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Upcoming Shows */}
        <View style={styles.showsSection}>
          <View style={styles.showsHeader}>
            <Text style={styles.showsTitle}>Upcoming Shows</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View all</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.showsList}
          >
            {upcomingShows.map((show) => (
              <View key={show.id} style={styles.showCard}>
                <Image source={show.image} style={styles.showImage} />
                <View style={styles.showInfo}>
                  <View style={styles.showTimeContainer}>
                    <Image
                      source={require("../../assets/icons/Clock.png")}
                      style={styles.showTimeIcon}
                    />
                    <Text style={styles.showTime}>{show.time}</Text>
                  </View>
                  <Text style={styles.showTitle}>{show.title}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      {/* Animal Modal */}
      <AnimalModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        animal={alligatorGarInfo}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: Colors.white,
  },
  headerLeft: {
    flex: 1,
  },
  backButton: {
    fontSize: 24,
    color: Colors.text,
  },
  headerCenter: {
    flex: 2,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
  headerRight: {
    flex: 1,
    alignItems: "flex-end",
  },
  notificationIcon: {
    width: 24,
    height: 24,
  },
  content: {
    flex: 1,
  },
  featuredSection: {
    margin: 20,
    borderRadius: 12,
    overflow: "hidden",
    height: 180,
  },
  featuredImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  featuredOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "60%",
    justifyContent: "flex-end",
    padding: 20,
  },
  featuredText: {
    color: Colors.white,
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 30,
  },
  navigationGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  navigationItem: {
    width: "33.33%",
    alignItems: "center",
    marginBottom: 30,
  },
  navigationIcon: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  navigationText: {
    fontSize: 12,
    color: Colors.text,
    textAlign: "center",
  },
  infoSection: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  infoCard: {
    flex: 1,
    backgroundColor: Colors.lightGray,
    borderRadius: 12,
    padding: 15,
    marginHorizontal: 5,
  },
  infoCardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  infoIcon: {
    width: 16,
    height: 16,
    marginRight: 8,
    tintColor: Colors.textSecondary,
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.text,
  },
  infoSubtitle: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginBottom: 8,
  },
  infoDate: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.text,
    marginBottom: 2,
  },
  infoHours: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.text,
    marginBottom: 8,
  },
  infoAction: {
    fontSize: 12,
    color: Colors.accent,
    fontWeight: "500",
  },
  showsSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  showsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  showsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.text,
  },
  viewAllText: {
    fontSize: 14,
    color: Colors.secondary,
    fontWeight: "500",
  },
  showsList: {
    flexDirection: "row",
  },
  showCard: {
    width: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginRight: 15,
    backgroundColor: Colors.white,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  showImage: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
  },
  showInfo: {
    padding: 12,
  },
  showTimeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  showTimeIcon: {
    width: 12,
    height: 12,
    marginRight: 5,
    tintColor: Colors.textSecondary,
  },
  showTime: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  showTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.text,
  },
});

export default HomeScreen;
