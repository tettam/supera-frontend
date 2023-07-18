import axios from "axios";
import { formatToLocalDateTime } from "../helpers/dataFilter";

export const fetchApi = async (id, filters) => {
  try {

    const baseUrl = 'http://localhost:8080/api/transferencias'
    const url = `${baseUrl}/${id}`;
    const { startDate, endDate, operatorName } = filters;

    //Mapeamento dos parâmetros conforme o backend
    const params = {
      dataInicio: startDate && formatToLocalDateTime(startDate),
      dataFinal: endDate && formatToLocalDateTime(endDate),
      nomeOperadorTransicao: operatorName
    };

    const fetchData = await axios.get(`${url}`, { params });
    const data = fetchData.data;
    return data;
  } catch (error) {
    throw new Error("Erro ao buscar dados")
  }
}