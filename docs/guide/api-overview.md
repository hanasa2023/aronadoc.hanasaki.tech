---
layout: doc
---

# API 速览

## 学生基础信息

`GET /api/student/info/:id`

| 参数 | 类型   |    描述 |
| :--- | ------ | ------: |
| id   | number | 学生 id |

示例：`https://arona.hanasaki.tech/api/student/info/10000`

示例返回：

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "imgUrl": "https://aronacdn.hanasaki.tech/images/student-info/10000.png"
  }
}
```

`GET /api/student/info/:id/:level`

| 参数  | 类型   |     描述 |
| :---- | ------ | -------: |
| id    | number |  学生 id |
| level | number | 学生等级 |

示例：`https://arona.hanasaki.tech/api/student/info/10000/90`

示例返回:

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "imgUrl": "https://aronacdn.hanasaki.tech/images/student-info/10000_90.png"
  }
}
```

## 学生技能信息

`GET /api/student/skills/:id`

| 参数 | 类型   |    描述 |
| :--- | ------ | ------: |
| id   | number | 学生 id |

示例: `https://arona.hanasaki.tech/api/student/skills/10000`

示例返回:

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "imgUrl": "https://aronacdn.hanasaki.tech/images/student-skills/10000.png"
  }
}
```

## 学生 Live2D

`GET /api/student/l2d/:id`

| 参数 | 类型   |    描述 |
| :--- | ------ | ------: |
| id   | number | 学生 id |

示例: `https://arona.hanasaki.tech/api/student/l2d/10000`

示例返回：

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "imgPath": "https://aronacdn.hanasaki.tech/images/student/l2d/10000.webp",
    "hash": "9bbe2a85d73b8654a4654865a3194fee86c7667a3664775a8ca969fcc156cead"
  }
}
```

## 攻略

`GET /api/strategy/:name`

| 参数 | 类型   |     描述 |
| :--- | ------ | -------: |
| name | string | 攻略名称 |

示例： `https://arona.hanasaki.tech/api/strategy/国际服大决战`

示例返回：

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "imgUrl": "https://aronacdn.hanasaki.tech/images/strategy/国际服大决战.png",
    "hash": "e91f312dc9c7657ede244a91ae7c9ce996c4b08d235a27514ad9451e9c41a8bf"
  }
}
```

::: tip :bulb: Tips

- 可以通过图片 hash 判断图片是否更新
- 可用攻略名称：国际服大决战、日服大决战、BA 角评、日服总力战、国际服总力战、国际服未来视、国服未来视、国际服火力演习、日服火力演习、竞技场、升星一图流
  :::

## 关卡攻略

`GET /api/chapter-map/:chapter`

| 参数    | 类型   |   描述 |
| :------ | ------ | -----: |
| chapter | string | 关卡号 |

示例：`https://arona.hanasaki.tech/api/chapter-map/H25-3`

示例返回：

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "imgUrl": "https://aronacdn.hanasaki.tech/images/chapter-map/H25-3.webp",
    "hash": "a1677939d8114f861e636b2ed5b906cad62b3662ce513e9d1f6245a77abc79c1"
  }
}
```
