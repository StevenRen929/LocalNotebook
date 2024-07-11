import "./style/App.css"
import "./style/Note.css"
import Header from "./components/Header"
import Notes from "./components/Notes"
import Note from "./components/Note"
import CreateNote from "./components/CreateNote"

export default function App(){
  return(<div className="main">
    <Header />
    <Notes />
  </div>);
}
