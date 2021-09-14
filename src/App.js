import React from 'react'; //component를 작성할 때마다 필수로 써줘야함

function Potato(){
  return <h1>I like Potato</h1>
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Potato />
    </div>
   
  );
}

export default App;
