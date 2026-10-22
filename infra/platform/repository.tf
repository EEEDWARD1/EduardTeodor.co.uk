resource "github_repository" "site" {
  name         = "EduardTeodor.co.uk"
  description  = "Personal site and portfolio: Next.js on Cloudflare Workers, deployed by GitHub Actions, infrastructure in Terraform."
  homepage_url = "https://dev.eduardteodor.co.uk"
  visibility   = "public"
  topics       = ["nextjs", "typescript", "cloudflare-workers", "terraform", "github-actions", "portfolio"]

  allow_merge_commit          = false
  allow_rebase_merge          = false
  allow_squash_merge          = true
  allow_auto_merge            = false
  allow_update_branch         = false
  delete_branch_on_merge      = true
  squash_merge_commit_title   = "PR_TITLE"
  squash_merge_commit_message = "COMMIT_MESSAGES"

  has_issues      = true
  has_projects    = false
  has_wiki        = false
  has_discussions = false

  archived                    = false
  is_template                 = false
  web_commit_signoff_required = false
  vulnerability_alerts        = true
  archive_on_destroy          = true

  security_and_analysis {
    secret_scanning {
      status = "enabled"
    }
    secret_scanning_push_protection {
      status = "enabled"
    }
  }

  lifecycle {
    prevent_destroy = true
  }
}

resource "github_actions_variable" "cf_web_analytics_token" {
  repository    = github_repository.site.name
  variable_name = "CF_WEB_ANALYTICS_TOKEN"
  value         = "b84a706d1ff247889fdda45e4aeb9b04"
}