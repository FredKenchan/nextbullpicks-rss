export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>📢 NextBullPicks RSS Feed</h1>
      <p>Este feed recoge embargos publicados en el BOE para la Comunidad de Madrid.</p>
      <p>Enlace directo al feed: <a href="/api/rss/boe-madrid.xml" target="_blank">/api/rss/boe-madrid.xml</a></p>
    </div>
  );
}
