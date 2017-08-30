import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    return (
      <div className="ui cards">
        <code>&lt;Pet /&gt;</code> &nbsp; components should go here
        {this.props.pets.map(petInfo => <Pet pet={petInfo} onAdoptPet={this.props.onAdoptPet} isAdopted={this.checkAdopted(petInfo)}/>)}
      </div>
    );
  }

  checkAdopted = (petInfo) => {
  	if (this.props.adoptedPets.includes(petInfo.id)) {
  		return true;
  	} else {
  		return false
  	}
  }
}

export default PetBrowser;