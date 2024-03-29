## Prerequisites

- git
- docker (Community Edition)
- [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm)
- [yarn](https://yarnpkg.com/) 


### NodeJS Installation

```shell script
nvm install 14.7.0
nvm alias default 14.7.0
```

#### Global tools

```shell script
npm i -g yarn
```

## Identity Hub setup

It is expected that the user has a key-pair registered with GitHub.com

```shell script

git clone git@github.com:Shard-Labs/identity-hub.git

### Starting the dependency docker containers
```shell script
cd identity-hub
npm -s run deps:start
```

### Starting the Identity Hub

```shell script
cd identity-hub
npm -s run serve
```