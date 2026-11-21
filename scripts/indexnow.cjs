// Meldet alle Adressen der Sitemap über IndexNow an (Bing, Yandex, Seznam und weitere teilnehmende Suchmaschinen).
const KEY = "802a28fc3479810a960574212816a063";
const HOST = "www.fdm-group.de";

(async () => {
  const xml = await (await fetch(`https://${HOST}/sitemap.xml`, { headers: { "User-Agent": "Mozilla/5.0 (compatible; sitemap-check)" } })).text();
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
  if (urls.length === 0) throw new Error("Sitemap leer oder nicht lesbar");
  const antwort = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls }),
  });
  console.log("IndexNow:", antwort.status, antwort.statusText, (await antwort.text()).slice(0, 200), "| gemeldete Adressen:", urls.length);
})().catch((e) => console.log("IndexNow Fehler:", e.message));
