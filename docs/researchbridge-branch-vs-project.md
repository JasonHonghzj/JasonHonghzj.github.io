# ResearchBridge：個人 Branch 與完整專案交叉分析

分析日期：2026-10-25。網站頁面未修改；本文整理程式證據及作品集表述範圍。

## 1. 核心結論

**你的個人部分是 ResearchBridge 文獻探索引擎，以及支援繁中、英文、西文的 Streamlit 互動應用。完整 ZIP 將這套引擎保留，另加入 FastAPI／JavaScript 網站及大型 PubMed／MeSH 文獻探索流程。**

個人歸屬依據是你確認「這個 branch 的內容都是我做的」；本次再用實際檔案差異確認它在整合版中的位置。這是個人版本與完整版本的比較，不是以 branch 相對 main 的增刪行數推定作者。

| 分析來源 | 固定範圍 |
| --- | --- |
| 你的個人版本 | [researchbridge-trilingual-bridges-20261024-backup_Jason](https://github.com/JasonHonghzj/ResearchBrdige_2026Hackachusettes/tree/researchbridge-trilingual-bridges-20261024-backup_Jason) |
| 本次核對的 commit | [6371458697655ffa6c0aa4f283b3f519764fa2a8](https://github.com/JasonHonghzj/ResearchBrdige_2026Hackachusettes/commit/6371458697655ffa6c0aa4f283b3f519764fa2a8) |
| 完整版本 | 你提供的 `C:/Users/acer/Desktop/DS+X real.zip`，以 ZIP 內容為準 |

## 2. Branch 做了什麼？

### 要解決的問題

研究者從初步研究問題尋找文獻時，需要在搜尋、篩選、比較、來源核對與筆記整理之間反覆切換。跨主題的推薦如果沒有保留原文，也難以判斷推薦根據。多語使用者還需要能切換操作語言，同時保留研究目標及已選文獻。

### 你的解決方法

你建立一個本機文獻探索應用：整合起始書目、PubMed 官方摘要及 OpenAlex 作者機構資訊，以 SQLite 保存資料，用 TF-IDF／LSA 進行文字檢索，再把搜尋、方法與線索探索、文獻比較、原文核對及匯出串成同一流程。

### 已完成的功能

| 功能 | 個人 branch 的實作內容 |
| --- | --- |
| 資料匯入與補充 | 使用 60 筆起始文獻、135 筆機構名錄；取得 PubMed 官方記錄、摘要、作者、DOI、日期及 MeSH 欄位 |
| 機構關聯 | 對 20 篇文獻取得 OpenAlex work；先核對 PMID，再依 institution ID 去重；名錄名稱採標準化後精確配對 |
| 本機資料庫 | SQLite 四張表：`papers`、`institutions`、`paper_institutions`、`provenance`；保存來源欄位與 CSV 的 SHA-256，原始快照另存本機檔案 |
| 文獻搜尋 | TF-IDF，題名重複加權三次；英文停用字、unigram／bigram；可切換 TF-IDF＋LSA 混合排序 |
| 查詢擴展 | 內建中英西概念對照與 Unicode 正規化，讓已知概念使用相同檢索式；任意輸入不會自動翻譯 |
| 篩選 | 主題、期刊、有摘要、有機構關聯、相關度上下界及顯示筆數 |
| Methods & Bridges | 從研究目標推薦方法，再搭配研究線索找延伸文獻；結果保留題名／摘要中的匹配原文 |
| 文獻比較 | 最多四篇，提供兩兩 TF-IDF cosine similarity、共有詞、領域與方法的共同點及差異 |
| 來源核對 | 對輸入文字做 Unicode／大小寫／空白正規化，再核對是否存在於所選摘要；未命中標為需要人工確認 |
| 研究簡報 | 以範本整理研究目標、原文摘錄、引文、來源、機構與聯絡信草稿；信件不會自動寄出 |
| 三語互動介面 | 七個 Streamlit 頁籤支援繁中、英文、西文；提供明暗主題、查詢與比較清單、頁籤狀態保留 |
| 報告匯出 | 搜尋、Bridges、比較、簡報、名錄可匯出 CSV／HTML／PDF；另有比較 JSON、引文 TXT、簡報 Markdown |
| 測試與檢索檢查 | pytest、Streamlit AppTest；測試資料保留、檢索排序、語言與狀態切換、比較、來源核對及匯出 |

七個頁籤為：文獻探索、Methods & Bridges、研究比較、來源核對、研究簡報、機構名錄、資料與方法。這個 branch 是一個可獨立使用的應用，個人貢獻涵蓋資料、檢索、介面與輸出流程。

技術細節：LSA 使用最多 24 維的 TruncatedSVD；混合分數為 `0.8 × TF-IDF + 0.2 × 非負 LSA 相似度`，且不會把完全沒有詞彙重疊的文章加入候選。比較頁的文件相似度則獨立於目前查詢與檢索模式。

## 3. 整份 ZIP 做了什麼？

### 要解決的問題

除了尋找相關文獻，完整專案更進一步處理：「某個研究方法是否已被應用於某種疾病的早期診斷？」只在本地資料找不到文章，無法證明外部文獻沒有研究過；拼字、分類與資料擷取缺漏，也都可能產生誤導性的空白。

### 完整版本的解決方法

完整專案保留你的文獻探索引擎作為 Library，另建立疾病 × 方法研究矩陣，並對 PubMed 比較兩種結果數：

1. 疾病與方法在所有用途中的研究數。
2. 相同組合在早期診斷主題中的研究數。

系統顯示精確查詢、已存／即時來源狀態與可用時間資訊，再把選定組合整理成可供研究討論的摘要。文獻稀少代表值得進一步人工查閱，不等於已證明新穎性或方法可行。

### ZIP 新增的主要內容

| 模組 | 完整專案中的用途 |
| --- | --- |
| FastAPI 整合後端 | `app.py` 將文獻探索引擎封裝為 `/api/bridge/*`，並提供 `/api/gap/*` |
| 獨立網頁介面 | 原生 HTML／CSS／JavaScript，包含 Check、Map、Library、Brief、Method |
| 大型 PubMed 擷取流程 | 按年份分批取得資料、依 PMID 去重、解析 XML，處理查詢上限及日期重疊 |
| MeSH 樹分類 | 區分疾病、可移轉方法與機制詞，排除器官限定程序、泛用詞與不合適分類 |
| 研究矩陣 | 保存的資料地圖標示 79,940 篇早期診斷相關文獻、50 疾病 × 32 方法，共 1,600 格 |
| 組合檢查 | 比較整體與早期診斷文獻數，處理無法辨識的查詢詞、快取、重試與更新失敗 |
| 低文獻量候選 | 533 組保存查詢，其中 424 組符合早期診斷結果 ≤2 筆的設定門檻，109 組不符合 |
| Gap Brief | 保留選定疾病／方法、計數、來源狀態及精確 PubMed 查詢；可下載 Markdown 或列印為 PDF |
| 分析與限制展示 | 展示資料覆蓋、索引限制、已撤回的歷史 lift 與機制橋接排序的負結果 |
| 新的測試 | FastAPI TestClient／HTTPX 的 API 測試、gap 檢查測試與 HTML 結構測試 |

79,940 是所附地圖及來源紀錄記載的快照規模；ZIP 沒有附上對應的完整原始 corpus 檔，因此本次不能逐筆重建並核對這個數字。533／424／109 則可直接從所附 JSON 計算。

## 4. 交叉比對表

| 面向 | 你的 branch | 完整 ZIP |
| --- | --- | --- |
| 專案定位 | 三語文獻與研究證據探索應用 | 文獻探索＋早期診斷研究分布與組合檢查 |
| 主應用 | Streamlit `app.py` | FastAPI `app.py`＋原生 JavaScript 網站 |
| 你的原介面 | branch 的主介面 | 保留為 `streamlit_app.py`，屬早期介面 |
| 文獻探索核心 | `researchbridge/` | 保留並接入 Library／Bridge API |
| 基礎資料 | 60 篇文獻、56 篇官方摘要、135 筆機構名錄 | 保留相同資料，另有大型地圖及配對檢查快照 |
| NLP／搜尋 | TF-IDF、LSA、cosine similarity、詞彙擴展 | 沿用你的核心搜尋方法 |
| PubMed／OpenAlex | 文獻補充、PMID 精確關聯、機構資訊 | 保留，另加大規模 PubMed 與組合計數流程 |
| MeSH | 解析並展示文獻 MeSH 欄位 | 另有 MeSH tree 分類與疾病／方法共現矩陣 |
| 多語範圍 | 七個 Streamlit 頁籤皆有三語介面 | 新主站的 Library 有三語；Check／Map／Gap Brief 等仍為英文 |
| 文獻比較／來源核對 | 已實作 | 核心保留，提供新的 API／網頁操作 |
| 研究缺口功能 | 未實作大型研究缺口驗證 | 提供低文獻量候選及可重現查詢；仍需專業人工審閱 |
| HTTP 能力 | 呼叫外部公開 API | 另提供對前端服務的應用程式 REST API |
| 個人作品集歸屬 | 可列為你的實作 | 新增整合層與 Gap Finder 應列為團隊／完整專案範圍 |

### 檔案如何對應？

| Branch → ZIP | 本次實際差異 |
| --- | --- |
| `app.py` → `streamlit_app.py` | 忽略換行與檔尾空白後內容相同 |
| `researchbridge/` 共 11 個 Python 檔 | 8 個相同；其餘 3 個只調整資料路徑或一處名稱文字 |
| `core.py` | 資料庫／快照搬至 `data/bridge/`，起始 CSV 搬至 `starter/` |
| `ingest.py` | 起始 CSV 的讀取路徑加入 `starter/` |
| `i18n.py` | 一則提示中的 Research Scout 改為 ResearchBridge |
| 原有 5 份測試 | 3 份相同；另 2 份只調整啟動檔名或資料路徑 |
| `data/evaluation.json` | 忽略換行與檔尾空白後相同 |
| 23 份來源快照 | ZIP 對應檔在統一換行格式後，全部可對上 GitHub branch 的 Git blob SHA |

這些對照支持「你的探索核心被保留至整合版本」，但不表示你負責 ZIP 新增的所有介面與演算法。

## 5. 技術全清單：哪些屬於個人？

| 技術／方法 | 你的 branch | ZIP 完整版 | 作品集分類建議 |
| --- | --- | --- | --- |
| Python、型別提示、模組化 | 有 | 有 | 個人 Programming |
| NumPy、scikit-learn | 有 | 保留 | 個人 NLP／檢索 |
| TF-IDF、unigram／bigram、詞頻加權 | 有 | 保留 | 個人 Information Retrieval |
| LSA／TruncatedSVD、cosine similarity | 有 | 保留 | 個人 Information Retrieval |
| 查詢擴展、Unicode 正規化、regex | 有 | 保留 | 個人 Text Processing |
| 擷取原文、字面來源核對 | 有 | 保留 | 個人 Evidence Traceability |
| SQLite、SQL、主鍵／外鍵與資料建模 | 有 | 保留 | 個人 Data Engineering |
| Requests、PubMed EFetch、OpenAlex API | 有 | 保留並擴充 | 個人 API Data Integration |
| CSV／JSON／XML／ElementTree | 有 | 有 | 個人 Data Processing |
| SHA-256、來源快照、時間與來源紀錄 | 有 | 有 | 個人 Data Provenance |
| 重試、逾時、快取、原子重建 | 有 | 有 | 個人 Reliable Data Pipelines |
| Streamlit、Session State、cache_data／cache_resource | 主介面 | 保留的早期介面 | 個人 Application Development |
| 自訂 HTML／CSS、明暗配色 | 有 | 有 | 個人 UI Styling |
| 繁中／英／西 i18n 與狀態保留 | 完整 Streamlit 應用 | 新主介面的 Library | 個人 Multilingual UI |
| ReportLab、中文字型嵌入 | 有 | 保留 | 個人 Report Generation |
| CSV／HTML／PDF／JSON／TXT／Markdown 匯出 | 有 | 核心保留；各介面的選項不同 | 個人 Reporting |
| HTML escaping、CSV 公式注入防護 | 有 | 有 | 個人 Export Handling |
| pytest、Streamlit AppTest | 有 | 保留 | 個人 Testing |
| pypdf | 用於 PDF 測試 | 有 | 個人 PDF Validation；不是 PDF 產生引擎 |
| 固定檢索案例、Top-k、MRR@5 | 有 | 保留 | 個人 Retrieval Evaluation |
| FastAPI、Pydantic、REST endpoints | 無 | 新增 | 整體專案技術 |
| Uvicorn 服務 | 未直接實作；只出現在 lockfile | 主服務 | 整體專案技術 |
| 原生 JavaScript、DOM、Fetch、AbortController | 無自建此類主介面 | 新增 | 整體專案技術 |
| HTTPX／FastAPI TestClient | 無 | 新增 | 整體專案測試 |
| MeSH metadata 解析 | 有 | 有 | 可列個人文獻資料解析 |
| MeSH ontology tree 分類／共現矩陣 | 無 | 新增 | 整體專案演算法 |
| 按年份大規模擷取、PMID 去重、時間切分 | 無此大型流程 | 有 | 整體專案資料管線 |
| 機制橋接圖／IDF gap ranking／時間對照驗證 | 無 | 實驗／分析程式 | 整體研究方法；成效未獲支持 |
| Pandas | 依賴表有列，已讀應用與核心未直接使用 | 主流程未見直接使用 | 不以此專案新增個人技能主張 |
| RapidFuzz | 無 | requirements 有列，主流程未見呼叫 | 不描述成已完成模糊比對 |
| Anthropic、Sentence Transformers | 未實作 | 註解中的 optional 依賴 | 不列為已實作技能 |
| Git／版本管理 | branch 版本與 lockfile | 有 Git 資料 | 可列開發工具；不等於 CI/CD 已完成 |

Branch lockfile 中的 Altair、PyDeck、PyArrow、Uvicorn 等套件，不等於你逐一使用它們完成對應功能；不要把整份環境依賴直接複製成 My Skills。機器學習、深度學習、PCR 等名稱也可能只是被搜尋的研究主題，不能據此推論你在本專案訓練了那些模型。

## 6. 成果數字應如何表述？

| 可用數字 | 正確解讀 |
| --- | --- |
| 60 篇文獻、56 篇官方摘要、135 筆機構名錄 | 你的探索應用資料範圍；ZIP SQLite 可直接核對，branch 測試亦有相同預期 |
| 79 筆文獻—機構關聯 | 關聯筆數，分布於 20 篇文獻；不是 79 間合作機構 |
| 兩種模式各 8 個固定開發案例 | 皆為 Top-1 7/8、Top-5 8/8、MRR@5 0.90；不是 90% 準確率，也沒有證明 hybrid 優於 TF-IDF |
| 79,940 篇、50 × 32 | 整體專案保存地圖的規模；不屬於你的 branch 文獻庫 |
| 533 組檢查，424 組符合 ≤2 筆門檻 | 保存的 PubMed 計數結果；不能稱為發現 424 個全新研究機會 |

舊的 **2× lift 已撤回**，完整版本的修正歷史驗證尚未完成；機制橋接排序亦記錄了負結果。兩者不應寫成個人或團隊的成功模型成效。

## 7. 功能界線

- 文獻搜尋使用本機 TF-IDF／LSA，沒有 LLM、RAG、預訓練多語 embedding、向量資料庫或模型微調。
- 三語是操作介面與內建概念對照；題名與摘要保留原文。
- 來源核對是字面匹配，無匹配時要求人工確認；不提供完整事實或科學真假判定。整合版另有示意動畫，也不能當作正式驗證服務。
- 簡報由範本及原文摘錄組成；機構 affiliation 不代表目前任職、合作意願或已完成媒合。
- 比較清單屬應用工作階段狀態，不等於帳號雲端同步。
- Library PDF 匯出使用 Windows 微軟正黑體；跨平台需要處理字型。Gap Brief 的 PDF 則走瀏覽器列印流程。

## 8. 主要證據與本次檢查

Branch 的固定版本來源：

- [Streamlit 介面與七頁流程，app.py](https://github.com/JasonHonghzj/ResearchBrdige_2026Hackachusettes/blob/6371458697655ffa6c0aa4f283b3f519764fa2a8/app.py#L16)
- [XML、SQLite、TF-IDF／LSA 核心，core.py](https://github.com/JasonHonghzj/ResearchBrdige_2026Hackachusettes/blob/6371458697655ffa6c0aa4f283b3f519764fa2a8/researchbridge/core.py#L145)
- [Bridges、來源核對與簡報，discovery.py](https://github.com/JasonHonghzj/ResearchBrdige_2026Hackachusettes/blob/6371458697655ffa6c0aa4f283b3f519764fa2a8/researchbridge/discovery.py#L82)
- [API 抓取與來源快照，ingest.py](https://github.com/JasonHonghzj/ResearchBrdige_2026Hackachusettes/blob/6371458697655ffa6c0aa4f283b3f519764fa2a8/researchbridge/ingest.py#L46)
- [比較與相似度，insights.py](https://github.com/JasonHonghzj/ResearchBrdige_2026Hackachusettes/blob/6371458697655ffa6c0aa4f283b3f519764fa2a8/researchbridge/insights.py#L29)
- [多格式匯出，exports.py](https://github.com/JasonHonghzj/ResearchBrdige_2026Hackachusettes/blob/6371458697655ffa6c0aa4f283b3f519764fa2a8/researchbridge/exports.py#L17)
- [八個開發案例與評估方法，evaluate.py](https://github.com/JasonHonghzj/ResearchBrdige_2026Hackachusettes/blob/6371458697655ffa6c0aa4f283b3f519764fa2a8/researchbridge/evaluate.py#L7)

ZIP 主要證據路徑：`app.py:217, 305, 365, 405, 443, 494`；`gapfinder/fetch.py:297`；`gapfinder/mesh.py:188`；`gapfinder/grid.py:66`；`gapfinder/confirm.py:143`；`static/gap.js:34, 89, 216`；`static/bridge.js:69`；`data/grid.json`；`data/confirmed.json`。

本次已完成：核心檔案逐行比較、23 份快照 Git blob 比對、ZIP SQLite／JSON 計數、所讀 Python 檔語法解析、兩份前端 JS 語法檢查，以及既有 HTML 結構檢查。另在現有環境離線重跑 ZIP 搜尋核心的兩組八題開發案例，得到相同的 Top-1／Top-5／MRR 結果，並檢查一組內建概念的三語排序一致與無結果查詢。

沒有刷新 PubMed／OpenAlex、沒有重建大型語料，也沒有執行完整 pytest／Streamlit／FastAPI 瀏覽器流程；目前環境缺少相應套件。本次是內容及來源核對，不是正式部署驗收。

可直接貼入作品集的分類及中英文文案，見 [researchbridge-portfolio-copy.md](researchbridge-portfolio-copy.md)。
