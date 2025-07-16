import axios from 'axios';

export default async function handler(req, res) {
  const { province } = req.query;

  try {
    console.log(`Fetching cities for province ${province}...`);

    const response = await axios.get(`https://api.rajaongkir.com/starter/city?province=${province}`, {
      headers: {
        key: process.env.REACT_APP_RAJAONGKIR_API_KEY,
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching cities:", error.message);
    res.status(500).json({ error: 'Failed to fetch cities' });
  }
}