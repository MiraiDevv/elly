export default function myImageLoader({ src, width, quality }) {
  if (src.startsWith('http')) {
    return src
  }
  return `/_${src}`
} 