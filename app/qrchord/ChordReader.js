import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Chord from './components/Chord';

function ChordPhrase({ phrase }) {
  return (
    <View style={{ flexDirection: 'row'}}>
      {phrase.map((chord, index) => <View key={index.toString()} style={{ margin: 5 }}><Chord chord={chord} /></View>)}
    </View>
  );
}

function TextPhrase({ phrase }) {
  return (
    <View>
      <Text style={{ fontSize: 16 }}>{phrase}</Text>
    </View>
  );
}


export default function ChordReader({ song }) {
  console.log(song)
  return (
    <ScrollView contentContainerStyle={{ marginHorizontal: 8 }}>
      <Text style={{ fontSize: 24, marginBottom: 12 }}>{song.name}</Text>
      {song.phrases.map((phrase, i) => (
        <View style={{ alignSelf: 'center'}} key={i}>
          {typeof phrase === 'string' ? <TextPhrase phrase={phrase} /> : <ChordPhrase phrase={phrase} />}
        </View>
      ))}
    </ScrollView>
  );
}