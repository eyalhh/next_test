
export default async function Page({ params }) {
    const { shortCode } = await params;
    console.log(shortCode);
    const response = await fetch('http://localhost:3000/api/redirect', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ shortCode: shortCode }),
      });
    const { data } = await response.json();
      
    return (
      <div className="flex justify-center items-center text-white text-3xl">{data.original_url}</div>
    )
}