import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const dir = 'public/image';
const files = fs.readdirSync(dir).filter(f => /\.(png|jpe?g)$/i.test(f));

console.log(`Found ${files.length} images to optimize.`);

// Install sharp-cli once to ensure cache
try {
    console.log("Ensuring sharp-cli is ready...");
    execSync('npx --yes sharp-cli --version', { stdio: 'inherit' });
} catch (e) {
    // ignore
}

for (const file of files) {
    const input = path.join(dir, file).replace(/\\/g, '/');
    // Using .webp extension
    const output = path.join(dir, file.replace(/\.(png|jpe?g)$/i, '.webp')).replace(/\\/g, '/');

    if (fs.existsSync(output)) {
        console.log(`Skipping ${file} (webp exists)`);
        continue;
    }

    console.log(`Optimizing ${file}...`);
    try {
        // reduce quality to 80 for webp
        execSync(`npx --yes sharp-cli -i "${input}" -o "${output}" --quality 80`, { stdio: 'inherit' });
    } catch (err) {
        console.error(`Failed to optimize ${file}:`, err.message);
    }
}

console.log("Done!");
