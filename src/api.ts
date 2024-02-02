import axios, { AxiosRequestConfig } from 'axios'

const instance = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1',
  timeout: 1000,
})

const callApi = async (config: AxiosRequestConfig) => {
  try {
    const response = await instance(config)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const fetchCategoryList = async () => {
  const data = await callApi({
    method: 'get',
    url: '/categories.php',
    params: {},
  })
  return data.categories
}

export const fetchFoodList = async (category: string) => {
  const data = await callApi({
    method: 'get',
    url: `/filter.php?c=${category}`,
    params: {},
  })
  return data.meals
}
