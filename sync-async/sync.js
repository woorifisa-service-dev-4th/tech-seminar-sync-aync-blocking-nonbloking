import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');

// 테스트 파일 생성
fs.writeFileSync('file1.txt', 'Hello from file1', 'utf8');
fs.writeFileSync('file2.txt', 'Hello from file2', 'utf8');
fs.writeFileSync('file3.txt', 'Hello from file3', 'utf8');

// 파일 읽기
const data1 = fs.readFileSync('file1.txt', 'utf8');
console.log(data1);
const data2 = fs.readFileSync('file2.txt', 'utf8');
console.log(data2);
const data3 = fs.readFileSync('file3.txt', 'utf8');
console.log(data3);
