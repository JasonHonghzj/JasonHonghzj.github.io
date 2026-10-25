# ResearchBridge：My Skills 與 View Project 中英文文案

依據個人 branch `6371458697655ffa6c0aa4f283b3f519764fa2a8` 與提供的 ZIP 整理，日期為 2026-10-25。個人與整體範圍的證據見 [交叉分析](researchbridge-branch-vs-project.md)。

## 1. My Skills：以你的個人實作為準

以下可依目前 portfolio 的分類使用；不需要為同一項既有技能重複新增標籤，也不附未驗證的熟練度百分比。

| 英文分類 | 中文分類 | 可使用的技能標籤 |
| --- | --- | --- |
| Programming & Data Processing | 程式設計與資料處理 | Python · NumPy · XML / JSON Processing · Regular Expressions |
| Data Engineering & Databases | 資料工程與資料庫 | SQLite · SQL Data Modeling · Public API Integration · Data Provenance |
| Information Retrieval & NLP | 資訊檢索與自然語言處理 | scikit-learn · TF-IDF · LSA / TruncatedSVD · Cosine Similarity · Query Expansion |
| Application Development & Localization | 應用開發與多語介面 | Streamlit · Session State · Caching · HTML / CSS Styling · Multilingual UI |
| Reporting & Reproducibility | 報告輸出與可重現流程 | ReportLab · CSV / HTML / PDF Exports · Markdown Reports · Source Traceability |
| Testing & Evaluation | 測試與評估 | pytest · Streamlit AppTest · Retrieval Evaluation · Export Validation |

如果沿用現有六個 My Skills 類別，可把 Python／NumPy／文字處理放在 Programming & Data Analysis，SQLite／API／來源紀錄放在 Data Engineering & Databases，scikit-learn／檢索評估放在 Machine Learning & Evaluation，Streamlit／測試／報告放在 Software Development & Automation。另新增一組 Information Retrieval & NLP，可更清楚呈現這份專案新增的能力。

首頁精簡版可優先增加：

**Streamlit · SQLite · API Integration · TF-IDF & LSA · Cosine Similarity · Multilingual UI · Report Generation**

專案詳情的完整技術列可用：

**Python · Streamlit · SQLite · SQL · Requests · PubMed API · OpenAlex API · NumPy · scikit-learn · TF-IDF · LSA / TruncatedSVD · HTML/CSS · ReportLab · pytest · Streamlit AppTest**

FastAPI、Pydantic、HTTPX、原生 JavaScript 介面、MeSH 樹分類與大型 gap 管線屬 ZIP 的新增整合範圍；不以這個 branch 作為你的個人技能證據。Pandas 雖列於依賴表，已讀程式未直接使用；也不把它作為此專案新增的技能。

## 2. 專案卡片短文案

**標題 / Title**

ResearchBridge

**類別 / Category**

Research Discovery & Evidence Analysis

**卡片標籤 / Card tags**

Python · Information Retrieval · Streamlit

**中文**

開發三語研究文獻探索應用，結合本機文字檢索、原文依據、文獻比較與研究簡報匯出，並將探索核心保留至團隊整合版本。

**English**

Developed a trilingual literature explorer with local text retrieval, traceable source evidence, paper comparison and exportable research briefs. The exploration engine was retained in the team’s integrated application.

**Timeline / 時程：Fall 2026**，由本人確認；不以 branch commit 日期代替。

## 3. View Project：英文版

### Intro

A research exploration platform that connects literature search, source evidence and reusable discussion briefs. My contribution was its literature engine and trilingual Streamlit application.

### Project at a glance

Collect public literature → Structure and enrich records → Search and compare evidence → Export a research brief

### Project Overview & Description

ResearchBridge helps researchers explore literature and carry traceable evidence into research discussions. The integrated project combines a literature Library with a separate PubMed disease–method mapping workflow for early-detection research. I developed the Library’s exploration engine and original Streamlit application, working with 60 starter papers, 56 official abstracts and a 135-entry institution directory. This module was subsequently incorporated into the team’s FastAPI platform.

