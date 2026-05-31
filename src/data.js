// ============================================================
//  EDIT THIS FILE TO UPDATE YOUR PORTFOLIO.
//  Everything on the site is rendered from the data below.
//  No need to touch any layout / component code.
// ============================================================

export const profile = {
  name: "Harsh Pandey",
  accentName: "Pandey", // the part of the name shown in accent colour
  role: "Backend & Distributed Systems Engineer",
  available: true,
  availableText: "Available for select contracts",
  email: "hp.pandey@yahoo.com",
  phone: "+91 84299 22350",
  phoneHref: "tel:+918429922350",
  linkedin: "https://www.linkedin.com/in/harsh-pandey-62ba7b167",
  github: "", // add your GitHub URL here to show a GitHub link
  location: "Bangalore, India",
  heroLine: ["I build backend systems that", "don't break", "under load."],
  lead:
    "Backend & distributed-systems engineer with ~5 years shipping production services in Java, Golang & Python. I design the microservices, event pipelines, and APIs behind high-throughput platforms — and I keep them fast, observable, and fault-tolerant when they're handling millions of events.",
  trustedBy: ["Walmart", "Uber", "Explorex (YC)", "Flash.co", "Shopify integrations"],
};

export const metrics = [
  { n: "~5 yrs", l: "Backend engineering" },
  { n: "40%", l: "Throughput improvements" },
  { n: "30%", l: "Lower API latency" },
  { n: "Millions", l: "Events processed / day" },
];

export const services = [
  { ico: "{ }", title: "Backend & API Development", desc: "Production-grade REST and gRPC services designed around your domain — clean, tested, and built to scale.", tags: ["Go", "Java / Spring", "gRPC", "REST"] },
  { ico: "⇄", title: "Event-Driven & Data Pipelines", desc: "High-volume, fault-tolerant pipelines with Kafka / Event Hubs and cross-cloud data flows that stay consistent.", tags: ["Kafka", "Event Hubs", "BigQuery", "SQS / SNS"] },
  { ico: "⚡", title: "Reliability & Performance", desc: "Profiling, query tuning, caching, monitoring and on-call RCA to make slow or fragile systems fast and stable.", tags: ["Redis", "Observability", "RCA", "SLAs"] },
  { ico: "☁", title: "Cloud & Deployment", desc: "Containerized, cloud-native deployments across AWS, GCP and Azure with CI/CD and infrastructure as code.", tags: ["AWS", "GCP", "Azure", "Docker / K8s"] },
  { ico: "⊞", title: "Microservices Architecture", desc: "Breaking monoliths into resilient services, or designing greenfield systems with DDD and clean boundaries.", tags: ["DDD", "SOLID", "Design Patterns"] },
  { ico: "⟡", title: "3rd-Party & Platform Integrations", desc: "Shopify, e-commerce and storage integrations — bulk imports, search, and storage layers that just work.", tags: ["Shopify", "Elasticsearch", "S3"] },
];

