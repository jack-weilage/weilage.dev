@echo off
wt --title heroku-logs cmd.exe /c pnpm logs ; new-tab --title development-server cmd.exe /c pnpm dev
@echo on