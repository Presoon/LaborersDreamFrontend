import React from "react";

class Inventory extends React.Component {
  state = 
  {
    inventory: "",
  };

  render() 
  {
    const { inventory } = this.state;
    return (
      <>
        <h1>Inventory Page</h1>
      </>
    );
  }
}

export default Inventory;
