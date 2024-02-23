#  1.Sqlite3
这个数据库是python中一个内置的轻量级、支持并发操作的数据库，但这个数据库的执行，只支持原生的sql语句

##  1 .1 数据库连接

```python
import Sqlite3 
#在磁盘中使用数据库，除此之外，还可以在内存在使用数据库
#conn=connect(":memeroy:")
conn=connect("test.db")
```

##  1 .2 创建游标
```python
#创建游标
c=conn.cursor()
```
##  1 .3 执行SQL语句
```python
sql="create table user(name varchar(255),age int)"
c.execute(sql)
#创建表格，如果存在的话，会报错
c.execute("insert into user values('{}','{}')".format("jack",20))
#插入之后一定要记得执行提交，才能把数据写入磁盘
c.execute("commit")

## 查询数据
c.execute("select * from user")
result=c.fetchall()
##result是数据库的所有记录，fetchall返回是满足条件的所有记录，result是一个列表，每一条记录是一个元组
```
#  2.csv 文件读写
csv文件常常用在不同程序之间，数据进行装换的中介
## 2.1 打开文件

```python
# 非显式打开，可以避免没有关闭带来的尴尬
import csv 
with open("test.csv","rt",encoding="utf-8") as fs:
	reader=csv.DictReader(fs)
	for line in reader:
		print (line)
# 这个reader以字典的形式读取，返回的是csv文件的所有行，可以看做是一个列表

```
##  2.2 写入数据

```python
kk=[(1,2,3,4),(5,6,7,8)]
with open("test.csv","a",encoding="utf-8") as fs:
	writer=csv.writer(fs)
	writer.writerows(kk)
	
# 将数据的数据写入 csv
with open("test.csv","a",encoding="utf-8") as fs:
	writer=csv.writer(fs)
	#result是之前在user表查找的记录列表
	for row in result:
		writer.writerow(row)
```

# 将csv的数据，转换成DataFrame

```python
import pandas as pd
import csv
df=pd.DataFrame()
i=1
#创建一个空的dataframe
with open("test.csv","rt",encoding="utf-8") as fs:
	reader=DictReader(fs)
	for row in reader:
	#row实际上是一个字典，key：value的形式返回，一般key是csv第一行的数据，将csv的数据转化为dataframe结构数据，因为csv的一行是一个字段，可以直接用dataframe的方法生成，无需指定字段，默认是按照字典的字段自动生成
		df=df.append(pd.DataFrame(row,index=[i])
		i+=1
#实际上可以使用pandas直接读取csv问价，直接转换成DATAFRAME

```

 ## pandas读取数据
 **1读取mysql数据库数据**

	* 读取数据库的常用方法


3个函数
read_sql 
.read_sql_table. 
read_sql_query


read_sql_table(table_name,con,schema=none,index_col=none,coerce_float=True,columns=none)//只能把整一个表格数据读取出来，不能实现查询操作


read_sql_query (sql,con,index_col=none,,coerce_float=True)//只能实现查询操作，不能直接读取数据库中的某一个表


read_sql(sql,con,index_col=none,coerce_float=True,columns=none)  //可以直接sql=表名字也可以实现查询操作


参数说明

sql or table name: 接受特定的string 的表名或者是sql语句，无默认

con: 接收数据库连接。
	
index_col :接收int 、sequence或者false 。 要设置为索引的列（MultiIndex）。
	
coerce_float：boolean:，默认为True尝试将非字符串，非数字对象（如decimal.Decimal）的值转换为浮点值。可能导致精度损失。
	*
columns：list，默认值：None。从SQL表中选择的列名列表


```python
from sqlalchemy import create_engine
import pandas as pd
engin=create_engine("mysql+pymysql://roor:password@127.0.0.1:3306/stu?charset=utf8")
mysql+pymsql可以变化，如果是其他的数据库，则需要改就可以
查询
formlist=pd.read_sql_query("show tables",con=engine)
print(formlist)
#查询订单详情表
detail=pd.read_sql_table("meal_order_detail",con=engin)
print（len(detail)）
detail2=pd.read_sql("select * from meal_order_detail2",con=engin)
print(len(detail2))
detail3=pd.read_sql("meals_order_detail3",con=engine)
print(len(detail3))
```
**把数据写入数据库**
常用方法 to_sql(name,con,schema=none, if_exists='fail',index=True, index_label=none,dtype=none)

参数说明：
name 接收特定的string。代表数据库表名无默认
con ：数据库连接对象

if_exists 值为fail。append. replace。如果是fail 当表不存在则会报错，无法插入，如何为replace ，表存在的话，则会删除原来的表,创建新的表，把新的写进去，如果不存在，则直接新建新表们把数据写入

append 则在原来的数据表中追加数据，默认为fail

index 接收bool 表示是否将索引作为数据传入数据库，默认为True

index_label 接收string或者sequence。代表是否应用索引名称，index为true的时候，这个为none，因为不需要制定了，如果需要设定多个索引，则要传入sequence
dtype 接收dict 代表写入数据类型（列名为key，数据格式为value）

```python
#承接上面导入的库
detail.to_sql("test1",con=engine,index=false,if_exists='replace')
formlist=pd.read_sql("show tables",con=engine)
print("新增一个表格后数据库的表清单为:”,"\n",formlis)
```

