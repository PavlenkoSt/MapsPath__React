import axios from 'axios'

const apiRoutes = axios.create({
  baseURL: `https://maps.googleapis.com/maps/api`,
  withCredentials: true,
})

export const getRoutes = async () => {
  const destinations = 'San%20Francisco'
  const origins = '849VCWC8%2BR9'

  try {
    const responce = await apiRoutes.get(
      `https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${destinations}&origins=${origins}&mode=walking&key=${process.env.REACT_APP_API_KEY}`
    )
    console.log(responce)
  } catch (e) {
    console.dir(e)
  }
}
