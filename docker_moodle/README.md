# Ref
- https://hub.docker.com/r/bitnami/moodle
- https://github.com/bitnami/containers/tree/main/bitnami/moodle
- https://moodledev.io/general/app/development/setup/docker-images

# How to Start
```
$ sudo docker compose up -d
```

# Balus
```
$ sudo docker compose down --rmi all --volumes --remove-orphans
$ sudo rm -rf ./mariadb/mariadb_data/* \
&& sudo rm -rf ./moodle/moodle_data/* \
&& sudo rm -rf ./moodle/moodle_data/.* \
&& sudo rm -rf ./moodle/moodledata_data/* \
&& sudo rm -rf ./moodle/moodledata_data/.*
```