# githubSLACK
A slack app for sending notifications on slack when actions are performed using git

Ngrok facilitates the access of the localhost server by github because it requires a publically accessible URL. 

Usage:

1. Clone the repository and run the server using:

```
npm run dev
```


2. Download and run [ngrok](https://ngrok.com/) (Registration necessary)
, input the following command: 

```
ngrok.exe http --host-header=rewrite localhost:8080 
```


3. Copy the `Forwarding` URL.

![image](https://user-images.githubusercontent.com/52379191/233854885-a968dea6-c7fc-4cd4-a4c2-80f358471a3c.png)

4. Create a new repo or use an existing one

5. Paste this URL with a trailing ```/webhook/``` in your target repo webhook settings. 

![image](https://user-images.githubusercontent.com/52379191/233854936-c843eab8-de79-4348-b6fd-c1e994ce0661.png)

6. Create a new Slack App and add, enable Incoming Webhooks then `Add New Webhook to Workspace`

![image](https://user-images.githubusercontent.com/52379191/233855522-d69fca4b-3c0e-45ea-ba5a-80e00b3f2ecb.png)

7.Select the channel where you want the bot to send notifications to then `Allow` 

8. Copy the webhook URL and modify the `fetch()` function.

9. Test using your target or newly created repository. 



