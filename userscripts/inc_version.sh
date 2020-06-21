#!/bin/bash

FNAME=$1
#FNAME='moz-msdn-min.user.js'

echo $FNAME

VERSION_LINE=`grep '@version' $FNAME`
echo $VERSION_LINE
NO_BUILD_VERSION=`echo $VERSION_LINE | sed -r -e 's/[0-9]+$//'`
BUILD_VERSION=`echo $VERSION_LINE | sed -r -e 's/.+\.//'`
BUILD_VERSION=$(($BUILD_VERSION + 1))
UPDATED_LINE=`echo $NO_BUILD_VERSION$BUILD_VERSION`
UPDATED_LINE=`echo $UPDATED_LINE | sed 's,version ,version\t\t\t,'`

sed 's,^// @version.*$,'"$UPDATED_LINE"',' $FNAME -i
