## 多线程存在的问题
1.多线程会造成共享资源数据环混乱。因为，每一个线程都有自己的内存。当一个线程从公共资源读取数据后，保存到了自己线程的内存中，然后才执行。这样如果多个线程同时读取公共资源的数据，而没有手段去控制让这些线程排队，就会出现数据混乱的问题。
下面的代码为例子：是一个抢票的例子

```java
package Lock;
//线程不安全实例1：共用对象
public class UnSaveTest1 implements Runnable{
	private int ticketNum=10;
	public  void  run() {
		while (ticketNum>=1) {
			try {
				Thread.sleep(100);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			System.out.println(Thread.currentThread().getName()+"抢到了"+ticketNum--);
			
		}
	
	}
	
	public static void main(String args[]) {
		UnSaveTest1 test1=new UnSaveTest1();
		
		new Thread(test1,"李华").start();
		new Thread(test1,"张三").start();
		new Thread(test1,"黄牛").start();
	}
}

```

运行结果如下：
在run方法中，我们对票的数量（ticketNum）进行控制，只有票数大于0才能购买成功；理想的情况下，应该是每一个抢到的票都是不一样的。但是运行结果却显示：三个人中，存在两人抢到同一张票的情况，这就是线程引起的数据不安全问题。
![在这里插入图片描述](https://img-blog.csdnimg.cn/7c41d73c5e754286b07500310286824c.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA54ix5Zad6YW45aW255qE5LiA5pes,size_20,color_FFFFFF,t_70,g_se,x_16)
下面我对上面的例子，做一下内存图分析，比如现在的票数是9
![在这里插入图片描述](https://img-blog.csdnimg.cn/70eb10c2fd2b4ac2ae08bec495786a99.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA54ix5Zad6YW45aW255qE5LiA5pes,size_17,color_FFFFFF,t_70,g_se,x_16)
因此，便得到李华和黄牛党同时拿到第九张票的情况。

## 线程同步，解决多线程数据不安全问题
用法
1.给执行读取公共资源的的方法加上**synchronized**。在多线程并发的情况下，次机制会给公共的资源加上锁。当前线程进来后，就会上锁，不允许其他线程再进来了。每一次只能执行一个线程任务。只有当这个线程任务结束后，才能释放锁，下一个线程才能使用这个公众资源。
下面的代码例子：（注意 和上面run方法做对比）

```java
package Lock;
//线程不安全实例1：共用对象，加锁排队解决问题
public class UnSaveTest1 implements Runnable{
	private int ticketNum=10;
	public synchronized void  run() {
		while (ticketNum>=1) {
			try {
				Thread.sleep(100);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			System.out.println(Thread.currentThread().getName()+"抢到了"+ticketNum--);
			
		}
	
	}
	
	public static void main(String args[]) {
		UnSaveTest1 test1=new UnSaveTest1();
		
		new Thread(test1,"李华").start();
		new Thread(test1,"张三").start();
		new Thread(test1,"黄牛").start();
	}
}
```
运行结果如下：解决了两人抢到同一张票的情况
![在这里插入图片描述](https://img-blog.csdnimg.cn/962754b40b4344c0860f2d4a57acaf84.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA54ix5Zad6YW45aW255qE5LiA5pes,size_20,color_FFFFFF,t_70,g_se,x_16)
2.给公共资源的对象加锁
例子：两人同时向一张银行卡取现。公众资源是银行卡，我这个例子以Account类作为公共资源对象，在run方法里面使用的这个类的实例对象，在前面加上 修饰符synchronized ，然后在方法体执行操作，可以达到同样的目的。

```java
package Lock;
//银行取钱例子
public class UnSaveTest2 extends Thread{
	Account account;
	private int amount;
	private String name;
	public UnSaveTest2(Account account,int amount,String name) {
		this.amount=amount;
		this.name=name;
		this.account=account;
	}
	public void run() {
		synchronized (this.account) {
		//给公共资源对象上锁
			this.drawMoney(this.amount, this.name);
		}
		
	}
	
	public void  drawMoney(int amount,String name) {
		
		try {
			Thread.sleep(200);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		if(this.account.getAmount()>0&&amount<=this.account.getAmount()) {
			this.account.setAmount(this.account.getAmount()-amount);
			System.out.println(name+"取走了"+amount+"账户还剩下"+this.account.getAmount());
		}
	}
	
	public static void main(String args[]) {
		Account account=new Account(100, "住房基金");
		UnSaveTest2 t1=new UnSaveTest2(account, 60,"小红");
		UnSaveTest2 t2=new UnSaveTest2(account, 60,"小名");
		t1.start();
		t2.start();
		
	}
}

//银行账户
class Account{
	private int amount;
	private String name;
	public Account(int amount,String name) {
		this.amount=amount;
		this.name=name;
	}
	
	public void  setAmount(int amount) {
		this.amount=amount;
	}
	public int getAmount() {
		return this.amount;
	}
}
```
加上锁运行结果如下：当小红和小甘同时取钱的时候，双方金额都为60万，加起来为120万大于银行存款100万。因此正常逻辑是不能同时满足二人的取款总额。最后，小红取走了60万，小甘取款就会失败。
![在这里插入图片描述](https://img-blog.csdnimg.cn/ff00c86e799a43c1b196d23f8ee8effa.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA54ix5Zad6YW45aW255qE5LiA5pes,size_20,color_FFFFFF,t_70,g_se,x_16)
但是，没有加上锁之前，运行结果是这样的，双方都能取到钱。如果不加以控制，那银行不是得倒闭了吗，哈哈哈哈。
![在这里插入图片描述](https://img-blog.csdnimg.cn/8ae8ead345e54bcab07dd7daab0ff6a4.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA54ix5Zad6YW45aW255qE5LiA5pes,size_20,color_FFFFFF,t_70,g_se,x_16)


## synchronized 使用会影响性能
我们为了控制并发，加上synchronized ，给线程排队，并对资源加锁。在加锁和解锁的时候，需要消耗一定的时间和内存，因此，这个是不可避免的。
