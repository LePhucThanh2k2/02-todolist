function Control({
  setIsShowForm,
  isShowForm,
  setStrSearch,
  strSearch,
  sort,
  setSort,
}) {
  let url = "";

  function handleChange(event) {
    setStrSearch(event.target.value);
  }

  function handleSort(name, direction) {
    setSort({
      name,
      direction,
    });
  }
  return (
    <div className="row">
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="input-group">
          <input
            value={strSearch}
            onChange={handleChange}
            type="text"
            className="form-control"
            placeholder="Search for..."
          />
          <span className="input-group-btn">
            <button
              onClick={() => {
                setStrSearch("");
              }}
              className="btn btn-danger"
              type="button"
            >
              Clear
            </button>
          </span>
        </div>
      </div>
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className="dropdown">
          <button
            className="btn btn-default dropdown-toggle"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Sort by <span className="caret" />
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li>
              <a
                href={url}
                onClick={(event) => {
                  event.preventDefault();
                  handleSort("name", "asc");
                }}
              >
                Name ASC
              </a>
            </li>
            <li>
              <a
                href={url}
                onClick={(event) => {
                  event.preventDefault();
                  handleSort("name", "desc");
                }}
              >
                Name DESC
              </a>
            </li>
            <li role="separator" className="divider" />
            <li>
              <a
                href={url}
                onClick={(event) => {
                  event.preventDefault();
                  handleSort("level", "asc");
                }}
              >
                Level ASC
              </a>
            </li>
            <li>
              <a
                href={url}
                onClick={(event) => {
                  event.preventDefault();
                  handleSort("level", "desc");
                }}
              >
                Level DESC
              </a>
            </li>
          </ul>
          <span className="label label-success label-medium">
            {sort.name.toUpperCase() + "-" + sort.direction.toUpperCase()}
          </span>
        </div>
      </div>
      <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
        <button
          onClick={() => {
            setIsShowForm(!isShowForm);
          }}
          type="button"
          className={
            isShowForm ? "btn btn-danger btn-block" : "btn btn-info btn-block"
          }
        >
          {isShowForm ? "Close" : "Add Task"}
        </button>
      </div>
    </div>
  );
}
export default Control;
