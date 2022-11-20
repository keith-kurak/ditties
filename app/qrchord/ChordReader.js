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

function TextPhrase({ phrase, smallMode = false }) {
  return (
    <View>
      <Text style={{ fontSize: smallMode ? 16 : 12 }}>{phrase}</Text>
    </View>
  );
}


export default function ChordReader({ song, smallMode = false }) {
  return (
    <ScrollView contentContainerStyle={{ marginHorizontal: 8 }}>
      {!smallMode && <Text style={{ fontSize: 24 }}>{song.name}</Text>}
      <View style={{ height: 12 }}/>
      {song.phrases.map((phrase, i) => (
        <View style={{ alignSelf: 'center'}} key={i}>
          {typeof phrase === 'string' ? <TextPhrase smallMode={smallMode} phrase={phrase} /> : <ChordPhrase phrase={phrase} />}
        </View>
      ))}
    </ScrollView>
  );
}