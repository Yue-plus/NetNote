#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
echo 'note.yueplus.ink' > CNAME

git config --global user.name "yue-plus"
git config --global user.email Yue_plus@foxmail.com

git init
git add -A
git commit -m 'deploy'