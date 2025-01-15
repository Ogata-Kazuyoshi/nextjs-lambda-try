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

cognito-deploy-create:
	aws cloudformation create-stack --stack-name cognito-user-pool \
	--template-body file://cognito.yaml \
	--capabilities CAPABILITY_NAMED_IAM \
	--parameters ParameterKey=CognitoCustomDomainPrefix,ParameterValue=$(COGNITO_CUSTOM_DOMAIN_PREFIX) \
	             ParameterKey=UserPoolName,ParameterValue=$(COGNITO_USER_POOL_NAME) \
	             ParameterKey=CallbackURL,ParameterValue=$(COGNITO_CALLBACK_URL) \
	             ParameterKey=GoogleClientId,ParameterValue=$(GOOGLE_CLIENT_ID) \
	             ParameterKey=GoogleClientSecret,ParameterValue=$(GOOGLE_CLIENT_SECRET) \
    --region ap-northeast-1

cognito-deploy-update:
	aws cloudformation update-stack --stack-name cognito-user-pool \
	--template-body file://cognito.yaml \
	--capabilities CAPABILITY_NAMED_IAM \
	--parameters ParameterKey=CognitoCustomDomainPrefix,ParameterValue=$(COGNITO_CUSTOM_DOMAIN_PREFIX) \
	             ParameterKey=UserPoolName,ParameterValue=$(COGNITO_USER_POOL_NAME) \
	             ParameterKey=CallbackURL,ParameterValue=$(COGNITO_CALLBACK_URL) \
	             ParameterKey=GoogleClientId,ParameterValue=$(GOOGLE_CLIENT_ID) \
	             ParameterKey=GoogleClientSecret,ParameterValue=$(GOOGLE_CLIENT_SECRET) \
    --region ap-northeast-1
