#!/bin/bash

USERNAME=${USERNAME}
PASSWORD=${PASSWORD}

echo "prepare rs initiating"

echo "Root username set to ${USERNAME}"
echo "Root password set to ${PASSWORD}"

MONGO_PROPS="--username ${USERNAME} --password ${PASSWORD} --authenticationDatabase admin"

check_db_status() {
  mongo1=$(mongo --host mongodb --port 27017 ${MONGO_PROPS} --eval "db.stats().ok" | tail -n1 | grep -E '(^|\s)1($|\s)')
#  mongo2=$(mongo --host mongo2 --port 27017 --eval "db.stats().ok" | tail -n1 | grep -E '(^|\s)1($|\s)')
#  mongo3=$(mongo --host mongo3 --port 27017 --eval "db.stats().ok" | tail -n1 | grep -E '(^|\s)1($|\s)')
#  if [[ $mongo1 == 1 ]] && [[ $mongo2 == 1 ]] && [[ $mongo3 == 1 ]]; then
  if [[ $mongo1 == 1 ]]; then
    init_rs
  else
    sleep 1s
    check_db_status
  fi
}

init_rs() {
  ret=$(mongo --host mongodb --port 27017 ${MONGO_PROPS} --eval "rs.initiate({ _id: 'rs0', members: [{ _id: 0, priority: 1, host: 'mongodb:27017' }] })" > /dev/null 2>&1)
}

check_db_status > /dev/null 2>&1

echo "rs initiating finished"
exit 0
