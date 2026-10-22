resource "github_repository_environment" "production" {
  repository        = "EduardTeodor.co.uk"
  environment       = "Production"
  can_admins_bypass = true
  wait_timer        = 0

  deployment_branch_policy {
    protected_branches     = false
    custom_branch_policies = true
  }

  lifecycle {
    prevent_destroy = true
  }
}

resource "github_actions_environment_variable" "cloudflare_account_id" {
  repository    = "EduardTeodor.co.uk"
  environment   = github_repository_environment.production.environment
  variable_name = "CLOUDFLARE_ACCOUNT_ID"
  value         = "d3e075bc1b2629f62b6df97185074648"
}

resource "github_repository_environment_deployment_policy" "production_main" {
  repository     = "EduardTeodor.co.uk"
  environment    = github_repository_environment.production.environment
  branch_pattern = "main"
}

resource "github_repository_environment" "infra_plan" {
  repository  = github_repository.site.name
  environment = "infra-plan"
}

resource "github_repository_environment" "infra_apply" {
  repository          = github_repository.site.name
  environment         = "infra-apply"
  can_admins_bypass   = true
  prevent_self_review = false
  wait_timer          = 0

  deployment_branch_policy {
    protected_branches     = false
    custom_branch_policies = true
  }

  lifecycle {
    prevent_destroy = true
  }
}

resource "github_repository_environment_deployment_policy" "infra_apply_main" {
  repository     = github_repository.site.name
  environment    = github_repository_environment.infra_apply.environment
  branch_pattern = "main"
}