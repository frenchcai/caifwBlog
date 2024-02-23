(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{333:function(s,t,a){"use strict";a.r(t);var n=a(14),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"_1-sqlite3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-sqlite3"}},[s._v("#")]),s._v(" 1.Sqlite3")]),s._v(" "),t("p",[s._v("这个数据库是python中一个内置的轻量级、支持并发操作的数据库，但这个数据库的执行，只支持原生的sql语句")]),s._v(" "),t("h2",{attrs:{id:"_1-1-数据库连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-数据库连接"}},[s._v("#")]),s._v(" 1 .1 数据库连接")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Sqlite3 \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#在磁盘中使用数据库，除此之外，还可以在内存在使用数据库")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#conn=connect(":memeroy:")')]),s._v("\nconn"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("connect"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test.db"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"_1-2-创建游标"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-创建游标"}},[s._v("#")]),s._v(" 1 .2 创建游标")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#创建游标")]),s._v("\nc"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("conn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cursor"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"_1-3-执行sql语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-执行sql语句"}},[s._v("#")]),s._v(" 1 .3 执行SQL语句")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("sql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"create table user(name varchar(255),age int)"')]),s._v("\nc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("execute"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#创建表格，如果存在的话，会报错")]),s._v("\nc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("execute"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"insert into user values('{}','{}')\"")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("format")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jack"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#插入之后一定要记得执行提交，才能把数据写入磁盘")]),s._v("\nc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("execute"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"commit"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 查询数据")]),s._v("\nc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("execute"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"select * from user"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nresult"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fetchall"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##result是数据库的所有记录，fetchall返回是满足条件的所有记录，result是一个列表，每一条记录是一个元组")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h1",{attrs:{id:"_2-csv-文件读写"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-csv-文件读写"}},[s._v("#")]),s._v(" 2.csv 文件读写")]),s._v(" "),t("p",[s._v("csv文件常常用在不同程序之间，数据进行装换的中介")]),s._v(" "),t("h2",{attrs:{id:"_2-1-打开文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-打开文件"}},[s._v("#")]),s._v(" 2.1 打开文件")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 非显式打开，可以避免没有关闭带来的尴尬")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" csv \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("open")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test.csv"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rt"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("encoding"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"utf-8"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" fs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\treader"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("csv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("DictReader"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" line "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" reader"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("line"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这个reader以字典的形式读取，返回的是csv文件的所有行，可以看做是一个列表")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"_2-2-写入数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-写入数据"}},[s._v("#")]),s._v(" 2.2 写入数据")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("kk"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("open")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test.csv"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("encoding"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"utf-8"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" fs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\twriter"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("csv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("writer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\twriter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("writerows"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("kk"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将数据的数据写入 csv")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("open")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test.csv"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("encoding"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"utf-8"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" fs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\twriter"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("csv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("writer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#result是之前在user表查找的记录列表")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" row "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" result"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\t\twriter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("writerow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("row"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h1",{attrs:{id:"将csv的数据-转换成dataframe"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将csv的数据-转换成dataframe"}},[s._v("#")]),s._v(" 将csv的数据，转换成DataFrame")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" pandas "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" pd\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" csv\ndf"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("pd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("DataFrame"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ni"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#创建一个空的dataframe")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("open")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test.csv"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rt"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("encoding"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"utf-8"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" fs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\treader"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("DictReader"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" row "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" reader"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#row实际上是一个字典，key：value的形式返回，一般key是csv第一行的数据，将csv的数据转化为dataframe结构数据，因为csv的一行是一个字段，可以直接用dataframe的方法生成，无需指定字段，默认是按照字典的字段自动生成")]),s._v("\n\t\tdf"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("df"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("append"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("DataFrame"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("row"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("index"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t\ti"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#实际上可以使用pandas直接读取csv问价，直接转换成DATAFRAME")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h2",{attrs:{id:"pandas读取数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pandas读取数据"}},[s._v("#")]),s._v(" pandas读取数据")]),s._v(" "),t("p",[t("strong",[s._v("1读取mysql数据库数据")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("* 读取数据库的常用方法\n")])])]),t("p",[s._v("3个函数\nread_sql\n.read_sql_table.\nread_sql_query")]),s._v(" "),t("p",[s._v("read_sql_table(table_name,con,schema=none,index_col=none,coerce_float=True,columns=none)//只能把整一个表格数据读取出来，不能实现查询操作")]),s._v(" "),t("p",[s._v("read_sql_query (sql,con,index_col=none,,coerce_float=True)//只能实现查询操作，不能直接读取数据库中的某一个表")]),s._v(" "),t("p",[s._v("read_sql(sql,con,index_col=none,coerce_float=True,columns=none)  //可以直接sql=表名字也可以实现查询操作")]),s._v(" "),t("p",[s._v("参数说明")]),s._v(" "),t("p",[s._v("sql or table name: 接受特定的string 的表名或者是sql语句，无默认")]),s._v(" "),t("p",[s._v("con: 接收数据库连接。")]),s._v(" "),t("p",[s._v("index_col :接收int 、sequence或者false 。 要设置为索引的列（MultiIndex）。")]),s._v(" "),t("p",[s._v("coerce_float：boolean:，默认为True尝试将非字符串，非数字对象（如decimal.Decimal）的值转换为浮点值。可能导致精度损失。\n*\ncolumns：list，默认值：None。从SQL表中选择的列名列表")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" sqlalchemy "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" create_engine\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" pandas "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" pd\nengin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("create_engine"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mysql+pymysql://roor:password@127.0.0.1:3306/stu?charset=utf8"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("pymsql可以变化，如果是其他的数据库，则需要改就可以\n查询\nformlist"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("pd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("read_sql_query"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"show tables"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("con"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("engine"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("formlist"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查询订单详情表")]),s._v("\ndetail"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("pd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("read_sql_table"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"meal_order_detail"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("con"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("engin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),s._v("（"),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("len")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("detail"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("）\ndetail2"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("pd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("read_sql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"select * from meal_order_detail2"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("con"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("engin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("len")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("detail2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ndetail3"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("pd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("read_sql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"meals_order_detail3"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("con"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("engine"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("len")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("detail3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[t("strong",[s._v("把数据写入数据库")]),s._v("\n常用方法 to_sql(name,con,schema=none, if_exists='fail',index=True, index_label=none,dtype=none)")]),s._v(" "),t("p",[s._v("参数说明：\nname 接收特定的string。代表数据库表名无默认\ncon ：数据库连接对象")]),s._v(" "),t("p",[s._v("if_exists 值为fail。append. replace。如果是fail 当表不存在则会报错，无法插入，如何为replace ，表存在的话，则会删除原来的表,创建新的表，把新的写进去，如果不存在，则直接新建新表们把数据写入")]),s._v(" "),t("p",[s._v("append 则在原来的数据表中追加数据，默认为fail")]),s._v(" "),t("p",[s._v("index 接收bool 表示是否将索引作为数据传入数据库，默认为True")]),s._v(" "),t("p",[s._v("index_label 接收string或者sequence。代表是否应用索引名称，index为true的时候，这个为none，因为不需要制定了，如果需要设定多个索引，则要传入sequence\ndtype 接收dict 代表写入数据类型（列名为key，数据格式为value）")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#承接上面导入的库")]),s._v("\ndetail"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("to_sql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("con"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("engine"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("index"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("false"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("if_exists"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'replace'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nformlist"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("pd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("read_sql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"show tables"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("con"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("engine"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"新增一个表格后数据库的表清单为:”,"')]),s._v('\\n"'),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("formlis"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);