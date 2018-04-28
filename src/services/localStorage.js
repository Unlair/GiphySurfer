export const loadRecentTerms = () => {
  try {
    const serializedState = localStorage.getItem('terms');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
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
