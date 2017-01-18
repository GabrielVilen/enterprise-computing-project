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

- Decided on switching from Google Cloud Platform to IBM Bluemix due to Lambda (Functions) in Google Cloud being in alpha state which requiered invite to be able to use it. Reason for choosing IBM over Azure was that we found no matching API Gateway in Azure (API Connect). 
- Realised that Nexmo sms service are not free for incoming messages so decided to switching to using email instead of sms for votes (got OK from Marco for this)
- Signed up and looking at email api service Mailgun (www.mailgun.com)

##2017-01-18:

- Started the implementation in IBM Bluemix platform:
  - Deployed vote dashboard is available at https://ec-vote-dashboard.mybluemix.net using Cloud Foundry
  - Created the databases to store the votes in Cloudant NoSQL 
  - Deployed the API to retrieve the votes from the emails and send them to the database
  - Started working on OpenWhisk for triggering functions when a new vote is added to the database

Next meeting next week, 16:00 2017-01-24
