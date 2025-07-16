import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');

  try {
    console.log("Fetching cost...");

    const response = await axios.post(
      'https://api.rajaongkir.com/starter/cost',
      req.body,
      {
        headers: {
          key: process.env.REACT_APP_RAJAONGKIR_API_KEY,
          'content-type': 'application/x-www-form-urlencoded',
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching cost:", error.message);
    res.status(500).json({ error: 'Failed to fetch cost' });
  }
}

//log hit api