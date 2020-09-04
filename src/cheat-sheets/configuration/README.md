# 配置

![git log](https://gitee.com/smpower/oss/raw/master/git/RfYgjR.png)

在使用 `git log` 指令时，控制台输出的 `Author` 信息中就包含了提交者的名称和提交者的邮箱。下面列出了在全局或当前仓库中如何设置提交者名称和提交者邮箱的方法。

## 设置提交记录的名称

``` sh
git config [--global] user.name <name>
```

`--global` 表示将提交记录的名称配置到全局，比如：

``` sh
git config --global user.name 'ruofei'
```

当省略 `--global` 参数时，表示将提交记录的名称配置到当前仓库中：

``` sh
git config user.name '若非'
```

## 设置提交记录的邮箱

``` sh
git config [--global] user.email <email>
```

`--global` 表示将提交记录的邮箱配置到全局，比如：

``` sh
git config --global user.email 'ruofei@domain.com'
```

当省略 `--global` 参数时，表示将提交记录的邮箱配置到当前仓库中：

``` sh
git config user.email '若非@domain.com'
```

## 为所有仓库设置命令行彩色化输出

``` sh
git config --global color.ui auto
```

## 输出设置的名称（在当前仓库或全局中）

``` sh
git config [--global] user.name
```

使用 `--global` 参数可在命令行中输出全局中配置的提交者名称，省略 `--global` 参数则在命令行中输出当前仓库配置的提交者名称。

输出全局配置的提交者名称：

``` sh
git config --global user.name
```

输出当前仓库配置的提交者名称：

``` sh
git config user.name
```

## 输出设置的邮箱（在当前仓库或全局中）

``` sh
git config [--global] user.email
```

使用 `--global` 参数可在命令行中输出全局中配置的提交者邮箱，省略 `--global` 参数则在命令行中输出当前仓库配置的提交者邮箱。

输出全局配置的提交者邮箱：

``` sh
git config --global user.email
```

输出当前仓库配置的提交者邮箱：

``` sh
git config user.email
```
