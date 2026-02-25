const BASE_URL = '/api/players';

export async function getPlayers(filters = {}) {
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (value) params.append(key, value);
  });

  const query = params.toString();
  const url = query ? `${BASE_URL}?${query}` : BASE_URL;
  const res = await fetch(url);

  if (!res.ok) throw new Error('Failed to fetch players');
  return res.json();
}

export async function addPlayer(player) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(player),
  });

  if (!res.ok) throw new Error('Failed to add player');
  return res.json();
}

export async function updatePlayer(player) {
  const res = await fetch(BASE_URL, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(player),
  });

  if (!res.ok) throw new Error('Failed to update player');
  return res.json();
}

export async function deletePlayer(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });

  if (!res.ok) throw new Error('Failed to delete player');
}
