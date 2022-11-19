import React from "react";
import { View, Text, Pressable } from "react-native";

export default function Chord({ chord, onPress }) {
  const chordInner = (
    <View style={{ padding: 8, borderRadius: 4, backgroundColor: "blue" }}>
      <Text style={{ fontSize: 16, color: "white" }}>{chord}</Text>
    </View>
  );

  if (onPress) {
    return <Pressable onPress={onPress}>{chordInner}</Pressable>;
  }

  return chordInner;
}
