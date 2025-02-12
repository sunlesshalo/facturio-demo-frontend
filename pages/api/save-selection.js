export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const response = await fetch('https://facturio-011-alpha-demo-setup-ferencz1.replit.app:8080/save-selection', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body),
      });
      const data = await response.json();
      res.status(response.ok ? 200 : response.status).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
