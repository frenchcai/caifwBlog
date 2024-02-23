## 线程休眠sleep的用法
步骤
（1）实现现场类
（2）调用sleep()方法即可使得线程休眠
实例代码如下：
下面的例子是，用sleep实现一个倒计时，每隔一秒，就会输出倒计时数字；
**需要注意的是，调用sleep会抛出一个异常，需要捕捉异常处理**
```java
package opreation;
//使用sleep实现倒计时
public class TestSleep implements Runnable {
	
	public void run() {
		for (int i = 10; i >0; i--) {
			System.out.println(i);
			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		}
	}
	
	public static void main(String args[]) {
		TestSleep t1Sleep=new TestSleep();
		new Thread(t1Sleep).start();
	}
	
}

```
## 线程礼让（yield）的用法
线程的执行是由CPu调度来决定的，因此，使用yield方法进行yield，可以使得其他线程和当前的线程重新竞争CPU资源；需要注意的是，此方法只是提供一个线程和当前线程重新开始竞争的机会，并不会代表每一次都能够礼让成功，最后还是看CPU选择；
下面例子作为示例
线程礼让不一定成功，需要cpu调度来决定是否阻塞当前线程运行
如果同一个线程打印开启，马上打印结束，说明没有阻塞；如果打印开启后，接着开启了另外一个线程，这说明成功礼让成功
```java
package opreation;

import java.nio.channels.NonWritableChannelException;
import java.util.jar.Attributes.Name;

//测试线程礼让

public class TestyYield implements Runnable{
	public void run() {
		System.out.println(Thread.currentThread().getName()+"开启");
		Thread.yield();
		System.out.println(Thread.currentThread().getName()+"结束");
	}
	
	public static void main(String args[]) {
		TestyYield t1=new TestyYield();
		new Thread(t1,"test1").start();
		new Thread(t1,"test2").start();
	}
}
```
运行结果--礼让失败
![在这里插入图片描述](https://img-blog.csdnimg.cn/645ba95f0f7e4013b439594d4b576127.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA54ix5Zad6YW45aW255qE5LiA5pes,size_20,color_FFFFFF,t_70,g_se,x_16)
运行结果--礼让成功
![在这里插入图片描述](https://img-blog.csdnimg.cn/4f2436036bb7493abbba1d428cde2f14.png)
## 线程插队（join）
线程插队和礼让相反。线程插队允许当前线程阻塞，然后运行目标线程；
下面使用主线程和子线程演示线程插队用法

在主线程main方法中，做了一个循环，但i=50的时候，强行把t1线程插队，然后cpu会一一直运行t1线程的任务，直到t1运行停止，才会放开对main主线程的阻塞，继续运行主线程任务。
```java
package opreation;
//测试主线程与其他线程的阻塞
public class TestMainYield implements Runnable{
	public void run() {
		for (int i = 0; i < 1000; i++) {
			
			System.out.println("子线程运行"+i);
		}
	}
	
	public static void main(String args[]) throws InterruptedException {
		TestMainYield t1=new TestMainYield();
		Thread aThread=new Thread(t1);
		aThread.start();
		for (int i = 0; i < 100; i++) {
			if(i==50) {
				aThread.join();//子线程插队，运行停止后，主线程才能停止阻塞，继续运行接下来的任务；
			}
			
			System.out.println("主线程运行"+i);
		}
		
	}
}

```
运行结果如下
![在这里插入图片描述](https://img-blog.csdnimg.cn/185880d98a48442b8e4f96459e3cd087.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA54ix5Zad6YW45aW255qE5LiA5pes,size_20,color_FFFFFF,t_70,g_se,x_16)
![在这里插入图片描述](https://img-blog.csdnimg.cn/f3c5550f9c2f4252aee495698989b37a.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA54ix5Zad6YW45aW255qE5LiA5pes,size_20,color_FFFFFF,t_70,g_se,x_16)

