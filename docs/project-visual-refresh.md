# Project visual refresh — October 21, 2026

The Epidemic card, technical tags, and workflow were subsequently refined using new source material. See [epidemic-project-update.md](epidemic-project-update.md) for that later update; its image prompts supersede the Epidemic cover entry below.

## Implementation
- Seven 3:2 photorealistic covers generated with built-in ImageGen; no CLI fallback.
- All deployed image paths are under `assets/projects/*-realistic.png`.
- Covers are illustrative data-science workspaces, not screenshots or measured charts. Image alt text explicitly identifies this.
- Detail dialogs use accessible HTML/CSS/SVG three-stage process diagrams, not reused cover images. They include source-backed summary results and relevant limitations. Diagram content comes from `project-content-sources.md` and existing résumé-based project descriptions; no research models were rerun.
- Removed course names and the visible Sources & evaluation section from project descriptions, as requested. Research provenance remains in docs and View Code links remain in dialogs.
- Introductory italic text uses Inter italic 400, with Arial/sans-serif fallback; larger line height for readability.

## Three core technologies per card
Core tags prioritize the methods or tools that define each implementation, rather than broad domain labels or every library used.

| Project | Skills |
| --- | --- |
| epidemic | Apache Kafka · Apache Spark · MySQL |
| medical | Regex · Fuzzy Matching · EDA |
| stroke | scikit-learn · MLP Classification · K-Means |
| portfolio | LSTM · Mean–Variance · Black–Litterman |
| transformer | PyTorch · Causal Attention · Curriculum Learning |
| butterfly | PyTorch · CNN · Data Augmentation |
| mahjong | Python · Heuristic Search · Tkinter |

## Verification
- Seven card images loaded successfully; exactly three technical tags on each card.
- All seven dialogs opened and returned correctly on desktop and a 390 px viewport override.
- Each dialog contains three process stages and the original five detail panels, with no horizontal content overflow at either tested size.
- Inter italic styling confirmed in computed styles for all seven intros. Dark-mode diagram appearance checked visually.
- Escape closes the dialog; no browser console errors observed. JavaScript syntax and Git whitespace checks passed.

## Final ImageGen prompts and output provenance

# Health project cover generation

Date: October 21, 2026.
Mode: built-in image_gen, new generation; no CLI or external image model.
All three outputs were inspected with view_image and accepted on the first attempt. These are AI-generated concept illustrations, not actual software screenshots or measured research findings. Charts, heatmaps, map markers and document text are illustrative only.

## epidemic

Workspace asset: `assets/projects/epidemic-realistic.png`

Original generated path: `C:/Users/acer/.codex/generated_images/01a1607c-df82-7ac3-a79a-3d649dc4f258/exec-f1b55bc4-6c8f-4d32-9531-cf45a0c97e77.png`

Exact final prompt:

```text
Use case: photorealistic-natural
Asset type: landscape 3:2 portfolio project cover
Primary request: a realistic editorial photo clearly about an epidemic analytics data pipeline, not a generic computer photo.
Scene/backdrop: a warm cream analyst desk in a quiet modern public-health research office.
Subject: close-up of a real thin-bezel monitor, its screen filling most of the composition, displaying a sophisticated conceptual epidemiological dashboard: a large geographic cluster map with teal and muted amber outbreak-density markers, compact incidence-over-time line charts, and a small stream-processing flow of connected event batches along the bottom. All marks are conceptual, with no actual region names, labels, numbers or claims.
Style/medium: photorealistic editorial technology photography, sharp physical monitor edges, subtle screen reflections, natural desk grain, believable perspective, not a flat infographic.
Composition/framing: wide 3:2 landscape, slight three-quarter camera angle, tightly framed dominant map and data visualizations; only a slim cream desk and keyboard edge visible; no excessive blank space.
Lighting/mood: soft natural daylight, professionally focused and restrained.
Color palette: subdued deep navy and teal displays, warm cream desk, tiny restrained amber accents.
Constraints: no readable text, no metrics, no logos, no watermark, no human, no biohazard imagery, no medical emergency, no cartoon, no clay, no cut-paper, no holograms. An AI concept illustration, not a purported real project screenshot.
```

