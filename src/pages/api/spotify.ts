import type { NextApiHandler } from 'next';
import { getNowPlaying } from '@lib/spotify';

const spotify: NextApiHandler = async (_, res) => {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const song = await response.json();

  if (song.item === null) {
    return res.status(200).json({ isPlaying: false });
  }

  res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');

  return res.status(200).json({
    songName: song.item.name,
    artists: song.item.artists.map((art) => art.name),
    isPlaying: true,
  });
};

export default spotify;
