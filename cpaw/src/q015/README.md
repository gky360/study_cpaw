# Q15.[Web] Redirect

```
$ curl -v http://q15.ctf.cpaw.site/
*   Trying 157.7.52.186...
* TCP_NODELAY set
* Connected to q15.ctf.cpaw.site (157.7.52.186) port 80 (#0)
> GET / HTTP/1.1
> Host: q15.ctf.cpaw.site
> User-Agent: curl/7.54.0
> Accept: */*
>
* HTTP 1.0, assume close after body
< HTTP/1.0 302 Moved Temporarily
< Server: nginx
< Date: Fri, 13 Apr 2018 15:54:54 GMT
< Content-Type: text/html; charset=UTF-8
< Content-Length: 0
< X-Powered-By: PHP/7.1.8
< X-Flag: cpaw{4re_y0u_1ook1ng_http_h3ader?}
< Location: http://q9.ctf.cpaw.site
< X-Cache: MISS from Unknown
< X-Cache-Lookup: MISS from Unknown:8080
* HTTP/1.0 connection set to keep alive!
< Connection: keep-alive
<
* Connection #0 to host q15.ctf.cpaw.site left intact
```

```
cpaw{4re_y0u_1ook1ng_http_h3ader?}
```
