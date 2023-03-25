import { createSlice } from "@reduxjs/toolkit";

const getInitialTodo = () => {
    const localList = window.localStorage.getItem('todoList');

    if(localList) {
        return JSON.parse(localList);
    }
    window.localStorage.setItem('todoList', []);
    return [];
};

const initialValue = {
    filterStatus: 'all',
    categoryStatus: 'None',
    todoList: getInitialTodo(),
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialValue,
  reducers: {
    addTodo: (state = initialValue, action) => {
      state.todoList.push(action.payload);

      const todoList = window.localStorage.getItem("todoList");

      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.push({
          ...action.payload,
        });
        window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
      } else {
        window.localStorage.setItem(
          "todoList",
          JSON.stringify([{ ...action.payload }])
        );
      }
    },

    deleteTodo: (state, action) => {
      const todoList = window.localStorage.getItem("todoList");
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.forEach((ele, index) => {
          if (ele.id === action.payload) {
            todoListArr.splice(index, 1);
          }
        });
        window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
        state.todoList = todoListArr;
      }
    },
    updateTodo: (state, action) => {
      const todoList = window.localStorage.getItem("todoList");

      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.forEach((ele, index) => {
          if (ele.id === action.payload.id) {
            ele.title = action.payload.title;
            ele.desc = action.payload.desc;
            ele.category = action.payload.category;
            ele.status = action.payload.status;
            ele.priority = action.payload.priority;
          }
        });
        window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
        state.todoList = todoListArr;
      }
    },
    updateFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
    updateTaskCategory: (state, action) => {
      state.categoryStatus = action.payload;
    },
  },
});

export const {addTodo, deleteTodo, updateTodo, updateFilterStatus, updateTaskCategory} = todoSlice.actions;
export default todoSlice.reducer;