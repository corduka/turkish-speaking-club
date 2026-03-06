import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useForm } from '../context/FormContext';

export default function FormModal() {
// FormModal.jsx içinde useForm'dan formUrl'i çek:
const { isFormOpen, closeForm, formUrl } = useForm();

  return (
    <AnimatePresence>
      {isFormOpen && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeForm} // Dışarı tıklandığında kapansın
        >
          <motion.div 
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()} // İçeri tıklandığında kapanmasın
            className="bg-white w-full max-w-3xl h-[85vh] rounded-[2.5rem] relative overflow-hidden shadow-2xl"
          >
            <button 
              onClick={closeForm}
              className="absolute top-6 right-6 z-10 p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-slate-600" />
            </button>
            <iframe 
                src={formUrl} // Burası eskiden "https://tally..." diye gidiyordu, artık değişken kullanıyoruz
                width="100%" 
                height="100%" 
                frameBorder="0" 
                title="Boutique Club Application"
                className="w-full h-full"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}