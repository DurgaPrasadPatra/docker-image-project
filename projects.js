const projects = {
aws: {
 title:"AWS — Cloud Infrastructure & Deployment",
 subtitle:"Cloud foundation for production-style DevOps workloads",
 tools:"EC2 • S3 • IAM • VPC • CloudWatch",
 overview:"Designed and deployed application infrastructure on AWS with a focus on repeatability, security and operational visibility.",
 flow:"Developer → GitHub → CI/CD → Docker Image → EC2 → Application",
 points:[
 "Provision EC2 environments for application hosting and DevOps practice.",
 "Use IAM roles and least-privilege permissions instead of embedding credentials.",
 "Use S3 for static assets and Terraform-managed cloud resources.",
 "Configure networking, security groups and monitoring for reliable deployments."
 ]},
azure: {
 title:"Azure — VM & Cloud Operations",
 subtitle:"Microsoft Azure infrastructure and deployment practice",
 tools:"Azure VM • Networking • NSG • Storage • IAM/RBAC",
 overview:"Built and managed Azure-based environments while mapping common AWS services to their Azure equivalents.",
 flow:"GitHub → CI/CD → Azure Infrastructure → Application",
 points:[
 "Provision Windows/Linux virtual machines and configure secure access.",
 "Work with resource groups, virtual networks and network security groups.",
 "Apply RBAC concepts to control access to cloud resources.",
 "Compare Azure architecture with equivalent AWS DevOps patterns."
 ]},
terraform: {
 title:"Terraform — Infrastructure as Code",
 subtitle:"Repeatable cloud provisioning through declarative configuration",
 tools:"Terraform • AWS • GitHub Actions",
 overview:"Automated infrastructure creation using reusable Terraform configuration, remote state concepts and CI/CD.",
 flow:"Git → Terraform Plan → Review → Terraform Apply → AWS",
 points:[
 "Define infrastructure declaratively rather than creating resources manually.",
 "Use variables, outputs and reusable modules to keep configuration maintainable.",
 "Manage state carefully and understand locking, drift and plan/apply workflows.",
 "Run Terraform validation and deployment through GitHub Actions."
 ]},
docker: {
 title:"Docker — Application Containerization",
 subtitle:"Portable, reproducible application packaging",
 tools:"Docker • Dockerfile • Docker Compose • Docker Hub",
 overview:"Containerized applications with reproducible images, clean build contexts and production-oriented runtime practices.",
 flow:"Source Code → Docker Build → Image → Registry → Container → Application",
 points:[
 "Create optimized Dockerfiles and use .dockerignore to reduce build context.",
 "Understand the difference between images, containers, volumes and networks.",
 "Use Docker Compose to run multi-container applications such as app + database.",
 "Keep secrets outside source code and inject them at deployment/runtime."
 ]},
kubernetes: {
 title:"Kubernetes — Container Orchestration",
 subtitle:"Deploying and operating containerized workloads",
 tools:"Kubernetes • Deployment • Service • ConfigMap • Secret",
 overview:"Practice Kubernetes application deployment with declarative manifests and service discovery.",
 flow:"Container Image → Deployment → Pods → Service → Users",
 points:[
 "Deploy replicated application Pods using Deployments.",
 "Expose workloads with Services and understand cluster networking.",
 "Separate configuration from application images using ConfigMaps and Secrets.",
 "Use rolling updates, scaling and health probes for resilient workloads."
 ]},
jenkins: {
 title:"Jenkins — CI/CD Automation",
 subtitle:"Automated build, test and delivery pipeline",
 tools:"Jenkins • Git • Maven • SonarQube • Nexus • Docker",
 overview:"Created CI/CD workflows that automatically build code, perform quality checks, package artifacts and prepare deployments.",
 flow:"Git Push → Jenkins → Build → Test → SonarQube → Nexus/Docker → Deploy",
 points:[
 "Configure webhooks to trigger pipelines from source-control changes.",
 "Use Jenkins credentials rather than hard-coding passwords or tokens.",
 "Integrate Maven builds, SonarQube analysis and artifact repositories.",
 "Use Pipeline-as-Code with a Jenkinsfile for repeatable delivery."
 ]},
"github-actions": {
 title:"GitHub Actions — Cloud-Native CI/CD",
 subtitle:"Automated workflows directly from the Git repository",
 tools:"GitHub Actions • YAML • Docker • Terraform",
 overview:"Built workflow automation for validation, infrastructure changes and container image delivery.",
 flow:"Git Push → Workflow → Validate → Build/Test → Package → Deploy",
 points:[
 "Define pipelines as YAML workflow files stored with the application.",
 "Use repository secrets and environment protections for sensitive values.",
 "Build and publish versioned Docker images automatically.",
 "Run Terraform validation/plan and controlled deployment stages."
 ]},
argocd: {
 title:"ArgoCD — GitOps Continuous Delivery",
 subtitle:"Git as the source of truth for Kubernetes",
 tools:"ArgoCD • Git • Kubernetes • Helm/Manifests",
 overview:"Practice GitOps delivery where Kubernetes desired state is stored in Git and continuously reconciled by ArgoCD.",
 flow:"Git Repository → ArgoCD → Kubernetes Cluster → Running Application",
 points:[
 "Track Kubernetes manifests from a Git repository.",
 "Detect configuration drift between Git and the cluster.",
 "Synchronize application state through controlled Git changes.",
 "Separate application deployment configuration from CI image building."
 ]},
ansible: {
 title:"Ansible — Configuration Management",
 subtitle:"Automated server configuration and provisioning",
 tools:"Ansible • YAML • SSH • Linux",
 overview:"Automated repeatable server setup without installing an agent on managed Linux hosts.",
 flow:"Control Node → SSH → Inventory → Playbook → Configured Servers",
 points:[
 "Define managed hosts through inventories and groups.",
 "Use idempotent modules to install packages and configure services safely.",
 "Create roles and variables for reusable automation.",
 "Use Ansible for post-provisioning configuration after infrastructure creation."
 ]},
linux: {
 title:"Linux — DevOps Foundation",
 subtitle:"Command-line administration and troubleshooting",
 tools:"Linux • Bash • SSH • systemd • Networking",
 overview:"Use Linux as the operational foundation for containers, CI/CD servers, cloud VMs and automation tools.",
 flow:"SSH → Inspect → Configure → Automate → Monitor → Troubleshoot",
 points:[
 "Manage files, users, permissions, processes and services from the CLI.",
 "Work with systemd, logs, networking and disk/resource inspection.",
 "Use shell commands and scripts to automate repetitive operational tasks.",
 "Apply Linux troubleshooting skills across AWS, Azure, Docker and CI/CD environments."
 ]}
};

function renderProject(){
 const key=location.hash.replace("#","") || "docker";
 const p=projects[key] || projects.docker;
 document.getElementById("project-content").innerHTML=`
   <div class="project-heading">
     <h2>${p.title}</h2>
     <p class="project-subtitle">${p.subtitle}</p>
   </div>
   <div class="project-meta">${p.tools}</div>
   <p class="project-overview">${p.overview}</p>
   <div class="flow">${p.flow.split(" → ").map(x=>`<span>${x}</span>`).join("<b>→</b>")}</div>
   <h3 class="section-title">What I worked on</h3>
   <ul class="project-points">${p.points.map(x=>`<li>${x}</li>`).join("")}</ul>
   <a class="explore-btn" href="index.html">← Back to Portfolio</a>
 `;
 document.querySelectorAll(".project-tabs a").forEach(a=>{
   a.classList.toggle("active", a.getAttribute("href") === "#"+key);
 });
}
window.addEventListener("hashchange", renderProject);
renderProject();

