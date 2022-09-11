# serverless-dynamodb

### [Node.js](https://nodejs.org/en/) project to do basic operations with [DynamoDB](https://aws.amazon.com/dynamodb/) using [AWS Lambda](https://aws.amazon.com/lambda/)

## How to get started

1. Install serverless framework 
```
npm install -g serverless
```

2. Configure [AWS credentials](https://www.serverless.com/framework/docs/providers/aws/guide/credentials/)

3. Update [serverless.yml](https://github.com/ozgeengin/serverless-dynamodb/blob/master/serverless.yml) settings (*optional)

3. Deploy to AWS
```
serverless deploy
```

If you want to test with Postman:

- See [importing data into Postman](https://learning.postman.com/docs/getting-started/importing-and-exporting-data/#importing-data-into-postman)

- Import [aws-lambda.postman_environment.json](https://github.com/ozgeengin/serverless-dynamodb/blob/master/postman/aws-lambda.postman_environment.json) and update server url on line 7

```"value": "https://x.execute-api.eu-central-1.amazonaws.com/dev",``` 

- Import [serverless-dynomodb.postman_collection.json](https://github.com/ozgeengin/serverless-dynamodb/blob/master/postman/serverless-dynomodb.postman_collection.json)
