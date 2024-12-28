export default function myImageLoader({ src, _width, _quality }) {
  if (src.startsWith('http')) {
    return src
  }
  return `/_${src}`
} 