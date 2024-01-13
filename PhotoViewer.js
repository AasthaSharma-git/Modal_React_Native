import React, { useState } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import Modal from 'react-native-modal';

const images = [
  {
    uri: 'https://cdn.pixabay.com/photo/2023/06/22/03/58/animals-8080446_1280.jpg',
  },
  {
    uri: 'https://cdn.pixabay.com/photo/2023/05/25/21/00/bird-8018305_1280.jpg',
  },
  {
    uri: 'https://cdn.pixabay.com/photo/2023/06/21/09/52/pied-flycatcher-8078925_1280.jpg',
  },
  {
    uri: 'https://cdn.pixabay.com/photo/2023/05/22/14/49/dandelion-8010882_1280.jpg',
  },
  {
    uri: 'https://cdn.pixabay.com/photo/2023/06/11/11/13/dragon-fly-8055745_1280.jpg',
  },
  {
    uri: 'https://cdn.pixabay.com/photo/2023/06/18/06/41/snail-8071398_1280.jpg',
  },
  {
    uri: 'https://cdn.pixabay.com/photo/2017/05/31/18/38/sea-2361247_1280.jpg',
  },
  {
    uri: 'https://cdn.pixabay.com/photo/2017/11/28/10/17/snails-2983235_640.jpg',
  },
  {
    uri: 'https://cdn.pixabay.com/photo/2018/04/04/12/42/turtles-3289690_640.jpg',
  },
  {
    uri: 'https://cdn.pixabay.com/photo/2016/09/27/16/01/chestnut-1698730_1280.jpg',
  },
];

export default class PhotoViewer extends React.Component {
  constructor() {
    super();
    this.state = {
      toggleModal: false,
      isModalVisible: false,
      url: '',
    };
  }

  showImages = ({ item }) => {
    return (
      <TouchableOpacity
        style={{padding:10,alignSelf:'center'}}
        onPress={() =>
          this.setState({
            isModalVisible: true,
            toggleModal: true,
            url: item.uri,
          })
        }>
        <Image source={item.uri} style={{ width: 200, height: 200 }} />
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.isModalVisible}
          onBackdropPress={() =>
            this.setState({ isModalVisible: false, toggleModal: false })
          }>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Image
                source={this.state.url}
                style={{width:200,height:200,  resizeMode: 'contain' }}
              />
            </View>
          </View>
        </Modal>

        <FlatList data={images} renderItem={this.showImages} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex:0.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    borderRadius: 20,
   backgroundColor: 'black'

  },
  modalView: {
    margin: 20,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
