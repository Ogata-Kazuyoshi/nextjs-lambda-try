sam-local:
	sam build
	sam local start-api

sam-deploy:
	sam build
	if aws s3 ls "s3://cognito-authorizer-cli" 2>&1 | grep -q 'NoSuchBucket'; then \
        echo "バケット cognito-authorizer-cli が存在しません。作成します。"; \
        aws s3 mb s3://cognito-authorizer-cli --region ap-northeast-1; \
	else \
			echo "バケット cognito-authorizer-cli は既に存在します。クリーンナップします。"; \
			aws s3 rm s3://cognito-authorizer-cli --recursive; \
	fi
	sam deploy --stack-name cognito-authorizer-cli-stack --s3-bucket cognito-authorizer-cli --capabilities CAPABILITY_IAM --no-confirm-changeset --no-fail-on-empty-changeset
	# --parameter-overrides \
	# UserPoolId=$(COGNITO_USERPOOL_ID) \
	# LambdaRoleName=$(LAMBDA_ROLE_NAME) \
	# HostZoneId=$(HOST_ZONE_ID) \
	# RegionalCertificateArn=$(ACM_ARN_FOR_API) \
	# DomainName=$(DOMAIN_NAME_FOR_API) \
