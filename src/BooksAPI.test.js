import fetch from 'isomorphic-fetch'
import nock from 'nock'
import api from './BooksAPI'

const API_URL = 'https://reactnd-books-api.udacity.com'

describe('getAll', () => {
  beforeEach(() => {
    nock(API_URL).get('/books').reply(200, JSON.stringify([{
        id: 1
      },
      {
        id: 2
      }
    ]))
  })

  it('gets all books', async () => {
    const data = await api.getAll()

    expect(data).toBeDefined()
    expect(data).toBe([{ id: 1 }, { id: 2 }])
  })
})
