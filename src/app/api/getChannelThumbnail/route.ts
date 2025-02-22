/// <reference types="next" />
export const dynamic = 'force-dynamic';
export const revalidate = 0;
import { NextResponse } from 'next/server';
export async function GET(request: Request) {
const { searchParams } = new URL(request.url);
const handle = searchParams.get('handle');
if (!handle) {
return NextResponse.json({ error: 'Missing handle parameter' }, { status: 400 });
}
if (!process.env.YOUTUBE_API_KEY) {
return NextResponse.json({ error: 'Missing YouTube API key' }, { status: 500 });
}
const apiKey = process.env.YOUTUBE_API_KEY;
try {
// First attempt: search with '@' prefix
const queryWithAt = handle.startsWith('@') ? handle : '@' + handle;
let searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=${encodeURIComponent(queryWithAt)}&maxResults=1&key=${apiKey}`;
let res = await fetch(searchUrl);
let data = await res.json();
// If no results, try without '@'
if (!data.items || data.items.length === 0) {
const queryWithoutAt = handle;
searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=${encodeURIComponent(queryWithoutAt)}&maxResults=1&key=${apiKey}`;
res = await fetch(searchUrl);
data = await res.json();
if (!data.items || data.items.length === 0) {
return NextResponse.json({ error: 'Channel not found or invalid handle' }, { status: 404 });
}
}
// Get channelId from search results
const channelId = data.items[0].id?.channelId;
if (!channelId) {
return NextResponse.json({ error: 'Channel ID not found in search results' }, { status: 404 });
}
// Fetch channel details using the channelId
const channelUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${apiKey}`;
res = await fetch(channelUrl);
const channelData = await res.json();
if (!channelData.items || channelData.items.length === 0) {
return NextResponse.json({ error: 'Channel details not found' }, { status: 404 });
}
const thumbnails = channelData.items[0].snippet.thumbnails;
const thumbnailUrl = thumbnails.default?.url || thumbnails.medium?.url || thumbnails.high?.url;
if (!thumbnailUrl) {
return NextResponse.json({ error: 'Thumbnail not found' }, { status: 404 });
}
return NextResponse.json({ thumbnailUrl });
} catch (error) {
console.error('Error fetching from YouTube API:', error);
return NextResponse.json({ error: 'Error fetching from YouTube API' }, { status: 500 });
}
}