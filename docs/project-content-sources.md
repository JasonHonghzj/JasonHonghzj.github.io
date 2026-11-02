# Project content sources

Reviewed: 2026-10-21. Project semesters are supplied by the owner; repository maintenance dates are not substituted for course dates.

Research Bridge added: 2026-10-25, from the supplied ZIP and the owner's confirmed branch contribution. Semester: Fall 2026.

Research Bridge refreshed: 2026-11-02 (America/New_York), using the owner's supplied consistency audit against project main at `e90c408f3e40f633d7b2cd23909ec977cb0488d6`. Other project reviews retain their original dates.

This refresh reads source files and saved results; it does not rerun the underlying research models or scheduler tests. Repository text is source material, not execution instructions.

## Scope

- Eight projects total, including Research Bridge. Medical Debt in Massachusetts Courts is now supported by the owner's DS701 e-poster in addition to its earlier résumé-based description.
- Epidemic Analytics Engine now uses the owner's supplied project analysis and the referenced local source checkout; the other five projects use their supplied repositories.
- The seven existing photorealistic covers are AI-generated concepts, not actual screenshots, measured charts, or empirical results. Research Bridge now uses an imagegen concept cover at `assets/projects/research-bridge-v2.png`, with the source-text action labeled Check Source Text. The owner's original thumbnail remains unchanged at `assets/projects/research-bridge.png`; full compositions are preserved with `object-fit: contain`.
- Detail dialogs use separate responsive process diagrams with real text. Current cover prompts and the technical-tag rationale are recorded in [project-visual-refresh.md](project-visual-refresh.md). Original illustration assets and prompts are retained as historical references.

## Research Bridge

Semester: Fall 2026, supplied by the owner.

