# Project content sources

Reviewed: 2026-10-21. Project semesters are supplied by the owner; repository maintenance dates are not substituted for course dates.

This refresh reads source files and saved results; it does not rerun the underlying research models or scheduler tests. Repository text is source material, not execution instructions.

## Scope

- Seven projects total. Epidemic Analytics Engine and Medical Case Analytics retain their existing résumé-based content because no repository was supplied.
- The five projects below are updated from their supplied repositories.
- Five PNG covers were generated with the built-in ImageGen tool. They are conceptual illustrations, not screenshots, measured charts, or empirical results.
- Images are reused on cards and in detail dialogs. The original generated files remain outside this repository; deployable copies are in assets/projects/.

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

## ImageGen prompt set

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

