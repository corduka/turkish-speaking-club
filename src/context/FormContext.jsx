import React, { createContext, useContext, useState, useEffect } from 'react';

const FormContext = createContext();

export function FormProvider({ children }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  // Form URL'ini state içinde tutuyoruz ki buton tıklandığında değişebilsin
  const [formUrl, setFormUrl] = useState("https://tally.so/r/kdAaGd?hideTitle=1&transparentBackground=1");

  // openForm artık bir 'source' (kaynak) ismi alabiliyor
  const openForm = (source = "general") => {
    const baseUrl = "https://tally.so/r/kdAaGd?hideTitle=1&transparentBackground=1";
    // Tally'de oluşturduğun 'source' hidden field'ına bu değeri gönderiyoruz
    setFormUrl(`${baseUrl}&source=${source}`);
    setIsFormOpen(true);
  };

  const closeForm = () => setIsFormOpen(false);

  useEffect(() => {
    if (isFormOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isFormOpen]);

  return (
    // formUrl'i de dışarıya (Provider'a) açıyoruz
    <FormContext.Provider value={{ isFormOpen, openForm, closeForm, formUrl }}>
      {children}
    </FormContext.Provider>
  );
}

export const useForm = () => useContext(FormContext);