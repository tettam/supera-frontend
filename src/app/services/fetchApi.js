import axios from "axios";

export const fetchApi = async (filters) => {
  try {

    const baseUrl = 'http://localhost:8080/api/transferencias'
    const url = `${baseUrl}/1`;
    const { startDate, endDate, operatorName } = filters;

    //Mapeamento dos parâmetros conforme o backend
    const params = {
      dataInicio: startDate,
      dataFinal: endDate,
      nomeOperadorTransicao: operatorName
    };

    const fetchData = await axios.get(`${url}`);
    const data = fetchData.data;
    return data;
  } catch (error) {
    console.log("Erro", error);
  }
}