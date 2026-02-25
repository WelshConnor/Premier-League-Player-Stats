import { useState } from 'react';

const POSITIONS = ['', 'GK', 'DEF', 'MID', 'FWD'];

export default function SearchBar({ onSearch }) {
  const [name, setName] = useState('');
  const [team, setTeam] = useState('');
  const [position, setPosition] = useState('');
  const [nation, setNation] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onSearch({ name, team, position, nation });
  }

  function handleClear() {
    setName('');
    setTeam('');
    setPosition('');
    setNation('');
    onSearch({});
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap items-end gap-3 mb-6">
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-300 mb-1">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Search by name..."
          className="rounded-md bg-gray-800 border border-gray-600 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-300 mb-1">Team</label>
        <input
          type="text"
          value={team}
          onChange={(e) => setTeam(e.target.value)}
          placeholder="Filter by team..."
          className="rounded-md bg-gray-800 border border-gray-600 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-300 mb-1">Position</label>
        <select
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="rounded-md bg-gray-800 border border-gray-600 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {POSITIONS.map((pos) => (
            <option key={pos} value={pos}>
              {pos || 'All Positions'}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-300 mb-1">Nation</label>
        <input
          type="text"
          value={nation}
          onChange={(e) => setNation(e.target.value)}
          placeholder="Filter by nation..."
          className="rounded-md bg-gray-800 border border-gray-600 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <button
        type="submit"
        className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
      >
        Search
      </button>

      <button
        type="button"
        onClick={handleClear}
        className="rounded-md bg-gray-700 px-4 py-2 text-sm font-semibold text-gray-200 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 cursor-pointer"
      >
        Clear
      </button>
    </form>
  );
}