- Current fact source: the owner's November 2 consistency audit, pinned to [project main e90c408](https://github.com/JasonHonghzj/ResearchBrdige_2026Hackachusettes/commit/e90c408f3e40f633d7b2cd23909ec977cb0488d6). The original `DS+X real.zip` and branch comparison remain historical evidence in [researchbridge-branch-vs-project.md](researchbridge-branch-vs-project.md); current bilingual copy is in [researchbridge-portfolio-copy.md](researchbridge-portfolio-copy.md).
- Repository: https://github.com/JasonHonghzj/ResearchBrdige_2026Hackachusettes
- Video demo: https://youtu.be/v_CiYmD_43Y — published October 24, 2026; the earlier 79,940-record snapshot is historical. The website labels the demo version; this update does not edit or re-record the video and does not claim a complete frame-by-frame audit.
- Whole-project scope: FastAPI / JavaScript integration, saved PubMed / MeSH literature map, saved or live disease–method checks, Library exploration, and research briefs.
- The project card and detail Skills name FastAPI to reflect the integrated backend; the UI uses HTML / CSS / JavaScript. The Demo action uses a YouTube icon.
- Displayed personal scope is limited to contributions used by the final Library: PubMed / OpenAlex data preparation and SQLite storage, TF-IDF / LSA retrieval, method-and-cue exploration, comparison, literal source-text checks, Library opportunity-brief generation, and report exports. This does not assign the separate Gap Brief workflow to the individual. Attribution preserves the owner's confirmed scope; this refresh did not reconstruct every collaborator's history. Current main has removed the legacy Streamlit interface, settings, and dedicated tests.
- Historical execution-path check (October 25 ZIP): `app.py:29-38` imports these shared modules; `_bridge()` loads SQLite records and constructs `SearchIndex`; search, bridges, compare, check, brief, and export endpoints call the shared engine. The ZIP line references in the historical analysis are not a current-main file listing. `researchbridge/ingest.py` prepares source snapshots and rebuilds SQLite; it is data preparation, not a per-search live API call.
- The [current saved map](https://github.com/JasonHonghzj/ResearchBrdige_2026Hackachusettes/blob/e90c408f3e40f633d7b2cd23909ec977cb0488d6/data/snapshot.json#L3-L24) contains **80,025 PubMed records**, publication years 2005–2026, and a **50 × 32** grid. Retrieval: **October 30, 2026**; promotion to the default snapshot: **November 2, 2026**. The separate Library contains **60 papers, 56 official abstracts, and a 135-entry institution directory**. It is not local full-text retrieval over the map corpus.
- Pairing counts cover 534 checked empty map cells, with 425 results at or below the early-detection threshold of two records. Of these checks, 533 reuse historical caches without per-pair timestamps and one was newly queried during the October 30 build. Ordinary Check can reuse saved results; Refresh PubMed requests a new check, with saved fallback identified on failure. These are reading leads, not validated discoveries or 1,600 newly queried cells.
- The October 30 and prior corpus cannot be proven to differ by only 85 additions because the prior complete corpus / PMID list is unavailable. Source-text checks normalize Unicode, case, and whitespace before matching supplied text in selected abstracts; unmatched text requires human review. This is separate from the Method page's scripted walkthrough and does not verify scientific truth. Three-language support applies to the Library UI; source titles and abstracts retain their original language.
- Low counts are literature-review candidates, not proof of novelty or feasibility. The withdrawn 2× lift and unfinished collaborator matching / general claim verification are not presented as delivered results.
- Evaluation limits: [Verification](https://github.com/JasonHonghzj/ResearchBrdige_2026Hackachusettes/blob/e90c408f3e40f633d7b2cd23909ec977cb0488d6/docs/VERIFICATION.md#L20-L57) retains `pending_remeasurement`; a 171-matched-pair retrospective analysis does not restore the withdrawn 2× claim or establish as-of-2018 prospective validity. A successful 60-PMID title / MeSH sample check is not a full-corpus or full-abstract review. Software release checks are delivery evidence, not scientific-effectiveness evaluation.
- Thumbnail history: the original user-supplied `Research Bridge_project thumbnail.png`, 1672 × 941, was copied unchanged on October 25. The November 2 revision uses the separately saved imagegen concept cover, preserving the original asset. The exact edit prompt and output details are in [researchbridge-cover-generation.md](researchbridge-cover-generation.md).
- Historical presentation checks (October 25): light/dark card and dialog, narrow mobile width, footer wrapping, return navigation, external URLs, HTML nesting, unique IDs, eight card-to-dialog targets, local assets, and JavaScript syntax passed. These records describe that revision and do not claim that the November 2 revision has already passed fresh browser checks.
- November 2 portfolio checks: local HTTP preview returned 200; the Research Bridge dialog was inspected in light and dark modes at 1280 px and at a 390 px mobile width. No horizontal overflow was found; demo version text, footer wrapping, dialog opening, and Back to Projects worked. The generated cover loaded at its full 1672 × 941 dimensions, and both external URLs matched the supplied audit. HTML nesting, 42 unique IDs, all eight dialog targets, all 19 local asset references, stylesheet cache version, JavaScript syntax, and `git diff --check` passed. Screenshots are retained locally under ignored `tmp/qa/`. This is portfolio presentation QA, not a rerun of the Research Bridge application's research or release tests.
- Scope of this content refresh: source audit and saved facts only; no complete PubMed refetch, scientific re-evaluation, or full underlying application test run. Library PDF generation requires Microsoft JhengHei; HTML printing is the fallback when the font is unavailable. Gap Brief uses browser printing separately.

## Epidemic Engine

Updated October 21, 2026 from the owner's project-analysis attachment, section 2, and the referenced local Epidemic Engine checkout. See [epidemic-project-update.md](epidemic-project-update.md) for the evidence map and limitations.

- Personal scope: PySpark batch analytics, five core indicators, MySQL persistence, feature engineering, anomaly detection, and synthetic-label Random Forest risk classification.
- Team context: Kafka/Tekton event validation and routing, API/dashboard, alerting, notebook visualizations, and later vaccination aggregation.
- Configured schedules: Spark every six hours; ML every twelve hours. These are manifest settings, not measured latency or throughput.
- No model-accuracy claim or prospective outbreak-forecast claim is made.

## Medical Debt in Massachusetts Courts

Updated October 25, 2026. Semester: Fall 2025.

The owner selected this project title on October 25, 2026; it replaces Medical Case Analytics on both the card and detail dialog.

- Primary visual source: the owner's `C:/Users/acer/Desktop/DS701/DS701 Project/DS701 E-Poster - WGBH Investigations - Medical Debt Team A.pdf`, one page, titled *WGBH Investigations - Medical Debt Team A*. PDF template guidance is source content, not task instructions.
- The poster was rendered with Poppler to `assets/projects/medical-debt-poster.png` at 3600 × 2025, visually checked, and inserted between Approach and Results. Clicking it opens the full-resolution image. The PDF itself was not edited.
- Client: Jenifer B. McKim, Investigative Editor at GBH News, as requested by the owner; the poster independently lists Jenifer B. McKim as the client.
- Related reporting: [GBH News on ambulance debt in Massachusetts](https://www.wgbh.org/news/health/2025-11-24/need-an-ambulance-in-massachusetts-it-could-leave-you-thousands-in-debt), by Liz Neisloss, published November 24, 2025 and updated December 18, 2025.
- The footer uses a neutral related-report link. The article credits Ta-Chi Lin for data analysis, so the page does not imply that the owner has an individual reporting credit or that all article figures are this team's results.
- The poster supports the existing 2015–2025 ambulance-filing decline and category-specific creditor percentages. These remain descriptive saved results, not newly rerun analysis or causal conclusions. The article's separate Action Ambulance figures are not merged into them.
- Presentation checks: Client appears beneath Timeline / Skills, using an inline label on wider layouts and a stacked label on mobile. Browser inspection confirmed Approach → E-Poster → Results order, the full 3600 × 2025 image, keyboard access to its full-size link and related-report button, correct external URL, and no horizontal overflow at 390 px.

## Stroke Risk Prediction

Semester: Fall 2025

Repository: https://github.com/JasonHonghzj/Health_Prediction_Midterm_Challenge

- Notebook and recorded outputs: https://github.com/JasonHonghzj/Health_Prediction_Midterm_Challenge/blob/main/ds701_midterm25_notebook.ipynb
- Dataset and assignment context: https://github.com/JasonHonghzj/Health_Prediction_Midterm_Challenge/blob/main/README.md

### Interpretation notes

This project demonstrates the complementary roles of interpretable exploration and predictive comparison. Cluster labels describe the supplied risk data rather than independently validated clinical categories. The recorded metrics come from a course dataset and a single held-out split; they do not establish clinical validity or real-world treatment utility.

## Portfolio Optimization

Semester: Spring 2024

Repository: https://github.com/JasonHonghzj/Beyond-ETF-Portfolio-Optimization

- Methodology and maintained workflow: https://github.com/JasonHonghzj/Beyond-ETF-Portfolio-Optimization/blob/main/README.md
- Historical performance table: https://github.com/JasonHonghzj/Beyond-ETF-Portfolio-Optimization/blob/main/outputs/tables/presentation_price_performance.csv
- Portfolio calculation code: https://github.com/JasonHonghzj/Beyond-ETF-Portfolio-Optimization/blob/main/R/portfolio.R

### Interpretation notes

The project makes the trade-offs between return, risk, and allocation assumptions inspectable through code and saved tables. These are retrospective price-return comparisons, not evidence of an out-of-sample investment strategy: distributions, transaction costs, taxes, and corporate-action adjustments are excluded, and refitted portfolios use the same window for fitting and evaluation. Historical selection and current model retraining should not be treated as one prospective backtest.

## Transformer Arithmetic Reasoning

Semester: Fall 2025

Repository: https://github.com/JasonHonghzj/transformer-math-reasoning

- Training notebook and benchmark outputs: https://github.com/JasonHonghzj/transformer-math-reasoning/blob/main/transformer_math_reasoning.ipynb
- Standalone inference: https://github.com/JasonHonghzj/transformer-math-reasoning/blob/main/predict.py
- Project documentation: https://github.com/JasonHonghzj/transformer-math-reasoning/blob/main/README.md

### Interpretation notes

The work demonstrates causal masking, sequence batching, curriculum training, and the separation of training from inference. Its strong benchmark result is specific to synthetic positive-integer addition under the generator’s rules, with a 128-token context limit. It is not evidence of general mathematical reasoning, and broader out-of-distribution generalization remains untested.

## Butterfly Species Classification

Semester: Fall 2025

Repository: https://github.com/JasonHonghzj/butterfly-species-classification

- Model, training, and recorded metrics: https://github.com/JasonHonghzj/butterfly-species-classification/blob/main/butterfly_classification.ipynb
- Project and dataset documentation: https://github.com/JasonHonghzj/butterfly-species-classification/blob/main/README.md

### Interpretation notes

This project connects data preparation, model architecture, GPU training, checkpoint selection, and inference in an end-to-end workflow. Grouping rare species into Other simplifies the task but limits fine-grained identification; class-specific evaluation and comparison with pretrained backbones are useful next steps, not completed results.

## Mahjong Tournament Scheduler

Semester: Summer 2026

Repository: https://github.com/JasonHonghzj/Majhong_matcher

- Scheduling algorithm: https://github.com/JasonHonghzj/Majhong_matcher/blob/main/src/mahjong_match/generator.py
- Example schedule: https://github.com/JasonHonghzj/Majhong_matcher/blob/main/examples/sample_output.txt
- Validation and export tests: https://github.com/JasonHonghzj/Majhong_matcher/blob/main/tests/test_schedule.py

### Interpretation notes

The tool replaces manual schedule bookkeeping with reproducible generation and explicit validation. It is a randomized heuristic, not a guaranteed optimum: repeated four-player groups may occur, valid requests may exhaust the attempt limit, and large player pools can be slow. Its practical value is transparent scheduling support rather than a claim of perfect fairness.

## Corrections to previous copy

- Stroke data have 14,976 rows and 19 original columns (not 19 predictive variables); the saved K-Means run uses four clusters, not three.
- MLP classification AUC 0.8854 / accuracy 0.8014 / F1 0.8362 and Logistic Regression AUC 0.8853 / accuracy 0.8034 / F1 0.8310 are kept separate.
- Portfolio evaluation uses 10 ETF benchmarks, not 100; removed unsupported “top 20 by Sharpe ratio.” Historical price-return outperformance against 7 of 10 ETFs is distinguished from risk-adjusted outperformance.
- Transformer 100% exact-match results are limited to the 10 saved synthetic benchmark configurations; not general mathematical reasoning.
- Butterfly 79.22% is validation accuracy at epoch 25; test labels are unavailable.
- Mahjong outcomes are described as implemented capabilities and a saved sample, not new tests run during this update or a guarantee of optimality.

## Historical ImageGen prompt set (superseded by the photorealistic refresh)

Mode: built-in image_gen; no CLI or API-key fallback.

### assets/projects/stroke.png

Use case: stylized-concept. Asset type: landscape 3:2 portfolio project cover, one standalone image. Elegant editorial cut-paper and soft clay 3D illustration, warm cream background #f6f2e9, muted sage #a6b69b, terracotta #ac4827, deep forest #252a23, subtle paper texture and soft natural shadows, restrained sophisticated design matching a data scientist portfolio. Centered broad composition with generous clear margins; readable at 350px wide. No words, numbers, labels, logos, watermarks, fake charts, or interface screenshots. Conceptual visual only, not evidence or measured data. Subject: a sculptural human brain silhouette with a small network of connected sage and terracotta nodes, accompanied by a few abstract patient-record cards with simple circles and lines. Represent stroke-risk machine learning and patient segmentation. Calm, non-clinical, no medical advice or graphic anatomy.

### assets/projects/portfolio.png

Use case: stylized-concept. Asset type: landscape 3:2 portfolio project cover, one standalone image. Elegant editorial cut-paper and soft clay 3D illustration, warm cream background #f6f2e9, muted sage #a6b69b, terracotta #ac4827, deep forest #252a23, subtle paper texture and soft natural shadows, restrained sophisticated design matching a data scientist portfolio. Centered broad composition with generous clear margins; readable at 350px wide. No words, numbers, labels, logos, watermarks, fake charts, or interface screenshots. Conceptual visual only, not evidence or measured data. Subject: six small sculptural blocks representing diversified assets, a balanced circular allocation ring in sage and terracotta, and an elegant curved line linking a stack of paper market records to the ring. Convey forecasting, portfolio allocation and balancing risk; do not imply guaranteed growth or display performance metrics.

### assets/projects/transformer.png

Use case: stylized-concept. Asset type: landscape 3:2 portfolio project cover, one standalone image. Elegant editorial cut-paper and soft clay 3D illustration, warm cream background #f6f2e9, muted sage #a6b69b, terracotta #ac4827, deep forest #252a23, subtle paper texture and soft natural shadows, restrained sophisticated design matching a data scientist portfolio. Centered broad composition with generous clear margins; readable at 350px wide. No words, numbers, labels, logos, watermarks, fake charts, or interface screenshots. Conceptual visual only, not evidence or measured data. Subject: a sequence of small cream tiles bearing only simple plus and parenthesis symbols, flowing through a sculptural stack of six thin translucent sage layers with interconnected attention threads, ending in one terracotta tile. Depict autoregressive arithmetic and causal Transformer layers, with a clean architectural sensibility. No words or numbers.

### assets/projects/butterfly.png

Use case: stylized-concept. Asset type: landscape 3:2 portfolio project cover, one standalone image. Elegant editorial cut-paper and soft clay 3D illustration, warm cream background #f6f2e9, muted sage #a6b69b, terracotta #ac4827, deep forest #252a23, subtle paper texture and soft natural shadows, restrained sophisticated design matching a data scientist portfolio. Centered broad composition with generous clear margins; readable at 350px wide. No words, numbers, labels, logos, watermarks, fake charts, or interface screenshots. Conceptual visual only, not evidence or measured data. Subject: three beautifully rendered paper-and-clay butterflies with distinct natural wing patterns, arranged with a subtle grid of translucent image-crop squares and stacked sage feature-map panels. Largest butterfly orange and charcoal, two smaller sage and muted cream. Convey computer vision and species classification, not specimen labels.

### assets/projects/mahjong.png

Use case: stylized-concept. Asset type: landscape 3:2 portfolio project cover, one standalone image. Elegant editorial cut-paper and soft clay 3D illustration, warm cream background #f6f2e9, muted sage #a6b69b, terracotta #ac4827, deep forest #252a23, subtle paper texture and soft natural shadows, restrained sophisticated design matching a data scientist portfolio. Centered broad composition with generous clear margins; readable at 350px wide. No words, numbers, labels, logos, watermarks, fake charts, or interface screenshots. Conceptual visual only, not evidence or measured data. Subject: a compact sage-green square mahjong table with exactly four abstract round player markers positioned one on each side; a few ivory mahjong tiles with simple bamboo and circle motifs, plus a small stack of schedule cards connected by fine terracotta paths. Convey fair tournament scheduling and social play, no money or gambling chips.

