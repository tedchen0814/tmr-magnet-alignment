// 把 Artifact 格式的改寫版（無 doctype/head）包成完整 HTML，輸出到 dist/ 供 Vercel 部署。
const fs = require('fs');
const path = require('path');
const src = fs.readFileSync(path.join(__dirname, 'TMR 磁鐵對位_改寫版.html'), 'utf8');
const out = path.join(__dirname, 'dist');
fs.mkdirSync(out, { recursive: true });
const html = '<!doctype html>\n<html lang="zh-Hant" data-lang="bi">\n<head>\n<meta charset="utf-8">\n'
  + '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n'
  + '</head>\n<body>\n' + src + '\n</body>\n</html>\n';
fs.writeFileSync(path.join(out, 'index.html'), html);
fs.copyFileSync(path.join(__dirname, 'aat003-onaxis.png'), path.join(out, 'aat003-onaxis.png'));
console.log('dist/index.html', html.length, 'bytes');
