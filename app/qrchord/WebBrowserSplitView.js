import React from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import { WebView } from "react-native-webview";
import ChordReader from "./ChordReader";

export default function WebBrowserSplitView({ initialUrl, song }) {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      >
        <Text style={{ fontSize: 24, textAlign: "center" }}>{song.name}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Animated.View style={{ flex: 1 }}>
          <WebView source={{ uri: initialUrl }} style={{ flex: 1 }} />
        </Animated.View>
        <Animated.View style={{ backgroundColor: "gray", height: 12 }} />
        <Animated.View style={{  }}>
          <ChordReader song={song} smallMode />
        </Animated.View>
      </View>
    </View>
  );
}
