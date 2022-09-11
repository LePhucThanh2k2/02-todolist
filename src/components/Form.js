import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
function Form({ setIsShowForm, isEdit, handleSubmit }) {
  const [newItem, setNewItem] = useState({
    id: uuidv4(),
    name: "",
    level: 0,
  });
  useEffect(() => {
    if (isEdit) {
      setNewItem({
        id: isEdit.id,
        name: isEdit.name,
        level: isEdit.level,
      });
    }
  }, [isEdit]);

  function handleChange(event) {
    const target = event.target; // input selectbox
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setNewItem({
      ...newItem,
      [name]: value,
    });
  }

  function onClickSubmit() {
    handleSubmit(newItem);
    // reset form
    setNewItem({
      id: uuidv4(),
      name: "",
      level: 0,
    });
  }
  return (
    <div className="row">
      <div className="col-md-offset-7 col-md-5">
        <form method="POST" className="form-inline">
          <div className="form-group">
            <input
              onChange={handleChange}
              name="name"
              value={newItem.name}
              type="text"
              className="form-control"
              placeholder="Task Name"
            />
          </div>
          <div className="form-group">
            <select
              onChange={handleChange}
              name="level"
              value={newItem.level}
              id="inputDs"
              className="form-control"
              required="required"
            >
              <option value={0}>Small</option>
              <option value={1}>Medium</option>
              <option value={2}>High</option>
            </select>
          </div>
          <button
            onClick={onClickSubmit}
            type="button"
            className="btn btn-primary"
          >
            Submit
          </button>
          <button
            onClick={() => {
              setIsShowForm(false);
            }}
            type="button"
            className="btn btn-default"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
export default Form;
