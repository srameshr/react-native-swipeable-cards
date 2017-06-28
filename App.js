import React from 'react';
import { Card, Button } from 'react-native-elements';
import Deck from './src/Deck';

const DATA = [
  { id: 1, text: 'Julia Roberts', uri: 'http://www.wonderslist.com/wp-content/uploads/2016/07/Smiling-Queen-Julia-Roberts.jpg' },
  { id: 2, text: 'Scarlett Johansson', uri: 'http://www.wonderslist.com/wp-content/uploads/2016/07/Scarlett-Johansson-High-Definition-Wallpapers-340x213.jpg' },
  { id: 3, text: 'Ming Na Wen', uri: 'http://www.wonderslist.com/wp-content/uploads/2016/07/Ming-Na-Wen-Sexiest-Hollywood-Actresses.jpg' },
  { id: 4, text: 'Kat Dennings', uri: 'http://www.wonderslist.com/wp-content/uploads/2016/07/Beautiful-Lady-in-Hollywood-Kat-Dennings.jpg' },
  { id: 5, text: 'Salma Hayek', uri: 'http://www.wonderslist.com/wp-content/uploads/2016/07/Sizzling-Hollywood-Babe-Salma-Hayek.jpg' },
];

export default class App extends React.Component {

  renderNoMoreCards() {
    return (
      <Card
        title="No more data available"
      >
        <Button
          icon={{ name: 'code' }}
          backgroundColor="green"
          title="Load more"
        />
      </Card>
    );
  }
  renderCard(item) {
    return (
      <Card
        key={item.key}
        title={item.text}
        image={{ uri: item.uri }}
      />
    );
  }

  render() {
    return (
      <Deck
        data={DATA}
        renderCard={this.renderCard}
        renderNoMoreCards={this.renderNoMoreCards}
      />
    );
  }
}
