import React, { useContext, useState } from "react";
import Notecontext from "../Context/notecontext";

const Addnote = (props) => {

  const context = useContext(Notecontext);
  const { addNote } = context;                   // using add note as a context

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const handleclick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);            // using add note as a context
    setNote({title: "",description: "",tag: ""})
    props.showAlert("Added Successfully", "success")
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });   // spread operator
  };

   {/* Add Note */}

  return (
    <div>
      <div className="container my-3" >
        <h1>Add a Day in your Socials</h1>

        <form>

          {/* Title */}
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Subject
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={note.title}
              aria-describedby="emailHelp"
              onChange={onChange}
              minLength={5} required
            />
          </div>

          {/* Description */}
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Content
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={note.description}
              onChange={onChange}
            
            />
          </div>

         {/* Tag */}
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
            Hashtags
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              value={note.tag}
              onChange={onChange}
            
            />
          </div>

          {/* checkbox */}
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              onChange={onChange}
              value={note.tag}
             
            />
             
          
          </div>
           
           {/* Disabled */}
          <button
           disabled={note.title.length<5 || note.description.length<5}   // disabled
           type="submit"
           className="btn btn-primary"
           onClick={handleclick}
          >
            Add to Remember
          </button>

        </form>
      </div>
    </div>
  );
};

export default Addnote;
