import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
const Note = ({key,id,text,deleteNote}) =>{
    return <div className="note">
        <div className="note__body">{text}</div>
        <dir className="note__footer" style={{justifyContent:"flex-end"}}>
            <DeleteForeverRoundedIcon className='note__delete' onClick ={()=>deleteNote(id)}/>
        </dir>
    </div>
    }
    
    export default Note;