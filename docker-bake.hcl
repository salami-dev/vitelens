target "docker-metadata-action" {}


target "client" {
  inherits = ["docker-metadata-action"]
  context = "./client"
  dockerfile = "Dockerfile"
}

target "server" {
  inherits = ["docker-metadata-action"]
  context = "./server"
  dockerfile = "Dockerfile"
}