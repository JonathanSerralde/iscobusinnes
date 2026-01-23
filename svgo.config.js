/** @type {import('svgo').Config} */
module.exports = {
  multipass: true,
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          // Keep viewBox for responsive scaling
          removeViewBox: false,
          // Aggressive path optimization
          convertPathData: {
            floatPrecision: 2,
            transformPrecision: 2,
          },
          // Merge paths when possible
          mergePaths: true,
          // Remove unused defs
          removeUselessDefs: true,
          // Clean up IDs
          cleanupIds: {
            minify: true,
            remove: true,
          },
        },
      },
    },
    // Remove comments and metadata
    'removeComments',
    'removeMetadata',
    'removeTitle',
    'removeDesc',
    'removeUselessStrokeAndFill',
    'removeEmptyContainers',
    'removeEmptyText',
    'removeEditorsNSData',
    // Convert to smaller representations
    'convertStyleToAttrs',
    'convertColors',
    'convertTransform',
    // Collapse groups when possible
    'collapseGroups',
    // Remove hidden elements
    'removeHiddenElems',
  ],
};
