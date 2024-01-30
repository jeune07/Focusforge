const inicialState = [
  {
    id: 1,
    todo: "Recolectar la piedra del alma",
    done: false,
  },
];

const todoReducer = (state = inicialState, action = []) => {
  if (action.type === "[todo] add  todo") {
    return [...state, action.payload];
  }

  return state;
};
let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "Recolectar la piedra del del poder",
  done: false,
};

const addTodoAction = {
  type: "[todo] add  todo",
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log(todos);
