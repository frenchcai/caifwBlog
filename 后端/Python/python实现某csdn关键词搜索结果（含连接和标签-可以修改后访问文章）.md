```python
"""
Created on  May  

@author: Administrator
"""

import requests
import pandas as pd
import re
from bs4 import BeautifulSoup
from urllib.parse import quote
#自定义header
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36'}





#自定义cookie
def parse_cookieTodict(co):
#转为字典
    codic={}
    colist=co.replace(' ','').split(";")
    #去空格
    for i in colist:
        a=i.split("=")
        codic[a[0]]=a[1]
    return codic
    
        

def find_keyword(content):
    a=BeautifulSoup(content,"html.parser")
#     print(type(a),len(a))
    result=[]
    s=a.find_all(attrs={'class':'limit_width'})
#     print(type(s),len(s))
    if(s):
        for k in s:
            dic1={}
#         print(k)
            href=k.find_all("a")[0].get('href')
            sk=str(k).replace("<em>","").replace("</em>","")
#         print(sk)
            dic1['href']=href
            if(re.findall("<a href.*>(.*)</a>",sk)):
              dic1['title']=re.findall("<a href.*>(.*)</a>",sk)[0]
            
            result.append(dic1)
      
    return result


def get_text(url,co):
    print()
    session=requests.session()
    c=session.get(url,cookies=co)
    content=''
    if c.status_code==200:
        content=session.get(url,cookies=co).text.replace("\\","").replace(">n","").replace("rn","")
#     return session.get(url,cookies=co).content.decode("utf-8").replace("\\","").replace(">n",">").replace("rn","")
    else:
        content=False
    return content





def getdata(begin,num,keyword,cookie):
    
    co=parse_cookieTodict(cookie)
    keyword=quote(keyword,encoding="utf-8")    
    allresult=[]
    for a in range(num):
        print(".....第{}页数据开始抓取....".format(a+1))
        page=str(begin+a)
        content=get_text("https://so.csdn.net/so/search/s.do?p={}&q={}&t=&viparticle=&domain=&o=&s=&u=&l=&f=".format(page,keyword),co)
        if(content):
            aa=find_keyword(content)
            allresult.extend(aa)
    
    
   
    print("抓取数据完成")
    return pd.DataFrame(allresult)
    
    
    

'''
getdata(1,16,"数据分析",co)
第一个参数为从第几页开始，第二个参数是抓取多少页，第三个是搜索的关键词，第四个参数是浏览器cookie（登录csdn后，从请求头中复制过来即可）
'''
co='复制登录后的某dn的cookie'

aa=getdata(1,16,"数据分析",co)


```

## 复制cookie

![在这里插入图片描述](https://img-blog.csdnimg.cn/2020050500170058.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzAxMTE4NQ==,size_16,color_FFFFFF,t_70)


## 获取连接的文本
```python
#统计文章的热度、点赞数、发表时间

#     时间标签<span>class=time
#     阅读数量
#     《span》class=read-count
#     《span》get-collection
#     内容区域
#     div id content_views《p》
    
#     作者
#     1.原创数class="count" span
#     2.粉丝数id=fan span
#     3.点赞数 
#     4.评论数
#     5.访问

co=‘自己复制浏览器cookie’
def get_articledata(data):
    newdata=[]
    co=parse_cookieTodict(co)
    for a in range(len(data)):
        html=get_text(data.iloc[a,0],co)
        print("第{}篇文章".format(a+1))
        if(html):
            y={}
            a=BeautifulSoup(html,"html.parser")
            p=a.find(attrs={'id':'content_views'})
            if(p):
                text=p.children
            else:
                text=[]
                continue
            textrcount=a.find_all(attrs={'class':"read-count"})[0].string.replace("\n","").replace(" ","")
            texttime=re.findall("<span class=\"time\">(.*)</span>",str(a.find_all(attrs={"class":"bar-content"})))[0]
            textccount=a.find_all(attrs={'class':"get-collection"})[0].string.replace("\n","").replace(" ","")
            stext=''
        
            for atext in text:
                
#                 c=re.findall("<img .* >",str(atext))
#                 c2=re.findall("<img .*/>",str(atext))
#                 ah=re.findall("<a .*>.*</a>",str(atext))
#                 if(len(c)>0):
# #                     atext=str(atext).replace(re.findall("<img .*>",str(atext))[0],"")
#                     atext=str(atext).replace(c1[0],"")
#                 if(len(c2)>0):
# #                     atext=str(atext).replace(re.findall("<img .*/>",str(atext))[0],"")
#                     atext=str(atext).replace(c2[0],"")
#                 if(len(ah)>0):
#                     atext=str(atext).replace(ah[0],"")

# #                 stex=stext+atext[0].string
                if(len(atext)>0): 
                    stext=stext+str(atext)
                
           
                
                strinfo = re.compile('<.*?>')
                stext= strinfo.sub('',stext)
                stext=str(stext).replace("\xa0","").replace("\n","")

                
            y['num_read']=textrcount
            y['num_collection']=textccount
            y['time']=texttime
            y['text']=stext
            
    
        newdata.append(y)
    print("抓取完成")
    return newdata

b=pd.DataFrame(aa.iloc[1:2])
dd=pd.DataFrame(get_articledata(aa))

```

```python
from wordcloud import WordCloud
import pandas as pd
import matplotlib.pyplot as plt #绘制图像的模块
import jieba     #jieba分词
t=''

dd=pd.read_excel(r"D:\tade\csdn爬虫\数据分析.xlsx")
kk=dd.sort_values(by='num_read',ascending=False)
for a in range(len(kk)):
    t=t+kk.iloc[a]['text']





# 结巴分词，生成字符串，wordcloud无法直接生成正确的中文词云
cut_text = " ".join(jieba.cut(t))
 
wordcloud = WordCloud(
 #设置字体，不然会出现口字乱码，文字的路径是电脑的字体一般路径，可以换成别的
 font_path="C:/Windows/Fonts/simfang.ttf",
 #设置了背景，宽高
 background_color="white",width=1000,height=880).generate(cut_text)
 
plt.imshow(wordcloud, interpolation="bilinear")
plt.axis("off")
plt.show()
```








