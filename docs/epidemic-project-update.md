# Epidemic Analytics Engine — content refresh

Date: October 21, 2026.

## Scope and source

The owner supplied a three-project analysis. This update uses only its Epidemic Engine section and the relevant limitations in the concluding evidence notes. Other projects and the About section are unchanged. The local source checkout named in the attachment was inspected read-only; no pipeline was rerun and no cloud service was contacted.

Local source project: `epidemic-engine-12-panda-yu-li-hong-dahlberg`.

| Evidence | Supported site content |
| --- | --- |
| `README.md`, Team Members and System Overview | Zhi-Jun Hong's Spark/ML contribution; team-owned routing and application layers; four synthetic event categories |
| `spark/etl.py:162–287` | Five core analytics: hourly event counts, daily severity, hospital/clinic count ratio, available-bed pressure, hourly volume anomalies |
| `ml/predict.py:78–167` | Regional feature joins, volume/trend/severity/capacity inputs, missing-value handling |
| `ml/predict.py:168–230` | Z-score and Isolation Forest anomaly detection |
| `ml/predict.py:232–369` | Rule-generated labels, Random Forest classification, evaluation-code implementation |
| `ml/predict.py:386–514` | MySQL output tables and persistence |
| `infra/spark-cronjob.yaml:7` | Configured Spark cadence: every 6 hours |
| `ml/ml-cronjob.yaml:7` | Configured ML cadence: every 12 hours |

## Accuracy and attribution

- The hospital/clinic ratio is hospital-admission event count divided by clinic-visit event count, not a patient-level conversion measure.
- The five indicators are personal core outputs, not a claim that the final team project has only five tables. Vaccination aggregation is a later team addition.
- Charts are explanatory architecture concepts, not measured outbreak, throughput, or accuracy charts.
- Synthetic labels and random splitting do not establish prospective prediction validity. The global target shift and region/time alignment still require refinement; an added lag feature is not used in the existing model matrix.
- Classification-report and confusion-matrix code exists; no defensible accuracy figure was supplied for display.
- The stress-test record's 62 loaded events per run is not used as a throughput benchmark. Generator-sent counts and the other projects' 30-event / million-row figures are not imported into this portfolio entry.
- The source was inspected, not independently executed for this refresh.

## Visuals and typography

Built-in ImageGen generated two project-bound assets:

- `assets/projects/epidemic-engine-cover-v2.png` — photorealistic pipeline-and-analytics workstation cover. [Exact prompt](epidemic-cover-generation.md).
- `assets/projects/epidemic-engine-workflow-v2.png` — text-free three-stage architecture artwork. [Exact prompt](epidemic-workflow-generation.md).

Stage labels, personal/team attribution, the five-indicator count, and configured schedules are deterministic HTML text for accuracy and responsive accessibility. Existing Inter italic intro styling is preserved.

The additional requested contact punctuation correction is `Let's Connect!` with the English ASCII exclamation mark.

## Verification

- Both generated images loaded at their expected natural dimensions.
- Five original detail panels retained; five indicator rows and three scope/cadence facts present.
- Desktop and narrow mobile dialog widths checked without horizontal overflow; dark-mode layout visually inspected.
- Return and Escape-close behavior passed; no browser console errors observed.
- Other six project dialogs are byte-for-byte unchanged after newline normalization.
- JavaScript syntax and Git whitespace checks passed.
