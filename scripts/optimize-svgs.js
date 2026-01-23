/**
 * SVG Optimization Script
 * Optimizes all SVG files in public/img/ using SVGO
 * Run with: npm run optimize:svg
 */

const { optimize } = require('svgo');
const fs = require('fs');
const path = require('path');

const SVG_DIR = path.join(__dirname, '..', 'public', 'img');
const CONFIG_PATH = path.join(__dirname, '..', 'svgo.config.js');

async function optimizeSvgs() {
  console.log('🎨 Starting SVG optimization...\n');
  
  // Load SVGO config
  const config = require(CONFIG_PATH);
  
  // Get all SVG files
  const files = fs.readdirSync(SVG_DIR).filter(f => f.endsWith('.svg'));
  
  let totalOriginal = 0;
  let totalOptimized = 0;
  
  for (const file of files) {
    const filePath = path.join(SVG_DIR, file);
    const originalContent = fs.readFileSync(filePath, 'utf8');
    const originalSize = Buffer.byteLength(originalContent, 'utf8');
    totalOriginal += originalSize;
    
    try {
      const result = optimize(originalContent, { path: filePath, ...config });
      const optimizedSize = Buffer.byteLength(result.data, 'utf8');
      totalOptimized += optimizedSize;
      
      // Write optimized SVG
      fs.writeFileSync(filePath, result.data);
      
      const reduction = ((1 - optimizedSize / originalSize) * 100).toFixed(1);
      const originalKB = (originalSize / 1024).toFixed(1);
      const optimizedKB = (optimizedSize / 1024).toFixed(1);
      
      console.log(`✅ ${file}`);
      console.log(`   ${originalKB} KB → ${optimizedKB} KB (${reduction}% reduction)\n`);
    } catch (error) {
      console.error(`❌ Error optimizing ${file}:`, error.message);
    }
  }
  
  const totalReduction = ((1 - totalOptimized / totalOriginal) * 100).toFixed(1);
  const totalOriginalMB = (totalOriginal / 1024 / 1024).toFixed(2);
  const totalOptimizedMB = (totalOptimized / 1024 / 1024).toFixed(2);
  
  console.log('━'.repeat(50));
  console.log(`📊 Total: ${totalOriginalMB} MB → ${totalOptimizedMB} MB`);
  console.log(`🚀 Overall reduction: ${totalReduction}%`);
}

optimizeSvgs().catch(console.error);
