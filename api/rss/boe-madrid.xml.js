export const config = {
  runtime: 'edge',
};

export default async function handler() {
  const response = await fetch('https://www.boe.es/buscar/embargos/rss.php?comunidades%5B%5D=13');
  const rss = await response.text();

  return new Response(rss, {
    status: 200,
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}
