## 第一步获取浏览器cookie
找到需要获取数据的api，在浏览器中找到访问api的cookie
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200503150840869.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzAxMTE4NQ==,size_16,color_FFFFFF,t_70)复制cookie，下面请看代码

## 第二步获取数据

```python
# -*- coding: utf-8 -*-
"""
Created on Fri May  1 14:54:19 2020

@author: Administrator
"""
import codecs
from urllib.parse import quote
import requests
import pandas as pd
import re
from bs4 import BeautifulSoup
import json
#自定义header

co=“刚刚复制的cookie”
#header中有两个关键的地方，一个是referer，另一个是'x-zse-86':'1.0_a_xBkHLBo0xpcTxqYR2qei9qk72foTF8zwtBreuBb8xf',需要手动从浏览器的请求头复制到这里，这里可能是一个数据传输秘钥，如果这个不正确，是获取不到数据的，而且切换关键词的和翻页的时候，请求的地址会发现改变，这个参数也会改变，目前还无法知道如何解决，知道的伙伴，欢迎留言
header2={
'Host':'www.zhihu.com',
'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:73.0) Gecko/20100101 Firefox/73.0',
'Accept':'*/*',
'Accept-Language':'zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2',
'x-api-version':'3.0.91',
'x-app-za':'OS=Web',
'x-requested-with':'fetch',
'x-zse-83':'3_2.0',
# 'x-zse-86':'1.0_aX28Hb98bTSpQ_xqyB206Qe0c8tfrLNBM7YyQiUqe0tY',
'x-zse-86':'1.0_a_xBkHLBo0xpcTxqYR2qei9qk72foTF8zwtBreuBb8xf',
# 'Connection':'keep-alive',
#'Cookie':'_zap=88f029d7-8da4-4c2b-9400-9f6fa9e0a6f1; d_c0="APBtN4f-rw-PTgS-yxiorpX_9CG5_tkiMsE=|1562288811"; _xsrf=YT0anX4elUjeGupFbQaqztDkgOeJYkBt; q_c1=32397d150b88441fa223c70a3a5b07e8|1586481013000|1567162848000; __utma=51854390.206501333.1567162851.1567162851.1567162851.1; __utmv=51854390.000--|3=entry_date=20190830=1; Hm_lvt_98beee57fd2ef70ccdd5ca52b9740c49=1588247086,1588432817,1588439415,1588466966; z_c0=Mi4xYTJvZ0JnQUFBQUFBOEcwM2hfNnZEeGNBQUFCaEFsVk4tenI3WGdBQTRSRnRIeGhhcXZ4U3QzWml4cEg2UGhRZFh3|1577970939|217a48e3d5d97233e5c6aace0d752faead2a6cd7; _ga=GA1.2.206501333.1567162851; __guid=74140564.2038089313898365200.1585010692404.7966; tst=r; count=1; _gid=GA1.2.4173876.1588432820; SESSIONID=JDNtiWvPXL7HobfJzVYLA8zaBHC4NmWxFp4S1mTTfO7; JOID=V1gXAUIdARVBXQAuZhoICzkQExFwUkdbPjhSWjZJSCAJOW5NLgMWsBhUByxt7ey4gavZkZ74-REFpjxm6UdSseY=; osd=WlAQBU4QCRJFUQ0mYR4EBjEXFx19WkBfMjVaXTJFRSgOPWJAJgQSvBVcAChh4OS_hafUmZn89RwNoThq5E9Vteo=; Hm_lpvt_98beee57fd2ef70ccdd5ca52b9740c49=1588466985; KLBRSID=76ae5fb4fba0f519d97e594f1cef9fab|1588466984|1588466965; _gat_gtag_UA_149949619_1=1',
# 'Cache-Control':'max-age=0, no-cache',
# 'TE':'Trailers',
# 'Pragma':'no-cache'
}


#自定义cookie

def parse_cookieTodict(co):
#转为字典
    codic={}
    colist=co.replace(' ','').split(";")
    #去空格
    for i in colist:
        a=i.split("=")
        codic[a[0]]=a[1]
#         print(codic)
    return codic
    
        
def parse_params():
    data={}
    params='t:general,q:前端设计,correction:1,offset:0,limit:20,Ic idx:0,show_all_topics:0'
    params=params.replace(" ","")
    kk=params.split(",")
    for k in kk:
#         print(k)
    #注意中英文的：的差别
        y=k.split(":")
#         print(y)
        data[y[0]]=y[1]

    return data



session=requests.session()  

data=parse_params()
#伪造请求头，这个很关键，
header2['Referer']='https://www.zhihu.com/search?type=content&q={}'.format(quote(data['q'],encoding="utf-8"))
#将cookie赋值到请求头中
header2['Cookie']=co




c=session.get('https://www.zhihu.com/api/v4/search_v3?t=general&q={}&correction=1&offset={}&limit={}&lc_idx=0&show_all_topics=0'.format(quote(data['q'],encoding='utf-8'),data['offset'],data['limit']),headers=header2,cookies=co1)
#结果
result=[]

if c.status_code==200:
    a=json.loads(c.text.encode("utf-8"))
    data=a['data']
    for b in range(len(data)-1):
        if(data[b]['type']=='search_result'):
            pp={}
            c=data[b]['object']
            pp['excerpt']=c['excerpt']
            pp['url']=c['url']
            pp['content']=c['content']
            result.append(pp)
    
    
    

   
```
## 写在最后
交流：作为一名大学生，在求职的过程中，在选择企业的时候，你会考虑企业哪些方面呢？或者说，你希望从企业收获到什么、企业给你提供什么？欢迎在下方留言，一起探讨，么么哒
