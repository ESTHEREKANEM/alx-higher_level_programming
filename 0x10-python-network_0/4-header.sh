#!/bin/bash
# takes in a URL as an argument, sends a GET request to thE URL. A header variable X-School-User-Id must be sent with the value 98
curl -sX GET -H "X-School-User-Id: 98" "$1"
