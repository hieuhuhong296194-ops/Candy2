import { View, Text, StyleSheet } from 'react-native';
export default function Home() {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>🍬 Candy</Text>
      <Text style={styles.sub}>App đang chạy!</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  root: { flex:1, backgroundColor:'#0A0A0F', alignItems:'center', justifyContent:'center' },
  text: { color:'#4ECDC4', fontSize:40, fontWeight:'900' },
  sub: { color:'#888', fontSize:16, marginTop:10 },
});
