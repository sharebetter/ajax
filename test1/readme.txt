1.在apachde的conf\httpd.conf中在Listen [::0]:80下添加Listen [::0]:8011端口
2.将文件（test1和test2）放在wamp的www目录下
3.localhost访问test下的html（注意：该文件的端口为80） 该文件会自动访问test2的index.php
  实现端口不同的跨域访问
PS:该文件中包含3种跨域请求方法