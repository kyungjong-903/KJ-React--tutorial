import React, { Component } from 'react';
import Customer from './components/Customer';
 
const customers = [
  {
    'id': 1,
    'img': 'https://placeimg.com/300/120/1',
    'name': '오경종',
    'birth': '930903',
    'gender': 'male',
  },
  {
    'id': 2,
    'img': 'https://placeimg.com/300/120/2',
    'name': '오경종1',
    'birth': '930903',
    'gender': 'male',
  },
  {
    'id': 3,
    'img': 'https://placeimg.com/300/120/3',
    'name': '오경종2',
    'birth': '930903',
    'gender': 'male',
  }
]
const style = {
  'border': '1px solid #000',
  'width': '300px',
  'margin': '50px auto'
}
  

class App extends Component {
  
  render() {
    return(
      <div>
        {
          customers.map(c => {
            return (
              <div style={style}>
                <Customer 
                  id={c.id}
                  img={c.img}
                  name={c.name}
                  birth={c.birth}
                  gender={c.gender}
                />
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default App;

