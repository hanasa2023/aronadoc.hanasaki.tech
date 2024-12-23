---
layout: doc
---

# 总力战

::: warning :warning: Warning
暂不支持国际服
:::

::: tip :bulb: Tips
server: 1 为国服官服、2 为国服 B 服、3 为日服
:::

## 总力战档线

`GET /api/raid/line/:server`

| 参数   | 类型   |   描述 |
| :----- | ------ | -----: |
| server | number | 服务器 |

示例： `https://arona.hanasaki.tech/api/raid/line/1`

示例返回：![国服总力战档线](/raids/1.png)

## 指定期数的总力战档线（~~问题有点多~~）

`GET /api/raid/line/:server/:season`

| 参数   | 类型   |   描述 |
| :----- | ------ | -----: |
| server | number | 服务器 |
| season | number |   期数 |

示例： `https://arona.hanasaki.tech/api/raid/line/1/37`

示例返回：![国服总力战第 37 期档线](/raids/1.png)

## 总力战分数变化

`GET /api/raid/lineChange/:server`

| 参数   | 类型   |   描述 |
| :----- | ------ | -----: |
| server | number | 服务器 |

示例： `https://arona.hanasaki.tech/api/raid/lineChange/3`

示例返回： ![日服档线变化](/raids/2.png)

## 总力战参与人数变化

`GET /api/raid/memberChange/:server`

| 参数   | 类型   |   描述 |
| :----- | ------ | -----: |
| server | number | 服务器 |

示例： `https://arona.hanasaki.tech/api/raid/memberChange/3`

示例返回：![日服总力战各难度参与人数变化](/raids/3.png)

## 总力战分数计算

`GET /api/raid/calculate/score/:server/:bossId/:time/:hard`

| 参数   | 类型   |    描述 |
| :----- | ------ | ------: |
| server | number |  服务器 |
| bossId | number | Boss ID |
| time   | number |    用时 |
| hard   | number |    难度 |

::: tip :blub: Tips
可选难度为：TM、INS、EX、HC、VH、H、N
:::

示例： `https://arona.hanasaki.tech/api/raid/calculate/score/2/1/240/INS`

示例返回：

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "score": 23089600
  }
}
```

## 总力战时间计算

`GET /api/raid/calculate/point/:server/:bossId/:point`

| 参数   | 类型   |    描述 |
| :----- | ------ | ------: |
| server | number |  服务器 |
| bossId | number | Boss ID |
| point  | number |    分数 |

示例： `https://arona.hanasaki.tech/api/raid/calculate/point/2/1/23089960`

示例返回：

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "time": 239.972
  }
}
```
