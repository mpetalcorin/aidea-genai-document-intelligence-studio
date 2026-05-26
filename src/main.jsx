
import React, { useMemo, useState } from "react";

import {
  createRoot
} from "react-dom/client";

import { motion } from "framer-motion";

import {

  Brain,

  FileText,

  ShieldCheck,

  Network,

  Bot,

  Gauge,

  BarChart3,

  LineChart,

  Database,

  Cloud,

  FlaskConical,

  ClipboardCheck,

  GitBranch,

  Search,

  Sparkles,

  Users,

  CheckCircle2,

  AlertTriangle,

  Activity,

  Layers,

  Settings,

  Scale,

  Lock,

  Eye,

  Rocket,

  BookOpen,

  ServerCog,

  Workflow,

  TestTube2,

  Cpu,

  MessageSquareText,
  ExternalLink,
  Globe2,
  Atom,
  HeartPulse,
  CalendarDays,
  Landmark,
} from "lucide-react";

import {

  AreaChart,

  Area,

  BarChart,

  Bar,

  CartesianGrid,

  XAxis,

  YAxis,

  Tooltip,

  ResponsiveContainer,

  RadarChart,

  PolarGrid,

  PolarAngleAxis,

  PolarRadiusAxis,

  Radar,

  PieChart,

  Pie,

  Cell,

  Line,

  LineChart as ReLineChart,

} from "recharts";

import "./index.css";

const fadeUp = {

  hidden: { opacity: 0, y: 18 },

  visible: { opacity: 1, y: 0 },

};

const modules = [

  {

    title: "Generative AI Document Intelligence",

    icon: FileText,

    summary: "Transforms scientific, regulatory, business, and operational documents into structured summaries, evidence maps, QC checks, and executive-ready outputs.",

    tags: ["summarisation", "document generation", "evidence extraction"],

  },

  {

    title: "Custom Agent Orchestration",

    icon: Bot,

    summary: "Coordinates specialist agents for document triage, scientific reasoning, risk review, analytics interpretation, and human approval.",

    tags: ["custom agents", "workflow routing", "human approval"],

  },

  {

    title: "RAG Knowledge Workflows",

    icon: Network,

    summary: "Retrieval-augmented generation pattern with source grounding, chunk ranking, semantic search, traceability, and response confidence scoring.",

    tags: ["RAG", "semantic search", "source grounding"],

  },

  {

    title: "LLMOps and Monitoring",

    icon: ServerCog,

    summary: "Tracks prompt versions, model versions, latency, cost, drift signals, hallucination flags, user feedback, and deployment readiness.",

    tags: ["LLMOps", "monitoring", "governance"],

  },

  {

    title: "Prompt Engineering Studio",

    icon: MessageSquareText,

    summary: "Compares prompt templates, system instructions, retrieval settings, and output schemas using measurable performance criteria.",

    tags: ["prompt design", "schema control", "evaluation"],

  },

  {

    title: "NLP Pipeline Engine",

    icon: Brain,

    summary: "Simulates text mining, named-entity extraction, classification, topic discovery, embedding search, and transformer-based document workflows.",

    tags: ["NLP", "embeddings", "classification"],

  },

  {

    title: "Automated Report Generator",

    icon: ClipboardCheck,

    summary: "Creates structured scientific and business reports with summaries, methods, limitations, QC tables, impact metrics, and review trails.",

    tags: ["reports", "Word/PDF-ready", "review trail"],

  },

  {

    title: "AI Output QC",

    icon: ShieldCheck,

    summary: "Checks hallucination risk, source coverage, sensitive claims, unsupported statements, duplication, tone, and compliance constraints.",

    tags: ["QC", "hallucination checks", "compliance"],

  },

  {

    title: "Adoption Analytics",

    icon: Users,

    summary: "Measures usage, repeat users, active teams, feature adoption, approval rates, and business-unit engagement.",

    tags: ["adoption", "usage analytics", "stakeholders"],

  },

  {

    title: "A/B Testing and Impact",

    icon: FlaskConical,

    summary: "Compares workflow variants, quantifies time saved, quality improvement, user preference, and decision-cycle acceleration.",

    tags: ["A/B testing", "impact measurement", "experiments"],

  },

  {

    title: "Executive Dashboard",

    icon: Gauge,

    summary: "Communicates GenAI value, adoption, risk, quality, and operational readiness to senior leaders and non-technical audiences.",

    tags: ["dashboard", "executive reporting", "value story"],

  },

  {

    title: "Enterprise Data Architecture",

    icon: Database,

    summary: "Shows Azure/OpenAI-ready, Databricks/Snowflake/dbt-compatible architecture for governed enterprise GenAI data products.",

    tags: ["Azure", "Snowflake", "Databricks", "dbt"],

  },

  {

    title: "Human-in-the-Loop Validation",

    icon: Eye,

    summary: "Routes high-risk outputs to expert reviewers, captures decisions, stores audit history, and prevents unapproved release.",

    tags: ["review", "approval", "audit trail"],

  },

  {

    title: "Data Ethics and Governance",

    icon: Scale,

    summary: "Embeds privacy, bias review, transparency, provenance, access control, and acceptable-use safeguards.",

    tags: ["ethics", "privacy", "transparency"],

  },

];


const moduleOutputs = {
  "Generative AI Document Intelligence": {
    status: "Activated",
    output: "Generated a structured document brief with executive summary, source-grounded evidence map, extracted claims, uncertainty notes, and review-ready recommendations.",
    metrics: ["93% extraction completeness", "88% summary confidence", "7 key claims detected"],
    action: "Run document intelligence"
  },
  "Custom Agent Orchestration": {
    status: "Activated",
    output: "Launched a multi-agent workflow: triage agent, evidence agent, risk agent, analytics agent, and human-review agent.",
    metrics: ["5 agents coordinated", "2 review gates triggered", "1 audit trail created"],
    action: "Run agent workflow"
  },
  "RAG Knowledge Workflows": {
    status: "Activated",
    output: "Retrieved semantically relevant document chunks, ranked evidence, attached provenance, and generated a grounded answer with confidence scoring.",
    metrics: ["12 chunks ranked", "91% retrieval relevance", "4 source anchors attached"],
    action: "Run RAG search"
  },
  "LLMOps and Monitoring": {
    status: "Activated",
    output: "Logged model version, prompt version, latency, cost, drift signal, hallucination flag, and reviewer feedback.",
    metrics: ["Latency 1.4 s", "Cost £0.03/query", "0 critical drift alerts"],
    action: "Run LLMOps check"
  },
  "Prompt Engineering Studio": {
    status: "Activated",
    output: "Compared three prompt templates using accuracy, groundedness, completeness, tone, and reviewer preference.",
    metrics: ["Prompt B selected", "18% quality gain", "Schema compliance 96%"],
    action: "Compare prompts"
  },
  "NLP Pipeline Engine": {
    status: "Activated",
    output: "Performed text mining, entity extraction, topic classification, embedding similarity, and transformer-style document scoring.",
    metrics: ["32 entities extracted", "5 topics classified", "89% NLP score"],
    action: "Run NLP pipeline"
  },
  "Automated Report Generator": {
    status: "Activated",
    output: "Generated a report structure containing summary, methods, evidence, figures, QC table, limitations, decision memo, and reviewer sign-off.",
    metrics: ["7 sections generated", "Word/PDF-ready", "Review trail attached"],
    action: "Generate report"
  },
  "AI Output QC": {
    status: "Activated",
    output: "Checked source support, hallucination risk, unsupported claims, sensitive wording, duplication, tone, and governance constraints.",
    metrics: ["2 claims flagged", "Low hallucination risk", "96% policy score"],
    action: "Run QC"
  },
  "Adoption Analytics": {
    status: "Activated",
    output: "Calculated active users, repeat users, department adoption, approval rates, and usage trend.",
    metrics: ["171 active users", "73% repeat usage", "6 teams onboarded"],
    action: "View adoption"
  },
  "A/B Testing and Impact": {
    status: "Activated",
    output: "Compared classic search, RAG assistant, agentic workflow, and human-reviewed agent workflow.",
    metrics: ["38% faster review", "22% quality improvement", "92% preferred workflow score"],
    action: "Run A/B test"
  },
  "Executive Dashboard": {
    status: "Activated",
    output: "Prepared a leadership-ready dashboard summarising value, adoption, risk, quality, cost, and deployment readiness.",
    metrics: ["58% time saved", "91% QC pass rate", "High readiness"],
    action: "Open dashboard"
  },
  "Enterprise Data Architecture": {
    status: "Activated",
    output: "Mapped an Azure/OpenAI-ready architecture with Databricks, Snowflake, dbt-style transformations, vector search, and governed AI outputs.",
    metrics: ["9 architecture layers", "Lakehouse-ready", "Audit-ready"],
    action: "Show architecture"
  },
  "Human-in-the-Loop Validation": {
    status: "Activated",
    output: "Routed high-impact output to an expert reviewer, captured approval status, edit history, and final decision.",
    metrics: ["1 reviewer assigned", "Audit trail saved", "Release controlled"],
    action: "Start review"
  },
  "Data Ethics and Governance": {
    status: "Activated",
    output: "Applied responsible AI checks covering privacy, bias, leakage, transparency, access control, provenance, and acceptable use.",
    metrics: ["5 ethics checks passed", "No sensitive leakage", "Governance complete"],
    action: "Run ethics review"
  },
};

const adoptionData = [

  { month: "Jan", users: 22, reports: 18, approvals: 13 },

  { month: "Feb", users: 38, reports: 29, approvals: 24 },

  { month: "Mar", users: 61, reports: 45, approvals: 39 },

  { month: "Apr", users: 84, reports: 71, approvals: 63 },

  { month: "May", users: 126, reports: 103, approvals: 92 },

  { month: "Jun", users: 171, reports: 148, approvals: 136 },

];

const impactData = [

  { metric: "Time saved", before: 100, after: 42 },

  { metric: "Review effort", before: 100, after: 55 },

  { metric: "Duplicate work", before: 100, after: 38 },

  { metric: "Search burden", before: 100, after: 31 },

  { metric: "Report delay", before: 100, after: 47 },

];

const qualityData = [

  { name: "Source grounded", value: 91 },

  { name: "Human approved", value: 87 },

  { name: "Low hallucination risk", value: 82 },

  { name: "Policy compliant", value: 96 },

  { name: "Reusable output", value: 79 },

];

const abData = [

  { variant: "Classic search", score: 54, time: 92 },

  { variant: "RAG assistant", score: 78, time: 54 },

  { variant: "Agentic workflow", score: 86, time: 39 },

  { variant: "Human-reviewed agent", score: 92, time: 45 },

];


