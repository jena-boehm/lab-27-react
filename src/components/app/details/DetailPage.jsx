/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { getCharacterById } from '../../../services/avatarApi';
import Detail from './Detail';

export default class DetailPage extends Component {
  state = {
    characters: {}
  }

  componentDidMount() {
    getCharacterById(this.props.match.params.id)
      .then(characters => this.setState({ characters }));
  }

  render() {
    const { characters } = this.state;

    return (
      <div>
        <Detail {...characters} />
      </div>
    );
  }
}
