const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

// Load existing .env file if it exists
const envPath = path.resolve(process.cwd(), '.env');
let envConfig = {};
if (fs.existsSync(envPath)) {
  envConfig = dotenv.parse(fs.readFileSync(envPath));
}

// Toggle maintenance mode
const currentMode = envConfig.MAINTENANCE_MODE === 'true';
envConfig.MAINTENANCE_MODE = (!currentMode).toString();

// Write back to .env file
const envContents = Object.entries(envConfig)
  .map(([key, value]) => `${key}=${value}`)
  .join('\n');

fs.writeFileSync(envPath, envContents);

console.log(`Maintenance mode ${!currentMode ? 'enabled' : 'disabled'}`);
console.log('Run npm run build to apply changes'); 