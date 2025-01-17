sam-local:
	sam build
	sam local start-api --port 3030

sam-deploy:
	sam build
	if aws s3 ls "s3://cognito-authorizer-cli-s3" 2>&1 | grep -q 'NoSuchBucket'; then \
        echo "バケット cognito-authorizer-cli-s3 が存在しません。作成します。"; \
        aws s3 mb s3://cognito-authorizer-cli-s3 --region ap-northeast-1; \
	else \
			echo "バケット cognito-authorizer-cli-s3 は既に存在します。クリーンナップします。"; \
			aws s3 rm s3://cognito-authorizer-cli-s3 --recursive; \
	fi
	sam deploy --stack-name cognito-authorizer-cli --s3-bucket cognito-authorizer-cli-s3 --capabilities CAPABILITY_IAM --no-confirm-changeset --no-fail-on-empty-changeset
	# --parameter-overrides \
	# UserPoolId=$(COGNITO_USERPOOL_ID) \
	# LambdaRoleName=$(LAMBDA_ROLE_NAME) \
	# HostZoneId=$(HOST_ZONE_ID) \
	# RegionalCertificateArn=$(ACM_ARN_FOR_API) \
	# DomainName=$(DOMAIN_NAME_FOR_API) \
