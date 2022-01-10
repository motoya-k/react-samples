# Gmail Clone

## SMTP Sample

```shell
> telnet localhost 25
Trying 127.0.0.1...
Connected to localhost.
Escape character is '^]'.
220 helpdesk.mycompany.com ESMTP Postfix
MAIL FROM:hoge@gmail.com
250 2.1.0 Ok
RCPT TO:root@localhost
250 2.1.5 Ok
DATA
354 End data with <CR><LF>.<CR><LF>
FROM: hoge@gmail.com
Subject: test

mail body!

.
250 2.0.0 Ok: queued as 78B9D396175F
QUIT
221 2.0.0 Bye
Connection closed by foreign host.
```