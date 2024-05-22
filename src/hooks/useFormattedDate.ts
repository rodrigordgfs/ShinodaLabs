import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const useFormattedDate = (dateString: string, dateFormat: string): string => {
  const date = new Date(dateString);
  const formattedDate = format(date, dateFormat, { locale: ptBR });
  return formattedDate;
};

export default useFormattedDate;
