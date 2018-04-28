export const loadRecentTerms = () => {
  try {
    const serializedState = localStorage.getItem('terms');
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.log(err);
  }
};

export const saveRecentTerms = (terms) => {
  try {
    const serializedState = JSON.stringify(terms);
    localStorage.setItem('terms', serializedState);
  } catch (err) {
    console.log(err);
  }
};
