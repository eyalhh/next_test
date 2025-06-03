import { redirect } from 'next/navigation'

export default async function Page({ params }) {

    const { shortCode } = await params;

    const response = await fetch('http://localhost:3000/api/redirect', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ shortCode: shortCode }),
      });
    
    const { data } = await response.json();
      
    // redirect to the original url;
    redirect(data.original_url);
    
}