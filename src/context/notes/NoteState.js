import NoteContext from "./noteContext";
import {useState} from "react"

const NoteState=(props)=>{
    const notesInitial=[
        {
          "_id": "62acbb43c4c885e04ba4a5f7",
          "user": "62aad1c7b757842912de267e",
          "title": "My title",
          "description": "This is description",
          "tag": "Trial",
          "date": "2022-06-17T17:34:59.761Z",
          "__v": 0
        },
        {
          "_id": "62acbb49c4c885e04ba4a5f9",
          "user": "62aad1c7b757842912de267e",
          "title": " title",
          "description": "This is description",
          "tag": "Trial",
          "date": "2022-06-17T17:35:05.307Z",
          "__v": 0
        },
        {
          "_id": "62acbb57c4c885e04ba4a5fc",
          "user": "62aad1c7b757842912de267e",
          "title": " title3",
          "description": "This is description",
          "tag": "Trial",
          "date": "2022-06-17T17:35:19.895Z",
          "__v": 0
        },
        {
          "_id": "62acbb57c4c885e04ba4a5fc",
          "user": "62aad1c7b757842912de267e",
          "title": " title3",
          "description": "This is description",
          "tag": "Trial",
          "date": "2022-06-17T17:35:19.895Z",
          "__v": 0
        },
        {
          "_id": "62acbb57c4c885e04ba4a5fc",
          "user": "62aad1c7b757842912de267e",
          "title": " title3",
          "description": "This is description",
          "tag": "Trial",
          "date": "2022-06-17T17:35:19.895Z",
          "__v": 0
        },
        {
          "_id": "62acbb57c4c885e04ba4a5fc",
          "user": "62aad1c7b757842912de267e",
          "title": " title3",
          "description": "This is description",
          "tag": "Trial",
          "date": "2022-06-17T17:35:19.895Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(notesInitial)


    //Add a Note
    const addNote=(title,description,tag)=>{
      //Todo :API call
      const note={
        "_id": "62acbb57c4c885e04ba4a5fc",
        "user": "62aad1c7b757842912de267e",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2022-06-17T17:35:19.895Z",
        "__v": 0
      };
      setNotes(notes.concat(note))
    }


    //Delete a Note
    const deleteNote=()=>{

    }

    //Edit Note
    const editNote=()=>{

    }

    return(
        <NoteContext.Provider value={{notes, addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;