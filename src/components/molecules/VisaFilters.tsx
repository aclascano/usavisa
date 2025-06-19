export function VisaFilters({ setFilter }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <select
        onChange={(e) => setFilter((f) => ({ ...f, country: e.target.value }))}
        className="border rounded px-4 py-2"
      >
        <option value="all">Todos los países</option>
        <option value="usa">Estados Unidos</option>
        <option value="canada">Canadá</option>
      </select>

      <input
        type="text"
        placeholder="Buscar por palabra clave..."
        onChange={(e) => setFilter((f) => ({ ...f, keyword: e.target.value }))}
        className="border rounded px-4 py-2 w-full sm:w-64"
      />
    </div>
  );
}