export const toolkit = [
  { tool: "Kafka / SQS", use: "Event-driven architecture & high-throughput async processing", used: "Powered Walmart's order-lifecycle pipelines (shipment, out-for-delivery) handling millions of events, and built event-driven architectures at Mathologic and the bulk-import system at Mobylx with SQS/SNS.", more: "Decouple services so one slow component never blocks the rest, absorb traffic spikes without dropping work, enable real-time notifications, and add new consumers without touching existing code." },
  { tool: "gRPC", use: "Fast HTTP/2 service-to-service communication instead of REST", used: "Built gRPC APIs across Uber, Explorex, Flash.co, Mathologic and Inspiron — cutting inter-service communication overhead by ~30% at Mathologic.", more: "Lower-latency, strongly-typed communication over HTTP/2, smaller payloads than JSON, streaming support, and contracts that catch integration bugs at compile time rather than in production." },
  { tool: "Redis", use: "Caching, low-latency reads & background coordination", used: "Caching at Explorex contributed to a 25% database performance gain, and Redis backed coordination and fast reads at Mathologic and Inspiron.", more: "Take pressure off your database with caching, serve hot data in microseconds, handle rate limiting and session storage, and act as a lightweight queue or lock across instances." },
  { tool: "Elasticsearch", use: "Fast full-text search & retrieval over large datasets", used: "Integrated at Flash.co for fast search and retrieval of user purchase data unified across multiple e-commerce platforms.", more: "Add Google-like search to your product, filter and aggregate over millions of records instantly, power autocomplete and faceted browsing, and surface insights from logs." },
  { tool: "OAuth2 / JWT", use: "Secure authentication & role-based access (RBAC)", used: "Implemented role-based authentication (RBAC) with OAuth2 and JWT at Mathologic to secure APIs.", more: "Stateless, scalable auth across distributed services, fine-grained permissions per role, secure third-party login, and token-based access for mobile apps. Firebase Auth is an option for fast OTP / phone-based login." },
  { tool: "AWS / GCP / Azure", use: "Cloud-native deployment & cross-cloud data pipelines", used: "Cross-cloud pipelines (Azure → GCP BigQuery) at Walmart, AWS-native services at Uber and Explorex (ECS, EKS, Lambda, S3, RDS, SQS), and S3 storage layers at Mobylx.", more: "Deploy reliably with autoscaling and managed databases, run serverless workloads that cost nothing when idle, move and reconcile data between clouds, and set up monitoring so problems surface before customers notice." },
  { tool: "Docker / Kubernetes", use: "Containerized, portable, self-healing deployments", used: "Containerized services at Mathologic and across deployments at Uber and Walmart, with CI/CD pipelines for rapid, safe delivery.", more: "Identical environments from laptop to production, zero-downtime rolling deploys, automatic restart of failed services, and horizontal scaling on demand." },
  { tool: "Go & Java / Spring", use: "High-performance backend services & APIs", used: "The core of nearly every project — Go (Gin, GORM) and Java (Spring Boot, Hibernate) services that improved throughput up to 40% and cut response times 30%.", more: "Go for lightweight, concurrent, low-latency services; Java/Spring for robust, enterprise-grade APIs with a mature ecosystem. I match the language to the job rather than forcing one stack." },
  { tool: "PostgreSQL / MongoDB", use: "Relational & document data, tuned for performance", used: "SQL validation frameworks reconciling datasets at Walmart, query tuning and indexing at Explorex (25% DB improvement), and MongoDB-backed services at Inspiron.", more: "Choose the right store for your data shape — relational integrity with PostgreSQL, flexible schemas with MongoDB — plus indexing and query optimization to keep things fast as you grow." },
];

export const capabilities = [
  { title: "API Design, Rate Limiting & GraphQL", desc: "Well-structured, versioned APIs with sensible pagination, idempotency, and rate limiting to protect your services from abuse and overload. GraphQL where clients need flexible, single-request data fetching.", tags: ["REST", "GraphQL", "Rate limiting", "API versioning"] },
  { title: "WebSockets & Real-Time Features", desc: "Live, bidirectional features — chat, notifications, dashboards, presence, collaborative updates — built on WebSockets with scalable fan-out, so users see changes the moment they happen.", tags: ["WebSockets", "Pub/Sub", "Live dashboards", "Push notifications"] },
  { title: "Payment Integration", desc: "Secure checkout and billing flows with Stripe or Razorpay — one-time payments, subscriptions, and webhooks handled idempotently so payment state stays correct even when networks fail.", tags: ["Stripe", "Razorpay", "Webhooks", "Subscriptions"] },
  { title: "CI/CD, Testing & Observability", desc: "Automated pipelines that test and ship on every commit, solid unit / integration test coverage, and observability — structured logs, metrics, traces and alerts. (I've used CI/CD, JUnit, Mockito and goMock in production.)", tags: ["CI/CD", "Unit & integration tests", "Metrics & tracing", "Alerting"] },
  { title: "System Design & Scalability", desc: "Designing systems, not just coding them — horizontal scaling, load balancing, caching layers, database sharding and the monolith-vs-microservices call. I can take a service from 10K to millions of requests and reason out the trade-offs.", tags: ["Load balancing", "Sharding", "Caching strategy", "HA design"] },
  { title: "Security & Compliance", desc: "Building with security as a default: OWASP top-10 awareness, SQL-injection-safe queries, encryption at rest and in transit, secrets management, and least-privilege IAM. Familiar with PCI-DSS and PII handling.", tags: ["OWASP", "Encryption", "Secrets mgmt", "IAM least-privilege"] },
  { title: "Database Engineering", desc: "Beyond CRUD: schema design, indexing strategy, query optimization (EXPLAIN/ANALYZE), and knowing when to reach for SQL vs NoSQL via CAP-theorem trade-offs. I tune slow queries and design for data integrity under concurrency.", tags: ["ACID", "Indexing", "Query tuning", "SQL ↔ NoSQL"] },
  { title: "Resilient APIs & Fault Tolerance", desc: "APIs that fail gracefully: retries with exponential backoff, circuit breakers, idempotency keys, graceful degradation and fallbacks — so a flaky dependency never takes your whole system down. Paired with clear OpenAPI docs.", tags: ["Circuit breakers", "Idempotency", "Backoff/retry", "OpenAPI docs"] },
];

