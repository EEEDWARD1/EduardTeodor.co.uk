variable "github_token" {
  description = "Fine-grained GitHub token for Terraform (repository administration, environments, variables)."
  type        = string
  sensitive   = true
}

variable "cloudflare_api_token" {
    description = "Cloudflare token for Terraform, scoped per managed resource."
    type = string
    sensitive = true
}