import React, { useState } from "react";
import PostAddIcon from '@material-ui/icons/PostAdd';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';


function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [expanded, setExpanded] = useState(false)

  function modify(){
    expanded ? setExpanded(false) : setExpanded(true)
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        { (expanded) ?
          <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          /> : null
        }
        <textarea
          name="content"
          onChange={handleChange}
          onFocus={modify}
          value={note.content}
          placeholder="Take a note..."
          rows={expanded ? "3" : "1" }
        />
        <Zoom in={expanded}>
          <Fab onClick={submitNote}>
            <PostAddIcon />
          </Fab>
        </Zoom>

      </form>
    </div>
  );
}

export default CreateArea;
