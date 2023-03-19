# TOC
- [Reference](#reference)
- [How to Start](#how-to-start)
- [Balus](#balus)

# Reference
[https://github.com/deviantony/docker-elk](https://github.com/deviantony/docker-elk)

# How to Start
1. start using `docker-compose`
```
sudo docker compose up -d
```

2. reset passwords  
At the first `docker compose up`, built-in-user cannot be set.   
So, manually initializing password is required.  
For that, you rewrite uits passwords to `.env` and restart contaiers.  
```
docker compose exec elasticsearch bin/elasticsearch-setup-passwords auto
```

3. change passwords in `.env` file to new passwords created by the above command.

4. restart containers which uses "elastic passwords" except an elasticsearch container.
```
sudo docker compose up -d kibana
sudo docker compose up -d apm_server
sudo docker compose up -d apm-server
sudo docker compose up -d logstash
sudo docker compose up -d heartbeat
sudo docker compose up -d apache
```

5. log in Kibana
When you access, you have to use basic-authentication.  
- user:elastic  
- password:the new passwors created by the above command.

6. start some `beats` manually
Some containers use multi-stage build.  
In this case, manually start for `beats` is needed.
- filebeat on apache container
```
$ usr/share/filebeat test config
$ usr/share/filebeat test config
$ usr/share/filebeat -e setup
$ usr/share/filebeat -e
```
- metricbeat on nginx server
```
$ usr/share/metricbeat test config
$ usr/share/metricbeat test config
$ usr/share/metricbeat -e setup
$ usr/share/metricbeat -e
```

# debug
- heartbeat
```
$ usr/share/heartbeat test config
$ usr/share/heartbeat test config
$ usr/share/heartbeat -e setup
$ usr/share/heartbeat -e
```

# Balus
stop container and delete image.  
(Even if you delete image, the cache of image still exits so you can get the same image again quickly.)
```
sudo docker compose down --rmi all --volumes --remove-orphans
```
