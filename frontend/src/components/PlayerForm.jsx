import { useState, useEffect } from 'react';

const POSITIONS = ['GK', 'DEF', 'MID', 'FWD'];

const EMPTY_PLAYER = {
  name: '', team: '', nation: '', position: '', age: '',
  mp: '', starts: '', mins: '', goals: '', assists: '',
  pk: '', yellow: '', red: '', xg: '', xag: '',
};

export default function PlayerForm({ player, onSave, onCancel }) {
  const [form, setForm] = useState(EMPTY_PLAYER);
  const isEditing = !!player?.id;

  useEffect(() => {
    if (player) {
      setForm({
        ...EMPTY_PLAYER,
        ...player,
        age: player.age ?? '',
        mp: player.mp ?? '',
        starts: player.starts ?? '',
        mins: player.mins ?? '',
        goals: player.goals ?? '',
        assists: player.assists ?? '',
        pk: player.pk ?? '',
        yellow: player.yellow ?? '',
        red: player.red ?? '',
        xg: player.xg ?? '',
        xag: player.xag ?? '',
      });
    } else {
      setForm(EMPTY_PLAYER);
    }
  }, [player]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const payload = {
      ...form,
      age: form.age ? parseInt(form.age, 10) : null,
      mp: form.mp ? parseInt(form.mp, 10) : null,
      starts: form.starts ? parseInt(form.starts, 10) : null,
      mins: form.mins ? parseFloat(form.mins) : null,
      goals: form.goals ? parseFloat(form.goals) : null,
      assists: form.assists ? parseFloat(form.assists) : null,
      pk: form.pk ? parseFloat(form.pk) : null,
      yellow: form.yellow ? parseFloat(form.yellow) : null,
      red: form.red ? parseFloat(form.red) : null,
      xg: form.xg ? parseFloat(form.xg) : null,
      xag: form.xag ? parseFloat(form.xag) : null,
    };

    if (isEditing) payload.id = player.id;
    onSave(payload);
  }

  const inputClass =
    'w-full rounded-md bg-gray-800 border border-gray-600 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500';

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-gray-700">
        <h2 className="text-xl font-bold text-white mb-4">
          {isEditing ? 'Edit Player' : 'Add Player'}
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
            <input name="name" value={form.name} onChange={handleChange} required className={inputClass} />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Team</label>
            <input name="team" value={form.team} onChange={handleChange} className={inputClass} />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Nation</label>
            <input name="nation" value={form.nation} onChange={handleChange} className={inputClass} />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Position</label>
            <select name="position" value={form.position} onChange={handleChange} className={inputClass}>
              <option value="">Select...</option>
              {POSITIONS.map((pos) => (
                <option key={pos} value={pos}>{pos}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Age</label>
            <input name="age" type="number" value={form.age} onChange={handleChange} className={inputClass} />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Matches Played</label>
            <input name="mp" type="number" value={form.mp} onChange={handleChange} className={inputClass} />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Starts</label>
            <input name="starts" type="number" value={form.starts} onChange={handleChange} className={inputClass} />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Minutes</label>
            <input name="mins" type="number" step="0.1" value={form.mins} onChange={handleChange} className={inputClass} />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Goals</label>
            <input name="goals" type="number" step="0.1" value={form.goals} onChange={handleChange} className={inputClass} />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Assists</label>
            <input name="assists" type="number" step="0.1" value={form.assists} onChange={handleChange} className={inputClass} />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Penalty Kicks</label>
            <input name="pk" type="number" step="0.1" value={form.pk} onChange={handleChange} className={inputClass} />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Yellow Cards</label>
            <input name="yellow" type="number" step="0.1" value={form.yellow} onChange={handleChange} className={inputClass} />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Red Cards</label>
            <input name="red" type="number" step="0.1" value={form.red} onChange={handleChange} className={inputClass} />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">xG</label>
            <input name="xg" type="number" step="0.01" value={form.xg} onChange={handleChange} className={inputClass} />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">xAG</label>
            <input name="xag" type="number" step="0.01" value={form.xag} onChange={handleChange} className={inputClass} />
          </div>

          <div className="col-span-2 flex justify-end gap-3 mt-2">
            <button
              type="button"
              onClick={onCancel}
              className="rounded-md bg-gray-700 px-4 py-2 text-sm font-semibold text-gray-200 hover:bg-gray-600 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 cursor-pointer"
            >
              {isEditing ? 'Update' : 'Add'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
