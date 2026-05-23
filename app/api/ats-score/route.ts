export async function POST() {
  return new Response(JSON.stringify({ score: 85 }), {
    headers: { "Content-Type": "application/json" },
  });
}
