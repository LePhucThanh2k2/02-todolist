function Items({ item, id, name, index, level, handleDelete, handleEdit }) {
  function showElementLevel(level) {
    let eleLevel = <span className="label label-default">Small</span>;
    if (level === 1) {
      eleLevel = <span className="label label-info">Medium</span>;
    } else if (level === 2) {
      eleLevel = <span className="label label-danger">High</span>;
    }
    return eleLevel;
  }

  return (
    <tr>
      <td className="text-center">{index + 1}</td>
      <td>{name}</td>
      <td className="text-center">{showElementLevel(parseInt(level))}</td>
      <td>
        <button
          onClick={() => {
            handleEdit(item);
          }}
          type="button"
          className="btn btn-warning "
        >
          Edit
        </button>
        <button
          onClick={() => {
            handleDelete(id);
          }}
          type="button"
          className="btn btn-danger ml-5"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
export default Items;
