---
layout: doc
---

# API 速览

:::warning :warning: 注意
返回的图片均为 `webp` 格式
:::

## 学生基础信息

`GET /api/student/info/:id`

| 参数 | 类型   |    描述 |
| :--- | ------ | ------: |
| id   | number | 学生 id |

示例：`https://arona.hanasaki.tech/api/student/info/10000`

返回: 学生基础信息图片（1 级）

| 参数  | 类型   |     描述 |
| :---- | ------ | -------: |
| id    | number |  学生 id |
| level | number | 学生等级 |

示例：`https://arona.hanasaki.tech/api/student/info/10000/90`

返回: 学生基础信息图片（指定等级 1-90）

## 学生技能信息

`GET /api/student/skills/:id`

| 参数 | 类型   |    描述 |
| :--- | ------ | ------: |
| id   | number | 学生 id |

示例: `https://arona.hanasaki.tech/api/student/skills/10000`

返回: 学生技能信息图片

## 学生 Live2D

`GET /api/student/l2d/:id`

| 参数 | 类型   |    描述 |
| :--- | ------ | ------: |
| id   | number | 学生 id |

示例: `https://arona.hanasaki.tech/api/student/l2d/10000`

返回： 学生 l2d 图片

## 攻略

`GET /api/strategy/:name`

| 参数 | 类型   |     描述 |
| :--- | ------ | -------: |
| name | string | 攻略名称 |

示例： `https://arona.hanasaki.tech/api/strategy/国际服大决战`

返回：攻略图片

`headers`: `'X-Image-Hash': <图片hash>`

::: tip :bulb: Tip
可以通过图片 hash 判断图片是否更新
:::

## 关卡攻略

`GET /api/chapter-map/:chapter`

| 参数    | 类型   |   描述 |
| :------ | ------ | -----: |
| chapter | string | 关卡号 |

示例：`https://arona.hanasaki.tech/api/chapter-map/H25-3`

返回：关卡攻略图片
