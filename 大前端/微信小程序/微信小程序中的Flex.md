.

    text1{
      display:-webkit-flex;display:flex;   
      flex-direction:column;
    }
    .text{
     -webkit-box-flex:1;-webkit-flex:1;flex:1;
    }
//WXSS



```
view class="text1">
//WXML
              <view class='text'>热门搜索</view>
              <view class='text'>热门搜索</view>
              <view class='text'>热门搜索</view>
              <view class='text'>热门搜索</view>
              <view class='text'>热门搜索</view>
              <view class="placeholder"></view>
            </view>
```
实现“热门搜索“垂直分布


text类是布局容器类，里面要设置display 为 flex ，和flex的布局方式 ：flex-direction，一般默认值是从左开始，

 flex-direction:column;是垂直布局


如果想改变为左右分布，则需要将 flex-direction改为row或者不设置即可
1.row :从左到右的水平方向为主轴
2.row-reverse：从右到左的水平方向为主轴
3.column:从上到下的垂直方向为主轴
4.column-reverse从下到上的垂直方向为主轴



   -webkit-box-flex:1;-webkit-flex:1;flex:1;


：后面的值是设置每个在布局容器里面的元素的
间距，具体的代码如下链接
https://blog.csdn.net/aoaoxiexie/article/details/53991432
