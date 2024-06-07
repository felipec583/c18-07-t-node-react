import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allBooks: [],
  filteredBooks: [],
  fantasiaBooks: [],
  romanceBooks: [],
  ficcionBooks: [],
  terrorBooks: [],
  misterioBooks: [],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setAllBooks: (state, action) => {
      state.allBooks = action.payload;
    },
    setFilteredBooks: (state, action) => {
      state.filteredBooks = action.payload;
    },
    addFantasiaBook: (state, action) => {
      state.fantasiaBooks = [...state.fantasiaBooks, action.payload];
    },
    addRomanceBooks: (state, action) => {
      state.romanceBooks = [...state.romanceBooks, action.payload];
    },
    addMisterioBooks: (state, action) => {
      state.misterioBooks = [...state.misterioBooks, action.payload];
    },
    addFiccionBook: (state, action) => {
      state.ficcionBooks = [...state.ficcionBooks, action.payload];
    },
    setTerrorBooks: (state, action) => {
      state.terrorBooks = action.payload;
    },
  },
});

export const getAllBooks = (state) => state.books.allBooks;
export const getFilteredBooks = (state) => state.books.filteredBooks;
export const getRomanceBooks = (state) => state.books.romanceBooks;
export const getFiccionBooks = (state) => state.books.ficcionBooks;
export const getTerrorBooks = (state) => state.books.terrorBooks;
export const getMisterioBooks = (state) => state.books.misterioBooks;
export const getFantasiaBooks = (state) => state.books.fantasiaBooks;

export const {
  setAllBooks,
  setFilteredBooks,
  addFantasiaBook,
  addFiccionBook,
  addRomanceBooks,
  setTerrorBooks,
  addMisterioBooks,
} = booksSlice.actions;

export default booksSlice.reducer;
