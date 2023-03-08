import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
      storage: createJSONStorage(() => AsyncStorage),
    })
  )
);

export default useTaskStore;
