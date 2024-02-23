json就是两个常用的方法，一个是data=json.load(fs) data是字典，fs是json文件对象，就是将josn文件的数据，转化为python内置对象的字典

##  1. dic= json.load（fs）

```python
import json
with open("test.json","rt",encoding="utf-8") as fs:
    data=json.load(fs)
    
print(data)
print(type(data))
```
## 2  json.dump(list("hello"),fs)
 json.dump(data,fs) data是python的字典，fs是josn文件对象，这个方法可以将字典写入到josn文件进行保存
#data中的字符串默认均为unicode，JSON规定的编码为UTF-8
#处理可以将字典写入json外，可以将tuple，list等写入
```python
with open("test.json","w",encoding="utf-8") as fs:
    json.dump(list("hello"),fs)

```
##  3.转化的编码问题
实际上 python的编码为unicode吗，汉字保存的数据，实则是unicode码，因此，在将python的字典转为json时，显示的就是unicode吗，如果想让json显示汉字，可以加上
一个参数**ensure_ascii=False**，就是不把保存为unicode编码
```python
data = [{ 'name' : '张三', 'age' : 25}, { 'name' : '李四', 'age' : 26} ]

jsonStr = json.dumps(data)
print(jsonStr)

jsonStr2= json.dumps(data,ensure_ascii=False)
print("不转为unicode",jsonStr2)

jsonObj = json.loads(jsonStr2)
#有汉字的字符串，python自动会识别，无需手动转
print(jsonObj)
# 获取集合第一个
print(jsonObj[1])
```

