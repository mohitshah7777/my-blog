require('dotenv').config();

export function getList() {
    return fetch(process.env.REACT_APP_API_CALL)
      .then(data => data.json())
  }

// export function getList() {
//     return fetch('http://localhost:8000/blogs')
//       .then(data => data.json())
//   }