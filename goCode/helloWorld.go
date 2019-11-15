package main

import "fmt"

func add(x, y int) int {
	return x * y
}

func split(sum int) (x, y, z int) {
	x = sum * 4 / 9
	y = sum - x
	z = z + y
	return
}

func main() {
	fmt.Println("Hello World")
	fmt.Println("\x1b[6;30;42m" + "Hello World" + "\x1b[0m") //Green background
	fmt.Println("\x1b[31m" + "Hello World" + "\x1b[0m")      //Red Color
	a := "tuple"
	fmt.Println(a) //print tuple
	fmt.Println(add(2, 4))
	fmt.Println(split(15))
}
