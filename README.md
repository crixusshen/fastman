# fastman V2

A Hybird APP Framework From Orient Securities Company

> V1 is uniformly managed by the company's internal Gitbucket, but V2 that we decided to managed by NPM.

## Change Log

### v2.0.2 (2019/07/18)
- 主仓库编译后代码今后统一由npm进行管理，项目托管地址：[https://www.npmjs.com/package/fastman2](https://www.npmjs.com/package/fastman2)
- 修复了TerserPlugin默认设置mangle参数导致打包失败的缺陷
- 修复了打包splitChunk策略错误的缺陷
- 基础库开始支持一键打包
- 新增包的自动检测和更新工具

### v2.0.1 (2019/07/16)
- 对部分命名空间的命名做了更为语义化的调整，以及部分文件目录结构做了调整
- 调整mutation的构建方式
- 增加component、plugin和js-sdk的类型声明文件(d.ts)，现在开发者可直接通过IDE智能识别各种API语法

### v2.0.0 (2019/07/11)
- 全新架构，全新模式，全新设计理念，从现在起开发者可以开始拥抱V2       

### v1.2.0 (2019/06/26)
- 打包模式全新升级，代码执行效率提升20%   
- 支持自动代码规范检查和自动美化功能
- 将jsbridgeman移入主sdk库中；将swiperman和passguardman样式库移入主UI样式库中；将superman改名为domman，去除了deprecated版本的不再维护的swiper组件，未来开发者请使用全新的swiper组件来开发   
- 新增build:fastman-optimize打包指令，用于编译出基于全新构建模式下的基础库sdk
- 现在开发者可以无约束的使用TC39所有新语法特性，底层框架会自动进行按需polyfill    
- 现在开发者不再需要定义页面模板，请采用新的方式来定义业务组件，具体请查看[<声明式方式>](./others/package-capacity-declaration.md)
- 调整了注册程序的namespace声明方式，可具体关注[<注册程序-namespace>](./framework/app-service/register.md)
- 新增了基于@annotation注解方式的若干个声明方式

### v1.1.4 (2019/06/23)
- 桥接脚本增加开发者模式
- 新增第三方框架React/Vue使用桥接的示例

### v1.1.3 (2018/07/30)
- 扩展了request=1时的桥接指令，支持多系统登录的权限限制逻辑（可通过入参fundtype来加以控制）
- 第三方桥接脚本新增onLoginEnhance指令

### v1.1.2 (2018/05/19)
- 基础组件alert、confirm、toast支持函数对象式的方式来声明  
- 新增业务组件：结果页(ResultPage)    
- postman新增xhrFields，用以扩展xhr自身的属性及特性支持   
- 新增基础组件：级联选择器(CascadePicker) 

### v1.1.1 (2018/03/14)
- 新增preload组件，可实现静态资源的预加载
- 实现资源缓存（包括js和css）的后台自动刷新（默认30秒检查一次，发现服务端变化则自动下载新资源）
- 增加更新model状态的通用函数：actions.model.setState()
- 增加更新model模型中对象数据状态的通用函数：actions.model.setObjectState()
- 移除ios11上fastclick特性，否则会造成点击事件的偶发失灵
- 修复了router路由模块中版本判断错误的bug

### v1.1.0 (2018/02/14)
- 第三方桥接脚本新增微信支付
- 第三方桥接脚本新增视图出现回调函数
- 新增data-sysfont特性（该特性支持开启或关闭页面不随着系统字体的大小变化而变化）

### v1.0.9 (2018/01/21)
- 新增swiper回调函数
- 扩展swiper的分页导航功能
- 规范boilerplate模板
- 新增verticalSwiper插件和标签（继承与swiperman）
- 解决lazyloadman无法触发viewport回调的bug

### v1.0.8 (2018/01/15)
- 新增swiper组件

### v1.0.7 (2018/01/11)
- 修复下拉刷新组件在刷新中没有显示图标的bug
- 优化了tip组件的UI样式

### v1.0.6 (2018/01/08)
- 增加blankPage组件的fontScale和iconScale扩展属性
- 优化了部分组件的UI样式
- 重构了lazyload组件

### v1.0.5 (2018/01/02)
- 重构loading组件
- 重构blankpage组件，支持适配不同大小的容器

### v1.0.4 (2017/12/24)
- jsbridge.notify()指令增加浏览器容器内的订阅模式，通过fastman实现的eventEmitter插件来实现
- eventEmitter插件增加once函数
- 调整了jsbridge.request中针对非app端对于payload的处理，payload中的参数将统一通过get方式传递

### v1.0.3 (2017/12/21)
- 完善了插件的使用和调用方式
- 增加懒加载lazyLoad插件
- 增加事件处理器eventEmitter插件

### v1.0.2 (2017/12/20)
- HistoryStack插件新增destory事件
- jsbridge.push()统一修改成pushState机制，不在区分不同端的特殊处理

### v1.0.1 (2017/10/20)
- JS-SDK 1.2版新增onNavigateNativeTo和onNavigateBar指令，可用于原生页面跳转和原生导航头动态设置

### v1.0.0 (2017/10/18)
- 新增通过连接池获取对应网关的连接实例方式
- 新增websocket注册订阅模式（主推）

### v0.9.2 (2017/10/12)
- 新增第三方调用中台接口方式 

### v0.9.1 (2017/09/22)
- 支持单元测试 

### v0.9.0 (2017/09/18)
- 打包批处理文件可打包出具有websocket特性的API   
- 通讯层同时支持http和websocket

### v0.8.6 (2017/08/20)
- 新增第三方桥接脚本1.0

### v0.8.5 (2017/08/17)
- 新增subscribe指令

### v0.8.4 (2017/08/14)
- 新增mutationObserverMan插件，解决DOM在屏幕可见范围内进行回调

### v0.8.3 (2017/08/10)
- 新增router插件，用来解决路由前进和后退问题
- jsbridge插件新增push事件，用于解决多页情况下跳转后，多页后退的阻塞扩展

### v0.8.2 (2017/08/08)
- 新增historyStack插件，用来解决浏览器后退问题

### v0.8.1 (2017/08/02)
- 新增noBfCache插件，用来禁用部分支持bfcache功能的浏览器

### v0.8.0 (2017/06/26)
- 增加环境Profile动态配置，现在可以根据不同的开发模式、不同环境的参数配置文件以及业务功能模块进行打包 

### v0.7.1 (2017/06/21)
- 桥接程序增加notify指令

### v0.7.0 (2017/06/13)
- 对state模型结构增加持久化特性

### v0.6.0-beta.1 (2017/05/15)
- 新增jsBridge插件，实现桥接程序的构建  

### v0.5.0-beta.1 (2017/05/13)
- 新增应用程序自动更新的能力

### v0.4.0-beta.1 (2017/04/10)
- 基础组件新增"自定义模态窗口"

### v0.3.0-beta.1 (2017/04/09)
- 增加boilerplate-html、boilerplate-view模板文件规范
- 对公共模块进行统一抽取，便于实现application-cache

### v0.2.0-beta.1 (2017/04/07)
- 基础组件新增"密码卫士"
- 新增webpack + grunt打包发布命令

### v0.1.0-beta.1 (2017/04/04)
- [里程碑]完成第一阶段所有功能模块的详细设计、编码开发以及Demo编写
