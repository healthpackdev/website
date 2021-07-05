import formUrlEncode from 'querystring';
import author from '@config/author-meta.json';

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const BasicKey = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

const getAccessToken = async () => {
  return fetch(`https://accounts.spotify.com/api/token?username=${author.spotifyUsername}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${BasicKey}`,
    },
    body: formUrlEncode.stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  }).then((res) => res.json());
};

const spotifyFetch = async (endpoint: string) => {
  const { access_token, token_type } = await getAccessToken();

  return fetch(`https://api.spotify.com/v1${endpoint}`, {
    headers: {
      Authorization: `${token_type} ${access_token}`,
    },
  });
};

export const getNowPlaying = async () => {
  return spotifyFetch('/me/player/currently-playing');
};