## medical

Workspace asset: `assets/projects/medical-realistic.png`

Original generated path: `C:/Users/acer/.codex/generated_images/01a1607c-df82-7ac3-a79a-3d649dc4f258/exec-a2812b15-bb45-486a-ac59-409624540ee2.png`

Exact final prompt:

```text
Use case: photorealistic-natural
Asset type: landscape 3:2 portfolio project cover
Primary request: a realistic editorial photo clearly about medical-debt legal-case text analytics and structured information extraction.
Scene/backdrop: a warm cream research desk with several realistic anonymized legal filing and medical billing pages next to an open laptop.
Subject: paper court-filing pages with restrained paragraph structure and a few teal highlight bands, with absolutely no legible personal data, institution names or amounts. The laptop screen prominently shows a conceptual document-analysis workspace: highlighted text spans connected to a clean extracted-entity table and a compact bar-distribution chart. The visual subject is documents transformed into structured data.
Style/medium: photorealistic editorial data-science photography, crisp paper fibers, aluminum laptop, natural reflections and desk texture; not a cartoon or flat illustration.
Composition/framing: landscape 3:2, tight slightly elevated three-quarter crop, paper pages in foreground and laptop display prominent in the same focal plane, no excessive blank space.
Lighting/mood: calm professional daylight.
Color palette: warm cream paper and desk, subdued navy/teal screen, restrained amber highlighting.
Constraints: no readable text, no metrics, no logos, no watermark, no names, no faces, no surgical objects, no stethoscope, no gavel cliché, no clay or paper-cut art, no holograms. Concept only, not a real court document or actual project screenshot.
```

## stroke

Workspace asset: `assets/projects/stroke-realistic.png`

Original generated path: `C:/Users/acer/.codex/generated_images/01a1607c-df82-7ac3-a79a-3d649dc4f258/exec-86dafc7e-8628-4e8d-b627-caa23e8bd68d.png`

Exact final prompt:

```text
Use case: photorealistic-natural
Asset type: landscape 3:2 portfolio project cover
Primary request: a realistic editorial image clearly about symptom-based stroke-risk machine learning using tabular health data.
Scene/backdrop: a warm cream data-science research desk.
Subject: a large real monitor dominates the frame and displays a conceptual model-evaluation workspace: a large binary symptom-indicator heatmap made from fine teal and navy square cells, a clean ROC-curve panel, and a patient-cluster scatterplot with four muted color groups. These are abstract explanatory data shapes with no numbers, axis labels, performance values or actual patient records. A small neutral anatomical brain model sits discreetly at the edge of the desk solely to suggest topic context, not MRI input.
Style/medium: photorealistic editorial research photography, sharp monitor materials, believable screen reflections, fine desk grain; not stylized 3D or infographic.
Composition/framing: landscape 3:2, close slightly angled crop, heatmap and chart display fill most of image with slim desk visible; brain model subtle and secondary, no empty space.
Lighting/mood: soft natural daylight, precise and professional.
Color palette: subdued deep navy and teal screen, cream surroundings, restrained sage and amber plot accents.
Constraints: no readable text, no metrics, no logos, no watermark, no humans, no clinical diagnosis or advice, no MRI/CT scan, no medical emergency, no cartoon, no clay art, no cut-paper, no holograms. AI concept illustration, not a real experimental result screenshot.
```

---

# Photorealistic finance and arithmetic covers

Generated October 21, 2026 with the built-in ImageGen tool. These are conceptual editorial photographs, not screenshots or empirical results. Both selected on the first generation after visual review.

## Portfolio optimization

