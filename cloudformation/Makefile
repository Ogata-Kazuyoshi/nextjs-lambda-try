iam-role-deploy:
	aws cloudformation create-stack --stack-name github-actions-role \
	--template-body file://githubActionsRole.yaml \
	--capabilities CAPABILITY_NAMED_IAM \
	--parameters ParameterKey=GithubAccount,ParameterValue=$(GITHUB_ACCOUNT) \
	             ParameterKey=GithubRepository,ParameterValue=$(GITHUB_REPOSITORY) \
	             ParameterKey=AssumeRoleName,ParameterValue=$(ASSUME_ROLE_NAME) \
	--region ap-northeast-1

iam-role-update:
	aws cloudformation update-stack --stack-name github-actions-role \
	--template-body file://githubActionsRole.yaml \
	--capabilities CAPABILITY_NAMED_IAM \
	--parameters ParameterKey=GithubAccount,ParameterValue=$(GITHUB_ACCOUNT) \
	             ParameterKey=GithubRepository,ParameterValue=$(GITHUB_REPOSITORY) \
	             ParameterKey=AssumeRoleName,ParameterValue=$(ASSUME_ROLE_NAME) \
	--region ap-northeast-1
