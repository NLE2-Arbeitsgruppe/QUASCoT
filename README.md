# QUASCoT

We present a Question Answering-System (further QA-Sytem) for Corona topics. Please note: The system developers are not medically trained professionals. Therefore, the system does not claim to provide a fully comprehensive source of information on Covid-19-related issues that is understandable to everyone. Rather, it is intended to be a quick reference guide for biomedically trained personnel. 


## Libraries, Tools, Packages

1. *[Haystack by deepset](https://haystack.deepset.ai/overview/intro)* for the implementation of the QA system QUASCoT (including all provided [tutorials](https://haystack.deepset.ai/tutorials/first-qa-system) and [guides](https://haystack.deepset.ai/guides/guides-overview) for implementing a QA-System); in detail:
  - [haystack.document_stores](): [ElasticsearchDocumentStore](https://haystack.deepset.ai/components/document-store)</break>
  - [haystack.nodes](): [PreProcessor](https://docs.haystack.deepset.ai/docs/preprocessor), [BM25Retriever](https://docs.haystack.deepset.ai/docs/retriever),[FARMReader](https://docs.haystack.deepset.ai/docs/reader),</break>
  - [haystack.pipelines](https://docs.haystack.deepset.ai/docs/nodes_overview): [ExtractiveQAPipeline]()</break>
  - [haystack.utils](https://docs.haystack.deepset.ai/reference/utils-api): [print_answers](https://docs.haystack.deepset.ai/reference/utils-api#print_answers)
2. [*Elasticsearch*](https://www.elastic.co/de/): data storage, </break>
3. *VSC*, [_LiverServer-Extention_](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), to host the visual interface </break>
4. [Google Colab](https://colab.research.google.com), [Schlaubox](https://schlaubox.de): cooperative work on the project with additional GPU power and memory capacity,</break>
5. [*Huggingface*](https://huggingface.co/datasets/covid_qa_deepset): </break>
   models for fine-tuning of the system. </break>
6. [pandas](https://pandas.pydata.org/docs/#) ????????????????????????????????????????????????????????
7. [json](https://docs.python.org/3/library/json.html)
8. [nltk](https://www.nltk.org/install.html)

## data
- [COVID-QA.json](data/COVID-QA.json): the base dataset for QUASCoT via [deepset](https://github.com/deepset-ai/COVID-QA.git)
- [dataset-note.md](data/dataset-note.md): additional notes about the data set


## Docs
This folder contains the following ressources: 

### [Setup](docs/Setup.md)
Here you can find detailed instructions on how to install and use *QUASCoT*.

### [Paper]()
The paper belonging to the project is available at [this link](https://www.overleaf.com/read/rddvpngnbtnd). It contains detailed explanations of the project implementation, a comparison with similar work, weaknesses of the system, and our evaluation results.

## [TEST_0410.ipynb](TEST_0410.ipynb)
A *Python* notebook as backend for the QA-System
