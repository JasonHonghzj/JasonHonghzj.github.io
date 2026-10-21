# About Me — project-based skills

Reviewed October 21, 2026. This update changes only the My Skills content in About Me. Skill labels describe demonstrated project experience; no proficiency percentages or new model-performance claims are added.

The five public repositories below were checked through actual Python/R files or notebook code cells. Epidemic Engine uses the source checkout already supplied and reviewed with the owner. Medical Case Analytics uses its existing project description, which explicitly documents regex/fuzzy-matching support and exploratory analysis; no public repository for it was provided.

## Displayed groups

| Group | Displayed skills |
| --- | --- |
| Programming & Data Analysis | Python; R; SQL; pandas & NumPy; EDA & Visualization; Regex & Fuzzy Matching |
| Data Engineering & Databases | PySpark & Spark SQL; Kafka Integration; Batch ETL; MySQL; SQL Data Modeling |
| Machine Learning & Evaluation | scikit-learn; Random Forest / XGBoost; Feature Engineering; Clustering & PCA; Anomaly Detection; Model Evaluation |
| Deep Learning & Computer Vision | PyTorch; Transformers; CNNs; Curriculum Learning; Data Augmentation; Mixed-Precision Training |
| Quantitative Finance & Forecasting | LSTM Forecasting; Mean–Variance Optimization; Black–Litterman; Risk–Return Analysis |
| Software Development & Automation | Heuristic Scheduling; Tkinter / CLI; pytest; Containerization; OpenShift CronJobs |

## Evidence by project

### Epidemic Engine

See [the project source map](epidemic-project-update.md). The inspected local files establish:

- `spark/etl.py`: `read_topic_as_df` uses KafkaConsumer and JSON, then creates Spark DataFrames; `prepare_events` handles heterogeneous schemas, timestamps, severity, and missing fields.
- `analytics_hourly_event_counts` and related functions use Spark SQL expressions, grouping, aggregation, and joins. `write_df` writes analytical results through PyMySQL.
- `infra/database-init.sql`: analytical table schemas, primary keys, and indexes support SQL Data Modeling.
- `ml/predict.py`: pandas/NumPy regional feature joins, missing values, Z-scores, StandardScaler, IsolationForest, RandomForestClassifier, train/test splitting, classification reports, and confusion matrices.
- `ml/Containerfile` and `ml/ml-cronjob.yaml`: Python ML container and configured OpenShift batch scheduling.

Anomaly Detection is grounded in this implementation. Team-owned Tekton, FastAPI, dashboards, and alerting services are not promoted into personal My Skills claims.

### Stroke Risk Prediction

Source: [ds701_midterm25_notebook.ipynb](https://github.com/JasonHonghzj/Health_Prediction_Midterm_Challenge/blob/main/ds701_midterm25_notebook.ipynb).

Executable code cells support Python/pandas/NumPy, Matplotlib/Seaborn EDA, feature-engineering functions, scikit-learn, RandomForestClassifier, XGBClassifier, KMeans, GaussianMixture, PCA, and holdout model evaluation. Notebook code was inspected without rerunning training. Task definitions and prescribed feature formulas are not claimed as original inventions.

### Portfolio Optimization

- [R/data.R](https://github.com/JasonHonghzj/Beyond-ETF-Portfolio-Optimization/blob/main/R/data.R): `validate_prices`, `align_prices`, and `price_returns` support R data preparation and financial time-series analysis.
- [R/models.R](https://github.com/JasonHonghzj/Beyond-ETF-Portfolio-Optimization/blob/main/R/models.R): `make_lagged_data`, chronological splitting, `randomForest::randomForest`, and `xgboost::xgb.train`.
- [scripts/train_lstm.py](https://github.com/JasonHonghzj/Beyond-ETF-Portfolio-Optimization/blob/main/scripts/train_lstm.py): PyTorch LSTM, training-window scaling, MSE/Adam training, and chronological evaluation.
- [R/portfolio.R](https://github.com/JasonHonghzj/Beyond-ETF-Portfolio-Optimization/blob/main/R/portfolio.R): `fit_frontier` / `quadprog::solve.QP`, `black_litterman`, and `performance_summary` support mean–variance allocation, Black–Litterman, and return/volatility/Sharpe/drawdown calculations.

These are skills represented in a team-origin project and maintained workflow, not an assertion of exclusive authorship of every file or prospective investment performance.

### Transformer Arithmetic Reasoning

Sources: [training notebook](https://github.com/JasonHonghzj/transformer-math-reasoning/blob/main/transformer_math_reasoning.ipynb) and [predict.py](https://github.com/JasonHonghzj/transformer-math-reasoning/blob/main/predict.py).

`MathTransformer`, `TransformerEncoderLayer`, `causal_mask`, padded next-token batches, `sample_phase`, and greedy generation support PyTorch Transformers, causal attention, curriculum learning, and sequence modeling. No pretrained-LLM fine-tuning, Hugging Face, or general mathematical-reasoning skill is inferred.

### Butterfly Species Classification

Source: [butterfly_classification.ipynb](https://github.com/JasonHonghzj/butterfly-species-classification/blob/main/butterfly_classification.ipynb).

`shallowCNN` implements Conv2d, BatchNorm2d, ReLU, and pooling. `OneHotImageDataset` and DataLoaders implement image preparation; RandomResizedCrop, RandomHorizontalFlip, and ColorJitter provide augmentation. CUDA autocast and GradScaler establish Mixed-Precision Training. Early stopping and saved checkpoint selection support Model Evaluation.

No transfer learning, pretrained backbone, multi-GPU training, or calibrated probability claim is added.

### Mahjong Tournament Scheduler

- [generator.py](https://github.com/JasonHonghzj/Majhong_matcher/blob/main/src/mahjong_match/generator.py): `_build_candidate`, `_candidate_group_score`, `_final_schedule_score`, and `generate_schedule` implement randomized heuristic scheduling.
- [cli.py](https://github.com/JasonHonghzj/Majhong_matcher/blob/main/src/mahjong_match/cli.py) and [gui.py](https://github.com/JasonHonghzj/Majhong_matcher/blob/main/src/mahjong_match/gui.py): argparse CLI and Tkinter desktop interface.
- [validator.py](https://github.com/JasonHonghzj/Majhong_matcher/blob/main/src/mahjong_match/validator.py) and [test_schedule.py](https://github.com/JasonHonghzj/Majhong_matcher/blob/main/tests/test_schedule.py): constraint validation and pytest cases for appearances, player uniqueness, input errors, reproducibility, and exports.

Heuristic Scheduling is displayed as software/algorithm experience, without implying an exact solver or guaranteed optimum. Repository tests were read, not rerun for this content update.

## Curation

Specific implemented methods replace generic “Machine Learning” / “Deep Learning” labels. Tableau remains documented in Experience but is omitted from this project-focused skills selection. Containerization replaces the narrower Docker label because the displayed project evidence is a Containerfile/OpenShift workload. Broad coursework labels are not used as substitutes for code-backed skills.

## Presentation verification

The existing two-column desktop and one-column mobile layout was retained. All six categories and 32 tags rendered; no skill tags overflowed at the tested narrow mobile viewport. Light and dark appearances were visually checked. No CSS, scripts, project case studies, or About Me introductory paragraphs were changed.
