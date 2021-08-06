import formUrlEncode from 'querystring';

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

const Basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

// get spotify access token with client_id and client_secret
const getAccessToken = async () => {
  return fetch(`https://accounts.spotify.com/api/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Basic}`,
    },
    body: formUrlEncode.stringify({
      grant_type: 'client_credentials',
      client_id,
      client_secret,
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
