# AI職缺台灣（aijobs.tw）MVP

## 名稱與網域（2026-11-03 查詢；只用 DNS / RDAP 判斷，未到註冊商結帳頁確認，價格未查到）
| 品牌 | 網域 | 結果 |
|---|---|---|
| **AI職缺台灣（推薦）** | aijobs.tw | DNS 查無此網域（NXDOMAIN）→ 很可能可註冊 |
| AI職缺台灣 | aijobstw.com | Verisign RDAP 404 → 很可能可註冊（可當備用或轉址） |
| AI職缺台灣 | aijobs.com.tw | NXDOMAIN → 很可能可註冊（.com.tw 申請資格需確認） |
| AI上工 | aishang.tw | NXDOMAIN → 很可能可註冊 |
| AI職 | aijob.tw / aizhi.tw | 已被註冊 |
TWNIC WHOIS (port 43) 在 box 上連不到，最終以註冊商（如 PChome 買網址、Gandi、Cloudflare）的搜尋頁為準。

## 檔案
index.html（列表＋篩選）、job.html?id=N（詳情→原始連結）、post.html（刊登＋價格）、about.html、jobs.json（資料，直接改這個檔案）、app.js、style.css。
本機預覽：`python3 -m http.server` 後開 http://localhost:8000 （直接雙擊 html 無法讀 jobs.json）。

## 待替換
- 電子報表單 action `#REPLACE_WITH_BEEHIIV_FORM` → Beehiiv 免費方案（2,500 訂閱內）嵌入表單。
- 刊登表單 `#REPLACE_WITH_TALLY_FORM` → Tally（免費）。
- 付款：先手動匯款/開發票，量起來再接綠界或 Stripe。

## 定價
- 基本刊登：免費（推廣期），30 天。
- 精選：NT$1,990／30 天（置頂＋1 期電子報＋1 次社群提及）。
- 精選 3 則：NT$4,990。
依據：aijobs.com 單則 US$199/30 天、ai-jobs.net 精選 US$299 起（約 NT$6,500–9,700）。新站、台灣市場、流量小，訂在約 1/3–1/5。

## 託管
GitHub Pages 或 Cloudflare Pages（免費、可綁自訂網域、自帶 HTTPS）。只需付網域年費。