- Workspace asset: `assets/projects/portfolio-realistic.png`
- Original: `C:/Users/acer/.codex/generated_images/01a1607d-144d-7572-93cd-0889034a2639/exec-8a43d879-7312-4c0c-a218-233c8f550cb7.png`
- Review: six asset lines, six allocation bars, six-by-six heatmap and risk-return scatterplot are visible; no numerical performance claims. Warm desk and realistic monitor, without unrelated financial props.

### Exact prompt

```text
Use case: photorealistic-natural
Asset type: realistic landscape 3:2 portfolio project cover for a quantitative equity portfolio optimization research project.
Primary request: An authentic editorial close-up photograph of a quantitative research workstation, immediately conveying equity time-series research and six-stock portfolio allocation. The primary subject is one real widescreen monitor seen mostly straight-on at a slight three-quarter angle. Its screen fills most of the image and displays a clean navy financial-research dashboard with six distinct equity price lines, a large six-by-six covariance heatmap, six allocation weight bars, and a compact risk-return scatter plot. Screen content is a conceptual visualization of Taiwanese equity research, not an actual result screenshot.
Scene/backdrop: restrained warm cream desk in a quiet modern study, realistic slim keyboard, modest calculator and an open research notebook partially visible along the lower edge. No people.
Style/medium: premium photorealistic editorial technology photography, physically plausible monitor screen, glass reflections, brushed metal, paper texture, warm daylight. Not a rendered icon scene or illustration.
Composition/framing: landscape 3:2, tightly cropped so the monitor dashboard remains recognizable at 350 pixels wide, sharp screen graphics, shallow depth only in surrounding desk, no large empty margins.
Color palette: subdued deep navy and teal screen, small sage and muted amber accents, warm cream surroundings.
Constraints: finance charts must be coherent but unlabeled, no legible small text, no performance figures or percentages, no branded interface or logos, no watermarks. Six asset lines and six allocation bars. No money stacks, coins, gold bars, houses, abstract floating objects, sci-fi holograms, neon effects, clay, cartoon, paper-cut or miniature diorama style.
```

## Transformer arithmetic

- Workspace asset: `assets/projects/transformer-realistic.png`
- Original: `C:/Users/acer/.codex/generated_images/01a1607d-144d-7572-93cd-0889034a2639/exec-ad237f11-c2b4-4031-85e1-1d70830d2bcf.png`
- Review: exact arithmetic expression is correct; character tokens, causal attention mask and six model layers are visible. Screen graphics are conceptual, not recorded model attention.

### Exact prompt

```text
Use case: photorealistic-natural
Asset type: realistic landscape 3:2 portfolio project cover for an arithmetic Transformer deep-learning project.
Primary request: An authentic editorial close-up photograph of a machine-learning research workstation. One real monitor dominates the frame, displaying a sophisticated navy research notebook interface with a large clear arithmetic expression "(12+8)+5 = 25" near the top, a sequence of discrete character token tiles beneath it, a vivid but restrained square causal attention heatmap with its upper triangular region masked, and an adjacent small stack of six neural-network layer blocks connected vertically. A subtle terminal pane along the screen bottom suggests Python research without readable code.
Scene/backdrop: quiet warm cream desk, slim keyboard and notebook corner along the bottom edge, no people or unrelated props.
Style/medium: premium photorealistic editorial technology photograph, realistic monitor bezel and screen reflections, textured desk and paper, soft daylight. Not an illustration or digital floating hologram.
Composition/framing: landscape 3:2, tightly framed around screen, arithmetic and attention heatmap must be immediately legible in meaning at 350px wide. Screen sharp, surroundings softly out of focus.
Color palette: subdued navy and teal screen, sage/soft cyan heatmap highlights, warm cream surroundings; coordinated with a premium quantitative-finance research cover.
Text (verbatim): "(12+8)+5 = 25". Use one large clean monospaced line, exactly these symbols and numbers. All other content should be non-readable visual code or simple diagram shapes.
Constraints: show arithmetic learning and Transformer attention rather than generic AI; six model blocks; no performance claims, accuracy scores, brands, logos, watermarks, sci-fi brain, neon, floating glass UI, cartoon, clay, paper-cut or miniature diorama style.
```

