---
title: "2025年4月17日MetaX超级个体成长日志"
date: 2025-04-17T08:00:00+08:00
draft: false
description: ""
tags: []
showauthor: true
slug: ""
ShowReadingTime: true
showWordCount: true
showSummary: true
summary: ""
weight: 
---

## 今日主要成果

- 图片风格提示词Make自动化工作流完成
- wewe-rss docker 微信服务（失败）



## 在腾讯云安装 docker



## 在 docker 内安装 wewe-rss

在腾讯云服务器的 `root` 根目录下添加 `docker-compose.yml` 和 `docker-compose.yml` 这两个文件。代码分别如下：

docker-compose.yml

```yml
services:
  app:
    image: cooderl/wewe-rss-sqlite:latest
    ports:
      - 4000:4000
    environment:
      # 数据库连接地址
      # - DATABASE_URL=file:../data/wewe-rss.db
      - DATABASE_TYPE=sqlite
      # 服务接口请求授权码
      - AUTH_CODE=123456
      # 提取全文内容模式
      # - FEED_MODE=fulltext
      # 定时更新订阅源Cron表达式
      # - CRON_EXPRESSION=35 5,17 * * *
      # 服务接口请求限制，每分钟请求次数
      # - MAX_REQUEST_PER_MINUTE=60
      # 外网访问时，需设置为服务器的公网 IP 或者域名地址
      # - SERVER_ORIGIN_URL=http://localhost:4000

    volumes:
      # 映射数据库文件存储位置，容器重启后不丢失
      - ./data:/app/data
```

docker-compose.yml 

```yml
services:
  db:
    image: mysql:8.3.0
    command: --mysql-native-password=ON
    environment:
      # 请修改为自己的密码
      MYSQL_ROOT_PASSWORD: 123456
      TZ: 'Asia/Shanghai'
      MYSQL_DATABASE: 'wewe-rss'
    # ports:
    #   - 13306:3306
    volumes:
      - db_data:/var/lib/mysql
    healthcheck:
      test: ['CMD', 'mysqladmin', 'ping', '-h', 'localhost']
      timeout: 45s
      interval: 10s
      retries: 10

  app:
    image: cooderl/wewe-rss:latest
    ports:
      - 4000:4000
    depends_on:
      db:
        condition: service_healthy
    environment:
      # 数据库连接地址
      - DATABASE_URL=mysql://root:123456@db:3306/wewe-rss?schema=public&connect_timeout=30&pool_timeout=30&socket_timeout=30
      # 服务接口请求授权码
      - AUTH_CODE=123456
      # 提取全文内容模式
      # - FEED_MODE=fulltext
      # 定时更新订阅源Cron表达式
      # - CRON_EXPRESSION=35 5,17 * * *
      # 服务接口请求限制，每分钟请求次数
      # - MAX_REQUEST_PER_MINUTE=60
      # 外网访问时，需设置为服务器的公网 IP 或者域名地址
      # - SERVER_ORIGIN_URL=http://localhost:4000

networks:
  wewe-rss:

volumes:
  db_data:
```

需要注意的是，所有代码中 `123456`）的部分替换成自己的密码，另外代码中的网址 `http://localhost:4000` 要更换成自己服务器的实际 IP 地址。

然后再腾讯云服务器的防火墙添加一条TCP规则，添加 `4000` 端口。

接下来进入服务器的命令面板，使用命令来安装。

```
docker run -d \
  --name wewe-rss \
  -p 4000:4000 \
  -e DATABASE_TYPE=sqlite \
  -e AUTH_CODE=123567 \
  -v $(pwd)/data:/app/data \
  cooderl/wewe-rss-sqlite:latest
```

调用数据库和启动服务

```docker
docker network create wewe-rss
```

```docker
docker run -d \
  --name db \
  -e MYSQL_ROOT_PASSWORD=123456 \
  -e TZ='Asia/Shanghai' \
  -e MYSQL_DATABASE='wewe-rss' \
  -v db_data:/var/lib/mysql \
  --network wewe-rss \
  mysql:8.3.0 --mysql-native-password=ON
```

```docker
docker run -d \
  --name wewe-rss \
  -p 4000:4000 \
  -e DATABASE_URL='mysql://root:123456@db:3306/wewe-rss?schema=public&connect_timeout=30&pool_timeout=30&socket_timeout=30' \
  -e AUTH_CODE=123567 \
  --network wewe-rss \
  cooderl/wewe-rss:latest
```

安装完成后，浏览器输入 `http://服务器公网ip地址:4000` 即可进入wewe-rss