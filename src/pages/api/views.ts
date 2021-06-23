import type { NextApiHandler } from 'next';
import db from '@lib/firebase';

const Views: NextApiHandler = async (req, res) => {
  const page = req.query.pathname?.toString();

  if (req.method === 'GET' && !page) {
    const snapshot = await db.ref('views').once('value');
    const total = snapshot.val();

    return res.status(200).json({ total });
  } else if (req.method === 'POST') {
    const ref = db.ref('views').child(page);
    const { snapshot } = await ref.transaction((views) => {
      if (views === null) return 1;

      return ++views;
    });
    return res.status(200).json({
      total: snapshot.val(),
    });
  } else if (req.method === 'GET') {
    const snapshot = await db.ref('views').child(page).once('value');
    const total = snapshot.val();

    return res.status(200).json({ total });
  }
};

export default Views;
