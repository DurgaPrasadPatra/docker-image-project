# 1. Run HTTPD
sudo docker run -d --name wbpg -p 80:80 httpd

# 2. Kee[ all files in wbpage directory ,then Copy website into container
sudo docker cp ~/webpage/. wbpg:/usr/local/apache2/htdocs/

# 3. Verify
sudo docker exec wbpg ls -la /usr/local/apache2/htdocs/

# 4. Create image from modified container
sudo docker commit wbpg myportfolio:v1

# 5. Verify image
sudo docker images

# 6. Stop and remove original container
sudo docker stop wbpg
sudo docker rm wbpg

# 7. Create new container from your committed image
sudo docker run -d --name portfolio -p 80:80 myportfolio:v1
================================Flow Diagram=============================
httpd image
     │
     ▼
docker run
     │
     ▼
container: wbpg
     │
     │ modify
     │
     ├── docker cp website files
     │
     ▼
modified container
     │
     │ docker commit
     ▼
myportfolio:v1
     │
     │ docker run
     ▼
new container
