import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import EntypoIcon from "react-native-vector-icons/Entypo";

function Index(props) {
  return (
    <View style={styles.container}>
      <View style={styles.icon1StackStack}>
        <View style={styles.icon1Stack}>
          <MaterialCommunityIconsIcon
            name="file-document"
            style={styles.icon1}
          ></MaterialCommunityIconsIcon>
          <View style={styles.rect1}></View>
          <View style={styles.rect5}>
            <View style={styles.rect7Row}>
              <View style={styles.rect7}>
                <IoniconsIcon
                  name="ios-chatbubbles"
                  style={styles.icon7}
                ></IoniconsIcon>
              </View>
              <View style={styles.rect8}>
                <EntypoIcon
                  name="info-with-circle"
                  style={styles.icon8}
                ></EntypoIcon>
              </View>
              <View style={styles.rect9}>
                <MaterialCommunityIconsIcon
                  name="file-document"
                  style={styles.icon9}
                ></MaterialCommunityIconsIcon>
              </View>
              <View style={styles.rect10}>
                <MaterialCommunityIconsIcon
                  name="account-location"
                  style={styles.icon10}
                ></MaterialCommunityIconsIcon>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.icon2Stack}>
          <EntypoIcon name="info-with-circle" style={styles.icon2}></EntypoIcon>
          <View style={styles.rect3}></View>
        </View>
        <View style={styles.icon3Stack}>
          <MaterialCommunityIconsIcon
            name="account-location"
            style={styles.icon3}
          ></MaterialCommunityIconsIcon>
          <View style={styles.rect2}></View>
        </View>
        <View style={styles.icon4Stack}>
          <IoniconsIcon
            name="ios-chatbubbles"
            style={styles.icon4}
          ></IoniconsIcon>
          <View style={styles.rect4}></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 375,
    height: 62
  },
  icon1: {
    top: 11,
    left: 213,
    position: "absolute",
    color: "rgba(63,95,115,1)",
    fontSize: 34
  },
  rect1: {
    top: 7,
    left: 195,
    width: 70,
    height: 47,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(63,95,115,1)",
    borderRadius: 47
  },
  rect5: {
    top: 0,
    left: 0,
    width: 375,
    height: 62,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row"
  },
  rect7: {
    width: 70,
    height: 47,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(63,95,115,1)",
    borderRadius: 47,
    marginTop: 1
  },
  icon7: {
    color: "rgba(63,95,115,1)",
    fontSize: 34,
    height: 37,
    width: 28,
    marginTop: 4,
    marginLeft: 21
  },
  rect8: {
    width: 70,
    height: 47,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(63,95,115,1)",
    borderRadius: 47,
    marginLeft: 22
  },
  icon8: {
    color: "rgba(63,95,115,1)",
    fontSize: 30,
    height: 32,
    width: 30,
    marginTop: 7,
    marginLeft: 20
  },
  rect9: {
    width: 70,
    height: 47,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(63,95,115,1)",
    borderRadius: 47,
    marginLeft: 19
  },
  icon9: {
    color: "rgba(63,95,115,1)",
    fontSize: 34,
    height: 37,
    width: 34,
    marginTop: 4,
    marginLeft: 18
  },
  rect10: {
    width: 70,
    height: 47,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(63,95,115,1)",
    borderRadius: 47,
    marginLeft: 21
  },
  icon10: {
    color: "rgba(63,95,115,1)",
    fontSize: 34,
    height: 37,
    width: 34,
    marginTop: 4,
    marginLeft: 18
  },
  rect7Row: {
    height: 48,
    flexDirection: "row",
    flex: 1,
    marginRight: 19,
    marginLeft: 14,
    marginTop: 7
  },
  icon1Stack: {
    top: 0,
    left: 0,
    width: 375,
    height: 62,
    position: "absolute"
  },
  icon2: {
    top: 7,
    left: 20,
    position: "absolute",
    color: "rgba(63,95,115,1)",
    fontSize: 30
  },
  rect3: {
    top: 0,
    left: 0,
    width: 70,
    height: 47,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(63,95,115,1)",
    borderRadius: 47
  },
  icon2Stack: {
    top: 7,
    left: 106,
    width: 70,
    height: 47,
    position: "absolute"
  },
  icon3: {
    top: 4,
    left: 18,
    position: "absolute",
    color: "rgba(63,95,115,1)",
    fontSize: 34
  },
  rect2: {
    top: 0,
    left: 0,
    width: 70,
    height: 47,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(63,95,115,1)",
    borderRadius: 47
  },
  icon3Stack: {
    top: 7,
    left: 286,
    width: 70,
    height: 47,
    position: "absolute"
  },
  icon4: {
    top: 4,
    left: 21,
    position: "absolute",
    color: "rgba(63,95,115,1)",
    fontSize: 34
  },
  rect4: {
    top: 0,
    left: 0,
    width: 70,
    height: 47,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(63,95,115,1)",
    borderRadius: 47
  },
  icon4Stack: {
    top: 8,
    left: 14,
    width: 70,
    height: 47,
    position: "absolute"
  },
  icon1StackStack: {
    width: 375,
    height: 62
  }
});

export default Index;
