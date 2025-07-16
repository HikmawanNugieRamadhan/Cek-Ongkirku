import axios from 'axios';

export default async function handler(req, res) {
  try {
    console.log("Fetching provinces...");

    const response = await axios.get('https://api.rajaongkir.com/starter/province', {
      headers: {
        key: process.env.REACT_APP_RAJAONGKIR_API_KEY,
      },
    });

    console.log("Success fetching provinces.");
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching provinces:", error.message);
    res.status(500).json({ error: 'Failed to fetch provinces' });
  }
}
