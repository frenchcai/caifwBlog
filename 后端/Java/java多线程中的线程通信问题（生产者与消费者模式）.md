## 1.线程通信
在前面的章节对**synchronized**的用法做了介绍。它可以解决多线程对公共资源的利用问题。但是不同线程之间，有时候需要协作，以提高工作效率，因此需要相互通信。下面介绍在synchronized中两个方法：**wait**和**notify**方法
## 2.wait 和notify
1.wait 方法表示线程一直等待，直到其他线程通知。与sleep不同的是，wait会释放资源。
2.notify唤醒一个处于等待状态的线程
3.notifyAll。唤醒同一个对象上所有调用wait方法的线程。

注意：上面的方法均是**Object**类的方法，都只能在**同步方法或同步代码块**中使用，否则会抛出异常。
## 3. 使用管程法解决消费生产者问题。
生产消费者问题：指的是，在一一些场景下，有线程等待，并通知其他消费者对资源进行消费。资源充足的时候，可以消费，不足的时候通知生产者生产。已达到一个供需稳定的系统。
下面以生产炸鸡和吃炸鸡作为例子：

```java
package Pool;

//生产者、消费者模式
public class PCModel {
	public static void main(String args[]) {
		SynContainer container=new SynContainer();
		new Producer(container).start();
		new Customer(container).start();
		
		

	}
}
//生产者
class Producer extends Thread{
	SynContainer container;
	public Producer(SynContainer container) {
		this.container=container;
	}
	public void run() {
		for (int i = 1; i <= 100; i++) {
			container.push(new Chicken(i));
			System.out.println("生产者生产第"+i+"鸡肉");
		}
	}
	
}

//消费者
class Customer extends Thread{
	//消费者负责吃鸡
	
	SynContainer container;
	
	public Customer(SynContainer container) {
		this.container=container;
	}
	
	public void run() {
		for (int i = 1; i <=100; i++) {
			System.out.println("消费者消费第"+container.pop().id+"鸡肉");
		}
	}
	
	
}

//炸鸡
class Chicken{
	public int id;
	
	public Chicken(int id) {
		this.id=id;
	}
}
//容器
class SynContainer{
	//容器负责消费者消费和生产者生产
	Chicken[] chickens=new Chicken[10];
	public int count=0;
	public synchronized void push(Chicken chicken) {
		if(count==chickens.length) {
			//通知生产者停止，消费者消费
			try {
				this.wait();
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	
		chickens[count]=chicken;
		count++;
		this.notifyAll();
		
	}
	
	public synchronized Chicken pop() {
		if(count==0) {
			try {
				this.wait();
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
		count--;
		Chicken chicken=chickens[count];
		
		this.notifyAll();
		return chicken;
	}
	
}
```
消费只负责吃鸡，生产者负责生产鸡块。最核心的代码在**SynContainer**类中，我们定义了push和pop方法，分别表示生产者往容器放鸡块和消费者取餐。
**我们定义容器的大小为10.**
1.在**push**方法中，如果count增加到和容器的大小一致，说明容器已经满了，这个时候，如果再生产，容器就放不小了。就需要调用调用wait方法，通知使用对应的线程等待。其中使用this.wait方法实现。这个this是指向了Producer 实例。之后，调用notify方法，唤醒处于等待“开吃的”消费们。

2.在“**pop**”方法中，我们进行数据判断，如果count==0，说明没有鸡块可以吃，就进行等待，然后唤醒生产者要炸鸡块了。如此相互协作。

下面是运行结果：
![在这里插入图片描述](https://img-blog.csdnimg.cn/ddad93ad67194acab74e70597dfa458c.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA54ix5Zad6YW45aW255qE5LiA5pes,size_20,color_FFFFFF,t_70,g_se,x_16)

生产者最大可以连续生产10次，就停止，然后通知消费者消费。中间也可能出现生产一只，消费一只的情况。
