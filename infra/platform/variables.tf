variable "github_token" {
  description = "Fine-grained GitHub token for Terraform (repository administration, environments, variables)."
  type        = string
  sensitive   = true
}