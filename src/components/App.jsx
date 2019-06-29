import React from "react";
import Header from "./Header";
import TicketList from "./TicketList";

function App(){
  var cssStyles = {
    backgroundColor: 'yellow',
    fontFamily: 'sans-serif',
    paddingTop: '100px',
  }
  return (
    <div style={cssStyles}>
      <Header/>
      <TicketList/>
    </div>
  );
}

export default App;