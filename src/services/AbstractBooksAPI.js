import { create } from 'apisauce';

const authorization = () => {
  let generated = Math.random().toString(36).substr(-8);

  if (localStorage) {
    let token = localStorage.getItem('myreads-auth');

    if (token) {
      return token;
    } else {
      localStorage.setItem('myreads-auth', generated);
    }
  } else {
    return generated;
  }
}

const api = create({
  baseURL: 'https://reactnd-books-api.udacity.com',
  headers: {
    'Accept': 'application/json',
    'Authorization': authorization(),
    'Content-Type': 'application/json'
  }
});

const get = async (bookID) => {
  const response = await api.get(`/books/${bookID}`);

  return response.data.book;
}

const getAll = async () => {
  const response = await api.get('/books');

  return response.data.books;
}

const update = async (book, shelf) => {
  const response = await api.put(`/books/${book.id}`, { shelf });

  return response.data;
}

const search = async (query, maxResults = 100) => {
  const { data, ok } = await api.post('/search', { query, maxResults });

  if (!ok) {
    return [];
  }

  return data.books;
}

export {
  get,
  getAll,
  update,
  search
};
