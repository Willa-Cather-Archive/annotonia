#!/bin/sh

set -eu

# Check if ajewell
if [[ $LOGNAME != "ajewell" ]]; then
  echo "Attempted to run as: $LOGNAME"
  echo
  echo "Please run as ajewell with:"
  echo "sudo -u ajewell /var/local/annotonia/store_restart.sh"
  exit 1
fi

QUIET=0
STORE="/var/local/www/python/annotator-store"

while getopts "q" opt; do
  case "${opt}" in
    q) QUIET=1 ;;
    ?)
      echo "Usage: store_restart.sh [-q]"
      echo "  -q Quiet - Messages suppressed"
      exit 1
      ;;
  esac
done
readonly QUIET

if [[ ${QUIET} -eq 1 ]]; then
  # Redirect stderr to terminal, stdout to /dev/null
  exec 2>&1 >/dev/null
fi

if
  pgrep -f run.py &>/dev/null
then
  echo "Killing current Annotator Store processes"
  echo

  # TODO: NOT HANDLING CORRECTLY ON FAILURE
  if
    pkill -f run.py &>/dev/null
  then
    echo "Successfully killed Annotator Store processes"
    echo
  else
    echo "Could not kill Annotator Store processes"
    echo "Cannot restart Annotator Store until old processes killed"
    exit
  fi
fi

if [[ ! -d $STORE/log ]]; then
  echo "  Creating log directory"
  echo
  mkdir $STORE/log
  chmod g+ws $STORE/log
fi

# Create log file group writable
umask 0002

echo "Starting Annotator Store"
echo
$STORE/pyenv/bin/python $STORE/run.py &>>$STORE/log/flask &

sleep 2

if
  pgrep -f run.py &>/dev/null
then
  echo "Annotator Store successfully started"
else
  echo "Annotator Store failed to start"
  echo "Please try again"
fi

echo
