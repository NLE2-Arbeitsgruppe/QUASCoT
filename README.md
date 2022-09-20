# QUASCoT

## Userguide
Um das Projekt austesten zu können gehen Sie bitte folgendermaßen vor:
1. Download des Repositories. </break>
2. Öffnen des Ordners via VSC. </break>
3. Live Server Extention unter der Anleitung von VSC herunterladen. </break>
4. "Go Live"-Button betätigen. </break>
5. Das QA- System steht zur Benutzung bereit. Stellen Sie eine Frage :)

## Zur Umsetzung des Systems wurden folgende Packages, Tools, etc. verwendet:
1. *[Haystack by deepset](https://haystack.deepset.ai/overview/intro)* zur Umsetzung der QA-System Implementierung (inklusive aller bereitgestellter [Tutorials](https://haystack.deepset.ai/tutorials/first-qa-system)  und [Guides](https://haystack.deepset.ai/guides/guides-overview) zur Implementierung eine QA-Systems), </break>
2. [*Elasticsearch*](https://www.elastic.co/de/) zur Speicherung der generierten Daten (Antworten, Embeddings, etc.), </break>
3. *VSC*, [_LiverServer-Extention_](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), um das visuelle Interface zu hosten. EVTL. MÖGLICHKEIT DER EIGENEN WEBSITE NUTZEN, VGL RZ, ABER BALD NACHSEHEN WEGEN UMSTELLUNG !!!!!</break>
4. [Google Colab](https://colab.research.google.com) bzw. [Schlaubox](https://schlaubox.de): koperatives Arbeiten am Projekt mit zusätzlicher GPU-Leistung und Speicherkapazität,</break>
5. [*Huggingface*](https://huggingface.co/datasets/covid_qa_deepset): covid_qa_deepset - Datensatz als Datenbasis des hier zugrundelegenden QA-Systems; außerdem Laden der Modelle zum Fine-Tuning.

## Paper
Das zum Projekt gehörende Paper ist unter [diesem Link](https://www.overleaf.com/read/rddvpngnbtnd) einsehbar. Darin nachzulesen sind genauere Erläuterungen zur Projektdurchführung, Evaluation und Schwachstellen des Systems, sowie eine Gegenüberstellung mit vergleichbaren Arbeiten.