### Objective

Researchers often switch between search tools, paper comparisons, source checks and notes while exploring a question. My objective was to bring these tasks into one workflow, where users could inspect the original text behind a suggestion, retain selected papers and export a brief for further review.

### My Contribution

I built the PubMed and OpenAlex ingestion workflow, SQLite data model, TF-IDF/LSA retrieval engine, method-and-cue exploration, paper comparisons, literal source checks and report exports. I also developed the Streamlit interface in Traditional Chinese, English and Spanish, with themes, filters, cached resources and state preservation. The team’s integrated version retained this engine and the original interface.

### Approach

- **Build a traceable data foundation.** Enrich starter records with official PubMed metadata and abstracts. Verify exact PMIDs before linking OpenAlex affiliations, and retain snapshots, source URLs and provenance hashes in the local workflow.
- **Implement local text retrieval.** Use title-weighted TF-IDF with unigram/bigram features and optional LSA reranking. Map supported multilingual concepts to consistent queries while keeping custom research goals intact.
- **Make suggestions inspectable.** Require method-and-cue matches in source text, show supporting excerpts, and compare up to four papers using document cosine similarity, shared terms and source-backed profiles.
- **Preserve research context.** Keep selected papers and the active page when users change searches, language or theme. Separate search-score thresholds from bridge exploration and manually selected comparison papers.
- **Support reusable outputs.** Generate template-based briefs and CSV, HTML and PDF reports, with additional Markdown, JSON and citation downloads. Add automated checks for retrieval, source fidelity, interface state and exports.

### Results & Key Findings

- Delivered a seven-tab Streamlit application with Traditional Chinese, English and Spanish interface options, light/dark themes and paper comparison.
- Integrated 60 papers, including 56 official abstracts, with a 135-entry institution directory and source-linked affiliation records.
- On eight fixed development queries, both TF-IDF and hybrid retrieval placed the expected paper first in seven cases and within the top five in all eight, with MRR@5 of 0.90. These were development checks, not an independent effectiveness study.
- The core engine was preserved in the integrated project; changes to its modules were limited to data paths and one product-name reference. The new FastAPI/JavaScript platform and large MeSH mapping workflow are part of the broader team implementation.

### Impact & Conclusion

My contribution connects data ingestion, information retrieval, multilingual interaction and reporting in one reproducible literature workflow. Users can inspect the source behind a result and take selected evidence into a research discussion. Text similarity supports exploration; scientific quality and the meaning of literal source matches still require human interpretation.

## 4. View Project：中文版

### 專案簡介

將文獻搜尋、原文依據與研究討論摘要串成同一流程的研究探索平台。我負責其中的文獻探索引擎與三語 Streamlit 應用。

### 專案流程

取得公開文獻 → 整理與補充資料 → 搜尋及比較證據 → 匯出研究摘要

### 專案概述

ResearchBridge 協助研究者探索文獻，並把可追溯的資料帶進研究討論。完整專案結合文獻 Library，以及另一套針對早期診斷研究的 PubMed 疾病／方法地圖。我開發 Library 的探索引擎與原始 Streamlit 應用，整合 60 筆起始文獻、56 篇官方摘要與 135 筆機構名錄；此模組後續被保留並接入團隊的 FastAPI 平台。

### 問題與目標

研究者探索題目時，往往需要在搜尋、論文比較、來源核對與筆記之間反覆切換。我的目標是將這些工作整合，讓使用者能查看推薦背後的原文、保留選定文獻，再把結果整理成可供後續閱讀與討論的摘要。

### 我的貢獻

我建立 PubMed／OpenAlex 資料擷取流程、SQLite 資料模型、TF-IDF／LSA 檢索、方法與線索探索、文獻比較、字面來源核對及報告匯出。我也開發支援繁中、英文與西班牙文的 Streamlit 介面，加入明暗主題、篩選、資源快取與狀態保留。團隊整合版本保留了這套探索核心與原始介面。

### 解決方法

