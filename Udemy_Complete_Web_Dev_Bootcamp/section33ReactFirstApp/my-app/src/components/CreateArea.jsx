import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [titleText, setTitleText] = useState('');
  const [contentText, setContentText] = useState('');

  function handleTitleChange(event) {
    const newTitle = event.target.value;
    setTitleText(newTitle);
  }

  function handleContentChange(event) {
    const newContent = event.target.value;
    setContentText(newContent);
    if (contentText) {
      setExpanded(true);
    }
  }

  function handleAddNote(event) {
    event.preventDefault();
    const note = {
      id: '',
      title: titleText,
      content: contentText,
    };
    props.newNoteCallback(note);
    setTitleText('');
    setContentText('');
  }

  function expand() {
    setExpanded(true);
  }
  return (
    <div>
      <form className='create-note'>
        {isExpanded ? <input name='title' placeholder='Title' onChange={handleTitleChange} value={titleText} /> : null}
        <textarea
          onClick={expand}
          name='content'
          placeholder='Take a note...'
          rows={isExpanded ? '3' : '1'}
          onChange={handleContentChange}
          value={contentText}
        ></textarea>
        <Zoom in={isExpanded}>
          <Fab onClick={handleAddNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
