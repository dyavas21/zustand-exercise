import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import axios from 'axios';

// const useUsers = create(
//   devtools(set => ({
//     users: [],
//     execute: async url => {
//       const response = await axios.get(url);
//       set({ users: await response.data });
//     },
//   }))
// );

const taskStore = set => ({
  tasks: [],
  addTask: task => {
    set(state => ({
      tasks: [task, ...state.tasks],
    }));
  },
  removeTask: taskId => {
    set(state => ({
      tasks: state.tasks.filter(c => c.id !== taskId),
    }));
  },
});

const useTaskStore = create(
  devtools(
    persist(taskStore, {
      name: 'tasks',
    })
  )
);

export default useTaskStore;
