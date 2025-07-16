export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(`<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Embargos BOE - Comunidad de Madrid</title>
    <link>https://www.boe.es/</link>
    <description>Feed de embargos publicados en el BOE para la Comunidad de Madrid</description>
    <language>es</language>
    <item>
      <title>Ejemplo embargo Madrid 1</title>
      <link>https://www.boe.es/diario_boe/txt.php?id=BOE-B-2025-00001</link>
      <description>Embargo publicado el 15 de julio de 2025 en Madrid</description>
      <pubDate>Tue, 15 Jul 2025 09:00:00 +0200</pubDate>
      <guid>BOE-B-2025-00001</guid>
    </item>
    <item>
      <title>Ejemplo embargo Madrid 2</title>
      <link>https://www.boe.es/diario_boe/txt.php?id=BOE-B-2025-00002</link>
      <description>Otro embargo publicado en la Comunidad de Madrid</description>
      <pubDate>Tue, 15 Jul 2025 10:00:00 +0200</pubDate>
      <guid>BOE-B-2025-00002</guid>
    </item>
  </channel>
</rss>`);
}