const promptRegistry = [
  {
    version: "prompt-docsum-v1.4",
    purpose: "Scientific and business document summarisation",
    status: "approved",
    score: 94,
  },
  {
    version: "prompt-rag-evidence-v2.1",
    purpose: "Source-grounded evidence extraction",
    status: "approved",
    score: 91,
  },
  {
    version: "prompt-qc-risk-v1.8",
    purpose: "Unsupported claim and hallucination risk review",
    status: "monitoring",
    score: 88,
  },
  {
    version: "prompt-exec-brief-v1.2",
    purpose: "Executive-facing decision memo generation",
    status: "approved",
    score: 92,
  },
];

const reviewerQueue = [
  {
    item: "Clinical evidence summary",
    risk: "High",
    reviewer: "Scientific reviewer",
    status: "Requires approval",
  },
  {
    item: "Business impact memo",
    risk: "Medium",
    reviewer: "Product owner",
    status: "Under review",
  },
  {
    item: "SOP change summary",
    risk: "High",
    reviewer: "Compliance reviewer",
    status: "Blocked until reviewed",
  },
  {
    item: "Internal adoption report",
    risk: "Low",
    reviewer: "Analytics lead",
    status: "Approved",
  },
];

const deploymentChecklist = [
  ["Data sources mapped", true],
  ["Access control defined", true],
  ["Prompt registry active", true],
  ["RAG grounding enabled", true],
  ["Evaluation rubric defined", true],
  ["Human review workflow enabled", true],
  ["Cost and latency monitoring", true],
  ["Bias and privacy review", true],
  ["Incident escalation route", false],
  ["Production SLA agreed", false],
];

const valueCase = [
  {
    label: "Decision-cycle acceleration",
    value: "Reduces manual document review and evidence retrieval time across scientific and business workflows.",
  },
  {
    label: "Quality and consistency",
    value: "Standardises summaries, reports, QC checks, and reviewer documentation using structured output schemas.",
  },
  {
    label: "Governed GenAI adoption",
    value: "Combines LLMOps, human review, source grounding, access control, and responsible AI checks.",
  },
  {
    label: "Leadership visibility",
    value: "Converts usage, quality, risk, and impact metrics into executive-ready dashboards.",
  },
];

const architectureNodes = [

  ["Document sources", "SharePoint, PDFs, Word, SOPs, reports, research files"],

  ["Ingestion", "OCR, parsing, chunking, metadata extraction"],

  ["Data lakehouse", "Azure Blob, Databricks, Snowflake-compatible storage"],

  ["Transformation", "dbt-style modelling, validation, lineage, quality checks"],

  ["Vector layer", "Embeddings, semantic search, retrieval scoring"],

  ["LLM layer", "Azure OpenAI-ready prompts, tools, agents, function calls"],

  ["LLMOps", "Prompt registry, model registry, evals, monitoring, cost tracking"],

  ["Human review", "Expert approval, rejection, edits, audit trail"],

  ["Business products", "Reports, dashboards, summaries, decision memos"],

];

const ethicsItems = [

  "No unsupported high-impact claims without source evidence.",

  "Human approval required for clinical, regulatory, legal, or financial conclusions.",

  "Sensitive document handling, access control, and traceable reviewer accountability.",

  "Bias, privacy, leakage, hallucination, and misuse risk checks before deployment.",

  "Every generated output stores prompt version, model version, retrieval set, reviewer status, and confidence score.",

];

function StatCard({ icon: Icon, label, value, note }) {

  return (

    <motion.div

      variants={fadeUp}

      className="soft-card rounded-2xl p-5"

      whileHover={{ y: -4, scale: 1.01 }}

    >

      <div className="flex items-center justify-between">

        <div className="rounded-2xl bg-sky-400/10 p-3 text-sky-300">

          <Icon size={24} />

        </div>

        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">

          live metric

        </span>

      </div>

      <div className="mt-5 text-3xl font-bold text-white">{value}</div>

      <div className="mt-1 text-sm font-semibold text-slate-200">{label}</div>

      <div className="mt-2 text-sm text-slate-400">{note}</div>

    </motion.div>

  );

}

