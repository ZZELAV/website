@echo off

npm "run" "deploy"

cd "dist"

git "init"
git "add" "-add"
git "commit" "-m" "deploy"
git "push" "-f" "git@github.com:zzelav\website.git" "master:gh-pages"

cd "-"