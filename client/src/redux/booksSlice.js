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
    setFantasiaBook: (state, action) => {
      state.fantasiaBooks = action.payload;
    },
    setRomanceBook: (state, action) => {
      state.romanceBooks = action.payload;
    },
    setMisterioBooks: (state, action) => {
      state.misterioBooks = action.payload;
    },
    setFiccionBook: (state, action) => {
      state.ficcionBooks = action.payload;
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
  setFantasiaBook,
  setFiccionBook,
  setRomanceBook,
  setTerrorBooks,
  setMisterioBooks,
} = booksSlice.actions;

export default booksSlice.reducer;
