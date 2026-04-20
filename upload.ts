const apiKey = '86a6989fdf9894baee32a422013682b3';
const urls = [
  'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop'
];

async function run() {
  const results = [];
  try {
    for (let u of urls) {
      const resp = await fetch(u);
      const buffer = await resp.arrayBuffer();
      const b64 = Buffer.from(buffer).toString('base64');
      
      const body = new URLSearchParams();
      body.append('image', b64);
      
      const uploadResp = await fetch('https://api.imgbb.com/1/upload?key=' + apiKey, {
        method: 'POST',
        body: body
      });
      const json = await uploadResp.json();
      if (json.data && json.data.url) {
        results.push(json.data.url);
      } else {
        console.error('ImgBB Error:', json);
      }
    }
    console.log("IMGBB_URLS: " + JSON.stringify(results));
  } catch (e) {
    console.error(e);
  }
}
run();
