const fs = require('fs');
const path = require('path');

const dist = path.join(process.cwd(), 'dist');

fs.rmdirSync(dist, {
    recursive: true,
    force: true
});

// /* "build" : "node scripts/DeleteDist.js && tsc" */ for package.json and to "build"