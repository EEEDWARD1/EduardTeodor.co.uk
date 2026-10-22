import {
  to = github_repository.site
  id = "EduardTeodor.co.uk"
}

import {
  to = github_actions_variable.cf_web_analytics_token
  id = "EduardTeodor.co.uk:CF_WEB_ANALYTICS_TOKEN"
}

resource "github_repository" "site" {
  name       = "EduardTeodor.co.uk"
  visibility = "public"

  allow_merge_commit          = true
  allow_rebase_merge          = true
  allow_squash_merge          = true
  allow_auto_merge            = false
  allow_update_branch         = false
  delete_branch_on_merge      = true
  merge_commit_title          = "MERGE_MESSAGE"
  merge_commit_message        = "PR_TITLE"
  squash_merge_commit_title   = "COMMIT_OR_PR_TITLE"
  squash_merge_commit_message = "COMMIT_MESSAGES"

  has_issues      = true
  has_projects    = true
  has_wiki        = true
  has_discussions = false

  archived                    = false
  is_template                 = false
  topics                      = []
  web_commit_signoff_required = false

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