---

# Butterfly and Mahjong cover-generation record

Date: October 21, 2026
Mode: built-in image_gen (not CLI)
Purpose: photorealistic conceptual portfolio cover images; not actual application screenshots or experimental evidence.

## Butterfly
Saved asset: assets/projects/butterfly-realistic.png
Source: C:/Users/acer/.codex/generated_images/01a1607d-4098-7dd0-8f59-f82f620ba063/exec-b5f976d6-4d97-43a0-95dd-de5af61575f1.png
Inspection: butterfly imagery and wing details are clear; the digital grid, convolutional-feature concept and unlabelled bars communicate image classification without invented accuracy claims.

Prompt:

Use case: photorealistic-natural.
Asset type: landscape 3:2 portfolio cover for a butterfly species image-classification project.
Primary request: premium realistic editorial photograph of a computer-vision research workstation, clearly about butterfly identification rather than generic technology.
Scene and composition: close three-quarter desk view. A large high-quality screen occupies most of the composition; on it a sharp photoreal macro photograph of a real orange-and-black butterfly with delicate wing scales is the dominant focal image. Beside that main image is a tidy small grid of photographs of distinctly different butterfly species, with subtle image-crop outlines, a small convolutional feature-map contact sheet and a few unlabelled horizontal probability bars. This is a conceptual interface, not a claimed screenshot of the actual software. Photographic butterfly anatomy and natural wing texture must be convincing.
Style: lifelike professional photography, crisp optical detail, matte monitor, gentle natural window light, warm cream desk surroundings with subdued navy and teal interface panels. Clear focal subject at 350-pixel thumbnail size, simple organized composition.
Constraints: all butterflies shown only as digital images on the screen; no pinned specimens, no other insects, no invented species labels, no accuracy numbers, no performance claims, no logos, no readable small text, no watermarks. No cartoon, clay, paper-cut or toy aesthetics. No decorative circuitry, robot heads or unrelated icons. Output one landscape image.

## Mahjong
Saved asset: assets/projects/mahjong-realistic.png
Source: C:/Users/acer/.codex/generated_images/01a1607d-4098-7dd0-8f59-f82f620ba063/exec-42b8dd2c-e2e1-49cd-b383-1d60f008ce06.png
Inspection: realistic ivory/green tiles and four-player rows are prominent; conceptual scheduling table includes no personal names, gambling props, performance metrics, or readable implementation claims.

Prompt:

Use case: photorealistic-natural.
Asset type: landscape 3:2 portfolio cover for a mahjong match-scheduling software project.
Primary request: premium realistic editorial photograph connecting mahjong to a fair four-player match scheduler, emphasizing software planning rather than gambling.
Scene and composition: close three-quarter view of real ivory mahjong tiles with authentic engraved circle and bamboo suits resting neatly on muted green felt in the foreground; a compact laptop immediately behind them displays an organized realistic match-scheduling table. The screen table has multiple horizontal match rows, each with exactly four colored participant markers in four player columns, and a restrained adjacent equal-appearance tally. The screen should clearly read as scheduling/data software without readable tiny text, names or numerical claims. This is a concept interface, not an actual app screenshot.
Style: lifelike professional product/editorial photography, realistic tile edges and engravings, tactile felt, matte laptop, warm cream tabletop, natural soft window light. Subdued navy and teal screen with restrained green, blue, amber, and coral participant markers. Strong foreground tile focal point and visible scheduling screen, legible visual idea at 350-pixel thumbnail size.
Constraints: no money, chips, betting, casino scene or people; no logos, no readable small text, no accuracy or performance metrics, no watermarks. No cartoon, clay or paper-cut style; do not turn mahjong tiles into dominoes or generic blank cubes. Output one landscape image.

