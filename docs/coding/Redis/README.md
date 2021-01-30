# Redis

::: tip
Redis 是一种开放源代码（BSD 许可证）的内存数据结构存储，用作数据库、缓存与消息代理。
Redis 提供数据结构，例如字符串、哈希、列表、集合、带范围查询的排序集合、位图、超日志、地理空间索引与流。
Redis 具有内置的复制，Lua 脚本，LRU 驱逐，事务和不同级别的磁盘持久性，并通过 Redis Sentinel 与 Redis Cluster 自动分区提供了高可用性。
[了解更多 →](https://redis.io/topics/introduction)

[Redis 官方网站](https://redis.io/)
:::

<iframe src="//player.bilibili.com/player.html?aid=840034966&bvid=BV1S54y1R7SB&cid=171960979&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 380px;"> </iframe>

## 安装

推荐参考 [官方文档](https://redis.io/download#installation)

### Debian

```sh
wget https://download.redis.io/releases/redis-6.0.10.tar.gz
tar xzf redis-6.0.10.tar.gz
cd redis-6.0.10
make
```

如果无法执行 `make` 指令，那么需要安装：

```
apt install make
```