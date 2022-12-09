import { Fragment, useState } from "react";

const App = () => {
  const [inputTodo, setInputTodo] = useState({
    id: Date.now(),
    name: "",
  });

  const [todo, setTodo] = useState([]);

  const [selectedTodo, setSelectedTodo] = useState([]);

  const handleAddTodo = (todo) => {
    setSelectedTodo((prev) => [...prev, todo]);
  };

  const handleRemoveSelectedTodo = (index) =>
    index > -1 &&
    setSelectedTodo((prev) => [...prev.splice(index, 1), ...prev]);


  const handleRemoveTodo = (index) =>
    index > -1 &&
    setTodo((prev) => [...prev.splice(index, 1), ...prev]);

  return (
    <section className="flex items-center justify-center h-screen gap-x-4">
      <section className="flex flex-col w-[400px] h-auto border-2 border-red-400 rounded-lg p-4">
        <div className="flex flex-col w-1/2 h-auto items-start gap-x-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setTodo((prev) => [...prev, inputTodo]);
              setInputTodo({ ...inputTodo, name: "" });
            }}
          >
            <input
              onChange={(e) =>
                setInputTodo({ ...inputTodo, name: e.target.value })
              }
              type="text"
              name="name"
              value={inputTodo.name}
            />
            <button type="submit">Add Todo</button>
          </form>
        </div>
      </section>
      <section className="flex flex-col w-[400px] h-auto border-2 border-red-400 rounded-lg p-4">
        <div className="flex flex-col w-1/2 h-auto items-start gap-x-4">
          {todo.map((todo, index) => (
            <Fragment key={index}>
              <div className="flex gap-x-3 items-center" key={index}>
                <h1 className="text-red-400 font-sans">{todo.name}</h1>
                <button
                  onClick={() => handleAddTodo(todo)}
                  type="button"
                  className="w-auto h-auto p-2 rounded-lg bg-red-400 text-white"
                >
                  Add
                </button>
                <span
                  className="text-red-400 font-sans font-700 text-base border-b-2"
                  onClick={() => handleRemoveTodo(index)}
                >
                  Remove
                </span>
              </div>
            </Fragment>
          ))}
          <h1 className="text-yellow-500">{todo.length === 0 && "Kosong"}</h1>
        </div>
      </section>
      <section className="flex flex-col w-[400px] h-auto border-2 border-red-400 rounded-lg p-4">
        <span>Jumlah Todo yang dipilih {selectedTodo.length}</span>
        {selectedTodo.map((todo, index) => (
          <div className="flex gap-x-3 items-center" key={index}>
            <h1 className="text-red-400 font-sans">{todo.name}</h1>
            <span
              className="text-red-400 font-sans font-700 text-base border-b-2"
              onClick={() => handleRemoveSelectedTodo(index)}
            >
              Remove
            </span>
          </div>
        ))}
      </section>
    </section>
  );
};

export default App;
