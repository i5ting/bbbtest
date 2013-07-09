#! /bin/bash

echo 'start server....http://0.0.0.0:'$1/
ruby -run -e httpd . -p $1
