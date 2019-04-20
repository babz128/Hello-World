package main

import "fmt"

func main() {
	fmt.Println("Hello World")
	fmt.Println("\x1b[6;30;42m" + "Hello World" + "\x1b[0m") //Green background
	fmt.Println("\x1b[31m" + "Hello World" + "\x1b[0m")      //Red Color
}
