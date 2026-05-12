To run you need to first build the individual jars for the services(activityservice,aiservice,eureka,userservice) with mvn package command.\
You will need to set an environment variable for GEMINI_API_KEY or hardcode it in the docker-compose.yml\
Now run the command\
  docker compose up -d\
This will start the dependencies for your services (postgres, mongodb, kafka) and the activityservice, aiservice, eureka, userservice services.\
It will also start a kafka ui that can be accessed via localhost:8080\
postgres and mongodb can be access via clients if you wish pgAdmin and MongoDb Compass is what I have been using to view them.\
jdbc:postgresql://localhost:5432/mydatabase with the local user as myuser and local pass as mypassword\
mongodb://admin:password@localhost:27017/activity?authSource=admin for the connection string for local mongo\
All this info is pretty much available in the docker compose anyway.\
Once the containers are up and running you should be able to import the postman collection\
Make requests to register a user, then post activity for that user. Trace the activity through the logs on the various containers and databases. Then retrieve the recommendations.
