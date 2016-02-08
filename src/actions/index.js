export function selectBook (book) {
  // selectBook is an ActionCreator, it needs to return
  // an action, an object with a type (and often a payload)
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
