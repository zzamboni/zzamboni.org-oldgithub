#!/bin/bash

DST=$HOME/tmp/mboxes

if [ ! -d $DST ]; then
	mkdir -p $DST
fi

for s in "$@"; do
	if [ -s "$s" ]; then
		sdir=`dirname "$s"`
		dfile=`echo $s | sed 's/subfolders\///g; s/^\.\///; s/\/mbox$//; s/^Inbox$/oldInbox/'`
		if [ -d "$sdir/subfolders" ]; then
			dfile="${dfile}_f"
		fi
		dfile="$DST/$dfile"
		mkdir -p `dirname "$dfile"`
		echo cp "$s" "$dfile"
		cp "$s" "$dfile"
	else
		echo "Skipping zero-size $s"
	fi
done
