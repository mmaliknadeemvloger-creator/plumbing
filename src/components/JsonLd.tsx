/** Server component — renders a JSON-LD script tag.
 * Accepts either a pre-serialized string (from siteGraph/pageGraph)
 * or a raw object (will be serialized with < escaping).
 */
export function JsonLd({ data }: { data: string | object }) {
  const html =
    typeof data === 'string'
      ? data
      : JSON.stringify(data).replace(/</g, '\\u003c');

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}