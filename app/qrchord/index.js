import ChordReader from "./ChordReader";
import demoChords from "./demo-chords";
import Screen from "../common/Screen";
import WebBrowserSplitView from "./WebBrowserSplitView";

export default function QrChordRoot() {
  //const inner = <ChordReader song={demoChords[1]} />;
  const inner = WebBrowserSplitView({
    initialUrl:
      "https://www.google.com/search?client=safari&rls=en&q=backstabber+lyrics&ie=UTF-8&oe=UTF-8",
    song: demoChords[1],
  });

  return <Screen>{inner}</Screen>;
}
