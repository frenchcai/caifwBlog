<% String id =request.getParameter("id");
	String bookname=request.getParameter("bookname");
	String category=request.getParameter("category");
	String price=request.getParameter("price");
	String descrip=request.getParameter("descrip");
	
	Book book =new Book(id,bookname,category,price,descrip);
	
	List<Book>books =(List<Book>)session.getAttribute("books");
	/
	if(books==null)	{
		books=new ArrayList<Book>();
		session.setAttribute("books", books);

session.getAtrribute 方法是获取记录，如果不是第一次增加内容的话，不为空
		//如果是第一次增添记录books肯定为null 这个时候，需要创建新的对象
		然后把 books 保存为session 对象，这样的话，以后每一次 向books 使用add 方法是，对应的数据也会保存在 session中了
		
		
		
		
		
	}
	
	books.add(book)	;
	
	response.sendRedirect(request.getContextPath()+"/showBooks.jsp?sub=1");//重定向至留言板页面

%>
