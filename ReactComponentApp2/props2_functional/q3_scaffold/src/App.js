import React from 'react'
import "./styles.css";


export const Card = (Props) => {

  const {name,about} = props;
return (
  <div className="card">
    <h3>Name: {name}</h3>
    <span>About: {about}</span>
  </div>
)
};

export default function App() {
  // return <Card name="Your Name." about="Your Message." />;
  
}


// import React from 'react'
// import Card from './Card'

// export default function App() {
//   return (
//     <div>

//     <Card  name ="ankur"about="hi"/>
//     </div>
//   )
// }
