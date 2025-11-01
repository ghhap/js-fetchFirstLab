const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

async function deleteUser(id) {
  const res = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
  return res; 
}

module.exports = deleteUser;
