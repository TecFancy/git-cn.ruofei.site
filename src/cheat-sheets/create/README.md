# 创建

## 在本地创建一个新的仓库

``` sh
git init
```

## 克隆仓库

``` sh
git clone ssh://user@domain.com/repo.git
```

通过 ssh 方式克隆仓库，应先在本地生成 ssh 密钥。若托管 Git 仓库的服务商不支持 ssh 方式，可使用 http 或 https 方式克隆仓库：

``` sh
git clone https://domain.com/repo.git # git clone http://domain.com/repo.git
```

## 克隆仓库，并递归的克隆所有子模块

``` sh
git clone --recurse-submodules ssh://user@domain.com/repo.git
```

当一个 Git 仓库中存在 Git 子模块时，用上面的命令可递归的将所有子模块克隆下来。
