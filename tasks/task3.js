async function updateUser(id, updatedData) {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  const res = await fetch(url, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedData),
  });

  if (!res.ok) {
    throw new Error(`PATCH ${url} failed with ${res.status}`);
  }

  const data = await res.json();
  return data;
}

module.exports = updateUser;
