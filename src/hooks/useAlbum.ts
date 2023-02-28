import { create } from "zustand";

const useAlbumStore = create((set) => ({
  albums: [],
  fetch: async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    set({ albums: await response.json() });
  },
}));

export default useAlbumStore;
