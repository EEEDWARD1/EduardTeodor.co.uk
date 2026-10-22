provider "cloudflare" {
    api_token = var.cloudflare_api_token
}

provider "github" {
  owner = "EEEDWARD1"
  token = var.github_token
}