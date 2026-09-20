import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const root = process.cwd()
const sourceDir = path.join(root, 'originais', 'public-imagens')
const outputDir = path.join(root, 'public', 'imagens')

const images = [
  { source: 'Videomaker.PNG', output: 'videomaker.webp', size: 1400, quality: 82 },
  { source: 'Videomaker 2.PNG', output: 'videomaker-2.webp', size: 1400, quality: 82 },
  { source: 'Casamento.jpeg', output: 'casamento-1.webp', size: 1600, quality: 80 },
  { source: 'Casamento 2.jpeg', output: 'casamento-2.webp', size: 1600, quality: 80 },
  { source: 'Outra mulher 1.jpeg', output: 'ensaio-1.webp', size: 1600, quality: 80 },
  { source: 'Mulher 1.jpg', output: 'ensaio-2.webp', size: 1600, quality: 80 },
  { source: 'Mulher 2.jpg', output: 'ensaio-3.webp', size: 1600, quality: 80 },
]

await fs.mkdir(outputDir, { recursive: true })

for (const image of images) {
  await sharp(path.join(sourceDir, image.source))
    .resize({ width: image.size, height: image.size, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: image.quality })
    .toFile(path.join(outputDir, image.output))
}

await sharp(path.join(sourceDir, 'Videomaker.PNG'))
  .resize(1200, 630, { fit: 'cover', position: 'centre' })
  .jpeg({ quality: 82 })
  .toFile(path.join(root, 'public', 'og-image.jpg'))

console.log(`Imagens otimizadas: ${images.length} WebP + og-image.jpg`)