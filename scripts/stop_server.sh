
kill -INT $(lsof -t -i tcp:4400)
kill -INT $(lsof -t -a -c node -i tcp:8000)