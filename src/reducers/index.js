import { combineReducers } from 'redux';
import BooksReducer from './books-reducer';
import ActiveBook from './active-book-reducer';

// Whatever is in here gets added to the global app state
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
