import {View,FlatList, StyleSheet } from 'react-native';
import Tweet from "../../components/Tweet"
import tweets from '@/assets/tweets';
const tweet = tweets[0];
export default function TabOneScreen() {

  return (
    <View style ={styles.page}>
  <FlatList 
  data={tweets}
  renderItem={({item})=><Tweet tweet={item}/>}
  />
    </View>

  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor:"white"
  }
})