export const caseStudies = [
  { client: "Walmart", tag: "via Nagarro · 2025–present", problem: "Order-lifecycle events (shipment, out-for-delivery) needed reliable, real-time delivery to millions of customers across Azure and GCP — with zero tolerance for lost or duplicated notifications.", built: "Event-driven communication pipelines and cross-cloud data flows (Azure → BigQuery), plus SQL validation frameworks to reconcile datasets and deep-dive RCA tooling for failures.", resultBig: "Millions", result: "of customer communications processed fault-tolerantly under strict SLAs, with faster incident resolution.", stack: "Kafka / Event Hubs · Cosmos DB · App Insights · GCP BigQuery · SQL · cloud storage" },
  { client: "Uber", tag: "via Indium · 2025", problem: "Core billing, profile and search domains needed scalable, well-bounded services that could be deployed and iterated on quickly without sacrificing quality.", built: "Domain-driven microservices with REST and gRPC APIs, Kafka-backed event workflows, AWS-native deployments, and automated CI/CD plus monitoring & alerting.", resultBig: "Rapid, safe delivery", result: "with improved reliability and observability across production services.", stack: "Go · Java · gRPC · REST · Kafka · AWS (ECS, EKS, Lambda) · CI/CD" },
  { client: "Explorex — YC Startup", tag: "via Antino · Restaurant Management · 2023–25", problem: "A restaurant-management platform was hitting latency and scaling limits as services grew and traffic increased.", built: "Optimized Go (Gin, GORM) and Java (Spring Boot, Hibernate) backends, a microservices architecture, and DB performance work via indexing, query tuning and Redis caching — with AWS handling async and bulk operations.", resultBig: "30% ↓", result: "API response time and 25% better database performance with higher resilience.", stack: "Go · Java · Redis · gRPC · REST · AWS (S3, SQS, ECS, EC2, Lambda, RDS)" },
  { client: "Flash.co", tag: "via Antino · E-commerce Email Intelligence · 2023–25", problem: "The platform needed to track user purchases across multiple e-commerce sites and make that data fast to search — without consistent order identifiers between sources.", built: "A pseudo-order-ID generation system to unify purchase tracking, an Elasticsearch layer for fast retrieval, and scalable REST & gRPC APIs in Go and Java for clean frontend and third-party integration.", resultBig: "Unified search", result: "across fragmented purchase data, with fast retrieval and seamless third-party integration. (Brilliant Beginner Award.)", stack: "Go · Java · Elasticsearch · gRPC · REST" },
  { client: "Mobylx", tag: "via Antino · Shopify Backend Layer · 2023–25", problem: "Sellers needed to upload and bulk-import large product catalogs into Shopify reliably, without overwhelming the system.", built: "Shopify integration services in Go (Gin) and Java (Spring Boot), an AWS S3 storage layer for seller-uploaded catalogs, and an SQS/SNS event-driven architecture for efficient bulk product imports.", resultBig: "Reliable bulk imports", result: "handling large seller catalogs with decoupled, event-driven processing.", stack: "Go (Gin) · Java (Spring Boot) · AWS S3 · SQS · SNS" },
  { client: "Mathologic Technologies", tag: "Senior Software Developer · 2022–23", problem: "Backend services needed higher throughput, secure APIs, and scalable, fault-tolerant communication between services.", built: "High-performance Java and Go services, event-driven architectures with Kafka and AWS SQS, gRPC & REST APIs, and role-based authentication (RBAC) with OAuth2 and JWT.", resultBig: "40% ↑", result: "throughput, with 30% less inter-service communication overhead and secured APIs.", stack: "Go · Java · gRPC · Kafka · AWS · Redis · SQL · NoSQL · Docker · Kubernetes" },
  { client: "Inspiron Labs", tag: "SDE · 2021–22", problem: "System performance and background workload needed to improve as the service handled more concurrent processing.", built: "REST and gRPC microservices in Java and Go, plus background job processing using Go worker pools and Java ScheduledExecutor to offload heavy work.", resultBig: "35% ↑", result: "system performance and 40% reduction in system workload. (Spot Award.)", stack: "Java · Go · Redis · REST APIs · MongoDB" },
];

