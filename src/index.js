import React from "react";
import { render } from "react-dom";
import Library from "./Library"

import "./styles.css";

let bookList = [
  { title: "The Shinning", author: "Stephen King", pages: "354" },
  { title: "Spec Ops", author: "Tom Clancy", pages: "359" },
  { title: "The Suffering", author: "Lord Filippo", pages: "1542" },
  { title: "Imajica", author: "Clive barker", pages: "120" }
];


// const Library = ({books}) => (

// )

// class FavoriteColorForm extends Component {
//   state = { value: '' }

//   newColor = e =>
//     this.setState({ value: e.target.value })

//   submit = e => {
//     console.log(`New color: ${this.state.value}`)
//     e.preventDefault()
//   }

//   render() {
//     return(
//       <form onSubmit={this.submit}>
//         <label>Favorite Color:
//           <input
//             type="color"
//             onChange={this.newColor}/>
//         </label>
//         <button>Submit</button>
//       </form>
//     )
//   }
// }
render(<Library books={bookList} />, document.getElementById("root"));
