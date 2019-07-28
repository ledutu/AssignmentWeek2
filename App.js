import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';
const imgData = [
  { id: 1, imgSource: require('./assets/1.jpg') },
  { id: 2, imgSource: require('./assets/2.jpg') },
  { id: 3, imgSource: require('./assets/3.jpg') },
  { id: 4, imgSource: require('./assets/4.jpg') },
  { id: 5, imgSource: require('./assets/5.jpg') },
  { id: 6, imgSource: require('./assets/6.jpg') }
];
const centerImgData = Math.floor(imgData.length / 2);

//Header
class Header extends React.Component
{
  render()
  {
    return(
      <View style={styles.headerGroup}>
        <View style={styles.imageUser}>
          <Image
            source = {require('./assets/tung.jpg')}
            style = {styles.avtarUser}
          />
        </View>
        <View style={styles.infoUser}>
          <Text style={styles.name}>Lê Đức Tùng</Text>
          <Text style={styles.job}>Developer</Text>

          <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.nameText}>Follow</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.sendMessageButton}>
              <FontAwesome name='send' style={styles.iconButton}/>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    )
  }
}

//Count
class Count extends React.Component
{
  render()
  {
    return(
      <View style={styles.count}>

        <View style={styles.countOptimize}>
          
          <Text style={styles.countNumber}>210</Text>
          <Text style={styles.optimize}>Photos</Text>

        </View>

        <View style={styles.countOptimize}>

          <Text style={styles.countNumber}>15k</Text>
          <Text style={styles.optimize}>Followers</Text>

        </View>

        <View style={styles.countOptimize}>

          <Text style={styles.countNumber}>605</Text>
          <Text style={styles.optimize}>Following</Text>

        </View>

      </View>
    )
  }
}

//pictureStore
class PictureStore extends React.Component
{
  render()
  {
    return(
      <View style={styles.pictureStores}>

        <ScrollView contentContainerStyle={styles.imageScrollView}>
          <View style={styles.divided2Column}>
            {imgData.slice(0, centerImgData).map(item => {
              return <Image source={item.imgSource} style={styles.image} />          
            })}
          </View>

          <View style={styles.divided2Column}>
            {imgData.slice(centerImgData).map(item => {
              return <Image source={item.imgSource} style={styles.image} />          
            })}
          </View>
        </ScrollView>

      </View>
    )
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Count/>
      <PictureStore/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    paddingTop: Constants.statusBarHeight, 
  },
  //Header
  name:
  {
    paddingBottom: 5,
    fontWeight:'700',
    fontSize: 18
  },
  job:
  {
    paddingBottom:15,
    color:'grey',
    fontSize: 18
  },
  headerGroup:
  {
    flex:0.25,
    flexDirection: 'row',
    justifyContent:"center",
    alignItems:'center'
  },
 
  avtarUser:
  {
    width:100,
    height:100,
    borderRadius:50,
  },
  imageUser:
  {
    flex:1,
    alignItems: 'center'
  },
  infoUser:
  {
    flex:1,
  },
  buttonWrapper:
  {
    flexDirection: 'row'
  },
  followButton:
  {
    backgroundColor:FOLLOW_COLOR,
    width:90,
    height:30,
    borderRadius:15,
    justifyContent:'center',
    alignItems: 'center',
    marginRight:10
  },
  sendMessageButton:
  {
    backgroundColor:SEND_MESSAGE_COLOR,
    width:50,
    height:30,
    borderRadius:15,
    justifyContent:'center',
    alignItems: 'center'
  },
  nameText:
  {
    fontSize:18,
    color:'white',
  },
  iconButton:
  {
    color:'white',
    fontSize:20,
  },
  //Count
  count:
  {
    flex: 0.15,
    backgroundColor: 'white',
    flexDirection:'row',
    justifyContent:'space-around',
  },

  countOptimize:
  {
    justifyContent:'center',
    alignItems:'center'
  },

  countNumber:
  {
    fontWeight:'500',
    paddingBottom:5,
    fontSize: 18
  },

  optimize:
  {
    color:'grey',
    fontSize: 18
  },

  //PictureStore
  pictureStores:
  {
    flex: 0.6,
    backgroundColor: 'white',
  },

  imageScrollView:
  {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  image:
  {
    width:150,
    height:150,
    borderRadius:10,
    margin: 8
  },

  divided2Column:
  {
    flexDirection: 'column',
  }

});
