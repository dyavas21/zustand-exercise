import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useUserStore = create(
  devtools(
    immer(set => ({
      userData: [],
      getUsersAPI: async () => {
        const apiResponse = await axios
          .get('http://localhost:4000/users')
          .catch(console.error);
        set(state => {
          state.userData = apiResponse.data;
        });
      },
    }))
  )
);
