import { NextResponse } from 'next/server';

export const config = {
  runtime: 'edge',
};

function getItems() {
  return [
    {
      title: "Ejemplo embargo 1",
      link: "https://boe.es/ejemplo1",
      description: "Embargo de inmueble en Madrid",
      pubDate: new Date().toUTCString()
    }
  ];
}

export default async function handler(req) {
  const items = getItems();
  const feed = `
  <rss version="2.0">
    <channel>
      <title>Embargos BOE - Comunidad de Madrid</title>
      <link>https://boe.es/</link>
      <description>Listado actualizado de embargos</description>
      ${items.map(item => `
        <item>
          <title>${item.title}</title>
          <link>${item.link}</link>
          <description>${item.description}</description>
          <pubDate>${item.pubDate}</pubDate>
        </item>
      `).join('')}
    </channel>
  </rss>`.trim();

  return new NextResponse(feed, {
    status: 200,
    headers: {
      "Content-Type": "application/rss+xml",
    },
  });
}
