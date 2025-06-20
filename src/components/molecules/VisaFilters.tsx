export function VisaFilters({ setFilter }) {
  return (
    <div className="flex justify-center mb-10 mt-10">
      <input
        type="text"
        placeholder="Buscar por palabra clave..."
        onChange={(e) => setFilter((f) => ({ ...f, keyword: e.target.value }))}
        className="border border-gray-300 rounded-full px-5 py-2 w-full sm:w-80 shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}
