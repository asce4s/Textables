import React from 'react';
import {Container, Content, List, ListItem, Text, Card, Header, Body, Left, Right, Title, Button,CardItem} from 'native-base';
import { StyleSheet,Dimensions,View} from 'react-native';


export default class Category extends React.Component {


    render() {
        return (
            <List dataArray={this.props.items}
                  contentContainerStyle={styles.list}
                  renderRow={(item) =>
                      <View style={styles.card}>
                            <Text>{item.name}</Text>
                      </View>
                  }>
            </List>
        )
    }



}

const styles = StyleSheet.create({
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex:1
    },
    card: {
        backgroundColor: '#cccccc',
        margin:3,
        flex:0.5
    }
});