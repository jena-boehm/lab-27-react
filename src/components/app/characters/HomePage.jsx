import React, { Component } from 'react';
import { getCharacters } from '../../../services/avatarApi.js';
import CharacterList from './CharacterList.jsx';

export default class HomePage extends Component {
  state = {
    characters: []
  }

  componentDidMount() {
    getCharacters()
      .then(characters => this.setState({ characters }));
  }

  render() {
    const { characters } = this.state;

    return (
      <CharacterList characters={characters} />
    );
  }
}
