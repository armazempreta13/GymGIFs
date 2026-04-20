
import https from 'https';

const urls = [
  'https://ibb.co/93H8pqYK',
  'https://ibb.co/4ZVTnt9d',
  'https://ibb.co/fwV72Nm',
  'https://ibb.co/0jkSr6cP',
  'https://ibb.co/8n85zM36',
  'https://ibb.co/HTstkmv0'
];

async function getDirectLink(url: string) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        const match = data.match(/https:\/\/i\.ibb\.co\/[^\/]+\/[^"]+/);
        resolve(match ? match[0] : null);
      });
    });
  });
}

async function run() {
  for (const url of urls) {
    const link = await getDirectLink(url);
    console.log(`${url} -> ${link}`);
  }
}

run();
