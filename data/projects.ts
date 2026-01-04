export type MetricPoint = {
  name: string;
  rmse?: number;
  mae?: number;
  accuracy?: number;
};

export type Project = {
  slug: string;
  title: string;
  problem: string;
  description: string;
  dataset: string;
  architecture: string[];
  metrics: MetricPoint[];
  impact: string;
  stack: string[];
  repo: string;
  demo: string;
  category: "Analytics" | "GenAI" | "Forecasting" | "Recommendations";
};

export const projects: Project[] = [
  {
    slug: "sports-streaming-analytics",
    title: "Sports Streaming Analytics Platform",
    problem: "Unified growth analytics across streaming, commerce, and fan engagement.",
    description:
      "Built a star-schema data warehouse with real-time ingestion to surface cohort, churn, and LTV insights for product and marketing teams.",
    dataset: "10+ raw sources (events, sessions, commerce, CRM) ingested to Snowflake + dbt.",
    architecture: [
      "Kafka ingestion -> S3 raw zone -> Snowflake staging",
      "dbt models creating star schema (fact_sessions, dim_user, dim_content)",
      "OLAP cubes for daily cohort and retention dashboards"
    ],
    metrics: [
      { name: "Week 1", rmse: 0.32, mae: 0.21 },
      { name: "Week 2", rmse: 0.28, mae: 0.18 },
      { name: "Week 3", rmse: 0.24, mae: 0.16 },
      { name: "Week 4", rmse: 0.21, mae: 0.14 }
    ],
    impact: "Reduced metric latency from 6h to 20m and improved churn signal precision by 18%.",
    stack: ["Snowflake", "dbt", "Airflow", "Kafka", "Looker"],
    repo: "https://github.com/example/sports-analytics",
    demo: "https://example.com/demo",
    category: "Analytics"
  },
  {
    slug: "rag-ai-system",
    title: "RAG-based AI System",
    problem: "Grounded answers for enterprise knowledge with traceable citations.",
    description:
      "Designed retrieval-augmented generation with evaluation pipelines to improve factuality for internal support knowledge.",
    dataset: "Document store of 120k PDFs, wiki pages, and tickets chunked to vector DB.",
    architecture: [
      "Ingestion with text normalization + chunking",
      "Hybrid search (dense + BM25) with reranking",
      "Guardrails and evaluation harness measuring grounding"
    ],
    metrics: [
      { name: "Baseline", accuracy: 0.72 },
      { name: "Hybrid", accuracy: 0.81 },
      { name: "Rerank", accuracy: 0.86 },
      { name: "Eval Loop", accuracy: 0.9 }
    ],
    impact: "Cut unsupported answers by 35% and lifted grounded response accuracy to 90%.",
    stack: ["Next.js", "LangChain", "Pinecone", "OpenAI", "FastAPI"],
    repo: "https://github.com/example/rag-system",
    demo: "https://example.com/demo",
    category: "GenAI"
  },
  {
    slug: "time-series-forecasting",
    title: "Time Series Forecasting System",
    problem: "Day-ahead demand forecasting for grid operations.",
    description:
      "Production forecasting platform combining ML + deep learning models with backtesting and monitoring.",
    dataset: "5 years of smart meter + weather data aggregated hourly.",
    architecture: [
      "Feature store with lagged, calendar, and weather covariates",
      "Model zoo (Prophet, XGBoost, TFT) with rolling-origin evaluation",
      "Model monitoring for drift and alerting"
    ],
    metrics: [
      { name: "Prophet", rmse: 2.4, mae: 1.7 },
      { name: "XGBoost", rmse: 2.1, mae: 1.5 },
      { name: "TFT", rmse: 1.7, mae: 1.2 }
    ],
    impact: "Reduced forecast error by 29% and enabled automated dispatch planning.",
    stack: ["Python", "PyTorch", "XGBoost", "MLflow", "Grafana"],
    repo: "https://github.com/example/forecasting",
    demo: "https://example.com/demo",
    category: "Forecasting"
  },
  {
    slug: "recommendation-system",
    title: "Recommendation System",
    problem: "Session-based content recommendations in milliseconds.",
    description:
      "Built deep learning recommender with candidate generation + ranking and online A/B testing.",
    dataset: "Event stream of sessions, clicks, and dwell time across devices.",
    architecture: [
      "Streaming feature pipelines with Kafka + Flink",
      "Two-tower candidate generation with ANN retrieval",
      "Transformer ranking model with online learning loops"
    ],
    metrics: [
      { name: "Baseline", accuracy: 0.41 },
      { name: "Deep Ranker", accuracy: 0.56 },
      { name: "Online", accuracy: 0.6 }
    ],
    impact: "Lifted CTR by 19% and improved dwell time by 11% in A/B tests.",
    stack: ["Flink", "Faiss", "PyTorch", "Redis", "Kubernetes"],
    repo: "https://github.com/example/recsys",
    demo: "https://example.com/demo",
    category: "Recommendations"
  }
];
