import type { NextApiHandler } from 'next';

const ValidateToken: NextApiHandler = (req, res) => {
  if (req.query.token !== process.env.ADMIN_TOKEN) {
    res.status(401).send('NOT OK');
  } else {
    res.status(200).send('OK');
  }
};

export default ValidateToken;
