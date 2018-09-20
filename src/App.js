import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { data } from './quotes.json'


class App extends Component {

  state = {
    quoteID: 0
  }

  /**
   * Returns a random number based on the amount of data provided.
   * Runs the same funciton again to prevent the same random 
   * number being returned.
   */
  randomNum() {
    const rand = Math.floor(Math.random() * data.length)
    if (this.state.quoteID === rand) {
      // console.log('same number hit')
      return this.randomNum()
    }
    return rand
  }
  
  newQuote () {
    this.setState({ quoteID: this.randomNum()})
  }

  render() {
    const selected = data[this.state.quoteID]

    return (
      <View style={styles.quotesPageStyle}>
        <Text>{ selected.quote }</Text>
        <Text>{ selected.source}</Text>
        <Button 
          onPress={() => this.newQuote()}
          title="Refresh"
        />
      </View>
    )
  }
}

const styles = {
  quotesPageStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
}

export default App;