import { motion } from "framer-motion";

export function VisaModal({ visa, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-xl max-w-4xl w-full p-6 grid grid-cols-1 md:grid-cols-2 gap-6 relative"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={visa.image}
          alt={visa.title}
          className="w-full h-64 object-cover rounded-lg"
        />
        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">{visa.title}</h2>
          <p className="text-gray-700 mb-6">{visa.details}</p>
          <button
            className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition"
            onClick={() => window.location.href = "/solicitar"}
          >
            Solicitar Ahora
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
