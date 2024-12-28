export default function myImageLoader({ src }) {
  if (src.startsWith('http')) {
    return src
  }
  return `/_${src}`
} 