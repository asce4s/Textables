import React from 'react';
import {Container, Content, List, ListItem, Text, Card, Header, Body, Left, Right, Title, Button} from 'native-base';
import  {Font} from "expo";
import Category from "./Category";


export default class Main extends React.Component {

    constructor() {
        super();
        this.state = {
            data: [],
            fontLoaded: false,
        }

    }

    async componentWillMount() {
        await Font.loadAsync({
            'Roboto': require('../../node_modules/native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('../../node_modules/native-base/Fonts/Roboto_medium.ttf'),
        });
        this.setState({fontLoaded: true});
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        let data = require('../Fixtures/data.json')
        console.log(data);
        this.setState({
            data: data
        })

    }


    render() {

        return (
            <Container>

                {
                    this.state.fontLoaded ? (
                        <Header>
                            <Left/>
                            <Body>
                            <Title>Header</Title>
                            </Body>
                            <Right />
                        </Header>
                    ) : null}

                <Content>
                    <List dataArray={this.state.data}
                          renderRow={(item) =>
                              <Container>
                                  <Text>{item.category}</Text>
                                  <Category items={item.items}/>
                              </Container>
                          }>
                    </List>
                </Content>
            </Container>
        );
    }
}


