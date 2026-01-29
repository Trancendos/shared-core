export interface DataSource {
  source_type: string; // e.g. "user-upload", "licensed-dataset", "synthetic"
  identifier: string;  // e.g. file path, dataset ID
  license?: string;
  generated_by_ai?: boolean;
  human_reviewed?: boolean;
}

export interface ModelReference {
  model_id: string;
  provider: string; // e.g. "tensorflow", "openai", "anthropic"
  version?: string;
}

export interface ComplianceCheckRequest {
  invocation_id: string;
  user_id: string;
  tenant_id: string;
  agent: string;
  capability: string;
  data_residency?: string;
  consent_tokens: string[];
  data_sources: DataSource[];
}

export interface ComplianceCheckResponse {
  approved: boolean;
  reason?: string;
}

export interface CapabilityInvocationLog {
  invocation_id: string;
  user_id: string;
  tenant_id: string;
  agent: string;
  capability: string;
  model_used: ModelReference;
  timestamp: string; // ISO8601
  latency_ms: number;
  data_sources: DataSource[];
  approved: boolean;
}
