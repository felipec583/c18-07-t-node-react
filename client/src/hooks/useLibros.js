import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllBooks,
  setAllBooks,
  getFiccionBooks,
  setFiccionBook,
  setFantasiaBook,
  setMisterioBooks,
  setRomanceBook,
  getFantasiaBooks,
  getMisterioBooks,
  getRomanceBooks,
  setFilteredBooks,
  getFilteredBooks,
} from "../redux/booksSlice";
import { useCallback, useEffect } from "react";
import { useRutes } from "./useRutes";

const useLibros = () => {
  const dispatch = useDispatch();
  const allBooks = useSelector(getAllBooks) || [];
  const fantasiaBooks = useSelector(getFantasiaBooks);
  const misterioBooks = useSelector(getMisterioBooks);
  const ficcionBooks = useSelector(getFiccionBooks);
  const romanceBooks = useSelector(getRomanceBooks);
  const filteredBooks = useSelector(getFilteredBooks);

  const { goToBook } = useRutes();
  const handleAllLibros = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://c18-07-t-node-react-rcb1.onrender.com/api/books"
      );
      if (response.data) {
        dispatch(setAllBooks(response.data));
      }
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);
  const handleFiccionBooks = async () => {
    try {
      const response = await axios.get(
        "https://c18-07-t-node-react-rcb1.onrender.com/api/search/genre?id=664fc77d46758e3059c0e328"
      );
      if (response) {
        dispatch(setFiccionBook(response.data.response.docs));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleMisterioBooks = async () => {
    try {
      const response = await axios.get(
        "https://c18-07-t-node-react-rcb1.onrender.com/api/search/genre?id=6657364f08d72a5120647356"
      );
      if (response) {
        dispatch(setMisterioBooks(response.data.response.docs));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleRomanceBooks = async () => {
    try {
      const response = await axios.get(
        "https://c18-07-t-node-react-rcb1.onrender.com/api/search/genre?id=6659c1371e56f3958c1b3a32"
      );
      if (response) {
        dispatch(setRomanceBook(response.data.response.docs));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleFantasiaBooks = async () => {
    try {
      const response = await axios.get(
        "https://c18-07-t-node-react-rcb1.onrender.com/api/search/genre?id=66573fa008d72a5120647370"
      );
      if (response) {
        dispatch(setFantasiaBook(response.data.response.docs));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleBookById = useCallback(
    (book) => {
      dispatch(setFilteredBooks(book));
      goToBook(book._id);
    },
    [dispatch]
  );

  useEffect(
    () => {
      handleAllLibros();
      handleFiccionBooks();
      handleMisterioBooks();
      handleFantasiaBooks();
      handleRomanceBooks();
    },
    [handleAllLibros],
    [handleFiccionBooks],
    [handleMisterioBooks],
    [handleFantasiaBooks],
    [handleRomanceBooks]
  );

  return {
    handleAllLibros,
    allBooks,
    fantasiaBooks,
    misterioBooks,
    ficcionBooks,
    romanceBooks,
    filteredBooks,
    handleBookById,
  };
};

export default useLibros;
