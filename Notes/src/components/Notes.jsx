import React, { useState, useEffect } from "react";
import Note from "./Note";
import CreateNote from "./CreateNote";
import { v4 as uuid } from "uuid";
import "../style/Note.css";

const Notes = () =>{
    //所有的hook都放在return上面
    //hook不能嵌套 不能用在if 
    const [notes,setNotes] = useState([]);
    const [inputText,setInputText] = useState('');
   const [loading,setLoading] = useState(true);

    //get text and store and store in inputText
    const handleText = (e)=>{
        setInputText(e.target.value)
    }

    //add new note when click save
  //add new note
  const addNote = () => {
    //如果需要更新state
    //可以在调用setstate时传入一个回调函数，
    //使用prestate作为参数
    setNotes((prevState) => [
      ...prevState,
      {
        id: uuid(),
        text: inputText,
      },
    ]);
    //clear textArea after save
    setInputText("");
  };


const deleteNote = (id) => {
    const filteredNotes = notes.filter(note=>note.id!==id);
    setNotes(filteredNotes);
};
useEffect(()=>{
    const data = JSON.parse(localStorage.getItem("Notes"));
    if(Array.isArray(data) && data.length>0){
        setNotes(data);
    }
    setLoading(false);
},[]);

// useEffect 在组件初次加载的时候一定会被调用一次
//给loaidng设flag 避免拿到空array
useEffect(() => {
    if(!loading){
    localStorage.setItem("Notes",JSON.stringify(notes));
    }
},[notes,loading]);

  
return (
    <div className="notes">
    
      {
        /* step1. map the note list */
        notes.length > 0 && notes.map((note) =>
             <Note key={note.id} 
            id ={note.id}
             text = {note.text}
             deleteNote = {deleteNote}/>)
      }
      <CreateNote
        handleText={handleText}
        addNote={addNote}
        inputText={inputText}
      />
    </div>
  );
    
}
    
    export default Notes;