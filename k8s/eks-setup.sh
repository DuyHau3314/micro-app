
# create cluster without nodegroup
eksctl create cluster --name=app \
    --region=eu-central-1 \
    --vpc-private-subnets=subnet-04cebdb06bff2ea38,subnet-03dbfedba523044a8 \
    --without-nodegroup

# Associate IAM OIDC
eksctl utils associate-iam-oidc-provider \
    --region=eu-central-1 \
    --cluster=app \
    --approve

# Create EKS nodegroup with private subnets
eksctl create nodegroup --cluster=app \
    --region=eu-central-1 \
    --name=app-node \
    --subnet-ids=subnet-04cebdb06bff2ea38,subnet-03dbfedba523044a8 \
    --node-type=t3.medium \
    --nodes=4 \
    --nodes-min=4 \
    --nodes-max=6 \
    --node-volume-size=20 \
    --ssh-access \
    --ssh-public-key=-kube \
    --managed \
    --asg-access \
    --external-dns-access \
    --full-ecr-access \
    --appmesh-access \
    --alb-ingress-access \
    --node-private-networking

# Delete eks cluster
# eksctl delete cluster <cluster-name> --region=<your-region>

# Other resources to delete
# - natgateway
# - elasticip
# - mysql instance
# - postgres instance