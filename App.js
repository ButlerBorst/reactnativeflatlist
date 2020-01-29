

import React, { Component } from 'react';
import { FlatList, ScrollView, Image, TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import { ListItem, Icon } from 'react-native-elements'


export default class App extends Component {

    state = {
      data: [],
      visibleItems: null
    }


    componentDidMount(){
      this.fetchData()
    }

    fetchData() {
       fetch('https://randomuser.me/api/?results=10')
      .then((res) => res.json())
      .then((resjson) => {
        this.setState({
          data: resjson.results
        })
        console.log(this.state.data)
      })
      .catch((error) => {
        console.error(error);
      });
    }

    toggleIcon(item){
      console.log(item.email)
      this.setState({
        visibleItems: item.email
      })
      console.log(this.state.visibleItems)
     
    }
  render() {

    return (
      <View >
        <FlatList
          data={this.state.data}
          keyExtractor={(x,i) => i}
          renderItem={({item}) =>
            
            <ListItem
            onPress={() => 
              this.toggleIcon(item)
            }
            leftAvatar={{ source: { uri: item.picture.thumbnail } }}
            title={item.name.first}
            rightIcon={{
              name: "check",
              color: this.state.visibleItems === item.email ? "white" : "green"
            }}
            pad 
            bottomDivider
            chevron
            />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    circle: {
      width: 44,
      height: 44,
      borderRadius: 44/2,
      backgroundColor: 'red',
      borderColor: "black"
   }
    
  })

  
  

