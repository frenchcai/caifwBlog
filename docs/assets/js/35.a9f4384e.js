(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{316:function(s,n,a){"use strict";a.r(n);var e=a(14),l=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"需求背景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#需求背景"}},[s._v("#")]),s._v(" 需求背景")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("春季开学，我们这学期要上专业英语（信息管理与信息系统专业），其中，有很多有关专业的专业术语，都是陌生的单词，想到自己以后需要从事这个方面的职业，这些术语在以后会经常碰到，不如现在趁着在学校学习，把这些单词记下来。")])]),s._v(" "),n("li",[n("p",[s._v("但是问题来了，老师给的单词全在ppt上面，我没有问老师要原文档，也不想麻烦老师，毕竟老师也挺忙。之后，我上对分易平台把十二个单元的ppt都下载下来，还有每一个单元的阅读（学术论文）")])]),s._v(" "),n("li",[n("p",[s._v("首先是把单词从ppt中提取下来，我就想到了用python的图片文字识别，后来不行，因为有单词有音标，不能正确识别，我就放弃了，后来是使用天诺（文字识别工具），到ppt一张张抓图识别，识别成功率很好")])]),s._v(" "),n("li",[n("p",[s._v("下面是重点，我想记单词的时候，有相关的句子可以辅助记忆，我知道这些专业名词都是从每一个单元的论文中，可以找到的，我就想方法将论文，按照一个句子，逐句分开了。我是用python实现的")])]),s._v(" "),n("li",[n("h2",{attrs:{id:"准备工作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[s._v("#")]),s._v(" 准备工作，")])]),s._v(" "),n("li",[n("p",[s._v("python 3.7\n7."),n("code",[s._v("import docx \timport xlwt \timport os")]),s._v("\n需要导入上面的库\n核心代码")])]),s._v(" "),n("li",[n("p",[s._v("读取电脑磁盘下某一个文件夹下的所有文件（可以批量处理）")])])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('import docx\nimport xlwt\nimport os\npath1=r"F:\\学习\\专业课程学习\\学科作业\\专业英语\\text"#路径自己切换，**前面的r不可省**\nrow=1#用于后面记录写入时，调整在哪一行写，每一次写完加一\na=[]#用于存放截取得到的句子（里面是多个数组构成）\nfileslist=[]#这个数组存放文件下所有文件名称的序号例如[1,2,3,4,...12]\nlis=[]#这个数组用于存放某一个文件下的所有文件名\nfor root,dirs,files in os.walk(path1,topdown=False):\n    for file in files:\n        fileslist.append(int(file.split("_")[0].split(" ")[1]))\n        #file就是某一个文件的，文件名，上面的代码就是获取文件名的需要，这个文件名，老师在命名的时候，已经按照unite 1-12_*的顺序命名好了，因此，我需要切割，获取对应的数字即可 \n        lis.append(file)\n       #将文件名存放\nfileslist.sort()        \n    #排序文件名\nfor cc in range(len(fileslist)):\n    for ll in range(len(lis)):\n        if(str(fileslist[cc])==lis[ll].split("_")[0].split(" ")[1]):\n        #按照已经从小到大排序好的文件顺序，在第二次循环时候，判断存取文件名的数组，中是否存在某一个文件名中有这个需要，如果匹配就将该文件打开，并读取其中的文章\n            print(path1+"\\\\"+lis[ll])\n            file2=docx.Document(path1+"\\\\"+lis[ll])  \n            #打开文件\n            for i in range(len(file2.paragraphs)):\n            #file2.paragraphs按照一段段将文章分开\n                bb=file2.paragraphs[i].text.split(".")\n                  #在一段中，可能由读个句子组成，因为在英语中，每一句的结束符是.所有，利用这个进行切割，得到每一个句子的数组\n                for p in range(len(bb)):\n                    aa=[file2.paragraphs[0].text]\n                    #file2.paragraphs[0].text，用于判断属于哪一个单元的\n                        #bb[i[是每一个句子\n                    if(bb[p]!=" "):\n                        aa.append(bb[p])\n                        print(aa)\n        #                     print(aa)\n                        a.append(aa)\n#                         print(len(aa[1]))\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br")])]),n("ul",[n("li",[s._v("将数据写入excel表（可以导入数据库）")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("file3 = xlwt.Workbook(encoding='utf-8')\ntable = file3.add_sheet('data',cell_overwrite_ok=True)\n  \nkk=[]\nfor p in range(len(a)):\n    kk=a[p]\n    for dd in range(len(kk)):\n        print(len(kk[dd]))   \n        if len(str(kk[dd]))!=0:\n            print(len(str(kk[dd])))\n            table.write(row,dd,str(kk[dd]))\n#              sheet.cell(row=dd+1, column=p, value=str(a[0])\n    row+=1\n    #写完一行的记录后，一定要加一，否则，会重新覆盖之前的数据\nfile3.save('relative.xlsx')    \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("h2",{attrs:{id:"全部代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#全部代码"}},[s._v("#")]),s._v(" 全部代码")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('import docx\nimport xlwt\nimport os\npath1=r"F:\\学习\\专业课程学习\\学科作业\\专业英语\\text"\nprint("5555")\n#本文档用于文件夹下的，批量处理文件，而且文件名已经更具顺序排好，不会乱序\nrow=1\na=[]\nfileslist=[]\nlis=[]\nfor root,dirs,files in os.walk(path1,topdown=False):\n    print("88888")\n   \n    for file in files:\n        fileslist.append(int(file.split("_")[0].split(" ")[1])) \n        lis.append(file)\n        #排序文件名\nfileslist.sort()        \n   \nfor cc in range(len(fileslist)):\n    for ll in range(len(lis)):\n        if(str(fileslist[cc])==lis[ll].split("_")[0].split(" ")[1]):\n            print(path1+"\\\\"+lis[ll])\n            file2=docx.Document(path1+"\\\\"+lis[ll])  \n            for i in range(len(file2.paragraphs)):\n                bb=file2.paragraphs[i].text.split(".")\n                for p in range(len(bb)):\n                    aa=[file2.paragraphs[0].text]\n                        #bb[i[是每一个句子\n                    if(bb[p]!=" "):\n                        aa.append(bb[p])\n                        print(aa)\n        #                     print(aa)\n                        a.append(aa)\n#                         print(len(aa[1]))\n            \nfile3 = xlwt.Workbook(encoding=\'utf-8\')\ntable = file3.add_sheet(\'data\',cell_overwrite_ok=True)\n  \nkk=[]\nfor p in range(len(a)):\n    kk=a[p]\n    for dd in range(len(kk)):\n        print(len(kk[dd]))   \n        if len(str(kk[dd]))!=0:\n            print(len(str(kk[dd])))\n            table.write(row,dd,str(kk[dd]))\n#              sheet.cell(row=dd+1, column=p, value=str(a[0])\n    row+=1\nfile3.save(\'relative.xlsx\')    \n           \n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br")])])])}),[],!1,null,null,null);n.default=l.exports}}]);