- **建立可追溯的資料基礎。** 以 PubMed 官方資料補充起始書目及摘要，核對精確 PMID 後連結 OpenAlex 機構資料，並保留來源網址、快照及雜湊紀錄。
- **實作本機文字檢索。** 使用題名加權的 TF-IDF、單字與雙詞組特徵，提供可選的 LSA 混合排序；內建多語概念共用檢索式，自訂研究目標保留原文。
- **讓推薦根據可以核對。** 方法與研究線索需實際匹配來源文字；結果顯示原文，最多四篇文獻可比較文件相似度、共同詞及領域／方法差異。
- **保留研究脈絡。** 切換搜尋、語言或明暗外觀時保留比較清單與目前頁面；搜尋分數門檻不會任意移除手動選取的文獻，也不限制獨立的 Bridges 探索。
- **提供可再利用的輸出。** 以範本產生研究摘要，支援 CSV、HTML、PDF 及額外的 Markdown、JSON、引文下載，並為檢索、來源一致性、狀態與匯出編寫測試。

### 成果與發現

- 完成七頁籤 Streamlit 應用，提供繁中、英文與西文介面、明暗主題及文獻比較。
- 整合 60 篇文獻，其中 56 篇具官方摘要，並保留 135 筆機構名錄與可回查來源的 affiliation 資料。
- 在八個固定開發查詢中，TF-IDF 與混合模式都達到預期文獻 Top-1 7/8、Top-5 8/8、MRR@5 0.90；這是開發檢查，未作為獨立效益驗證。
- 核心模組被保留至整合版，差異僅為資料路徑與一處產品名稱。新的 FastAPI／JavaScript 主站與大型 MeSH 地圖則屬團隊完整版本的新增內容。

### 價值與結論

我的部分將資料擷取、資訊檢索、多語互動與報告輸出連成可重現的研究文獻流程。使用者可以回查結果依據，並將選定資料帶入後續討論。文字相似度用來支持探索；科學品質、主張真偽與研究新穎性，仍需人工閱讀及專業判斷。

## 5. 整份 ZIP 的獨立摘要：方便與個人版交叉比對

以下段落描述完整專案，適合放在 Project Overview；不應整段改成「全部由我完成」。

### 中文：完整專案

ResearchBridge 是文獻與研究證據探索原型，結合可追溯的文獻 Library，以及針對早期診斷研究的疾病／方法地圖。Library 提供本機 TF-IDF／LSA 搜尋、原文摘錄、文獻比較、來源核對與報告匯出；另一套流程使用 PubMed 與 MeSH 整理研究分布，並比較某個疾病／方法組合的整體文獻量與早期診斷文獻量。

完整版本以 FastAPI 與原生 JavaScript 網頁整合 Check、Map、Library、Brief、Method。保存地圖記載 79,940 篇文獻、50 種疾病與 32 種方法；使用者可查看已存結果、提出新的 PubMed 檢查，並下載附有精確查詢的研究摘要。低文獻量候選用來引導後續閱讀，不代表已證明研究空缺或可行性。

**個人與團隊的關係：**我負責 Library 的探索引擎與原始三語 Streamlit 應用；團隊完整版本將此模組接入新的網站與大型文獻地圖流程。

### English: Complete Project

ResearchBridge is a literature and evidence exploration prototype combining a traceable paper Library with disease–method mapping for early-detection research. The Library supports local TF-IDF/LSA search, source excerpts, paper comparison, literal source checks and report exports. A separate PubMed/MeSH workflow maps research coverage and compares overall publication counts for a pairing with counts specific to early detection.

The integrated version uses FastAPI and a vanilla JavaScript interface across Check, Map, Library, Brief and Method. Its saved map reports 79,940 papers across 50 diseases and 32 methods. Users can inspect saved results, request new PubMed checks and download briefs with reproducible search queries. Low publication counts guide further reading; they do not establish scientific novelty or feasibility.

**My role within the team:** I developed the Library’s exploration engine and original trilingual Streamlit application. The integrated project incorporated this module into the new web platform and larger literature-mapping workflow.
