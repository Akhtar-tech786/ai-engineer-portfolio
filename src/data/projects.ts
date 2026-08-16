import type { Project } from "@/types";

// Replace GitHub / demo placeholders and [ADD ...] metrics with real values.
// No metrics, dataset sizes, or results have been fabricated — fill in the
// bracketed placeholders once you have real numbers to report.
export const projects: Project[] = [
  {
    id: "churn-prediction-api",
    title: "Customer Churn Prediction API",
    description:
      "End-to-end machine learning system that predicts customer churn and exposes predictions through a production-ready API.",
    technologies: ["Python", "Scikit-learn", "XGBoost", "FastAPI", "Docker"],
    githubUrl: "[ADD GITHUB URL]",
    liveDemoUrl: "[ADD LIVE DEMO URL]",
    hasCaseStudy: true,
    detail: {
      problem:
        "Subscription businesses lose revenue when at-risk customers churn without early warning, and support teams lack a systematic way to prioritize retention outreach.",
      solution:
        "A supervised classification pipeline that scores customer churn risk from behavioral and account features, served behind a versioned FastAPI endpoint for downstream CRM integration.",
      architecture: [
        "Raw customer & usage data ingestion",
        "Feature engineering & preprocessing pipeline",
        "Model training (XGBoost) with cross-validation",
        "Model registry / versioned artifact",
        "FastAPI inference service (Dockerized)",
        "CRM / downstream consumer",
      ],
      techStack: ["Python", "Scikit-learn", "XGBoost", "FastAPI", "Docker", "Pydantic"],
      dataset: "[ADD DATASET SIZE] — [describe source, e.g. public churn dataset or synthetic data]",
      methodology: [
        "Exploratory data analysis to identify churn drivers and class imbalance",
        "Feature engineering on tenure, usage frequency, and support interactions",
        "Baseline logistic regression vs. gradient-boosted tree comparison",
        "Threshold tuning against business cost of false negatives vs. false positives",
      ],
      evaluation:
        "Evaluated with ROC-AUC, precision/recall, and a cost-sensitive threshold analysis rather than raw accuracy, given class imbalance. [ADD ACCURACY]",
      results: "[ADD ACCURACY] · [ADD LATENCY] on the held-out test set.",
      challenges: [
        "Handling class imbalance without over-fitting to the minority (churn) class",
        "Keeping training/serving feature parity to avoid train-serve skew",
        "Designing an API contract that stays stable as the model is retrained",
      ],
      futureImprovements: [
        "Add SHAP-based explanations to each prediction response",
        "Introduce a feature store to guarantee train/serve consistency",
        "Add drift monitoring and automated retraining triggers",
      ],
    },
  },
  {
    id: "document-rag-assistant",
    title: "Document Intelligence RAG Assistant",
    description:
      "Retrieval-Augmented Generation system that allows users to ask questions over private documents using embeddings, vector search, retrieval and LLM generation.",
    technologies: ["Python", "RAG", "Embeddings", "Vector Database", "FastAPI", "LLM"],
    githubUrl: "[ADD GITHUB URL]",
    liveDemoUrl: "[ADD LIVE DEMO URL]",
    hasCaseStudy: true,
    detail: {
      problem:
        "Teams need to ask natural-language questions over large private document sets without manually searching through files, while keeping answers grounded in the source text.",
      solution:
        "A retrieval-augmented pipeline that chunks and embeds documents into a vector store, retrieves the most relevant passages per query, and generates grounded answers with citations back to source text.",
      architecture: [
        "Document ingestion & chunking",
        "Embedding generation",
        "Vector database indexing",
        "Query embedding & similarity search",
        "Context assembly + LLM generation",
        "Cited answer returned via FastAPI",
      ],
      techStack: ["Python", "FastAPI", "Vector Database", "Embeddings", "LLM"],
      dataset: "[ADD DATASET SIZE] — [describe document corpus used]",
      methodology: [
        "Chunking strategy tuned for retrieval recall vs. context window cost",
        "Embedding model selection and evaluation on retrieval relevance",
        "Prompt design constraining the LLM to cite only retrieved context",
        "Guardrails against answering outside the retrieved document scope",
      ],
      evaluation:
        "Assessed with retrieval precision/recall on a held-out query set and manual grading of answer groundedness. [ADD ACCURACY]",
      results: "[ADD ACCURACY] · [ADD LATENCY] end-to-end per query.",
      challenges: [
        "Balancing chunk size against retrieval precision and LLM context limits",
        "Preventing hallucinated answers when retrieval confidence is low",
        "Keeping the vector index in sync with an evolving document set",
      ],
      futureImprovements: [
        "Add hybrid (keyword + vector) retrieval for improved recall",
        "Introduce automatic re-ranking of retrieved passages",
        "Add an LLM-as-judge evaluation harness for regression testing",
      ],
    },
  },
  {
    id: "ai-data-analyst",
    title: "AI Data Analyst",
    description:
      "Natural-language analytics assistant that converts business questions into SQL, executes queries safely, analyzes results and generates human-readable insights.",
    technologies: ["Python", "SQL", "LLM", "FastAPI", "Pandas", "PostgreSQL"],
    githubUrl: "[ADD GITHUB URL]",
    liveDemoUrl: "[ADD LIVE DEMO URL]",
    hasCaseStudy: true,
    detail: {
      problem:
        "Non-technical stakeholders need answers to data questions quickly, but writing and validating SQL against a production schema is a bottleneck for analysts.",
      solution:
        "An LLM-powered assistant that translates natural-language questions into schema-aware SQL, executes it against a sandboxed read-only connection, and summarizes the result set in plain language.",
      architecture: [
        "User question (natural language)",
        "Schema-aware prompt construction",
        "LLM: NL → SQL generation",
        "Query validation & safe execution (read-only)",
        "Pandas post-processing & aggregation",
        "LLM: results → human-readable insight",
      ],
      techStack: ["Python", "FastAPI", "PostgreSQL", "Pandas", "LLM"],
      dataset: "[ADD DATASET SIZE] — [describe schema / sample database used]",
      methodology: [
        "Schema introspection to ground SQL generation in real table/column names",
        "Query validation layer to block writes and enforce row/time limits",
        "Result summarization prompt tuned for business-readable language",
      ],
      evaluation:
        "Evaluated on a benchmark of question → expected-SQL pairs for execution accuracy. [ADD ACCURACY]",
      results: "[ADD ACCURACY] · [ADD LATENCY] from question to answer.",
      challenges: [
        "Preventing unsafe or overly expensive generated SQL from executing",
        "Handling ambiguous natural-language questions against a fixed schema",
        "Keeping generated SQL aligned with schema changes over time",
      ],
      futureImprovements: [
        "Add a query-plan cost check before execution",
        "Support follow-up / conversational refinement of a query",
        "Add role-based row-level access control",
      ],
    },
  },
  {
    id: "ai-agent-system",
    title: "AI Agent System",
    description:
      "Tool-using AI agent capable of reasoning over tasks, calling external tools, maintaining context and producing structured outputs.",
    technologies: ["Python", "LLMs", "Agents", "APIs", "FastAPI"],
    githubUrl: "[ADD GITHUB URL]",
    liveDemoUrl: "[ADD LIVE DEMO URL]",
    hasCaseStudy: true,
    detail: {
      problem:
        "Multi-step tasks (lookups, calculations, calling external services) require an assistant that can plan, invoke the right tool, and combine results — not just answer from a single prompt.",
      solution:
        "A tool-using agent loop that plans a task, selects from a registry of typed tools, executes them, observes results, and iterates until it can produce a structured final output.",
      architecture: [
        "Task input",
        "Planning / reasoning step (LLM)",
        "Tool selection from typed tool registry",
        "Tool execution + observation",
        "Iterate until goal satisfied",
        "Structured output (schema-validated)",
      ],
      techStack: ["Python", "FastAPI", "LLMs", "Pydantic"],
      dataset: "N/A — task-driven system, evaluated on a task benchmark rather than a static dataset.",
      methodology: [
        "Defined a typed tool interface (name, schema, description) for consistent tool calling",
        "Bounded the reasoning loop with a max-step limit to avoid runaway execution",
        "Enforced schema-validated structured outputs at the end of each run",
      ],
      evaluation:
        "Evaluated on task completion rate across a fixed set of benchmark tasks requiring one or more tool calls. [ADD ACCURACY]",
      results: "[ADD ACCURACY] task completion rate · [ADD LATENCY] average run time.",
      challenges: [
        "Preventing infinite or looping tool-call chains",
        "Keeping tool outputs within the model's context budget",
        "Producing reliably structured (not free-text) final outputs",
      ],
      futureImprovements: [
        "Add per-tool timeout and retry policies",
        "Add persistent memory across sessions",
        "Add a trace/observability view of each agent run",
      ],
    },
  },
  {
    id: "end-to-end-ml-pipeline",
    title: "End-to-End ML Pipeline",
    description:
      "Production-oriented machine learning pipeline covering data ingestion, preprocessing, training, experiment tracking, evaluation and deployment.",
    technologies: ["Python", "MLflow", "Docker", "GitHub Actions", "AWS"],
    githubUrl: "[ADD GITHUB URL]",
    liveDemoUrl: "",
    hasCaseStudy: true,
    detail: {
      problem:
        "Ad-hoc notebooks make it hard to reproduce experiments, track what changed between model versions, or ship a trained model to production reliably.",
      solution:
        "A modular pipeline that separates ingestion, preprocessing, training and evaluation into reusable stages, tracks every run in MLflow, and ships the winning model via a CI/CD pipeline.",
      architecture: [
        "Data ingestion stage",
        "Preprocessing / feature pipeline",
        "Training stage (experiment-tracked in MLflow)",
        "Evaluation & model comparison",
        "CI/CD (GitHub Actions) build & test",
        "Containerized deployment (Docker → AWS)",
      ],
      techStack: ["Python", "MLflow", "Docker", "GitHub Actions", "AWS"],
      dataset: "[ADD DATASET SIZE] — [describe dataset used for the reference pipeline]",
      methodology: [
        "Each pipeline stage implemented as an independently runnable, testable module",
        "Every training run logged to MLflow with parameters, metrics, and artifacts",
        "CI pipeline runs unit tests and a smoke-test training run on every PR",
      ],
      evaluation:
        "Model candidates compared on held-out metrics logged automatically to MLflow for every run. [ADD ACCURACY]",
      results: "[ADD ACCURACY] on the champion model · fully reproducible via a single pipeline command.",
      challenges: [
        "Keeping pipeline stages decoupled while sharing a consistent data contract",
        "Making CI training runs fast enough to run on every pull request",
        "Managing environment parity between local, CI, and deployment targets",
      ],
      futureImprovements: [
        "Add automated model rollback on evaluation regression",
        "Add data validation (schema/quality checks) as a pipeline gate",
        "Add blue/green deployment for zero-downtime model updates",
      ],
    },
  },
];
