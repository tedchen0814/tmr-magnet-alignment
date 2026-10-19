# TMR 磁鐵對位 · TMR Magnet Alignment

以 NVE AAT003 TMR 角度感測器搭配同軸（on-axis）徑向充磁磁鐵為對象的中英雙語互動網頁，說明角度誤差的來源，以及每種誤差可以用哪一層校正處理。

An interactive bilingual (繁體中文 / English) page on angle-error sources and calibration for the NVE AAT003 TMR angle sensor with an on-axis, diametrically magnetized magnet.

- 線上版：https://tmr-magnet-alignment.vercel.app/
- Artifact（私人）：https://claude.ai/artifact/UBdHfcwUPKN5dx8aQhsW4o

## 內容

| 區塊 | 說明 |
|---|---|
| AAT003 規格解讀 | 工作磁場 30–200 Oe、偏移 ±10 mV/V、非正弦性、可重複性、10-bit ADC 解析度對角度誤差的影響 |
| 誤差來源總表 | 組裝 A1–A8、磁鐵 B1–B6、感測器與電路 C1–C6，每項附機制、誤差形狀（諧波階次）與校正層級 |
| 校正階梯 L0–L5 | atan2 比值、零點、最小／最大值、橢圓擬合、多點／諧波校正、溫度補償，以及建議的產線流程 |
| 實驗 1：兩路訊號 | 磁鐵轉角與 sin／cos 輸出、atan2 |
| 實驗 2：零點偏移 | 安裝轉角與零點寫入 |
| 實驗 3：訊號誤差與校正 | 偏移、增益、正交、三次諧波；校正前後誤差曲線與諧波頻譜，含 AAT003 規格邊緣示例 |
| 實驗 4：偏心與場強 | 磁荷模型計算偏心誤差、允許偏心量，以及場強是否落在 AAT003 的 3–20 mT 範圍 |

頁面內容標示三種來源：**事實**（附公開來源）、**推論**（依物理關係推得）、**本頁模型**（由頁面數值模型計算）。

## 檔案

| 檔案 | 用途 |
|---|---|
| `TMR 磁鐵對位_改寫版.html` | 網頁原始檔（Artifact 格式，沒有 `<html>`／`<head>` 外層） |
| `aat003-onaxis.png` | on-axis 示意圖（NVE AAT003 規格書圖 1） |
| `build.js` | 補上完整 HTML 外層，輸出 `dist/index.html` 與圖片 |
| `工作筆記.md` | 進度、下一步與踩坑紀錄 |

不納入 repo：原稿 `TMR 磁鐵對位.html`、`AAT003.pdf`、`ON-AXIS Angle sensing.txt`、`dist/`。

## 本機預覽與部署

直接用瀏覽器打開 `TMR 磁鐵對位_改寫版.html` 即可預覽。

部署到 Vercel（TedHQ 團隊，專案 `tmr-magnet-alignment`）：

```bash
node build.js
cd dist
npx vercel deploy --prod --yes --scope ted-hq --project tmr-magnet-alignment
```

只部署 `dist/`，避免把參考資料一起上傳。

## 待確認

- 需要實測：AAT003 兩通道振幅匹配、正交誤差、偏移溫漂；磁鐵分極界線公差。
- 示意圖取自 NVE 規格書，線上版為公開網址，有版權疑慮。

## 參考資料

- NVE AAT003 規格書（SB-00-056，2024-11）
- [NVE On-Axis Angle Sensing 計算器](https://www.nve.com/spec/calculators#tabs-On-Axis-Angle-Sensing)
- Allegro AN120、AN126；TI SLYA079；ams AN000688；ADI AN-1352；US12181310B2；Infineon Magnetic Design Tool；Melexis 磁鐵選型
