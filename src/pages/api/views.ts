import type { NextApiHandler } from 'next';
import siteConfig from '@config/site-config.json';

const PLAUSIBLE_API = 'https://plausible.io/api/v1';
const KEY = process.env.PLAUSIBLE_API_KEY;

const Views: NextApiHandler = async (req, res) => {
  console.log(req.headers['x-forwarded-for']);
  const path = req.query.path?.toString();

  if (req.method === 'GET' && path) {
    fetch(
      `${PLAUSIBLE_API}/stats/aggregate?site_id=${siteConfig.hostName}&filters=event:page${encodeURIComponent(
        `==${path}`
      )}`,
      { headers: { Authorization: `Bearer ${KEY}` } }
    )
      .then((res) => res.json())
      .then(({ results }) => {
        res.status(200).json({
          views: results.visitors.value,
        });
      });
  } else if (req.method === 'GET' && !path) {
    fetch(`${PLAUSIBLE_API}/stats/breakdown?site_id=${siteConfig.hostName}&property=event:page`, {
      headers: { Authorization: `Bearer ${KEY}` },
    })
      .then((res) => res.json())
      .then(({ results }) => {
        res.status(200).json(results);
      });
  } else {
    res.status(404).redirect('/404');
  }
};

export default Views;
