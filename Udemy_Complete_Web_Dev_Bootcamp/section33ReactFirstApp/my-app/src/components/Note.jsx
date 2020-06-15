import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {
  function delNoteCallback(event) {
    props.delNoteCallback(props.id);
  }

  return (
    <div className='note'>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={delNoteCallback}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
