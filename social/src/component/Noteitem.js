import React, { useContext } from "react";
import Notecontext from "../Context/notecontext";

const Noteitem = (props) => {
  
  const context = useContext(Notecontext);
  
  const { deleteNote } = context;
  const { note, updateNote } = props;           // just to click and open up the modal

   // Notes display-style-box & Update and Delete
   
  return (
    <div className="col-md-3">
      <div className="card my-4">
        <div className="card-body">
          <div className="d-flex align-items-center">

            <h5 className="card-title">{note.title}</h5>
            <i className="far fa-trash-alt mx-2" onClick={() => {
                props.showAlert("Deleted Note", "danger");
                deleteNote(note._id);             // use of delete note as a context under note state
               }}></i>
            <i
              className="far fa-edit mx-2"
              onClick={() => {
                updateNote(note);   // // use of updateNote note as a props ?
              }}
            ></i>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
