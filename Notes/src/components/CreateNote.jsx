import LinearProgress from '@mui/material/LinearProgress';

const CreateNote = ({handleText,addNote,inputText}) =>{
    const charLimit = 100;
    const charleft = 100-inputText.length;
return(<div className="note">
<textarea 
cols={10} 
rows = {5}
value = {inputText}
 placeholder="Type..." 
 maxLength={charLimit} 
//  当你打字的时候就会触发handle text 然后改变state
 onChange={handleText}
 >
</textarea>

<div className="note__footer">
    <span className="label">{charleft} left</span>
    {/* <button className="note__save" onClick={()=>addNote(‘parameter’)}>Save</button> */}
    <button className="note__save" onClick={addNote}>
        Save
    </button>
</div>
<LinearProgress className='char__progress' variant='determinate' value={charLimit-charleft}/>
</div>);
}

export default CreateNote;