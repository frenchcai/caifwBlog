```python
'''
Created on 2020年4月11日

@author: Administrator
'''
'''
网站AP1数据获取
'''
import requests
words=["dog","cat"]
for word in words:
    r=requests.get("http://mall.baicizhan.com/ws/search?w={}".format(word))
    print(r.text)
    print(r.json()["img"])
    print(u"http://baicizhan.qiniucdn.com/word_audios/{}.mp3".format(word))


'''
静态页面解析HTML
'''
from bs4 import BeautifulSoup
r=requests.get("http://hanyu.baidu.com/s?wd="+"理工"+"&from=zici")    
r.encoding="utf-8"
soup=BeautifulSoup(r.text,"lxml")
for p in soup.find(id="basicmean-wrapper").div.dd:
    print(p.string.strip())
    
```
## 写在最后
交流：作为一名大学生，在求职的过程中，在选择企业的时候，你会考虑企业哪些方面呢？或者说，你希望从企业收获到什么、企业给你提供什么？欢迎在下方留言，一起探讨，么么哒

