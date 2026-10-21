terraform {
  backend "s3" {
    bucket = "eduardteodor-tfstate"
    key    = "platform/terraform.tfstate"
    region = "auto"

    endpoints = {
      s3 = "https://d3e075bc1b2629f62b6df97185074648.r2.cloudflarestorage.com"
    }

    use_lockfile                = true
    use_path_style              = true
    skip_credentials_validation = true
    skip_region_validation      = true
    skip_requesting_account_id  = true
    skip_metadata_api_check     = true
    skip_s3_checksum            = true
  }
}