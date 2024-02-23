## 1.死锁产生
死锁，故名思意，就是在多线程使用一些公共资源的时候，由于当前线程等待资源而阻塞，但对方线程已经拥有该资源，并没有释放，同时想获取已经阻塞线程的资源，因此造成互相等待，产生死锁。
总结如下：
（1）互斥条件：一个资源同时只能被一个线程使用。
（2） 请求与保持条件：一个线程因请求资源而阻塞，对方已获得该资源，在没有使用完成前，不        			 会释放该资源 。
（3）不剥夺条件：线程获得了资源，在没有使用完成前，是不能强制剥夺；
（4）循环等待条件：若干线程之间形成一种头尾相接的循环等待资源关系
## 2.死锁代码演示
1.下面代码以两个人，为了化妆，都需要镜子和口红。小工先拿到镜子，但想获得口红；小爱拿到了口红，但先拿到镜子。在机器的世界里面，就会由于这种相互等待，产生僵持。
```java
package Lock;

//死锁：在同一个同步代码块中，等待对方线程释放上锁的资源才能往下运行的情况，就会出现相互等待僵持，出现死锁
public class DeadLock {
	
	public static void main(String args[]) {
		MakeUp g1=new MakeUp(0,"小工");
		MakeUp g2=new MakeUp(1, "小爱");
		g1.start();
		g2.start();
	}
	
}
//公共资源口红
	class KouHong{
		
		
	}
	//公共资源镜子
	class Mirror{
		
	}
	
	class MakeUp extends Thread{
		
		static Mirror mirror=new Mirror();
		static KouHong kouHong=new KouHong();
		
		public int choice;
		public String name;
		
		public MakeUp(int choice,String name) {
			this.choice=choice;
			this.name=name;
		}
		public void run() {
			this.makeUp();
		}
		public void makeUp() {
			
			
			if(this.choice==0) {
				synchronized (kouHong) {//拿到口红
					System.out.println(this.name+"拿到口红");
					synchronized (mirror) {
						System.out.println(this.name+"拿到镜子");
					}
					
				}
			}else {
				synchronized (mirror) {//拿到镜子
					System.out.println(this.name+"拿到镜子");
					synchronized (kouHong) {
						System.out.println(this.name+"拿到口红");
					}
					
				}
			}
			
		}
		 
		 
	}

```
运行结果：运行结果显示，小工只拿到了镜子，因为小爱没有释放口红，因此一直处于阻塞状态。小爱同样是这样，因为小工没有拿到口红，没有完成化妆，不能释放镜子资源，因此小爱也进入阻塞状态。
![在这里插入图片描述](https://img-blog.csdnimg.cn/194897c8b0214916bacd9c7b00f6913d.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA54ix5Zad6YW45aW255qE5LiA5pes,size_20,color_FFFFFF,t_70,g_se,x_16)
## 3.解开死锁
1.在第一段已经列举了产生死锁的必要条件，我们只要破坏其中一个条件即可解开。
下面，我们从破坏循环等待这个条件来演示
只需要在makeup方法里面，将请求资源同步进行，而不是一开始的依赖进行。
```java
public void makeUp() {
			
			if(this.choice==0) {
				synchronized (kouHong) {//拿到口红
					System.out.println(this.name+"拿到口红");
				}
				synchronized (mirror) {
					System.out.println(this.name+"拿到镜子");
				}
			}else {
				synchronized (mirror) {//拿到镜子
					System.out.println(this.name+"拿到镜子");
				}
				synchronized (kouHong) {
					System.out.println(this.name+"拿到口红");
				}
			}
			
		}
```
运行结果如下：
运行结果可以看到，是小工让步，小爱顺利完成，之后小工才完成，解开了僵持的局面。
![在这里插入图片描述](https://img-blog.csdnimg.cn/e52a58595ff449c586019e04a339d10d.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA54ix5Zad6YW45aW255qE5LiA5pes,size_20,color_FFFFFF,t_70,g_se,x_16)
## 4.显示锁与隐式锁
**synchronize**这个用法是一种隐式的锁，可以进行对象和方法的进行上锁。但是内部什么时候加锁和解锁，我们是不知道的。
显示锁**Lock**可以在代码块中显示声明在哪里上锁和解锁，性能上比隐式要好，但是该方式不能用于对象。
