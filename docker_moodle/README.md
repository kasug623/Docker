# Ref
- https://hub.docker.com/r/bitnami/moodle
- https://github.com/bitnami/containers/tree/main/bitnami/moodle
- https://moodledev.io/general/app/development/setup/docker-images
- https://www.intellilink.co.jp/business/security/cyberrange.aspx

# How to Start
takes 10+ minutes to start web
```bash
$ sudo docker compose up -d
```

# Balus
```bash
$ sudo docker compose down --rmi all --volumes --remove-orphans \
&& sudo rm -rf ./mariadb/mariadb_data/* \
&& sudo rm -rf ./moodle/moodle_data/* \
&& sudo rm -rf ./moodle/moodle_data/.* \
&& sudo rm -rf ./moodle/moodledata_data/* \
&& sudo rm -rf ./moodle/moodledata_data/.*
```