function ModuleCard({ module, index }) {
  const Icon = module.icon;
  const [active, setActive] = useState(false);
  const result = moduleOutputs[module.title];

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: index * 0.035 }}
      className={`soft-card rounded-2xl p-5 transition-all duration-300 ${active ? "ring-2 ring-cyan-300/70" : ""}`}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-start gap-4">
        <div className="rounded-2xl bg-indigo-400/10 p-3 text-indigo-300">
          <Icon size={24} />
        </div>
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-base font-bold text-white">{module.title}</h3>
            <span className="rounded-full bg-emerald-400/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-200">
              {result.status}
            </span>
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-300">{module.summary}</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {module.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
            {tag}
          </span>
        ))}
      </div>

      <button
        onClick={() => setActive(!active)}
        className="mt-5 w-full rounded-2xl bg-gradient-to-r from-sky-400 to-violet-400 px-4 py-3 text-sm font-black text-slate-950 shadow-lg shadow-sky-950/30 transition hover:scale-[1.01]"
      >
        {active ? "Hide simulated output" : result.action}
      </button>

      {active && (
        <motion.div
          initial={{ opacity: 0, height: 0, y: -8 }}
          animate={{ opacity: 1, height: "auto", y: 0 }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-4 overflow-hidden rounded-2xl border border-cyan-300/20 bg-slate-950/70 p-4"
        >
          <div className="mb-2 flex items-center gap-2 text-sm font-bold text-cyan-200">
            <Sparkles size={16} />
            Simulated enterprise output
          </div>
          <p className="text-sm leading-6 text-slate-300">{result.output}</p>
          <div className="mt-4 grid gap-2">
            {result.metrics.map((metric) => (
              <div key={metric} className="flex items-center gap-2 rounded-xl bg-slate-900 p-3 text-xs text-slate-300">
                <CheckCircle2 size={15} className="text-emerald-300" />
                <span>{metric}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

function WorkflowLane({ title, icon: Icon, items }) {

  return (

    <div className="soft-card rounded-2xl p-5">

      <div className="mb-4 flex items-center gap-3">

        <div className="rounded-xl bg-cyan-400/10 p-2 text-cyan-300">

          <Icon size={20} />

        </div>

        <h3 className="font-bold text-white">{title}</h3>

      </div>

      <div className="space-y-3">

        {items.map((item, idx) => (

          <motion.div

            key={item}

            initial={{ opacity: 0, x: -8 }}

            whileInView={{ opacity: 1, x: 0 }}

            transition={{ delay: idx * 0.06 }}

            viewport={{ once: true }}

            className="flex items-start gap-3 rounded-xl bg-slate-950/40 p-3 text-sm text-slate-300"

          >

            <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-300" size={16} />

            <span>{item}</span>

          </motion.div>

        ))}

      </div>

    </div>

  );

}








function ROICalculator() {
  const [docsPerMonth, setDocsPerMonth] = useState(500);
  const [minutesSaved, setMinutesSaved] = useState(18);
  const [hourlyCost, setHourlyCost] = useState(55);
  const [qualityGain, setQualityGain] = useState(22);

  const hoursSaved = Math.round((docsPerMonth * minutesSaved) / 60);
  const monthlyValue = Math.round(hoursSaved * hourlyCost);
  const annualValue = monthlyValue * 12;

  return (
    <section className="mx-auto max-w-7xl px-5 py-12">
      <div className="mb-7">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-300">
          ROI and impact calculator
        </p>
        <h2 className="mt-2 text-3xl font-bold text-white">
          Quantify business value from GenAI document workflows
        </h2>
        <p className="mt-3 max-w-3xl text-slate-300">
          This calculator translates GenAI document intelligence into measurable business impact, including time saved, estimated value, quality improvement, and annualised productivity gain.
        </p>
      </div>

      <div className="glass rounded-3xl p-6">
        <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
          <div className="soft-card rounded-3xl p-6">
            <h3 className="mb-5 flex items-center gap-2 text-xl font-bold text-white">
              <Scale className="text-lime-300" />
              Assumptions
            </h3>

            {[
              ["Documents per month", docsPerMonth, setDocsPerMonth, 50, 5000],
              ["Minutes saved per document", minutesSaved, setMinutesSaved, 1, 90],
              ["Estimated hourly cost, £", hourlyCost, setHourlyCost, 15, 250],
              ["Quality improvement, %", qualityGain, setQualityGain, 1, 80],
            ].map(([label, value, setter, min, max]) => (
              <div key={label} className="mb-5">
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-bold text-slate-200">{label}</label>
                  <span className="rounded-full bg-lime-400/10 px-3 py-1 text-sm font-bold text-lime-200">
                    {value}
                  </span>
                </div>
                <input
                  type="range"
                  min={min}
                  max={max}
                  value={value}
                  onChange={(e) => setter(Number(e.target.value))}
                  className="w-full"
                />
              </div>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="soft-card rounded-3xl p-6">
              <div className="text-sm text-slate-400">Hours saved per month</div>
              <div className="mt-2 text-5xl font-black text-white">{hoursSaved}</div>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Estimated expert review and document-processing time recovered.
              </p>
            </div>

            <div className="soft-card rounded-3xl p-6">
              <div className="text-sm text-slate-400">Monthly value estimate</div>
              <div className="mt-2 text-5xl font-black text-lime-200">£{monthlyValue.toLocaleString()}</div>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Approximate productivity value based on time saved and hourly cost.
              </p>
            </div>

            <div className="soft-card rounded-3xl p-6">
              <div className="text-sm text-slate-400">Annualised value estimate</div>
              <div className="mt-2 text-5xl font-black text-cyan-200">£{annualValue.toLocaleString()}</div>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Scaled estimate for enterprise planning and leadership reporting.
              </p>
            </div>

            <div className="soft-card rounded-3xl p-6">
              <div className="text-sm text-slate-400">Quality improvement</div>
              <div className="mt-2 text-5xl font-black text-violet-200">{qualityGain}%</div>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Simulated improvement in consistency, completeness, and reviewer confidence.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-lime-300/20 bg-lime-400/10 p-5">
          <div className="mb-2 flex items-center gap-2 text-sm font-bold text-lime-100">
            <Rocket size={18} />
            Business case statement
          </div>
          <p className="text-sm leading-7 text-lime-50">
            At {docsPerMonth.toLocaleString()} documents per month, saving {minutesSaved} minutes per document creates approximately {hoursSaved.toLocaleString()} recovered hours per month, equivalent to about £{monthlyValue.toLocaleString()} monthly value and £{annualValue.toLocaleString()} annualised value, while improving output quality by an estimated {qualityGain}%.
          </p>
        </div>
      </div>
    </section>
  );
}


function RAGEvidenceExplorer() {
  const [query, setQuery] = useState("Summarise the main operational risks and recommend the next decision.");
  const [selectedEvidence, setSelectedEvidence] = useState([0, 1, 3]);
  const [answerGenerated, setAnswerGenerated] = useState(false);

  const evidence = [
    {
      source: "SOP_Change_Assessment_v3.docx",
      chunk: "The revised process changes the escalation pathway and introduces a new approval dependency before release.",
      score: 94,
      type: "Procedure"
    },
    {
      source: "Clinical_Operations_Notes_Q2.pdf",
      chunk: "Several actions were assigned during the meeting, but two workstream owners and one target date remain unresolved.",
      score: 89,
      type: "Meeting"
    },
    {
      source: "Adoption_Analytics_Report.xlsx",
      chunk: "Repeat usage increased across teams, but onboarding remains uneven between technical and non-technical users.",
      score: 82,
      type: "Analytics"
    },
    {
      source: "AI_QC_Review_Log.json",
      chunk: "High-impact outputs require human review when source support is incomplete or when clinical, regulatory, or compliance-sensitive claims are generated.",
      score: 91,
      type: "Governance"
    },
    {
      source: "Portfolio_Review_Memo.docx",
      chunk: "Leadership requested a concise decision memo showing value, risk, cost, and deployment readiness.",
      score: 86,
      type: "Executive"
    },
  ];

  const toggleEvidence = (index) => {
    setAnswerGenerated(false);
    setSelectedEvidence((prev) =>
      prev.includes(index) ? prev.filter((x) => x !== index) : [...prev, index]
    );
  };

  const selected = evidence.filter((_, index) => selectedEvidence.includes(index));
  const avgScore = selected.length
    ? Math.round(selected.reduce((sum, item) => sum + item.score, 0) / selected.length)
    : 0;

  return (
    <section className="mx-auto max-w-7xl px-5 py-12">
      <div className="mb-7">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
          RAG evidence explorer
        </p>
        <h2 className="mt-2 text-3xl font-bold text-white">
          Retrieve, rank, select, and generate source-grounded answers
        </h2>
        <p className="mt-3 max-w-3xl text-slate-300">
          This section demonstrates a retrieval-augmented generation workflow. It shows how enterprise documents can be searched, ranked, selected as evidence, and converted into a grounded answer with confidence metadata.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[.9fr_1.1fr]">
        <div className="soft-card rounded-3xl p-6">
          <div className="mb-4 flex items-center gap-3">
            <Search className="text-sky-300" />
            <h3 className="text-xl font-bold text-white">Semantic query</h3>
          </div>

          <textarea
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setAnswerGenerated(false);
            }}
            className="h-28 w-full rounded-2xl border border-slate-700 bg-slate-950/80 p-4 text-sm leading-6 text-slate-200 outline-none focus:border-sky-400"
          />

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-slate-950/60 p-4">
              <div className="text-xs text-slate-400">Evidence selected</div>
              <div className="mt-1 text-2xl font-black text-white">{selected.length}</div>
            </div>
            <div className="rounded-2xl bg-slate-950/60 p-4">
              <div className="text-xs text-slate-400">Mean retrieval score</div>
              <div className="mt-1 text-2xl font-black text-cyan-200">{avgScore}%</div>
            </div>
            <div className="rounded-2xl bg-slate-950/60 p-4">
              <div className="text-xs text-slate-400">Grounding status</div>
              <div className="mt-1 text-sm font-black text-emerald-200">
                {selected.length >= 2 ? "Ready" : "Needs evidence"}
              </div>
            </div>
          </div>

          <button
            onClick={() => setAnswerGenerated(true)}
            disabled={selected.length < 2}
            className="mt-5 w-full rounded-2xl bg-gradient-to-r from-sky-300 to-violet-400 px-6 py-4 font-black text-slate-950 shadow-lg shadow-sky-950/30 transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-50"
          >
            Generate grounded answer
          </button>
        </div>

        <div className="glass rounded-3xl p-6">
          <div className="mb-4 flex items-center gap-3">
            <Database className="text-cyan-300" />
            <h3 className="text-xl font-bold text-white">Ranked evidence chunks</h3>
          </div>

          <div className="space-y-3">
            {evidence.map((item, index) => {
              const active = selectedEvidence.includes(index);
              return (
                <button
                  key={item.source}
                  onClick={() => toggleEvidence(index)}
                  className={`w-full rounded-2xl border p-4 text-left transition ${active
                    ? "border-cyan-300/50 bg-cyan-400/10"
                    : "border-slate-700 bg-slate-950/50 hover:border-slate-500"
                    }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="font-bold text-white">{item.source}</div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-300">{item.type}</span>
                      <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-200">
                        {item.score}%
                      </span>
                    </div>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.chunk}</p>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {answerGenerated && (
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 glass rounded-3xl p-6"
        >
          <div className="mb-4 flex items-center gap-3">
            <Sparkles className="text-violet-300" />
            <h3 className="text-xl font-bold text-white">Generated source-grounded answer</h3>
          </div>

          <p className="text-sm leading-7 text-slate-300">
            Based on the selected evidence, the main operational risk is incomplete decision control across SOP changes, clinical operations actions, and high-impact AI-generated outputs. The recommended next decision is to proceed with a controlled human-reviewed workflow, assign owners for unresolved actions, block automatic release of compliance-sensitive outputs, and prepare a concise executive memo summarising value, risk, cost, and deployment readiness.
          </p>

          <div className="mt-5 grid gap-3 md:grid-cols-4">
            <div className="rounded-2xl bg-slate-950/60 p-4">
              <div className="text-xs text-slate-400">Answer confidence</div>
              <div className="mt-1 text-2xl font-black text-emerald-200">{Math.max(80, avgScore - 2)}%</div>
            </div>
            <div className="rounded-2xl bg-slate-950/60 p-4">
              <div className="text-xs text-slate-400">Sources used</div>
              <div className="mt-1 text-2xl font-black text-white">{selected.length}</div>
            </div>
            <div className="rounded-2xl bg-slate-950/60 p-4">
              <div className="text-xs text-slate-400">Hallucination risk</div>
              <div className="mt-1 text-2xl font-black text-cyan-200">Low</div>
            </div>
            <div className="rounded-2xl bg-slate-950/60 p-4">
              <div className="text-xs text-slate-400">Review route</div>
              <div className="mt-1 text-sm font-black text-amber-200">Expert approval</div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}

function DocumentWorkspace() {
  const [selectedDoc, setSelectedDoc] = useState(0);
  const [memoGenerated, setMemoGenerated] = useState(false);

  const docs = [
    {
      title: "Scientific evidence review",
      type: "Research document",
      risk: "Medium",
      summary: "The document describes a scientific evidence landscape, identifies mechanistic hypotheses, and highlights areas where stronger source support is required.",
      claims: [
        ["Claim", "Several findings support a mechanistic relationship between biological pathway activity and disease-relevant outcomes."],
        ["Evidence", "Multiple source passages are consistent, but two claims require additional verification."],
        ["Risk", "Medium risk because scientific interpretation may influence downstream decisions."],
      ],
      memo: "Recommendation: proceed with expert review, strengthen source-linked evidence, and convert the findings into a structured research brief before wider distribution.",
    },
    {
      title: "SOP change assessment",
      type: "Operational document",
      risk: "High",
      summary: "The document compares procedural language across versions and identifies changes that may affect compliance, training, and approval routing.",
      claims: [
        ["Change", "Three procedural steps were modified and one approval step appears to be missing."],
        ["Evidence", "Version comparison indicates wording changes in responsibility, timing, and escalation instructions."],
        ["Risk", "High risk because SOP changes may require compliance review before release."],
      ],
      memo: "Recommendation: block automatic release, assign compliance reviewer, document the change rationale, and require approval before publication.",
    },
    {
      title: "Business adoption report",
      type: "Analytics document",
      risk: "Low",
      summary: "The report summarises user adoption, repeat usage, feature engagement, review rates, and early productivity signals from GenAI workflows.",
      claims: [
        ["Trend", "Active users and generated reports increased month by month."],
        ["Evidence", "Dashboard metrics show rising usage, approval rates, and repeat engagement."],
        ["Risk", "Low risk because this is an internal analytics summary."],
      ],
      memo: "Recommendation: continue scaling the product, monitor satisfaction, and prioritise workflow variants with the strongest quality and adoption scores.",
    },
    {
      title: "Clinical operations meeting notes",
      type: "Meeting transcript",
      risk: "High",
      summary: "The transcript includes operational decisions, unresolved risks, owners, timelines, and items requiring escalation.",
      claims: [
        ["Decision", "Several action items were assigned, but some owners and deadlines are unclear."],
        ["Evidence", "Transcript extraction found ambiguous commitments and incomplete follow-up instructions."],
        ["Risk", "High risk because operational ambiguity can affect execution."],
      ],
      memo: "Recommendation: generate an action tracker, confirm owners, escalate unresolved risks, and request human validation before circulation.",
    },
  ];

  const active = docs[selectedDoc];

  const riskStyle =
    active.risk === "High"
      ? "bg-rose-400/10 text-rose-200 border-rose-300/30"
      : active.risk === "Medium"
        ? "bg-amber-400/10 text-amber-200 border-amber-300/30"
        : "bg-emerald-400/10 text-emerald-200 border-emerald-300/30";

  return (
    <section className="mx-auto max-w-7xl px-5 py-12">
      <div className="mb-7">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
          Document workspace
        </p>
        <h2 className="mt-2 text-3xl font-bold text-white">
          Turn enterprise documents into summaries, evidence tables, and executive memos
        </h2>
        <p className="mt-3 max-w-3xl text-slate-300">
          This workspace gives the product a practical user journey: choose a document, inspect the generated summary, review extracted evidence, assess risk, and generate a decision-ready memo.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
        <div className="soft-card rounded-3xl p-5">
          <div className="mb-4 flex items-center gap-3">
            <FileText className="text-emerald-300" />
            <h3 className="text-xl font-bold text-white">Sample document queue</h3>
          </div>

          <div className="space-y-3">
            {docs.map((doc, index) => (
              <button
                key={doc.title}
                onClick={() => {
                  setSelectedDoc(index);
                  setMemoGenerated(false);
                }}
                className={`w-full rounded-2xl border p-4 text-left transition ${selectedDoc === index
                  ? "border-emerald-300/60 bg-emerald-400/10"
                  : "border-slate-700 bg-slate-950/50 hover:border-slate-500"
                  }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="font-bold text-white">{doc.title}</div>
                  <span className={`rounded-full border px-3 py-1 text-xs font-bold ${doc.risk === "High"
                    ? "border-rose-300/30 bg-rose-400/10 text-rose-200"
                    : doc.risk === "Medium"
                      ? "border-amber-300/30 bg-amber-400/10 text-amber-200"
                      : "border-emerald-300/30 bg-emerald-400/10 text-emerald-200"
                    }`}>
                    {doc.risk}
                  </span>
                </div>
                <div className="mt-2 text-sm text-slate-400">{doc.type}</div>
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={active.title}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-3xl p-6"
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-black text-white">{active.title}</h3>
              <p className="mt-1 text-sm uppercase tracking-[0.25em] text-slate-400">{active.type}</p>
            </div>
            <div className={`rounded-2xl border px-5 py-3 text-sm font-black ${riskStyle}`}>
              {active.risk} risk
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-slate-950/60 p-5">
            <div className="mb-2 flex items-center gap-2 text-sm font-bold text-emerald-200">
              <Sparkles size={18} />
              Generated summary
            </div>
            <p className="text-sm leading-7 text-slate-300">{active.summary}</p>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-950 text-slate-300">
                <tr>
                  <th className="p-3">Evidence type</th>
                  <th className="p-3">Extracted output</th>
                </tr>
              </thead>
              <tbody>
                {active.claims.map(([label, value]) => (
                  <tr key={label} className="border-t border-slate-800 bg-slate-950/40">
                    <td className="p-3 font-bold text-cyan-200">{label}</td>
                    <td className="p-3 text-slate-300">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button
            onClick={() => setMemoGenerated(true)}
            className="mt-6 rounded-2xl bg-gradient-to-r from-emerald-300 to-cyan-300 px-6 py-4 font-black text-slate-950 shadow-lg shadow-emerald-950/30 transition hover:scale-[1.01]"
          >
            Generate executive memo
          </button>

          {memoGenerated && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 rounded-2xl border border-cyan-300/30 bg-cyan-400/10 p-5"
            >
              <div className="mb-2 flex items-center gap-2 text-sm font-bold text-cyan-100">
                <ClipboardCheck size={18} />
                Executive memo
              </div>
              <p className="text-sm leading-7 text-cyan-50">{active.memo}</p>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                <div className="rounded-xl bg-slate-950/60 p-3 text-xs text-slate-300">Source grounding attached</div>
                <div className="rounded-xl bg-slate-950/60 p-3 text-xs text-slate-300">Reviewer route assigned</div>
                <div className="rounded-xl bg-slate-950/60 p-3 text-xs text-slate-300">Audit trail generated</div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function EvaluationRiskLab() {
  const [selectedModel, setSelectedModel] = useState("Human-reviewed RAG agent");

  const modelScores = {
    "Baseline LLM": {
      groundedness: 62,
      hallucinationRisk: 31,
      completeness: 68,
      latency: "1.1 s",
      cost: "£0.01",
      reviewerAgreement: 59,
      release: "Blocked",
      note: "Fast and cheap, but weak source grounding and higher hallucination risk."
    },
    "RAG assistant": {
      groundedness: 84,
      hallucinationRisk: 14,
      completeness: 81,
      latency: "1.8 s",
      cost: "£0.03",
      reviewerAgreement: 76,
      release: "Conditional",
      note: "Good retrieval grounding, but still requires review for high-impact outputs."
    },
    "Agentic workflow": {
      groundedness: 89,
      hallucinationRisk: 10,
      completeness: 87,
      latency: "2.5 s",
      cost: "£0.05",
      reviewerAgreement: 84,
      release: "Conditional",
      note: "Better decomposition, QC, and task routing, with moderate cost increase."
    },
    "Human-reviewed RAG agent": {
      groundedness: 94,
      hallucinationRisk: 5,
      completeness: 91,
      latency: "3.2 s",
      cost: "£0.07",
      reviewerAgreement: 93,
      release: "Approved",
      note: "Best governed workflow for enterprise use, especially for scientific, clinical, or compliance-sensitive outputs."
    }
  };

  const active = modelScores[selectedModel];

  const benchmarkRows = Object.entries(modelScores).map(([name, data]) => ({
    name,
    groundedness: data.groundedness,
    hallucinationRisk: data.hallucinationRisk,
    completeness: data.completeness,
    reviewerAgreement: data.reviewerAgreement,
  }));

  const releaseColor =
    active.release === "Approved"
      ? "bg-emerald-400/10 text-emerald-200"
      : active.release === "Conditional"
        ? "bg-amber-400/10 text-amber-200"
        : "bg-rose-400/10 text-rose-200";

  const riskChecklist = [
    {
      label: "Source-grounded answer",
      pass: active.groundedness >= 80,
      detail: "Output must cite or trace back to retrieved evidence."
    },
    {
      label: "Low hallucination risk",
      pass: active.hallucinationRisk <= 15,
      detail: "Unsupported or fabricated claims must be below the release threshold."
    },
    {
      label: "Human reviewer agreement",
      pass: active.reviewerAgreement >= 80,
      detail: "Expert reviewers should broadly agree with the generated output."
    },
    {
      label: "Completeness threshold",
      pass: active.completeness >= 80,
      detail: "The response must answer the user question and cover required context."
    },
    {
      label: "Governance release status",
      pass: active.release !== "Blocked",
      detail: "Blocked outputs cannot be released without redesign or review."
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-5 py-12">
      <div className="mb-7">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-300">
          GenAI evaluation and risk lab
        </p>
        <h2 className="mt-2 text-3xl font-bold text-white">
          Measure quality before deployment
        </h2>
        <p className="mt-3 max-w-3xl text-slate-300">
          This section demonstrates rigorous evaluation of GenAI workflows using groundedness, hallucination risk, completeness, cost, latency, reviewer agreement, and release gating.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[.75fr_1.25fr]">
        <div className="soft-card rounded-3xl p-6">
          <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-white">
            <TestTube2 className="text-rose-300" />
            Workflow variant selector
          </h3>

          <div className="space-y-3">
            {Object.keys(modelScores).map((name) => (
              <button
                key={name}
                onClick={() => setSelectedModel(name)}
                className={`w-full rounded-2xl border p-4 text-left transition ${selectedModel === name
                  ? "border-rose-300/60 bg-rose-400/10"
                  : "border-slate-700 bg-slate-950/50 hover:border-slate-500"
                  }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-bold text-white">{name}</span>
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${modelScores[name].release === "Approved"
                    ? "bg-emerald-400/10 text-emerald-200"
                    : modelScores[name].release === "Conditional"
                      ? "bg-amber-400/10 text-amber-200"
                      : "bg-rose-400/10 text-rose-200"
                    }`}>
                    {modelScores[name].release}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-400">{modelScores[name].note}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="glass rounded-3xl p-6">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-black text-white">{selectedModel}</h3>
              <p className="mt-1 text-sm text-slate-400">Selected workflow evaluation profile</p>
            </div>
            <div className={`rounded-2xl px-5 py-3 text-sm font-black ${releaseColor}`}>
              {active.release}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-5">
            <div className="rounded-2xl bg-slate-950/60 p-4">
              <div className="text-xs text-slate-400">Groundedness</div>
              <div className="mt-1 text-2xl font-black text-emerald-200">{active.groundedness}%</div>
            </div>
            <div className="rounded-2xl bg-slate-950/60 p-4">
              <div className="text-xs text-slate-400">Hallucination risk</div>
              <div className="mt-1 text-2xl font-black text-rose-200">{active.hallucinationRisk}%</div>
            </div>
            <div className="rounded-2xl bg-slate-950/60 p-4">
              <div className="text-xs text-slate-400">Completeness</div>
              <div className="mt-1 text-2xl font-black text-cyan-200">{active.completeness}%</div>
            </div>
            <div className="rounded-2xl bg-slate-950/60 p-4">
              <div className="text-xs text-slate-400">Latency</div>
              <div className="mt-1 text-2xl font-black text-white">{active.latency}</div>
            </div>
            <div className="rounded-2xl bg-slate-950/60 p-4">
              <div className="text-xs text-slate-400">Cost/query</div>
              <div className="mt-1 text-2xl font-black text-white">{active.cost}</div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_.9fr]">
            <div className="rounded-2xl border border-slate-700 bg-slate-950/50 p-4">
              <div className="mb-3 flex items-center gap-2 text-sm font-bold text-white">
                <BarChart3 className="text-cyan-300" size={18} />
                Evaluation benchmark
              </div>
              <div className="h-72">
                <ResponsiveContainer>
                  <BarChart data={benchmarkRows}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,.18)" />
                    <XAxis dataKey="name" stroke="#94a3b8" tick={{ fontSize: 10 }} />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip />
                    <Bar dataKey="groundedness" fill="#22c55e" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="completeness" fill="#38bdf8" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="reviewerAgreement" fill="#a78bfa" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-950/50 p-4">
              <div className="mb-3 flex items-center gap-2 text-sm font-bold text-white">
                <ShieldCheck className="text-emerald-300" size={18} />
                Release gate checklist
              </div>
              <div className="space-y-3">
                {riskChecklist.map((item) => (
                  <div key={item.label} className="rounded-xl bg-slate-900/80 p-3">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        {item.pass ? (
                          <CheckCircle2 className="text-emerald-300" size={17} />
                        ) : (
                          <AlertTriangle className="text-rose-300" size={17} />
                        )}
                        <span className="text-sm font-bold text-white">{item.label}</span>
                      </div>
                      <span className={`rounded-full px-2 py-1 text-[10px] font-bold uppercase ${item.pass ? "bg-emerald-400/10 text-emerald-200" : "bg-rose-400/10 text-rose-200"
                        }`}>
                        {item.pass ? "pass" : "fail"}
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-5 text-slate-400">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-slate-950/60 p-5">
            <div className="mb-2 flex items-center gap-2 text-sm font-bold text-violet-200">
              <Scale size={18} />
              Evaluation interpretation
            </div>
            <p className="text-sm leading-7 text-slate-300">
              {active.note} This is the type of evaluation logic expected in a serious GenAI product: compare workflow variants, quantify quality and risk, then decide whether the system is blocked, conditional, or approved for controlled deployment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechnicalBlueprint() {
  const [activeTab, setActiveTab] = useState("api");

  const apiEndpoints = [
    {
      method: "POST",
      path: "/api/documents/ingest",
      purpose: "Upload documents, extract text, chunk content, and attach metadata.",
    },
    {
      method: "POST",
      path: "/api/rag/query",
      purpose: "Run semantic retrieval, rank evidence chunks, and return source-grounded answers.",
    },
    {
      method: "POST",
      path: "/api/agents/run",
      purpose: "Launch triage, summarisation, QC, analytics, and reviewer-routing agents.",
    },
    {
      method: "POST",
      path: "/api/qc/evaluate",
      purpose: "Check hallucination risk, unsupported claims, sensitive content, and compliance constraints.",
    },
    {
      method: "POST",
      path: "/api/reports/generate",
      purpose: "Generate executive reports, scientific briefs, QC tables, and decision memos.",
    },
    {
      method: "GET",
      path: "/api/analytics/adoption",
      purpose: "Return active users, usage trends, approval rates, quality scores, and impact metrics.",
    },
  ];

  const dataSchema = [
    ["document_id", "Unique ID for uploaded or indexed document"],
    ["source_uri", "Original source path, SharePoint link, storage object, or database reference"],
    ["document_type", "Scientific report, SOP, policy, meeting note, clinical summary, portfolio memo"],
    ["chunk_id", "Unique ID for each retrievable text chunk"],
    ["embedding_vector", "Vector representation used for semantic search"],
    ["retrieval_score", "Similarity or ranking score for RAG evidence selection"],
    ["prompt_version", "Prompt template version used for generation"],
    ["model_version", "LLM or embedding model version used"],
    ["qc_status", "Pass, warning, blocked, or human review required"],
    ["reviewer_decision", "Approved, edited, rejected, or escalated"],
    ["audit_timestamp", "Time-stamped record for governance and traceability"],
  ];

  const evaluationRubric = [
    {
      criterion: "Groundedness",
      definition: "Does the output rely on retrieved source evidence rather than unsupported model generation?",
      score: "0 to 5",
    },
    {
      criterion: "Completeness",
      definition: "Does the answer cover all required user questions, document sections, and business context?",
      score: "0 to 5",
    },
    {
      criterion: "Factual consistency",
      definition: "Does the generated answer avoid contradiction with the source material?",
      score: "0 to 5",
    },
    {
      criterion: "Actionability",
      definition: "Can the output support a decision, next step, review, or leadership update?",
      score: "0 to 5",
    },
    {
      criterion: "Risk control",
      definition: "Were sensitive, clinical, regulatory, legal, or financial claims routed to human review?",
      score: "0 to 5",
    },
  ];

  const implementationPlan = [
    "Build FastAPI backend with document ingestion, chunking, vector indexing, RAG querying, agent orchestration, QC scoring, and report generation endpoints.",
    "Connect Azure OpenAI or compatible LLM provider through an abstraction layer so prompts, models, and retrieval settings can be versioned.",
    "Use Databricks or Snowflake-compatible tables for document metadata, audit logs, prompt registry, usage telemetry, and evaluation results.",
    "Use dbt-style transformations for analytics-ready adoption, cost, quality, and impact tables.",
    "Add human-in-the-loop review screens for high-risk outputs and store approval history for auditability.",
    "Deploy frontend through Vercel or Azure Static Web Apps, backend through Azure App Service, Container Apps, or another managed API platform.",
  ];

  return (
    <section className="mx-auto max-w-7xl px-5 py-12">
      <div className="mb-7">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
          Technical implementation blueprint
        </p>
        <h2 className="mt-2 text-3xl font-bold text-white">
          API, schema, evaluation, and deployment design
        </h2>
        <p className="mt-3 max-w-3xl text-slate-300">
          This section shows the technical thinking behind the product, including backend endpoints, governed data schema, evaluation rubric, and an implementation roadmap.
        </p>
      </div>

      <div className="glass rounded-3xl p-6">
        <div className="mb-6 flex flex-wrap gap-3">
          {[
            ["api", "API endpoints"],
            ["schema", "Data schema"],
            ["rubric", "Evaluation rubric"],
            ["plan", "Implementation plan"],
          ].map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`rounded-2xl px-5 py-3 text-sm font-bold transition ${activeTab === key
                ? "bg-cyan-300 text-slate-950"
                : "border border-slate-700 bg-slate-950/70 text-slate-300 hover:border-cyan-300/60"
                }`}
            >
              {label}
            </button>
          ))}
        </div>

        {activeTab === "api" && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="grid gap-4 md:grid-cols-2">
            {apiEndpoints.map((endpoint) => (
              <div key={endpoint.path} className="rounded-2xl border border-slate-700 bg-slate-950/60 p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-lg bg-emerald-400/10 px-3 py-1 text-xs font-black text-emerald-200">
                    {endpoint.method}
                  </span>
                  <code className="rounded-lg bg-slate-900 px-3 py-1 text-xs text-cyan-200">{endpoint.path}</code>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-300">{endpoint.purpose}</p>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === "schema" && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="overflow-hidden rounded-2xl border border-slate-700">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-950 text-slate-300">
                <tr>
                  <th className="p-3">Field</th>
                  <th className="p-3">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {dataSchema.map(([field, purpose]) => (
                  <tr key={field} className="border-t border-slate-800 bg-slate-950/40">
                    <td className="p-3">
                      <code className="rounded-lg bg-slate-900 px-2 py-1 text-cyan-200">{field}</code>
                    </td>
                    <td className="p-3 text-slate-300">{purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}

        {activeTab === "rubric" && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {evaluationRubric.map((item) => (
              <div key={item.criterion} className="rounded-2xl border border-slate-700 bg-slate-950/60 p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-bold text-white">{item.criterion}</h3>
                  <span className="rounded-full bg-violet-400/10 px-3 py-1 text-xs font-bold text-violet-200">
                    {item.score}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.definition}</p>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === "plan" && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
            {implementationPlan.map((step, index) => (
              <div key={step} className="flex items-start gap-4 rounded-2xl bg-slate-950/60 p-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-sm font-black text-slate-950">
                  {index + 1}
                </div>
                <p className="text-sm leading-6 text-slate-300">{step}</p>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}

function UseCaseLibrary() {
  const [selected, setSelected] = useState(0);

  const useCases = [
    {
      title: "Scientific Document Review",
      icon: BookOpen,
      problem: "Scientists spend many hours reviewing papers, internal reports, experimental summaries, and technical documents.",
      workflow: "The system ingests documents, extracts claims, retrieves supporting evidence, summarises findings, flags weak claims, and produces a reviewer-ready scientific brief.",
      value: "Accelerates evidence review while preserving source traceability and expert oversight.",
      outputs: ["Evidence map", "Claim table", "Scientific summary", "QC flags", "Reviewer decision trail"],
    },
    {
      title: "SOP and Policy Intelligence",
      icon: ClipboardCheck,
      problem: "Operational teams need to understand policy changes, SOP differences, compliance requirements, and documentation gaps.",
      workflow: "The app compares documents, identifies changes, summarises implications, checks missing sections, and routes high-risk changes to human review.",
      value: "Improves consistency, compliance awareness, and controlled document review.",
      outputs: ["SOP comparison", "Change summary", "Compliance checklist", "Risk register", "Approval log"],
    },
    {
      title: "Clinical Operations Summaries",
      icon: Activity,
      problem: "Clinical and operational teams handle complex study updates, meeting notes, action items, deviations, and status reports.",
      workflow: "The workflow extracts key decisions, open risks, timelines, owners, dependencies, and generates concise leadership updates.",
      value: "Turns fragmented clinical operations text into structured, decision-ready intelligence.",
      outputs: ["Meeting summary", "Action tracker", "Risk summary", "Timeline update", "Executive memo"],
    },
    {
      title: "Research Portfolio Intelligence",
      icon: Layers,
      problem: "Leaders need a clear view across projects, documents, risks, opportunities, milestones, and resource priorities.",
      workflow: "The system aggregates project documents, classifies themes, extracts milestones, detects risks, and creates portfolio-level dashboards.",
      value: "Supports better prioritisation, clearer communication, and faster strategic decisions.",
      outputs: ["Portfolio dashboard", "Milestone map", "Risk heatmap", "Opportunity summary", "Decision brief"],
    },
    {
      title: "Enterprise Knowledge Management",
      icon: Database,
      problem: "Important organisational knowledge is often scattered across PDFs, Word documents, slide decks, emails, and shared drives.",
      workflow: "The RAG layer indexes knowledge, retrieves grounded answers, records sources, and captures user feedback for continuous improvement.",
      value: "Makes enterprise knowledge searchable, explainable, reusable, and governed.",
      outputs: ["RAG assistant", "Source-linked answers", "Knowledge graph", "User feedback", "Usage analytics"],
    },
    {
      title: "Manufacturing and Quality Narratives",
      icon: Settings,
      problem: "Manufacturing, quality, and technical teams must interpret deviations, investigations, root causes, and corrective actions.",
      workflow: "The system summarises deviation narratives, extracts root-cause hypotheses, checks evidence, and supports structured CAPA-style reporting.",
      value: "Improves narrative consistency and reduces manual drafting burden while retaining expert review.",
      outputs: ["Deviation summary", "Root-cause table", "CAPA draft", "Evidence checklist", "Reviewer notes"],
    },
  ];

  const active = useCases[selected];
  const Icon = active.icon;

  return (
    <section className="mx-auto max-w-7xl px-5 py-12">
      <div className="mb-7">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
          Business use case library
        </p>
        <h2 className="mt-2 text-3xl font-bold text-white">
          Practical GenAI workflows for enterprise and biopharma teams
        </h2>
        <p className="mt-3 max-w-3xl text-slate-300">
          This section translates the technology into realistic use cases that business leaders, scientific teams, product teams, and hiring managers can immediately understand.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
        <div className="soft-card rounded-3xl p-5">
          <div className="space-y-3">
            {useCases.map((item, index) => {
              const ItemIcon = item.icon;
              const isActive = selected === index;
              return (
                <button
                  key={item.title}
                  onClick={() => setSelected(index)}
                  className={`w-full rounded-2xl border p-4 text-left transition ${isActive
                    ? "border-amber-300/60 bg-amber-400/10"
                    : "border-slate-700 bg-slate-950/50 hover:border-slate-500"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`rounded-xl p-2 ${isActive ? "bg-amber-400/20 text-amber-200" : "bg-slate-800 text-slate-300"}`}>
                      <ItemIcon size={18} />
                    </div>
                    <span className="font-bold text-white">{item.title}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <motion.div
          key={active.title}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-3xl p-6"
        >
          <div className="flex items-start gap-4">
            <div className="rounded-2xl bg-amber-400/10 p-4 text-amber-200">
              <Icon size={30} />
            </div>
            <div>
              <h3 className="text-2xl font-black text-white">{active.title}</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.25em] text-amber-200">
                Business-facing GenAI workflow
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-950/60 p-4">
              <div className="mb-2 text-sm font-bold text-rose-200">Problem</div>
              <p className="text-sm leading-6 text-slate-300">{active.problem}</p>
            </div>
            <div className="rounded-2xl bg-slate-950/60 p-4">
              <div className="mb-2 text-sm font-bold text-cyan-200">Workflow</div>
              <p className="text-sm leading-6 text-slate-300">{active.workflow}</p>
            </div>
            <div className="rounded-2xl bg-slate-950/60 p-4">
              <div className="mb-2 text-sm font-bold text-emerald-200">Business value</div>
              <p className="text-sm leading-6 text-slate-300">{active.value}</p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-950/60 p-5">
            <div className="mb-3 flex items-center gap-2 text-sm font-bold text-white">
              <Rocket size={18} className="text-amber-200" />
              Generated outputs
            </div>
            <div className="grid gap-3 md:grid-cols-5">
              {active.outputs.map((output) => (
                <div
                  key={output}
                  className="rounded-xl bg-slate-900 p-3 text-center text-xs font-semibold text-slate-300"
                >
                  {output}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function EndToEndWorkflowSimulator() {
  const [running, setRunning] = useState(false);
  const [completedSteps, setCompletedSteps] = useState([]);

  const steps = [
    {
      title: "Document ingestion",
      icon: FileText,
      detail: "Enterprise documents are parsed, cleaned, chunked, and tagged with metadata.",
      output: "12 documents ingested, 248 chunks created, 100% metadata coverage.",
    },
    {
      title: "NLP extraction",
      icon: Brain,
      detail: "Named entities, topics, claims, risks, and business questions are extracted.",
      output: "43 entities, 11 claims, 6 risks, and 4 business questions detected.",
    },
    {
      title: "RAG retrieval",
      icon: Search,
      detail: "Relevant chunks are ranked using semantic similarity and source-grounding rules.",
      output: "Top 9 evidence chunks selected with 92% retrieval relevance.",
    },
    {
      title: "Agentic reasoning",
      icon: Bot,
      detail: "Specialist agents coordinate summarisation, evidence review, risk analysis, and report drafting.",
      output: "Triage, evidence, QC, analytics, and reviewer agents completed.",
    },
    {
      title: "AI quality control",
      icon: ShieldCheck,
      detail: "Outputs are checked for unsupported claims, hallucination risk, missing evidence, and policy issues.",
      output: "2 claims flagged, hallucination risk low, policy score 96%.",
    },
    {
      title: "Human validation",
      icon: Eye,
      detail: "High-impact outputs are routed to a reviewer before release.",
      output: "Scientific reviewer approval captured with audit trail.",
    },
    {
      title: "Executive report",
      icon: ClipboardCheck,
      detail: "A leadership-ready report is generated with summary, impact, risks, and recommendations.",
      output: "Executive report generated with decision memo and impact dashboard.",
    },
  ];

  const runSimulation = () => {
    setRunning(true);
    setCompletedSteps([]);
    steps.forEach((_, index) => {
      setTimeout(() => {
        setCompletedSteps((prev) => [...prev, index]);
        if (index === steps.length - 1) {
          setTimeout(() => setRunning(false), 500);
        }
      }, 450 * (index + 1));
    });
  };

  return (
    <section className="mx-auto max-w-7xl px-5 py-12">
      <div className="glass rounded-3xl p-6">
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Live workflow simulator
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white">
              End-to-end GenAI document intelligence pipeline
            </h2>
            <p className="mt-4 text-slate-300 leading-7">
              This simulator demonstrates the full enterprise workflow: document ingestion, NLP extraction, RAG retrieval, custom agents, AI-output QC, human-in-the-loop validation, and executive report generation.
            </p>

            <button
              onClick={runSimulation}
              disabled={running}
              className="mt-6 rounded-2xl bg-gradient-to-r from-cyan-300 to-violet-400 px-6 py-4 font-black text-slate-950 shadow-lg shadow-cyan-950/30 transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {running ? "Running enterprise workflow..." : "Run full GenAI workflow"}
            </button>

            <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-950/60 p-5">
              <div className="mb-3 flex items-center gap-2 text-sm font-bold text-emerald-200">
                <Gauge size={18} />
                Workflow readiness summary
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl bg-slate-900 p-3">
                  <div className="text-2xl font-black text-white">{completedSteps.length}/{steps.length}</div>
                  <div className="text-xs text-slate-400">steps completed</div>
                </div>
                <div className="rounded-xl bg-slate-900 p-3">
                  <div className="text-2xl font-black text-emerald-200">
                    {completedSteps.length === steps.length ? "Ready" : "In progress"}
                  </div>
                  <div className="text-xs text-slate-400">release status</div>
                </div>
                <div className="rounded-xl bg-slate-900 p-3">
                  <div className="text-2xl font-black text-cyan-200">
                    {Math.round((completedSteps.length / steps.length) * 100)}%
                  </div>
                  <div className="text-xs text-slate-400">completion</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const done = completedSteps.includes(index);
              return (
                <motion.div
                  key={step.title}
                  animate={{
                    opacity: done || index === completedSteps.length ? 1 : 0.55,
                    scale: done ? 1.01 : 1,
                  }}
                  className={`rounded-2xl border p-4 transition-all ${done
                    ? "border-emerald-300/50 bg-emerald-400/10"
                    : "border-slate-700 bg-slate-950/50"
                    }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`rounded-2xl p-3 ${done ? "bg-emerald-400/20 text-emerald-200" : "bg-slate-800 text-slate-300"}`}>
                      <Icon size={22} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="font-bold text-white">{step.title}</h3>
                        <span className={`rounded-full px-3 py-1 text-xs font-bold ${done ? "bg-emerald-400/20 text-emerald-100" : "bg-slate-800 text-slate-400"}`}>
                          {done ? "completed" : "waiting"}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{step.detail}</p>
                      {done && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-3 rounded-xl bg-slate-950/70 p-3 text-sm text-emerald-100"
                        >
                          {step.output}
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function EnterpriseConsole() {
  const readinessScore = Math.round(
    (deploymentChecklist.filter((item) => item[1]).length / deploymentChecklist.length) * 100
  );

  const cvText =
    "Built an enterprise GenAI Document Intelligence Studio demonstrating RAG workflows, custom agents, LLMOps, prompt registry, NLP pipelines, automated report generation, AI-output QC, adoption analytics, A/B testing, executive dashboards, Azure/OpenAI-ready architecture, Databricks/Snowflake/dbt-compatible design, human-in-the-loop validation, and responsible AI governance.";

  return (
    <section className="mx-auto max-w-7xl px-5 py-12">
      <div className="mb-7">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Enterprise operating console</p>
        <h2 className="mt-2 text-3xl font-bold text-white">From prototype to governed GenAI data product</h2>
        <p className="mt-3 max-w-3xl text-slate-300">
          This section makes the app look like a practical enterprise system, not only a visual demo. It shows prompt governance, reviewer routing, deployment readiness, release monitoring, and business value articulation.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[.9fr_1.1fr]">
        <div className="soft-card rounded-3xl p-6">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-white">Deployment readiness</h3>
              <p className="mt-1 text-sm text-slate-400">Governed release checklist for enterprise GenAI workflows.</p>
            </div>
            <div className="rounded-3xl bg-emerald-400/10 px-5 py-4 text-center">
              <div className="text-3xl font-black text-emerald-200">{readinessScore}%</div>
              <div className="text-xs uppercase tracking-wide text-emerald-300">ready</div>
            </div>
          </div>

          <div className="space-y-3">
            {deploymentChecklist.map(([label, done]) => (
              <div key={label} className="flex items-center justify-between rounded-2xl bg-slate-950/60 p-3">
                <div className="flex items-center gap-3">
                  {done ? (
                    <CheckCircle2 className="text-emerald-300" size={18} />
                  ) : (
                    <AlertTriangle className="text-amber-300" size={18} />
                  )}
                  <span className="text-sm text-slate-300">{label}</span>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-bold ${done ? "bg-emerald-400/10 text-emerald-200" : "bg-amber-400/10 text-amber-200"}`}>
                  {done ? "complete" : "pending"}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          <div className="soft-card rounded-3xl p-6">
            <div className="mb-4 flex items-center gap-3">
              <MessageSquareText className="text-violet-300" />
              <h3 className="text-xl font-bold text-white">Prompt registry and evaluation</h3>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {promptRegistry.map((prompt) => (
                <div key={prompt.version} className="rounded-2xl border border-slate-700 bg-slate-950/60 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="font-bold text-white">{prompt.version}</div>
                    <span className="rounded-full bg-cyan-400/10 px-2 py-1 text-xs text-cyan-200">{prompt.status}</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{prompt.purpose}</p>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-800">
                    <div className="h-full rounded-full bg-gradient-to-r from-sky-400 to-violet-400" style={{ width: `${prompt.score}%` }} />
                  </div>
                  <div className="mt-2 text-xs text-slate-400">Evaluation score: {prompt.score}%</div>
                </div>
              ))}
            </div>
          </div>

          <div className="soft-card rounded-3xl p-6">
            <div className="mb-4 flex items-center gap-3">
              <Eye className="text-emerald-300" />
              <h3 className="text-xl font-bold text-white">Human reviewer queue</h3>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-700">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-950 text-slate-300">
                  <tr>
                    <th className="p-3">Output</th>
                    <th className="p-3">Risk</th>
                    <th className="p-3">Reviewer</th>
                    <th className="p-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {reviewerQueue.map((row) => (
                    <tr key={row.item} className="border-t border-slate-800 bg-slate-950/40">
                      <td className="p-3 text-slate-200">{row.item}</td>
                      <td className="p-3">
                        <span className={`rounded-full px-2 py-1 text-xs font-bold ${row.risk === "High" ? "bg-rose-400/10 text-rose-200" : row.risk === "Medium" ? "bg-amber-400/10 text-amber-200" : "bg-emerald-400/10 text-emerald-200"}`}>
                          {row.risk}
                        </span>
                      </td>
                      <td className="p-3 text-slate-400">{row.reviewer}</td>
                      <td className="p-3 text-slate-300">{row.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_.9fr]">
        <div className="soft-card rounded-3xl p-6">
          <div className="mb-4 flex items-center gap-3">
            <Rocket className="text-sky-300" />
            <h3 className="text-xl font-bold text-white">Business value case</h3>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {valueCase.map((item) => (
              <div key={item.label} className="rounded-2xl bg-slate-950/60 p-4">
                <div className="font-bold text-white">{item.label}</div>
                <p className="mt-2 text-sm leading-6 text-slate-400">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="soft-card rounded-3xl p-6">
          <div className="mb-4 flex items-center gap-3">
            <ClipboardCheck className="text-cyan-300" />
            <h3 className="text-xl font-bold text-white">Portfolio-ready project statement</h3>
          </div>
          <p className="rounded-2xl border border-slate-700 bg-slate-950/70 p-4 text-sm leading-7 text-slate-300">
            {cvText}
          </p>
          <div className="mt-4 rounded-2xl bg-emerald-400/10 p-4 text-sm leading-6 text-emerald-100">
            See GitHub README
          </div>
        </div>
      </div>
    </section>
  );
}

function ExecutiveCharts() {

  return (

    <section className="mx-auto max-w-7xl px-5 py-12">

      <div className="mb-7">

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Executive analytics</p>

        <h2 className="mt-2 text-3xl font-bold text-white">Adoption, quality, impact, and A/B testing in one dashboard</h2>

        <p className="mt-3 max-w-3xl text-slate-300">

          This section demonstrates the ability to measure GenAI adoption, quantify business value, evaluate workflow variants, and communicate results clearly to non-technical leaders.

        </p>

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        <div className="soft-card rounded-2xl p-5">

          <div className="mb-4 flex items-center gap-3 text-white">

            <Activity className="text-sky-300" />

            <h3 className="font-bold">Adoption analytics</h3>

          </div>

          <div className="h-72">

            <ResponsiveContainer>

              <AreaChart data={adoptionData}>

                <defs>

                  <linearGradient id="users" x1="0" y1="0" x2="0" y2="1">

                    <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.8} />

                    <stop offset="95%" stopColor="#60a5fa" stopOpacity={0.05} />

                  </linearGradient>

                </defs>

                <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,.18)" />

                <XAxis dataKey="month" stroke="#94a3b8" />

                <YAxis stroke="#94a3b8" />

                <Tooltip />

                <Area type="monotone" dataKey="users" stroke="#60a5fa" fillOpacity={1} fill="url(#users)" />

                <Line type="monotone" dataKey="reports" stroke="#2dd4bf" strokeWidth={2} />

                <Line type="monotone" dataKey="approvals" stroke="#a78bfa" strokeWidth={2} />

              </AreaChart>

            </ResponsiveContainer>

          </div>

        </div>

        <div className="soft-card rounded-2xl p-5">

          <div className="mb-4 flex items-center gap-3 text-white">

            <ShieldCheck className="text-emerald-300" />

            <h3 className="font-bold">AI output quality and governance</h3>

          </div>

          <div className="h-72">

            <ResponsiveContainer>

              <RadarChart data={qualityData}>

                <PolarGrid stroke="rgba(148,163,184,.2)" />

                <PolarAngleAxis dataKey="name" tick={{ fill: "#cbd5e1", fontSize: 11 }} />

                <PolarRadiusAxis tick={{ fill: "#94a3b8", fontSize: 10 }} />

                <Radar dataKey="value" stroke="#2dd4bf" fill="#2dd4bf" fillOpacity={0.35} />

                <Tooltip />

              </RadarChart>

            </ResponsiveContainer>

          </div>

        </div>

        <div className="soft-card rounded-2xl p-5">

          <div className="mb-4 flex items-center gap-3 text-white">

            <FlaskConical className="text-violet-300" />

            <h3 className="font-bold">A/B test, workflow quality score</h3>

          </div>

          <div className="h-72">

            <ResponsiveContainer>

              <BarChart data={abData}>

                <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,.18)" />

                <XAxis dataKey="variant" stroke="#94a3b8" tick={{ fontSize: 10 }} />

                <YAxis stroke="#94a3b8" />

                <Tooltip />

                <Bar dataKey="score" fill="#a78bfa" radius={[10, 10, 0, 0]} />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

        <div className="soft-card rounded-2xl p-5">

          <div className="mb-4 flex items-center gap-3 text-white">

            <Rocket className="text-amber-300" />

            <h3 className="font-bold">Impact measurement, before versus after GenAI workflow</h3>

          </div>

          <div className="h-72">

            <ResponsiveContainer>

              <BarChart data={impactData}>

                <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,.18)" />

                <XAxis dataKey="metric" stroke="#94a3b8" tick={{ fontSize: 10 }} />

                <YAxis stroke="#94a3b8" />

                <Tooltip />

                <Bar dataKey="before" fill="#64748b" radius={[10, 10, 0, 0]} />

                <Bar dataKey="after" fill="#22c55e" radius={[10, 10, 0, 0]} />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>

    </section>

  );

}


const aAideaLinks = [
  {
    title: "aAidea Website",
    category: "Main company website",
    description:
      "AI, scientific software, biomedical intelligence, document automation, and digital innovation services.",
    href: "https://a-aidea.com",
    icon: Globe2,
    accent: "from-sky-400 to-cyan-300",
  },
  {
    title: "GenAI Document Intelligence Studio",
    category: "Enterprise GenAI and document intelligence",
    description:
      "Document intelligence, RAG workflows, custom agents, LLMOps monitoring, output QC, and adoption analytics.",
    href: "https://aidea-genai-document-intelligence-s.vercel.app/",
    icon: FileText,
    accent: "from-violet-400 to-fuchsia-300",
  },
  {
    title: "ALT Vulnerability Map",
    category: "Cancer biology and DNA repair",
    description:
      "AI-assisted exploration of ALT-positive cancer vulnerabilities, therapeutic targets, and synthetic-lethality logic.",
    href: "https://alt-vulnmap.vercel.app/",
    icon: Atom,
    accent: "from-rose-400 to-orange-300",
  },
  {
    title: "Dynamic Protein Systems Explorer",
    category: "Protein systems and structural biology",
    description:
      "Interactive exploration of protein motion, structural states, cryo-EM interpretation, and AI-guided biology.",
    href: "https://dynamic-protein-systems-explorer.vercel.app/",
    icon: Network,
    accent: "from-emerald-400 to-teal-300",
  },
  {
    title: "MitoGatekeeper Systems Studio",
    category: "Mitochondrial bioenergetics",
    description:
      "Systems-level modelling of mitochondrial ATP regulation, NADH logic, redox pressure, and bioenergetic control.",
    href: "https://mitogatekeeper-systems-studio.vercel.app/",
    icon: HeartPulse,
    accent: "from-lime-400 to-emerald-300",
  },
  {
    title: "Neural-Net Forecasting Studio",
    category: "Forecasting and business analytics",
    description:
      "Neural network forecasting, predictive analytics, baseline comparison, and decision-support dashboards.",
    href: "https://neural-net-forecasting-studio.vercel.app/",
    icon: LineChart,
    accent: "from-blue-400 to-indigo-300",
  },
  {
    title: "Plato’s Cave Philosophy Studio",
    category: "Interactive education and philosophy",
    description:
      "A visual learning platform connecting perception, truth, knowledge, philosophy, and modern digital interpretation.",
    href: "https://platos-cave-philosophy-studio.vercel.app/",
    icon: Landmark,
    accent: "from-amber-400 to-yellow-300",
  },
  {
    title: "Wedding Planner App",
    category: "Planning and productivity",
    description:
      "Budgeting, guest management, schedule planning, event workflow, and timeline coordination.",
    href: "https://wedding-planner-app-bice.vercel.app/",
    icon: CalendarDays,
    accent: "from-pink-400 to-rose-300",
  },
];

function AAideaEcosystem() {
  return (
    <section id="ecosystem" className="mx-auto max-w-7xl px-5 py-12">
      <div className="mb-7">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-300">
          aAidea ecosystem
        </p>
        <h2 className="mt-2 text-3xl font-bold text-white">
          Connected AI products for enterprise, science, and decision support
        </h2>
        <p className="mt-3 max-w-3xl text-slate-300">
          This GenAI studio is part of the wider aAidea portfolio, connecting enterprise AI,
          biomedical intelligence, scientific software, forecasting, document automation,
          and interactive decision-support products.
        </p>
      </div>

      <div className="glass rounded-3xl p-6">
        <div className="mb-6 rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-cyan-400/10 to-violet-400/10 p-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-cyan-300/10 p-4 text-cyan-200">
                <Globe2 size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">
                  Explore the wider aAidea platform
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                  Recruiters, collaborators, and clients can move directly from this
                  enterprise GenAI demonstration to related aAidea products in biomedical AI,
                  protein systems, mitochondrial biology, forecasting, and decision support.
                </p>
              </div>
            </div>

            <a
              href="https://a-aidea.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-5 py-3 font-black text-slate-950 shadow-lg shadow-cyan-950/30 transition hover:scale-[1.02]"
            >
              Visit aAidea website
              <ExternalLink size={18} />
            </a>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {aAideaLinks.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.015 }}
                className="group relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-950/70 p-5 shadow-xl shadow-slate-950/30 transition hover:border-cyan-300/50"
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.accent}`} />

                <div className="flex items-start justify-between gap-4">
                  <div className={`rounded-2xl bg-gradient-to-br ${item.accent} p-3 text-slate-950 shadow-lg`}>
                    <Icon size={24} />
                  </div>
                  <div className="rounded-full border border-slate-700 bg-slate-900 p-2 text-slate-300 transition group-hover:border-cyan-300 group-hover:text-cyan-200">
                    <ExternalLink size={15} />
                  </div>
                </div>

                <div className="mt-5">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">
                    {item.category}
                  </p>
                  <h3 className="mt-2 text-lg font-black leading-tight text-white group-hover:text-cyan-100">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-black text-cyan-200">
                  Open app
                  <ExternalLink size={15} />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}


function App() {

  const [documentText, setDocumentText] = useState(

    "Upload or paste an enterprise document, clinical summary, scientific report, SOP, meeting transcript, or business memo. The app simulates summarisation, RAG evidence extraction, QC review, adoption tracking, and human approval."

  );

  const simulatedSummary = useMemo(() => {

    const words = documentText.split(/\s+/).filter(Boolean).length;

    return {

      words,

      risk: words > 80 ? "Medium" : "Low",

      confidence: words > 50 ? 88 : 76,

      reviewer: words > 80 ? "Human review required" : "Eligible for rapid review",

    };

  }, [documentText]);

  const reportSections = [

    "Executive summary",

    "Source-grounded evidence map",

    "Key claims and confidence scores",

    "Hallucination and unsupported-claim checks",

    "Human reviewer decision",

    "Business impact estimate",

    "Ethics and governance notes",

  ];

  return (

    <div className="min-h-screen text-slate-100">

      <header className="mx-auto max-w-7xl px-5 py-6">

        <nav className="glass flex flex-col gap-4 rounded-3xl px-5 py-4 md:flex-row md:items-center md:justify-between">

          <div className="flex items-center gap-3">

            <div className="rounded-2xl bg-gradient-to-br from-sky-400 to-violet-500 p-3 text-white shadow-lg">

              <Sparkles size={24} />

            </div>

            <div>

              <div className="text-lg font-extrabold tracking-tight text-white">aAidea</div>

              <div className="text-xs uppercase tracking-[0.25em] text-slate-400">GenAI Document Intelligence Studio</div>

            </div>

          </div>

          <div className="flex flex-wrap gap-2 text-xs">

            {["RAG", "Agents", "LLMOps", "QC", "A/B Testing", "Ethics"].map((item) => (

              <span key={item} className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-slate-300">

                {item}

              </span>

            ))}

          </div>

        </nav>

      </header>

      <main>

        <section className="mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[1.08fr_.92fr] lg:items-center">

          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.55 }}>

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100">

              <span className="pulse-dot h-2 w-2 rounded-full bg-cyan-300" />

              Enterprise-ready GenAI, NLP, RAG, agents, and governed AI analytics

            </div>

            <h1 className="text-4xl font-black leading-tight text-white md:text-6xl">

              A <span className="gradient-text">Business-Ready GenAI Studio</span> for Document Intelligence, Agents, and Analytics.

            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">

              This app is designed as a demonstration for enterprise GenAI data science. It shows document intelligence, custom agents, RAG workflows, LLMOps, prompt engineering, NLP analytics, output QC, human validation, adoption analytics, A/B testing, impact measurement, executive reporting, and ethical governance.

            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <a href="#studio" className="rounded-2xl bg-sky-400 px-5 py-3 font-bold text-slate-950 shadow-lg shadow-sky-500/20">

                Open document studio

              </a>

              <a href="#ecosystem" className="rounded-2xl border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 font-bold text-cyan-100 transition hover:border-cyan-300">View aAidea ecosystem</a>

              <a href="#architecture" className="rounded-2xl border border-slate-600 bg-slate-900 px-5 py-3 font-bold text-white">

                View architecture

              </a>

            </div>

          </motion.div>

          <motion.div

            initial={{ opacity: 0, scale: 0.94 }}

            animate={{ opacity: 1, scale: 1 }}

            transition={{ duration: 0.65 }}

            className="glass rounded-3xl p-5"

          >

            <div className="grid grid-cols-2 gap-4">

              <StatCard icon={FileText} label="Documents processed" value="14,820" note="Scientific, enterprise, and operational content" />

              <StatCard icon={Bot} label="Agent workflows" value="38" note="Custom agent patterns with review gates" />

              <StatCard icon={ShieldCheck} label="QC pass rate" value="91%" note="Source-grounded and human-reviewed outputs" />

              <StatCard icon={Rocket} label="Estimated time saved" value="58%" note="Measured through workflow comparison" />

            </div>

          </motion.div>

        </section>

        <section id="studio" className="mx-auto max-w-7xl px-5 py-12">

          <div className="glass rounded-3xl p-6">

            <div className="grid gap-6 lg:grid-cols-[1fr_.85fr]">

              <div>

                <div className="mb-4 flex items-center gap-3">

                  <div className="rounded-2xl bg-sky-400/10 p-3 text-sky-300">

                    <BookOpen />

                  </div>

                  <div>

                    <h2 className="text-2xl font-bold text-white">Document intelligence simulator</h2>

                    <p className="text-sm text-slate-400">Paste text to simulate summarisation, RAG evidence extraction, QC, and human review routing.</p>

                  </div>

                </div>

                <textarea

                  value={documentText}

                  onChange={(e) => setDocumentText(e.target.value)}

                  className="h-64 w-full rounded-2xl border border-slate-700 bg-slate-950/80 p-4 text-sm leading-6 text-slate-200 outline-none focus:border-sky-400"

                />

                <div className="mt-4 grid gap-3 md:grid-cols-4">

                  <div className="rounded-2xl bg-slate-950/60 p-4">

                    <div className="text-xs text-slate-400">Word count</div>

                    <div className="mt-1 text-2xl font-bold text-white">{simulatedSummary.words}</div>

                  </div>

                  <div className="rounded-2xl bg-slate-950/60 p-4">

                    <div className="text-xs text-slate-400">QC risk</div>

                    <div className="mt-1 text-2xl font-bold text-amber-200">{simulatedSummary.risk}</div>

                  </div>

                  <div className="rounded-2xl bg-slate-950/60 p-4">

                    <div className="text-xs text-slate-400">Confidence</div>

                    <div className="mt-1 text-2xl font-bold text-emerald-200">{simulatedSummary.confidence}%</div>

                  </div>

                  <div className="rounded-2xl bg-slate-950/60 p-4">

                    <div className="text-xs text-slate-400">Review status</div>

                    <div className="mt-1 text-sm font-bold text-sky-200">{simulatedSummary.reviewer}</div>

                  </div>

                </div>

              </div>

              <div className="soft-card rounded-3xl p-5">

                <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-white">

                  <ClipboardCheck className="text-emerald-300" />

                  Automated report output

                </h3>

                <div className="space-y-3">

                  {reportSections.map((section, idx) => (

                    <motion.div

                      key={section}

                      initial={{ opacity: 0, x: 8 }}

                      whileInView={{ opacity: 1, x: 0 }}

                      transition={{ delay: idx * 0.05 }}

                      viewport={{ once: true }}

                      className="rounded-2xl border border-slate-700 bg-slate-950/50 p-4"

                    >

                      <div className="flex items-center justify-between">

                        <span className="font-semibold text-slate-100">{section}</span>

                        <CheckCircle2 className="text-emerald-300" size={18} />

                      </div>

                      <p className="mt-2 text-sm leading-6 text-slate-400">

                        Generated with source traceability, model versioning, reviewer accountability, and confidence metadata.

                      </p>

                    </motion.div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </section>

        <section className="mx-auto max-w-7xl px-5 py-12">

          <div className="mb-7">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">Capability map</p>

            <h2 className="mt-2 text-3xl font-bold text-white">Interactive GenAI Product Capabilities</h2>

            <p className="mt-3 max-w-3xl text-slate-300">

              Each module is written in recruiter-friendly language so the app can be used as a portfolio demonstration for enterprise GenAI, NLP, AI governance, and biopharma-ready data products.

            </p>

          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

            {modules.map((module, index) => (

              <ModuleCard key={module.title} module={module} index={index} />

            ))}

          </div>

        </section>

        <section className="mx-auto max-w-7xl px-5 py-12">

          <div className="grid gap-6 lg:grid-cols-3">

            <WorkflowLane

              title="RAG and NLP workflow"

              icon={Search}

              items={[

                "Parse documents into clean chunks with metadata.",

                "Generate embeddings and rank evidence by semantic relevance.",

                "Retrieve grounded passages before response generation.",

                "Attach source traceability and confidence scoring.",

                "Flag missing evidence, weak claims, and conflicting content.",

              ]}

            />

            <WorkflowLane

              title="Agentic decision workflow"

              icon={Workflow}

              items={[

                "Triage agent identifies document type and task intent.",

                "Research agent extracts claims and supporting evidence.",

                "QC agent checks hallucination risk and policy issues.",

                "Analytics agent converts outputs into dashboards.",

                "Human reviewer approves, edits, or rejects the final result.",

              ]}

            />

            <WorkflowLane

              title="LLMOps workflow"

              icon={Settings}

              items={[

                "Track prompt templates, model versions, and retrieval settings.",

                "Monitor latency, cost, failure rate, and user satisfaction.",

                "Evaluate answer quality using structured rubrics.",

                "Compare variants using A/B testing and impact metrics.",

                "Maintain audit-ready logs for governance and compliance.",

              ]}

            />

          </div>

        </section>

        <ROICalculator />

        <RAGEvidenceExplorer />

        <DocumentWorkspace />

        <EvaluationRiskLab />

        <TechnicalBlueprint />

        <UseCaseLibrary />

        <EndToEndWorkflowSimulator />

        <EnterpriseConsole />

        <ExecutiveCharts />

        <section id="architecture" className="mx-auto max-w-7xl px-5 py-12">

          <div className="mb-7">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Architecture</p>

            <h2 className="mt-2 text-3xl font-bold text-white">Azure/OpenAI-ready, Databricks/Snowflake/dbt-compatible architecture</h2>

            <p className="mt-3 max-w-3xl text-slate-300">

              This is a portfolio architecture diagram written as an implementation story for enterprise GenAI document products.

            </p>

          </div>

          <div className="glass rounded-3xl p-6">

            <div className="grid gap-4 md:grid-cols-3">

              {architectureNodes.map(([title, detail], idx) => (

                <motion.div

                  key={title}

                  initial={{ opacity: 0, y: 12 }}

                  whileInView={{ opacity: 1, y: 0 }}

                  transition={{ delay: idx * 0.04 }}

                  viewport={{ once: true }}

                  className="rounded-2xl border border-slate-700 bg-slate-950/60 p-4"

                >

                  <div className="mb-2 flex items-center gap-2">

                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-400 text-xs font-black text-slate-950">

                      {idx + 1}

                    </div>

                    <h3 className="font-bold text-white">{title}</h3>

                  </div>

                  <p className="text-sm leading-6 text-slate-400">{detail}</p>

                </motion.div>

              ))}

            </div>

          </div>

        </section>

        <section className="mx-auto max-w-7xl px-5 py-12">

          <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">

            <div className="soft-card rounded-3xl p-6">

              <div className="mb-4 flex items-center gap-3">

                <Scale className="text-amber-300" />

                <h2 className="text-2xl font-bold text-white">Data ethics and human validation</h2>

              </div>

              <p className="text-slate-300 leading-7">

                The system is designed around responsible AI: no blind automation for high-impact outputs, no unsupported claims, no hidden provenance, and no release of sensitive material without review.

              </p>

              <div className="mt-5 space-y-3">

                {ethicsItems.map((item) => (

                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-950/50 p-4 text-sm text-slate-300">

                    <Lock className="mt-0.5 shrink-0 text-amber-300" size={17} />

                    <span>{item}</span>

                  </div>

                ))}

              </div>

            </div>

            <div className="soft-card rounded-3xl p-6">

              <div className="mb-4 flex items-center gap-3">

                <Cpu className="text-cyan-300" />

                <h2 className="text-2xl font-bold text-white">Business-facing data product narrative</h2>

              </div>

              <div className="space-y-4 text-sm leading-7 text-slate-300">

                <p>

                  This product converts unstructured knowledge work into measurable enterprise value. It helps teams find evidence faster, summarise large document sets, reduce repeated manual review, improve output consistency, and create executive-ready reports with quality controls.

                </p>

                <p>

                  For a biopharma or healthcare organisation, the same architecture can support scientific literature review, SOP intelligence, meeting transcript summarisation, research portfolio intelligence, medical affairs knowledge management, clinical operations documentation, manufacturing deviation narratives, and internal GenAI adoption analytics.

                </p>

                <p>

                  The app is intentionally designed to communicate both technical depth and business relevance: the dashboard shows what was built, how it is governed, how quality is measured, and how leaders can evaluate return on investment.

                </p>

              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-2">

                {[

                  ["Technical users", "Prompt tests, RAG settings, model monitoring, QC traces"],

                  ["Business leaders", "Adoption, impact, risk, time saved, value narrative"],

                  ["Data teams", "Lakehouse, Snowflake, Databricks, dbt-style transformations"],

                  ["Governance teams", "Audit logs, reviewer status, policy checks, ethics gates"],

                ].map(([audience, value]) => (

                  <div key={audience} className="rounded-2xl bg-slate-950/60 p-4">

                    <div className="font-bold text-white">{audience}</div>

                    <div className="mt-1 text-slate-400">{value}</div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>

        <AAideaEcosystem />

        <footer className="mx-auto max-w-7xl px-5 py-10">
          <div className="glass rounded-3xl p-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-center">
              <div>
                <div className="text-xl font-black text-white">aAidea GenAI Document Intelligence Studio</div>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
                  Portfolio demonstration for enterprise GenAI document intelligence, NLP, RAG,
                  custom agents, LLMOps, automated reporting, human-in-the-loop validation,
                  adoption analytics, A/B testing, impact measurement, and responsible AI governance.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 lg:justify-end">
                {aAideaLinks.slice(0, 6).map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/70 px-3 py-2 text-xs font-semibold text-slate-300 transition hover:border-cyan-300 hover:text-cyan-100"
                  >
                    {item.title}
                    <ExternalLink size={12} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>

      </main>

    </div>

  );

}

export default App;


createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
