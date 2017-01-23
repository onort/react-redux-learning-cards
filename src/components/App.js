import React from 'react';

const App = (props) => {
  return (
    <div>
      <h3>This is App Component</h3>
      {props.children}
    </div>
  );
};

export default App;