# 本地变更

## 列出工作目录中更改的文件

``` sh
git status
```

## 列出对跟踪文件的更改

``` sh
git diff
```

## 将文件中所有更改添加到下一次提交

``` sh
git add <file>
```

## 将所有当前更改添加到下一次提交

``` sh
git add .
```

## 以交互方式向下一次提交添加更改

``` sh
git add -p <file>
```

## 重命名文件并将其添加到下一次更改

``` sh
git mv <file> <new file name>
```

## 删除文件并将其删除添加到下一次更改

``` sh
git rm <file>
```

## 提交跟踪文件中的所有本地更改

``` sh
git commit -a
```

## 提交之前暂存的更改

``` sh
git commit
```

## 更改上次提交

``` sh
git commit --amend
```

注意：你不应该修改已发布的提交！
