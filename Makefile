all: run

build:
	bash scripts/build.sh

run: run-umami run-app

run-app:
	bash scripts/run.sh

run-umami:
	bash scripts/run-umami.sh

restart: stop run

restart-umami: stop-umami run-umami

reboot: build stop run

reboot-all: build restart-umami stop run

update:
	git pull && make reboot

stop:
	bash scripts/stop.sh

stop-umami:
	bash scripts/stop-umami.sh
