// import "./styles.css";

// export const Card = (name, about) => (
//   <div className="card">
//     <h3>Name: {name}</h3>
//     <span>About: {about}</span>
//   </div>
// );

export const Card = (name, about) => (
  <div className="card">
    <h3>Name: Pranav</h3>
    <span>About: Hi my name is Pranav york</span>
  </div>
);

export default function App(props){
  return <Card name ={props.name} about ={props.about}/>
}

