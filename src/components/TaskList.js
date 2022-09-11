import Items from "./Item";

function TaskList({ dataList, handleDelete, handleEdit }) {
  let eleItemList = dataList.map((item, idx) => {
    return (
      <Items
        key={idx}
        name={item.name}
        id={item.id}
        level={item.level}
        index={idx}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        item={item}
      />
    );
  });

  return (
    <div className="panel panel-success">
      <div className="panel-heading">List Task</div>
      <table className="table table-hover ">
        <thead>
          <tr>
            <th style={{ width: "10%" }} className="text-center">
              #
            </th>
            <th>Task</th>
            <th style={{ width: "20%" }} className="text-center">
              Level
            </th>
            <th style={{ width: "20%" }}>Action</th>
          </tr>
        </thead>
        <tbody>{eleItemList}</tbody>
      </table>
    </div>
  );
}
export default TaskList;
