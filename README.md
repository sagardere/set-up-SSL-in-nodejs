## This project is an to Set-up SSL in NodeJS and Express using OpenSSL.

*Before starting with project, please do following steps:-*

- Make sure first to clone the repository after that to run following command inside the directory certsFiles.

- Using OpenSSL(?), we will generate our key and crt. So, here’s how you could do this:

`sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./selfsigned.key -out selfsigned.crt
`

- After run aboue command enter the following information.

```
Country Name (2 letter code) [AU]: US
State or Province Name (full name) [Some-State]: NY
Locality Name (eg, city) []:NY
Organization Name (eg, company) [Internet Widgits Pty Ltd]: xyz (Your Oganization)
Organizational Unit Name (eg, section) []: xyz (Your unit name)
Common Name (e.g. server FQDN or YOUR name) []: www.xyz.com (Your URL)
Email Address []: Your email
```

Answer all questions. If all went well, you should see two new files in your certsFiles directory, i.e. selfsigned.key and selfsigned.crt.

- Now start server by running,
```
npm start
```
Open your favourite browser and visit https://localhost:3000 and you should see Hello World.

You may see some SSL warning. That’s because your certificate ain’t issued by any verified organization. What you want to do is, add the crt as an exception to your browser.

More information How To Create a Self-Signed SSL Certificate for Apache in Ubuntu 16.04 - Visit https://www.digitalocean.com/community/tutorials/how-to-create-a-self-signed-ssl-certificate-for-apache-in-ubuntu-16-04


Good Day!!