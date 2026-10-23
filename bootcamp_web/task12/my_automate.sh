#!/bin/bash

for i in 1 to $1
	create task[i] inside day[number]#!/bin/bash

day=$(printf "%02d" "$2")

mkdir -p "day$day"

for ((i=1; i<=$1; i++))
do
    task=$(printf "%02d" "$i")
    mkdir -p "day$day/task$task"
done
