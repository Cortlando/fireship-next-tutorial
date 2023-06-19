import { Metadata } from 'next';

export const dynamic = 'force-static'; // no necessary, just for demonstration

export const posts = [
    {
      "title": "Lorem Ipsum",
      "slug": "lorem-ipsum",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget dolor nec nulla sodales rhoncus."
    },
    {
      "title": "Dummy Title",
      "slug": "dummy-title",
      "content": "This is a dummy content for testing purposes."
    },
    {
      "title": "Sample Title",
      "slug": "sample-title",
      "content": "This is a sample content to demonstrate the structure."
    },
    {
      "title": "Test Title",
      "slug": "test-title",
      "content": "This is a test content used for validation."
    }
  ]
  
  
  import { NextResponse } from 'next/server';
  import {getServerSession} from 'next-auth'

  export async function GET(){
    const session = await getServerSession()
    return NextResponse.json(posts)
  }