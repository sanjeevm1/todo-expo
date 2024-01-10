import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'start',
      marginTop: "30%"
    },
  
    input:{
      borderColor:"black",
      borderStyle:"solid",
      marginLeft:20,
      marginRight:20,
      borderWidth:5,
      textAlign:"center"
    },
  
    button:{
      width:100,
      backgroundColor:"black",
      marginHorizontal:130,
      marginVertical:20,
      paddingVertical:5
    },
  
    item:{
      display:"flex",
      flexDirection:"row",
      backgroundColor:"black",
      marginLeft:20,
      marginRight:20,
      marginBottom:20
      
    },
  
    itemText:{
       color:"white",
       fontWeight:"bold",
       marginVertical:5,
       fontSize:20,
       marginLeft:30,
      
  
  
    },
  
    itemButton:{
      backgroundColor:"white",
      padding:5,
      position:"absolute",
      right:5,
      bottom:5
    }
  });

  
  