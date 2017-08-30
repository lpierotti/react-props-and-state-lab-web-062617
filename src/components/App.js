import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  adoptPet = (id) => {
    this.setState({pets: this.state.adoptedPets.push(id)})
  }

  findPets = () => {
    if (this.state.filters.type === 'all') {
      fetch('/api/pets', function() {})
    } else {
      var type = this.state.filters.type;
      fetch(`/api/pets?type=${type}`)
    }
  }

  changeType = (newType) => {
    this.setState({filters: {type: newType}})
  }


  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={this.state.filters} onFindPetsClick={this.findPets} onChangeType={this.changeType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;