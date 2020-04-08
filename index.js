import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  VrButton,
  Environment,
  asset,
} from 'react-360';

export default class hello_360 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scene: 1,
    };
  }

  onClick = () => {
    if (this.state.scene === 1) {
      this.setState({ scene: 2 });
      Environment.setBackgroundImage(asset('360_world.jpg'))
    } else {
      this.setState({ scene: 1 });
      Environment.setBackgroundImage(asset('blank.jpg'))
    }
  }

  render() {
    return (
      <VrButton style={this.state.scene === 1 ? styles.greetingBox1 : styles.greetingBox2} onClick={this.onClick}>
          <Text style={styles.greeting}>
            Switching Image
          </Text>
      </VrButton>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox1: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greetingBox2: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#ff8c00',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('hello_360', () => hello_360);
