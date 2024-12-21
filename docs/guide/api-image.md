---
layout: doc
---

# 插画（~~涩图~~）

## 获取插画

`POST /api/illusts/getIllusts`

::: tip :bulb: Tips
以下参数均为可选参数
:::

| 参数     | 类型            |             描述 |
| :------- | --------------- | ---------------: |
| num      | number          |       获取的数量 |
| tags     | string[]        | 要获取的图片 Tag |
| isAI     | boolean         |     是否为 AI 图 |
| restrict | 'r18' \| 'safe' |         限制等级 |

示例：
`https://arona.hanasaki.tech/api/illusts/getIllusts`

```json
{
  "num": 2,
  "tags": ["BlueArchive"],
  "isAI": false,
  "restrict": "safe"
}
```

示例返回：

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "illusts": [
      {
        "pid": 116238937,
        "uid": 90875712,
        "author": "殘夜 ZANYA",
        "title": "✨",
        "tags": [
          "ブルーアーカイブ",
          "明星ヒマリ",
          "ブルアカ",
          "白髪",
          "BlueArchive",
          "ウィンク",
          "エルフ耳",
          "マニキュア",
          "ブルーアーカイブ10000users入り"
        ],
        "imageUrl": "https://pximg.hanasaki.tech/img-original/img/2024/02/20/21/45/56/116238937_p0.png",
        "aiType": false,
        "restrict": "safe",
        "loveMembers": 0,
        "hateMembers": 0
      },
      {
        "pid": 105745405,
        "uid": 1159992,
        "author": "ほまでり",
        "title": "ブルアカ絵まとめ",
        "tags": [
          "ブルアカ",
          "ブルーアーカイブ",
          "BlueArchive",
          "狐坂ワカモ",
          "白洲アズサ",
          "下江コハル",
          "ブルーアーカイブ10000users入り"
        ],
        "imageUrl": "https://pximg.hanasaki.tech/img-original/img/2023/02/27/00/01/54/105745405_p0.png",
        "aiType": false,
        "restrict": "safe",
        "loveMembers": 0,
        "hateMembers": 0
      }
    ],
    "total": 2
  }
}
```

## 上传插画

`POST /api/illusts/setIllusts`

| 参数 | 类型   |       描述 |
| :--- | ------ | ---------: |
| pid  | number | 插画的 pid |

示例：
`POST /api/illusts/setIllusts`

```json
{
  "pid": 125400920
}
```

示例返回：

```json
{
  "code": 200,
  "message": "该图片收藏数小于300, 已过滤"
}
```

## like

为数据库中的指定插画添加/移除喜爱

`GET /api/illusts/love/:type/:pid`

| 参数 | 类型             |       描述 |
| :--- | ---------------- | ---------: |
| type | 'add' \| 'remove |   操作类型 |
| pid  | number           | 插画的 pid |

示例：`https://arona.hanasaki.tech/api/illusts/love/add/87526018`
示例返回：

```json
{
  "code": 200,
  "message": "点赞成功"
}
```

## dislike

为数据库中的指定插画添加/移除不喜爱

`GET /api/illusts/hate/:type/:pid`

| 参数 | 类型             |       描述 |
| :--- | ---------------- | ---------: |
| type | 'add' \| 'remove |   操作类型 |
| pid  | number           | 插画的 pid |

示例：`https://arona.hanasaki.tech/api/illusts/hate/add/87999210`
示例返回:

```json
{
  "code": 200,
  "message": "踩成功"
}
```

## BA meme

`GET /api/meme`

示例：`https://arona.hanasaki.tech/api/meme`

示例返回：

```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "name": "images/meme/1704896892324.gif",
      "url": "https://aronacdn.hanasaki.tech/images/meme/1704896892324.gif",
      "hash": "0b6023a6f9475856408bd63f9d9386927c03e94686af947d797146ec026875b2"
    },
    {
      "name": "images/meme/1705216383558.png",
      "url": "https://aronacdn.hanasaki.tech/images/meme/1705216383558.png",
      "hash": "0b6023a6f9475856408bd63f9d9386927c03e94686af947d797146ec026875b2"
    },
    {
      "name": "images/meme/1705378712744.png",
      "url": "https://aronacdn.hanasaki.tech/images/meme/1705378712744.png",
      "hash": "aff9562bf9cbaed8cfbfdc97dc4f8b5fb5613753a412f6e3d81263be0459aff6"
    },
    ...
}
```
