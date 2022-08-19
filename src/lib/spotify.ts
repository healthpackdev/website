const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const Basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

// get spotify access token with user refresh_token
const getAccessToken = async () => {
  const params = new URLSearchParams();
  params.append('grant_type', 'refresh_token');
  params.append('refresh_token', refresh_token);

  return fetch(`https://accounts.spotify.com/api/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Basic}`,
    },
    body: params.toString(),
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
