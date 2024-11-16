import React, { useContext, useState } from "react";
import UserContext from "../UserContext";

const UpdateUser = () => {
  const { updateUser } = useContext(UserContext);
  const [newName, setNewName] = useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(newName.trim()){
        updateUser(newName);
        setNewName('');
    }
  }
  return (
    <div>
      <h2>Update User Name</h2>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Enter new name"
        />
        <button type="submit">update</button>
      </Form>
    </div>
  );
};

export default UpdateUser;
