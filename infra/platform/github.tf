import {
  to = github_repository_ruleset.protect_main
  id = "EduardTeodor.co.uk:25580474"
}

# __generated__ by Terraform
# Please review these resources and move them into your main configuration files.

# __generated__ by Terraform from "EduardTeodor.co.uk:25580474"
resource "github_repository_ruleset" "protect_main" {
  enforcement = "active"
  name        = "protect-main"
  repository  = "EduardTeodor.co.uk"
  target      = "branch"
  conditions {
    ref_name {
      exclude = []
      include = ["~DEFAULT_BRANCH"]
    }
  }
  rules {
    creation                      = false
    deletion                      = true
    non_fast_forward              = true
    required_linear_history       = false
    required_signatures           = false
    update                        = false
    update_allows_fetch_and_merge = false
    pull_request {
      allowed_merge_methods             = ["merge", "squash", "rebase"]
      dismiss_stale_reviews_on_push     = false
      require_code_owner_review         = false
      require_last_push_approval        = false
      required_approving_review_count   = 0
      required_review_thread_resolution = false
    }
  }
}
