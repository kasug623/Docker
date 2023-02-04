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

2. ただしこの段階ではkibana_systemなどのビルトインユーザ作られるがパスワードが設定されていない。そのため手動でパスワード変更を実施して、入力したパスワードを.envに転記して、コンテナを再起動する必要がある
```
docker compose exec elasticsearch bin/elasticsearch-setup-passwords auto
```

3. .envのパスワードを上記のコマンドで新規に作成したパスワードに書き換える

4. コンテナを再構築する（Elasticsearchは落とさない。それ以外を再起動する）
```
sudo docker compose up -d kibana
```

5. .Kibanaにブラウザで入れるときは user:elastic password:（コマンドで新規作成したもの）

# Balus
stop container and delete image.  
(Even if you delete image, the cache of image still exits so you can get the same image again quickly.)
```
sudo docker-compose down --rmi all --volumes --remove-orphans
```
