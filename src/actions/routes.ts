import axios from 'axios'

const apiRoutes = axios.create({
  baseURL: `https://maps.googleapis.com/maps/api`,
  withCredentials: true,
})

export const getRoutes = async () => {
  try {
    const responce = await apiRoutes.get(
      `/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood&key=${process.env.REACT_APP_API_KEY}`
    )
    console.log(responce)
  } catch (e) {
    console.dir(e)
  }
}
