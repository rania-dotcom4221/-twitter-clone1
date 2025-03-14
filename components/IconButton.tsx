 
 import {EvilIcons} from '@expo/vector-icons';
 import {View,Text} from 'react-native'; 
 
 type IconButtonProps ={
    icon: React.ComponentProps<typeof EvilIcons>["name"] ;
    text ?:string | number
  }
  
 
 const IconButton =( {icon ,text}: IconButtonProps ) =>
    {
      return(
        <View style={{flexDirection:"row", alignItems: 'center'}}>
        <EvilIcons  name= {icon} size={22} color="gray" />
        <Text style={{fontSize:12}}> {text} </Text>
        </View>
      );
    }; 
    export default IconButton