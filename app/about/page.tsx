import { Metadata } from 'next';

export const dynamic = 'force-static'; // no necessary, just for demonstration

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About NextSpace',
};


export default function About(){
    return (
        <main>
            <h1>About</h1>
            <p>Hire me pls</p>
        </main>
    );
}