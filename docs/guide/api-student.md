---
layout: doc
---

# 学生相关信息

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
    "imgUrl": "https://aronacdn.hanasaki.tech/images/student-info/10000.png",
    "hash": "3b385abc72de78877f35c9e94f807457d78c624460fd6abd4345aa130fa9037e"
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
    "imgUrl": "https://aronacdn.hanasaki.tech/images/student-info/10000_90.png",
    "hash": "1995837bcce9082e11b5a6f95b2ce45f80b66f94e4d543b184d4db3355e975c3"
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
    "imgUrl": "https://aronacdn.hanasaki.tech/images/student-skills/10000.png",
    "hash": "78ab5fa6bd87d25eaa2710322240ff4c2e89393c02866ef8eca592534bbd14c9"
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
    "hash": "487619b2e6c3b3a6fa4b49a45b4f66db4c1d0f3874826fc7ea75aba38531a89e"
  }
}
```

## 学生生日分布图

`GET /api/student/birthday/distribution`

示例：`https://arona.hanasaki.tech/api/student/birthday/distribution`

示例返回：

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "imgUrl": "https://aronacdn.hanasaki.tech/images/student-birthday/distribution.png",
    "hash": "06a0911a045ef4a6ae491a0fca222afd55a4baa1b89b4f864123f24f9bb8dee3"
  }
}
```
