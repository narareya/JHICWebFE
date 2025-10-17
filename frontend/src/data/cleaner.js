// Script untuk membersihkan data jurusan
import fs from 'fs';

// Baca file
const content = fs.readFileSync('./jurusan.js', 'utf8');

// Clean up: hanya simpan Job Title
const cleanedContent = content.replace(
  /details: \[\s*\{ label: 'Gaji'[^}]+\},\s*\{ label: 'Industri'[^}]+\},\s*(\{ label: 'Job Title'[^}]+\}),\s*\{ label: 'Jenjang'[^}]+\}\s*\]/g,
  'details: [\n          $1\n        ]'
);

// Tulis kembali
fs.writeFileSync('./jurusan_clean.js', cleanedContent);
console.log('Berhasil membersihkan data!');