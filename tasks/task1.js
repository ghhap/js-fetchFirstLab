const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

async function fetchUsers() {
  const res = await fetch(USERS_URL);
  if (!res.ok) {
    throw new Error(`Request failed with status ${res.status}`);
  }
  const data = await res.json();

  return data; 
}

module.exports = fetchUsers;