import React from "react";
import { View, Text, ScrollView, StyleSheet, Animated } from "react-native";
import { useSharedValue } from 'react-native-reanimated';
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import { WebView } from "react-native-webview";
import ChordReader from "./ChordReader";

export default function WebBrowserSplitView({ initialUrl, song }) {
  const start = useSharedValue({ y: 0 });
  const gesture = Gesture.Pan()
    .onBegin(() => {
      isPressed.value = true;
    })
    .onUpdate((e) => {
      offset.value = {
        x: e.translationX + start.value.x,
        y: e.translationY + start.value.y,
      };
    })
    .onEnd(() => {
      start.value = {
        x: offset.value.x,
        y: offset.value.y,
      };
    })
    .onFinalize(() => {
      isPressed.value = false;
    });
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
      <GestureDetector gesture={gesture}>
        <View style={{ flex: 1 }}>
          <Animated.View style={{ height: 400 }}>
            <WebView source={{ uri: initialUrl }} style={{ flex: 1 }} />
          </Animated.View>
          <Animated.View style={{ backgroundColor: "gray", height: 12 }} />
          <Animated.View style={{ height: 200 }}>
            <ChordReader song={song} smallMode />
          </Animated.View>
        </View>
      </GestureDetector>
    </View>
  );
}
