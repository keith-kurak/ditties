import ChordReader from './ChordReader';
import demoChords from './demo-chords';
import Screen from '../common/Screen'

export default function QrChordRoot() {
  return (
    <Screen>
      <ChordReader song={demoChords[0]} />
    </Screen>
  );
}
