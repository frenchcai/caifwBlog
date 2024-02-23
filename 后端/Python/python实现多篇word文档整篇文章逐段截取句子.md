## 需求背景

 - 春季开学，我们这学期要上专业英语（信息管理与信息系统专业），其中，有很多有关专业的专业术语，都是陌生的单词，想到自己以后需要从事这个方面的职业，这些术语在以后会经常碰到，不如现在趁着在学校学习，把这些单词记下来。
 - 但是问题来了，老师给的单词全在ppt上面，我没有问老师要原文档，也不想麻烦老师，毕竟老师也挺忙。之后，我上对分易平台把十二个单元的ppt都下载下来，还有每一个单元的阅读（学术论文）
 - 首先是把单词从ppt中提取下来，我就想到了用python的图片文字识别，后来不行，因为有单词有音标，不能正确识别，我就放弃了，后来是使用天诺（文字识别工具），到ppt一张张抓图识别，识别成功率很好
 - 下面是重点，我想记单词的时候，有相关的句子可以辅助记忆，我知道这些专业名词都是从每一个单元的论文中，可以找到的，我就想方法将论文，按照一个句子，逐句分开了。我是用python实现的
 - ## 准备工作，
 - python 3.7
 7.` import docx
		import xlwt
		import os`
		需要导入上面的库
核心代码
 
 - 读取电脑磁盘下某一个文件夹下的所有文件（可以批量处理）

		

```
import docx
import xlwt
import os
path1=r"F:\学习\专业课程学习\学科作业\专业英语\text"#路径自己切换，**前面的r不可省**
row=1#用于后面记录写入时，调整在哪一行写，每一次写完加一
a=[]#用于存放截取得到的句子（里面是多个数组构成）
fileslist=[]#这个数组存放文件下所有文件名称的序号例如[1,2,3,4,...12]
lis=[]#这个数组用于存放某一个文件下的所有文件名
for root,dirs,files in os.walk(path1,topdown=False):
    for file in files:
        fileslist.append(int(file.split("_")[0].split(" ")[1]))
        #file就是某一个文件的，文件名，上面的代码就是获取文件名的需要，这个文件名，老师在命名的时候，已经按照unite 1-12_*的顺序命名好了，因此，我需要切割，获取对应的数字即可 
        lis.append(file)
       #将文件名存放
fileslist.sort()        
    #排序文件名
for cc in range(len(fileslist)):
    for ll in range(len(lis)):
        if(str(fileslist[cc])==lis[ll].split("_")[0].split(" ")[1]):
        #按照已经从小到大排序好的文件顺序，在第二次循环时候，判断存取文件名的数组，中是否存在某一个文件名中有这个需要，如果匹配就将该文件打开，并读取其中的文章
            print(path1+"\\"+lis[ll])
            file2=docx.Document(path1+"\\"+lis[ll])  
            #打开文件
            for i in range(len(file2.paragraphs)):
            #file2.paragraphs按照一段段将文章分开
                bb=file2.paragraphs[i].text.split(".")
                  #在一段中，可能由读个句子组成，因为在英语中，每一句的结束符是.所有，利用这个进行切割，得到每一个句子的数组
                for p in range(len(bb)):
                    aa=[file2.paragraphs[0].text]
                    #file2.paragraphs[0].text，用于判断属于哪一个单元的
                        #bb[i[是每一个句子
                    if(bb[p]!=" "):
                        aa.append(bb[p])
                        print(aa)
        #                     print(aa)
                        a.append(aa)
#                         print(len(aa[1]))
```

 - 将数据写入excel表（可以导入数据库）

```
file3 = xlwt.Workbook(encoding='utf-8')
table = file3.add_sheet('data',cell_overwrite_ok=True)
  
kk=[]
for p in range(len(a)):
    kk=a[p]
    for dd in range(len(kk)):
        print(len(kk[dd]))   
        if len(str(kk[dd]))!=0:
            print(len(str(kk[dd])))
            table.write(row,dd,str(kk[dd]))
#              sheet.cell(row=dd+1, column=p, value=str(a[0])
    row+=1
    #写完一行的记录后，一定要加一，否则，会重新覆盖之前的数据
file3.save('relative.xlsx')    
```

## 全部代码

```
import docx
import xlwt
import os
path1=r"F:\学习\专业课程学习\学科作业\专业英语\text"
print("5555")
#本文档用于文件夹下的，批量处理文件，而且文件名已经更具顺序排好，不会乱序
row=1
a=[]
fileslist=[]
lis=[]
for root,dirs,files in os.walk(path1,topdown=False):
    print("88888")
   
    for file in files:
        fileslist.append(int(file.split("_")[0].split(" ")[1])) 
        lis.append(file)
        #排序文件名
fileslist.sort()        
   
for cc in range(len(fileslist)):
    for ll in range(len(lis)):
        if(str(fileslist[cc])==lis[ll].split("_")[0].split(" ")[1]):
            print(path1+"\\"+lis[ll])
            file2=docx.Document(path1+"\\"+lis[ll])  
            for i in range(len(file2.paragraphs)):
                bb=file2.paragraphs[i].text.split(".")
                for p in range(len(bb)):
                    aa=[file2.paragraphs[0].text]
                        #bb[i[是每一个句子
                    if(bb[p]!=" "):
                        aa.append(bb[p])
                        print(aa)
        #                     print(aa)
                        a.append(aa)
#                         print(len(aa[1]))
            
file3 = xlwt.Workbook(encoding='utf-8')
table = file3.add_sheet('data',cell_overwrite_ok=True)
  
kk=[]
for p in range(len(a)):
    kk=a[p]
    for dd in range(len(kk)):
        print(len(kk[dd]))   
        if len(str(kk[dd]))!=0:
            print(len(str(kk[dd])))
            table.write(row,dd,str(kk[dd]))
#              sheet.cell(row=dd+1, column=p, value=str(a[0])
    row+=1
file3.save('relative.xlsx')    
           
```

