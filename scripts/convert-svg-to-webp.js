/**
 * SVG to WebP Conversion Script
 * Converts large SVG files with embedded images to optimized WebP format
 * Run with: npm run convert:webp
 */

const sharp = require('sharp');
const fs = require('node:fs');
const path = require('node:path');

const IMG_DIR = path.join(__dirname, '..', 'public', 'img');

// SVGs that contain embedded raster images (should be converted)
const SVG_TO_CONVERT = [
  'iberica-hero.svg',
  'neuroeducacion-aplicada.svg',
  'gestion-proyectos.svg',
  'programas-educacion.svg',
  'formacion-capital-humano.svg',
  'capacitacion-corporativa.svg',
  'proteccion-civil.svg',
  'educacion-especial.svg',
  'educacion-continua.svg',
  'liderazgo-educativo.svg',
  'competencias-digitales.svg',
  'certificacion-competencias.svg',
  'consultoria-educativa.svg',
];

async function convertSvgToWebp() {
  console.log('🔄 Starting SVG to WebP conversion...\n');
  
  let totalOriginal = 0;
  let totalConverted = 0;
  
  for (const svgFile of SVG_TO_CONVERT) {
    const svgPath = path.join(IMG_DIR, svgFile);
    const webpFile = svgFile.replace('.svg', '.webp');
    const webpPath = path.join(IMG_DIR, webpFile);
    
    if (!fs.existsSync(svgPath)) {
      console.log(`⚠️ File not found: ${svgFile}`);
      continue;
    }
    
    const originalSize = fs.statSync(svgPath).size;
    totalOriginal += originalSize;
    
    try {
      // Convert SVG to WebP with high quality
      await sharp(svgPath, { density: 150 })
        .resize(1920, null, { 
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ 
          quality: 85,
          effort: 6
        })
        .toFile(webpPath);
      
      const convertedSize = fs.statSync(webpPath).size;
      totalConverted += convertedSize;
      
      const reduction = ((1 - convertedSize / originalSize) * 100).toFixed(1);
      const originalKB = (originalSize / 1024).toFixed(1);
      const convertedKB = (convertedSize / 1024).toFixed(1);
      
      console.log(`✅ ${svgFile} → ${webpFile}`);
      console.log(`   ${originalKB} KB → ${convertedKB} KB (${reduction}% reduction)\n`);
    } catch (error) {
      console.error(`❌ Error converting ${svgFile}:`, error.message);
    }
  }
  
  const totalReduction = ((1 - totalConverted / totalOriginal) * 100).toFixed(1);
  const totalOriginalMB = (totalOriginal / 1024 / 1024).toFixed(2);
  const totalConvertedMB = (totalConverted / 1024 / 1024).toFixed(2);
  
  console.log('━'.repeat(50));
  console.log(`📊 Total: ${totalOriginalMB} MB → ${totalConvertedMB} MB`);
  console.log(`🚀 Overall reduction: ${totalReduction}%`);
  console.log('\n⚠️ Remember to update placeholder-images.json to use .webp files!');
}

convertSvgToWebp().catch(console.error);
