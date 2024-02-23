## java中多线程的理解
**1.java的多线程对于单核的Cpu来说，实际也是一条主线程上不停切换线程**
	java中的创建多个线程，实际上，对于单核的计算机来说，一个时间只能做一件事情，只是线程之间切换的时间很短，就感觉同时做了很多事情。
	多个线程一起跑，实际上执行的顺序，不取决于线程启动的顺序，而是取决于cpu线程调度算法。每一次跑，执行顺序可能都不一样。
	现在介绍一下，java中，创建多线程的三种方式：
## 第一种：继承Thread类
**实现步骤**
**1.创建一个类，继承Thread父类**
**2.在这个类中，重写run方法**
**3.创建这个类的实例，调用该实例的start()方法**
代码如下：

```java
//使用Thread类创建线程
public class ThreadTest1 extends Thread{
	private String threadName;
	public ThreadTest1(String name) {
		this.threadName=name;
	}
	
	public void run() {
		for (int i = 0; i < 1000; i++) {
			System.out.println("线程"+this.threadName+"跑了"+(i+1)+"次");
		}
		
	}
	
	public static void main(String args []) {
		ThreadTest1 test1=new ThreadTest1("test1");
		ThreadTest1 test2=new ThreadTest1("test2");
		ThreadTest1 test3=new ThreadTest1("test3");
		ThreadTest1 test4=new ThreadTest1("test4");
		test1.start();
		test2.start();
		test3.start();
		test4.start();
		
	}
}

```
运行部分结果如下图所示：可以发现，多个线程一起开启是，并不会等到上面的线程结束后才开始运行下一个，而是交替运行。
![在这里插入图片描述](https://img-blog.csdnimg.cn/1f1e19bc13ab4fc39ccc4def4a1acc8e.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA54ix5Zad6YW45aW255qE5LiA5pes,size_20,color_FFFFFF,t_70,g_se,x_16)

## 第二种继承Runable接口，使用Thread代理实现。
实现步骤
**1.创建一个类，继承Runable接口**
**2.在这个类中，实现run方法**
**3.把创建的对象作为参数，实例化Thread类实例。对调用该实例的start方法**
代码如下：
我们可以发现new Thread() 构造函数可以传入两个参数，一个是目标线程，第二是目标线程名称，在该目标类中，可以通过**Thread.currentThread()**来获取当前的线程的名称。
```java
//通过Runable接口创建线程
public class ThreadTest2 implements Runnable{
	public void run() {
		for (int i = 0; i < 1000; i++) {
			System.out.println(Thread.currentThread().getName()+"跑了"+(i+1)+"次");
		}
		
	}
	
	public static void main(String agrgString []) {
		ThreadTest2 test1 =new ThreadTest2();
		ThreadTest2 test2 =new ThreadTest2();
		ThreadTest2 test3 =new ThreadTest2();
		ThreadTest2 test4 =new ThreadTest2();
		new Thread(test1,"test1").start();
		new Thread(test2,"test2").start();
		new Thread(test3,"test3").start();
		new Thread(test4,"test4").start();
		
		
	}
}
```
运行结果类似于第一种方法。
## 两种方法对比
**1.都需要在类中重写或实现run方法，调用都需要使用start方法**
**2.不过一般推荐使用第二种方法，因为第二种方法可以共享一个实例**
下面我们通过对第二种方法进行改造，也可以实现多线程
代码如下：
对比第一中方法，我们不需要创建三个实例，而是实例化一个即可，然后通过thread代理，传入同一个实例即test1，达到共享test1实例里面的变量的目的。然而，这种方式会引起并发造成的数据混乱问题，下一遍文章会介绍。
```java
public class ThreadTest2 implements Runnable{
	public void run() {
		for (int i = 0; i < 1000; i++) {
			System.out.println(Thread.currentThread().getName()+"跑了"+(i+1)+"次");
		}
		
	}
	
	public static void main(String agrgString []) {
		ThreadTest2 test1 =new ThreadTest2();
		new Thread(test1,"test1").start();
		new Thread(test1,"test2").start();
		new Thread(test1,"test3").start();
		new Thread(test1,"test4").start();
		
		
	}
}


```
运行结果如下图所示：
![在这里插入图片描述](https://img-blog.csdnimg.cn/1b78f7fa922042fa92ea46cafd1e5d79.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA54ix5Zad6YW45aW255qE5LiA5pes,size_20,color_FFFFFF,t_70,g_se,x_16)
## 第三种方法，通过callable和Future实现
实现步骤
**1.创建一个类，基础callable接口**
**2在该类中实现call方法，并返回值**
**3创建 ExecutorService 实例和线程实例**
**4.调用 ExecutorService 的submit方法，把线程实例提交到线程池中启动，并使用Future接受线程实例call方法返回的值**
**5.关闭 ExecutorService** 
代码如下

```java
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
public class ThreadTest3 implements Callable<Boolean> {
	private String threadName;
	public ThreadTest3(String name){
		this.threadName=name;
	}
	public Boolean call() {
		for (int i = 0; i < 1000; i++) {
			System.out.println(this.threadName+"跑了"+(i+1)+"次");
		}
		return true;
	}
	
	public static void main(String args[]) {
		ThreadTest3 t1=new ThreadTest3("test1");
		ThreadTest3 t2=new ThreadTest3("test2");
		ExecutorService ser=Executors.newFixedThreadPool(1);
		Future<Boolean> result1=ser.submit(t1);
		Future<Boolean> result2=ser.submit(t2);
		Boolean r1=false;
		Boolean r2=false;
		try {
			r1=result1.get();
			r2=result2.get();
		}catch (Exception e) {
			// TODO: handle exception
		}
		
		System.out.println(r1);
		System.out.println(r2);
		ser.shutdown();
				
	}
}
```

