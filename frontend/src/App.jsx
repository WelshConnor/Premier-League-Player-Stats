import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import PlayerTable from './components/PlayerTable';
import PlayerForm from './components/PlayerForm';
import { getPlayers, addPlayer, updatePlayer, deletePlayer } from './api/playerApi';

function App() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingPlayer, setEditingPlayer] = useState(null);

  async function fetchPlayers(filters = {}) {
    setLoading(true);
    setError(null);
    try {
      const data = await getPlayers(filters);
      setPlayers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPlayers();
  }, []);

  async function handleSave(player) {
    try {
      if (player.id) {
        await updatePlayer(player);
      } else {
        await addPlayer(player);
      }
      setShowForm(false);
      setEditingPlayer(null);
      fetchPlayers();
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDelete(id) {
    if (!confirm('Are you sure you want to delete this player?')) return;
    try {
      await deletePlayer(id);
      fetchPlayers();
    } catch (err) {
      setError(err.message);
    }
  }

  function handleEdit(player) {
    setEditingPlayer(player);
    setShowForm(true);
  }

  function handleAdd() {
    setEditingPlayer(null);
    setShowForm(true);
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Premier Zone</h1>
          <button
            onClick={handleAdd}
            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 cursor-pointer"
          >
            + Add Player
          </button>
        </div>

        <SearchBar onSearch={fetchPlayers} />

        {error && (
          <div className="bg-red-900/50 border border-red-700 text-red-200 rounded-md px-4 py-3 mb-4">
            {error}
          </div>
        )}

        {loading ? (
          <p className="text-center text-gray-400 py-10">Loading players...</p>
        ) : (
          <PlayerTable players={players} onEdit={handleEdit} onDelete={handleDelete} />
        )}

        {showForm && (
          <PlayerForm
            player={editingPlayer}
            onSave={handleSave}
            onCancel={() => {
              setShowForm(false);
              setEditingPlayer(null);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default App;
