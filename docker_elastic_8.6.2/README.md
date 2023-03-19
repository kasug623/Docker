# TOC
- [Reference](#reference)
- [How to Start](#how-to-start)
- [Balus](#balus)

# Reference
[https://github.com/deviantony/docker-elk](https://github.com/deviantony/docker-elk)

# How to Start
1. start using `docker-compose`
```
$ sudo docker compose up -d
```

2. reset passwords  
At the first `docker compose up`, built-in-user cannot be set.   
So, manually initializing password is required.  
https://www.elastic.co/guide/en/elasticsearch/reference/current/security-minimal-setup.html
```
$ docker compose exec elasticsearch bin/elasticsearch-reset-password -u elastic
$ docker compose exec elasticsearch bin/elasticsearch-reset-password -u kibana_system
$ docker compose exec kibana bin/kibana-keystore create
$ docker compose exec kibana bin/kibana-keystore add elasticsearch.password
```

3. restart containers which uses "elastic passwords" except an elasticsearch container.
```
$ sudo docker compose restart kibana
```

4. log in Kibana
When you access, you have to use basic-authentication.  
- user:elastic  
- password:the new passwors created by the above command.

# Balus
stop container and delete image.  
(Even if you delete image, the cache of image still exits so you can get the same image again quickly.)
```
sudo docker compose down --rmi all --volumes --remove-orphans
```
