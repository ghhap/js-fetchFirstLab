const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

async function createUser(user) {
  const payload = {
    name: user?.name,
    email: user?.email,
  };

  const res = await fetch(USERS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Request failed with status ${res.status}`);
  }

  const data = await res.json();
  return data;
}

module.exports = createUser;