export const principles = [
  { n: "01", title: "Find the root cause, not the symptom", desc: "When a system fails I trace it end-to-end — logs, metrics, upstream services — until I understand why, then fix the cause. I've run on-call RCA across Cosmos DB, App Insights and upstream systems at Walmart scale." },
  { n: "02", title: "Measure before optimizing", desc: "No guessing. I profile, find the actual bottleneck, then fix it — which is how I cut API latency 30% and improved DB performance 25% without rewriting everything." },
  { n: "03", title: "Design for failure", desc: "Things break — networks, dependencies, traffic spikes. I build for it from the start with retries, idempotency, and fault tolerance, so the system degrades gracefully instead of falling over." },
  { n: "04", title: "Pick the right tool, not my favorite", desc: "Go or Java? SQL or NoSQL? Monolith or microservices? I choose based on the problem and the trade-offs, not habit or hype — and I can explain the reasoning." },
  { n: "05", title: "Ship, then iterate", desc: "I deliver in working increments with tests and CI/CD, so you see progress and can change direction early — rather than waiting months for a big-bang release." },
  { n: "06", title: "Hungry to learn the unfamiliar", desc: "If a project needs something I haven't touched, I learn it — read the docs, prototype, ship. New domains don't scare me; an unsolved problem is just one I haven't broken down yet." },
];

export const aiUse = [
  "Spec → production, faster. I go from a plain-English spec to schema, endpoints and validation quickly, then apply real production judgment (edge cases, security, performance) on top.",
  "AI-assisted debugging. Full-context prompts to isolate root causes faster — but I verify every fix against how the system actually behaves, not what the model claims.",
  "Tests & boilerplate, automated. Generating test cases and repetitive scaffolding so my time goes to architecture and the hard problems instead.",
  "I know when it's lying. AI output is \"almost right\" often enough that judgment is the real skill. I treat it as a fast junior pair — useful, but never trusted blindly.",
];

export const aiBuild = [
  "LLM-powered APIs. Endpoints that call models (OpenAI, Anthropic, others) safely — with timeouts, fallbacks, cost controls and rate limiting baked in.",
  "RAG & semantic search. Retrieval-augmented generation over your own data, using vector search and embeddings — answers grounded in your content, not hallucinated.",
  "Data pipelines for AI. Feature stores, embedding pipelines and streaming data prep — the unglamorous plumbing that makes AI features actually work in production.",
  "Safe AI integration. Exposing model capabilities behind clean APIs with auth, input validation, output guardrails and observability so AI doesn't become a liability.",
];

export const fullPackage =
  "I'm not just a coder who closes tickets. I can take a problem from a vague idea to a deployed, tested, observable production system — design the architecture, choose the right stack, build it securely, make it fast, keep it running, and explain every decision in plain language. Add AI fluency on top, and that means more shipped with fewer people and fewer hours. That's the engineer worth hiring: one who owns the outcome, not just the code.";

export const process = [
  { s: "01", title: "Discovery", desc: "A short call to understand the problem, constraints, and what success looks like for you." },
  { s: "02", title: "Scope & plan", desc: "A concrete plan with milestones, timeline, and a transparent estimate before any code." },
  { s: "03", title: "Build & ship", desc: "Iterative delivery with tests, CI/CD and regular demos — you see progress every step." },
  { s: "04", title: "Support", desc: "Monitoring, documentation, and handoff so the system keeps running long after launch." },
];

export const techStack = [
  { h: "Languages", items: ["Java", "Golang", "Python", "JavaScript"] },
  { h: "Frameworks", items: ["Spring Boot", "Gin", "Echo", "Django", "Angular", "React"] },
  { h: "Messaging & Data", items: ["Kafka", "Event Hubs", "PostgreSQL", "MongoDB", "Elasticsearch", "Redis"] },
  { h: "Cloud", items: ["AWS", "GCP / BigQuery", "Azure"] },
  { h: "Infra & Tools", items: ["Docker", "Kubernetes", "Terraform", "CI/CD", "Bazel", "Git"] },
  { h: "Practices", items: ["Microservices", "DDD", "SOLID", "Design Patterns", "Agile", "Load Testing"] },
];

// Set to your Formspree form ID to enable the contact form (see README).
// e.g. "xpzgkqyw" -> form posts to https://formspree.io/f/xpzgkqyw
export const formspreeId = "";
