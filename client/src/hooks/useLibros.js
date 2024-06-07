import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllBooks,
  setAllBooks,
  addFantasiaBook,
  addFiccionBook,
  addRomanceBooks,
  addMisterioBooks,
  getFiccionBooks,
  getFantasiaBooks,
  getRomanceBooks,
  getMisterioBooks,
} from "../redux/booksSlice";
import { useCallback, useEffect } from "react";

const useLibros = () => {
  const dispatch = useDispatch();
  const allBooks = useSelector(getAllBooks) || [];
  const ficcionBooks = useSelector(getFiccionBooks) || [];
  const fantasiaBooks = useSelector(getFantasiaBooks) || [];
  const romanceBooks = useSelector(getRomanceBooks) || [];
  const misterioBooks = useSelector(getMisterioBooks) || [];

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

  const categorizeLibros = useCallback(() => {
    const ficcion = new Set();
    const fantasia = new Set();
    const romance = new Set();
    const misterio = new Set();

    allBooks.forEach((book) => {
      book.genres.forEach((genreObj) => {
        const genre = genreObj.genre.genre;
        switch (genre) {
          case "Ficción":
            ficcion.add(book);
            break;
          case "Misterio":
            misterio.add(book);
            break;
          case "Fantasía":
            fantasia.add(book);
            break;
          case "Romance":
            romance.add(book);
            break;
          default:
            break;
        }
      });
    });

    dispatch(setAllBooks(allBooks));
    dispatch(addFiccionBook([...ficcion]));
    dispatch(addFantasiaBook([...fantasia]));
    dispatch(addRomanceBooks([...romance]));
    dispatch(addMisterioBooks([...misterio]));
  }, [dispatch, allBooks]);

  useEffect(() => {
    handleAllLibros();
  }, [handleAllLibros]);

  useEffect(() => {
    categorizeLibros();
  }, [categorizeLibros, allBooks]);

  return {
    handleAllLibros,
    categorizeLibros,
    allBooks,
    ficcionBooks,
    fantasiaBooks,
    romanceBooks,
    misterioBooks,
  };
};

export default useLibros;
