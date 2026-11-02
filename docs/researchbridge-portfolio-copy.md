# Research Bridge：現行 Portfolio 中英文文案

更新日期：2026-11-02（America/New_York）。本文件依使用者提供的同日一致性檢查整理，事實固定到專案 main 的 [e90c408](https://github.com/JasonHonghzj/ResearchBrdige_2026Hackachusettes/commit/e90c408f3e40f633d7b2cd23909ec977cb0488d6)。原個人 branch 與 ZIP 比較見 [歷史交叉分析](researchbridge-branch-vs-project.md)。

本次沿用已核對的程式、保存資料與驗證紀錄，沒有重新擷取完整 PubMed 語料、重跑科學成效或完整應用測試，也沒有重建每位成員的協作歷史。個人歸屬沿用使用者確認的 Library 範圍；功能存在本身不等於作者證據。

## 1. Skills 與專案標籤

個人實作可支持 Python、SQLite、API Data Integration、XML / JSON Processing、Data Provenance、scikit-learn、TF-IDF、LSA / TruncatedSVD、Cosine Similarity、Query Expansion、Literal Source-Text Checks、Multilingual UI、Report Generation 及 pytest。

現行卡片標籤：**Python · Information Retrieval · FastAPI**。

現行詳情技術列：**Python, NLP / Information Retrieval, API Integration, SQLite, FastAPI**。FastAPI 與 HTML / CSS / JavaScript 描述整合應用架構，不擴張個人對團隊整合層的作者歸屬。Streamlit 與 AppTest 可描述原 branch 的歷史實作經驗；目前 main 已移除該介面、設定及專用測試，不再列為現行 UI 或必要依賴。

## 2. Project card / 專案卡片

- Title: **Research Bridge**
- Category: **Research Discovery & Evidence Analysis**
- Timeline: **Fall 2026**，由使用者確認。

**English**

A research discovery prototype combining PubMed disease–method maps, saved and live publication-count checks, and a separate paper Library with source excerpts, comparisons, and exportable research briefs.

**中文**

研究探索原型，結合 PubMed 疾病–方法地圖、保存與即時文獻計數，以及獨立的文獻 Library，提供原文摘錄、文獻比較與可匯出的研究摘要。

## 3. View Project：英文版

### Intro

Connecting research questions to evidence through literature maps, reproducible PubMed checks, and a source-linked paper Library.

### Project at a glance

Map literature → Check disease–method pairings → Explore & brief

- Saved map papers: **80,025**
- Disease × method grid: **50 × 32**
- Library papers: **60**

The map uses the October 30, 2026 retrieval, promoted on November 2. Pairing counts may use historical saved results; Refresh PubMed requests a new check. The map and the curated Library are separate datasets. Low publication counts guide further reading and do not establish scientific novelty or feasibility.

### Project Overview & Description

Research Bridge is a collaborative research discovery prototype for exploring how methods have been applied to diseases, with a focus on early detection. The integrated application brings together Check, Map, Library, Brief, and Method in a web platform with a FastAPI backend and an HTML, CSS, and JavaScript interface. Users can move from a broad view of publication coverage to a specific PubMed query, inspect related papers, and carry source-linked evidence into a research discussion.

**My role: Library Data & Retrieval Engine.** I developed the Library’s PubMed / OpenAlex data preparation and SQLite storage, TF-IDF / LSA retrieval, method-and-cue exploration, paper comparison, literal source-text checks, and Library opportunity-brief and report generation. These components support the Library features used in the final FastAPI application.

### Objective

Researchers often move between search tools, paper comparisons, source checks, and notes when exploring a question. An empty search result can also reflect limited coverage or query wording. The project aims to bring these tasks into one traceable workflow: map existing literature, compare publication counts for a disease–method pairing, inspect supporting text, and export a brief for further review.

### Approach

- **Map research coverage:** Organize PubMed records with MeSH disease and method categories, presenting the saved early-detection literature snapshot as a disease–method matrix.
- **Make publication checks reproducible:** Compare overall publication counts for a pairing with counts specific to early detection. Show saved or live results, exact PubMed queries, and source status so users can inspect how each result was obtained. Saved counts can be historical; later live queries may return different results.
- **Build a traceable Library:** Enrich paper records through PubMed and OpenAlex, retain source metadata and snapshots, and use SQLite with TF-IDF / LSA retrieval to support local search and methods-and-bridges exploration.
- **Keep evidence inspectable:** Show source excerpts, compare up to four papers using text similarity and shared terms, and check whether supplied text occurs in selected abstracts after text normalization. Unmatched statements are marked for human review. The Library supports Traditional Chinese, English, and Spanish interfaces; paper titles and abstracts retain their source language.
- **Support research handoffs:** Generate Library opportunity briefs and export Library results as CSV, HTML, and PDF. The separate Gap Brief records a selected pairing, counts, source status, and precise search queries for Markdown download or browser printing.

### Results & Key Findings

- The saved map contains 80,025 PubMed records from the October 30, 2026 retrieval, covering publication years 2005–2026 across 50 diseases and 32 methods—a 1,600-cell map for exploring early-detection literature coverage.
- The integrated workflow supports saved and live PubMed pairing checks, a disease–method map, an interactive Library, and downloadable research briefs.
- The separate Library contains 60 papers, including 56 official abstracts, and a 135-entry institution directory, with source excerpts, comparison tools, and multilingual interaction.
- Library search and exploration results retain source excerpts and PubMed links, giving users a direct route back to the underlying papers.

### Impact & Conclusion

Research Bridge connects broad literature mapping with closer reading and reusable research notes. It gives researchers a practical way to investigate a pairing, inspect the evidence behind related papers, and share an explicit record of their search. My contribution provides the Library’s data, retrieval, source-text checking, and reporting functions within this workflow.

Publication counts and text similarity guide exploration. Literal source matching checks text presence; scientific quality, novelty, and feasibility require expert review.

## 4. View Project：中文版

Research Bridge 以文獻地圖、可回查的 PubMed 計數與附來源的 Library，協助研究者從問題走向證據。這是協作開發的研究探索原型，整合 Check、Map、Library、Brief 與 Method；目前由 FastAPI 後端搭配 HTML／CSS／JavaScript 網站提供介面。

**我的角色：Library Data & Retrieval Engine。** 我負責 Library 的 PubMed／OpenAlex 資料準備與 SQLite 儲存、TF-IDF／LSA 檢索、方法與線索探索、文獻比較、來源文字字面核對，以及 Library opportunity brief 與報告產生。

研究者需要在搜尋、比較、來源文字與筆記之間切換。空結果也可能來自覆蓋不足或查詢措辭；專案將研究分布、疾病–方法計數、原文摘錄及研究摘要串為可追溯的流程，供後續閱讀與專業審查。

- 保存地圖含 **80,025 筆 PubMed 記錄**，來自 **2026-10-30 擷取**，於 **2026-11-02 提升為預設快照**；發表年份為 2005–2026，涵蓋 50 種疾病、32 種方法與 1,600 格。
- 疾病–方法檢查比較整體與早期診斷文獻數，保留精確查詢與來源狀態。一般 Check 可沿用歷史結果；Refresh PubMed 要求新查詢，之後的即時數字可能改變。
- 獨立 Library 含 **60 篇文獻、56 篇官方摘要、135 筆機構名錄**，以 SQLite 與 TF-IDF／LSA 支援本機探索。這不是對地圖全部 80,025 筆記錄的全文檢索。
- 最多比較四篇文獻的文字相似度與共同詞；來源核對只檢查正規化後的輸入文字是否存在於選定摘要，未命中需人工檢視。三語支援限定 Library 操作介面，題名與摘要保留來源語言。
- Library opportunity brief 與 CSV／HTML／PDF 報告承接選定文獻及摘錄；另一套 Gap Brief 承接疾病–方法配對、計數與精確查詢，可下載 Markdown 或用瀏覽器列印。

專案把廣域文獻分布與細讀、可重用研究筆記相連，讓使用者查看來源並交接搜尋紀錄。文獻計數、文字相似度與字面匹配只支持探索；科學品質、新穎性及可行性仍需專家判斷。機構名錄及歷史 affiliation 不代表現任任職、合作意願或完成媒合。

## 5. 版本、圖片與證據界線

- Demo 按鈕：**Watch Demo · October 2026**。影片發布於 2026-10-24，展示較早的 79,940-record 快照；目前核對版本使用 2026-10-30 擷取的 80,025 筆記錄。沒有完整逐秒審核或重錄影片，也沒有修改影片說明。
- 封面使用 imagegen 製作的概念圖 `assets/projects/research-bridge-v2.png`；原圖 `assets/projects/research-bridge.png` 保留。來源核對名稱為 **Check Source Text**，不暗示一般科學真偽驗證。
- Alt：**Research Bridge concept illustration: explore papers, inspect method and cue associations, compare papers, and check literal text in selected source abstracts.**
- 534 組空格配對有保存的確認計數，425 組符合早期診斷結果 ≤2 筆的門檻。其中 533 組沿用無逐組時間戳的歷史快取，1 組於 2026-10-30 新查詢。這不是 425 個已驗證研究發現，也不是全部 1,600 格均重新查詢。
- 不把 79,940 → 80,025 寫成「只新增 85 篇」；舊完整 corpus／PMID 清單缺失，無法證明集合只有增量差異。
- 原 **2× lift 維持撤回**，科學成效為 `pending_remeasurement`。171 matched pairs 的回溯分析不支持恢復該主張，也不等同 as-of-2018 的前瞻驗證。
- 60 PMID 的標題與 MeSH IDs 抽樣重取核對，不等同全體語料或全部摘要均已人工確認。已提交的軟體測試紀錄也不是研究發現能力的成效驗證。
- Library 伺服器 PDF 依賴 Microsoft JhengHei 字型；缺字型時應使用 HTML 列印。Gap Brief 的瀏覽器列印流程與此分開。

固定版本來源：

- [Snapshot：80,025、534／425 及快取範圍](https://github.com/JasonHonghzj/ResearchBrdige_2026Hackachusettes/blob/e90c408f3e40f633d7b2cd23909ec977cb0488d6/data/snapshot.json#L3-L24)
- [README：現行 Web UI、功能及 Library 範圍](https://github.com/JasonHonghzj/ResearchBrdige_2026Hackachusettes/blob/e90c408f3e40f633d7b2cd23909ec977cb0488d6/README.md#L19-L82)
- [Verification：Streamlit 移除、語料稽核與回溯分析限制](https://github.com/JasonHonghzj/ResearchBrdige_2026Hackachusettes/blob/e90c408f3e40f633d7b2cd23909ec977cb0488d6/docs/VERIFICATION.md#L3-L57)
- [Literal source checks 與 Library opportunity brief](https://github.com/JasonHonghzj/ResearchBrdige_2026Hackachusettes/blob/e90c408f3e40f633d7b2cd23909ec977cb0488d6/researchbridge/discovery.py#L98-L137)
- [Library export API](https://github.com/JasonHonghzj/ResearchBrdige_2026Hackachusettes/blob/e90c408f3e40f633d7b2cd23909ec977cb0488d6/app.py#L293-L345)
- [Gap Brief Markdown／browser print](https://github.com/JasonHonghzj/ResearchBrdige_2026Hackachusettes/blob/e90c408f3e40f633d7b2cd23909ec977cb0488d6/static/gap.js#L219-L244)

## 6. Historical notes — not the current main version

2026-10-25 的文案依個人 branch `6371458697655ffa6c0aa4f283b3f519764fa2a8` 與使用者提供的 ZIP 整理。當時個人應用包含七個 Streamlit 頁籤、繁中／英文／西文介面、明暗主題、Session State、快取及 AppTest；ZIP 亦保留原介面。這些可描述歷史個人工作，不代表目前 main 仍保留 Streamlit。

當時八個固定開發查詢的 Top-1 7/8、Top-5 8/8、MRR@5 0.90 是開發檢查，未作為獨立效益驗證。舊 ZIP 的 79,940／533／424 數字保留於 [歷史 branch／ZIP 比較](researchbridge-branch-vs-project.md)，不得再作為現行快照成果。
