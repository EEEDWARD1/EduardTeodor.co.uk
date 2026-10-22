resource "github_repository_environment" "production" {
  repository        = "EduardTeodor.co.uk"
  environment       = "Production"
  can_admins_bypass = true
  wait_timer        = 0

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