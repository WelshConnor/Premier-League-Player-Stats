const COLUMNS = [
  { key: 'name', label: 'Name' },
  { key: 'team', label: 'Team' },
  { key: 'position', label: 'Pos' },
  { key: 'nation', label: 'Nation' },
  { key: 'age', label: 'Age' },
  { key: 'mp', label: 'MP' },
  { key: 'starts', label: 'Starts' },
  { key: 'mins', label: 'Mins' },
  { key: 'goals', label: 'Goals' },
  { key: 'assists', label: 'Assists' },
  { key: 'pk', label: 'PK' },
  { key: 'yellow', label: 'YC' },
  { key: 'red', label: 'RC' },
  { key: 'xg', label: 'xG' },
  { key: 'xag', label: 'xAG' },
];

export default function PlayerTable({ players, onEdit, onDelete }) {
  if (players.length === 0) {
    return (
      <p className="text-center text-gray-400 py-10">
        No players found.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-700">
      <table className="min-w-full text-sm text-left text-gray-200">
        <thead className="bg-gray-800 text-xs uppercase text-gray-400">
          <tr>
            {COLUMNS.map((col) => (
              <th key={col.key} className="px-4 py-3 whitespace-nowrap">
                {col.label}
              </th>
            ))}
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700">
          {players.map((player) => (
            <tr key={player.id} className="hover:bg-gray-800/50">
              {COLUMNS.map((col) => (
                <td key={col.key} className="px-4 py-3 whitespace-nowrap">
                  {player[col.key] ?? '-'}
                </td>
              ))}
              <td className="px-4 py-3 whitespace-nowrap flex gap-2">
                <button
                  onClick={() => onEdit(player)}
                  className="text-indigo-400 hover:text-indigo-300 cursor-pointer"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(player.id)}
                  className="text-red-400 hover:text-red-300 cursor-pointer"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
