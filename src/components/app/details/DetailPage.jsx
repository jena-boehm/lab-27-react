import React, { Component } from 'react';
import { getCharacters } from '../../../services/avatarApi';

export default class DetailPage extends Component {
  state = {
    characters: []
  }

  componentDidMount() {
    getCharacters()
      .then(characters => this.setState({ characters }));
  }

  render() {
    // const { characters } = this.state;

    return (
      <div>
        Hello   
      </div>
    );
  }
}
