import { motion } from "framer-motion";

export function VisaCard({ visa, onClick }) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-md hover:shadow-xl cursor-pointer overflow-hidden"
      whileHover={{ scale: 1.03 }}
      onClick={onClick}
    >
      <img src={visa.image} alt={visa.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-neutralDark">{visa.title}</h2>
        <p className="text-sm text-gray-600">{visa.description}</p>
      </div>
    </motion.div>
  );
}
