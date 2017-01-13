# Design document
Can be found on Google docs: https://goo.gl/hIhdNB

# Diary for EC assignment

##2017-01-04:

Assignment lecture with Marco, overview and introduction about assignments.

Group meeting and assigned read tasks:

• STEFAN - AWS Serverless Multi-Tier Architectures, Werner Vogels (AWS CTO): http://www.allthingsdistributed.com/2016/06/aws-lambda-serverlessreference-architectures.html

• GABRIEL - Serverless Architectures, Martin Fowler: http://martinfowler.com/articles/serverless.html

• SAID - The Serverless Start-Up - Down With Servers!, High Scalability Blog: http://highscalability.com/blog/2015/12/7/the-serverless-start-up-down-with-servers.html

• GABRIEL - AWS Serverless Multi-Tier Architectures, AWS Whitepaper: https://d0.awsstatic.com/whitepapers/AWS_Serverless_MultiTier_Architectures.pdf

• STEFFEN - Microservices without Servers, Tim Wagner (AWS Lambda): https://aws.amazon.com/blogs/compute/microservices-without-the-servers/

Until next meeting, 16:00 2017-01-10:

- Read assigned papers and git doc
- Come up with equvivalent architecture, Stefan and Gabriel will do WA, Said and Steffen IOT

##2017-01-10:

Meeting:

- Decided on WA implemented in Google Cloud Platform https://github.com/awslabs/lambda-refarch-webapp
- Looked at free SMS api, such as nexmo: https://docs.nexmo.com/
- Decided on node.js and passing JSON data

Work assignment:
- Gabriel: Start with SMS api (nexmo)
- Sayid: Start with static website in Google Cloud Storage Standard
- Steffen: Start with streaming and aggregation from Google Cloud Datastore <-> Google Function #2
- Stefan: Start with Google Function #1
- Everyone: Get more familiar with node.js and the Google Cloud Platform tools!

Next meeting tomorrow, 12:00 2017-01-11

##2017-01-13:

Decided on switching from Google Cloud Platform to IBM Blumix due to Lambda (Functions) in Google Cloud being in alfa state which requiered invite to be able to use it. Reason for choosing IBM over Azure was that we found no matching API Gateway in Azure (API Connect).  


