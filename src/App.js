import Control from "./components/Control";
import Form from "./components/Form";
import Title from "./components/Title";
import TaskList from "./components/TaskList";
import React, { useEffect, useState } from "react";
import { filter, includes, orderBy, reject, remove } from "lodash";
function APP() {
  const [isShowForm, setIsShowForm] = useState(false);
  const [strSearch, setStrSearch] = useState("");
  const [itemList, setItemList] = useState([]);
  const [isEdit, setIsEdit] = useState(null);
  const [sort, setSort] = useState({
    name: "level",
    direction: "desc",
  });
  useEffect(() => {
    let items = JSON.parse(localStorage.getItem("task")) || [];
    setItemList(items);
  }, []);

  useEffect(() => {
    setIsEdit(null);
  }, [isShowForm]);
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(itemList));
  }, [itemList]);

  // handle Searching
  const itemsAfterSearch = filter(itemList, (item) => {
    return includes(
      item.name.toLocaleLowerCase(),
      strSearch.toLocaleLowerCase()
    );
  });
  // handle sort
  const itemsAfterSort = orderBy(
    itemsAfterSearch,
    [sort.name],
    [sort.direction]
  );

  // handle Delete
  function handleDelete(id) {
    let newItems = [...itemList];
    remove(newItems, (item) => {
      return item.id === id;
    });
    setItemList(newItems);
  }
  // handleSubmit
  function handleEdit(item) {
    setIsShowForm(true);
    setIsEdit(item);
  }
  function handleSubmit(item) {
    let newItem = reject(itemList, { id: item.id });
    setItemList([...newItem, item]);
    setIsEdit(null);
  }
  return (
    <div>
      {/* Title - Start */}
      <Title />
      {/* Title -End */}

      {/* Control -Start */}
      <Control
        setIsShowForm={setIsShowForm}
        isShowForm={isShowForm}
        strSearch={strSearch}
        setStrSearch={setStrSearch}
        sort={sort}
        setSort={setSort}
      />
      {/* Control -End */}

      {/* Form - Start */}
      {isShowForm && (
        <Form
          setIsShowForm={setIsShowForm}
          isEdit={isEdit}
          handleSubmit={handleSubmit}
        />
      )}
      {/* Form - End */}

      {/* List Task - Start */}
      <TaskList
        dataList={itemsAfterSort}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      {/* List Task - End */}
    </div>
  );
}
export default APP;
