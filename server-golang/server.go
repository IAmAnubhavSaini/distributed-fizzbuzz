package main

import (
	"log"
	"math"
	"strconv"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func runServer() {
    app := fiber.New()
	app.Use(cors.New())
	app.Get("/:input?", func(c *fiber.Ctx) error {
		if c.Params("input") != "" {
			s, err := strconv.ParseFloat(c.Params("input"), 64)
			if err != nil {
				c.Status(500).SendString("Cannot parse a string")
			}
			if math.Remainder(s, 5) == 0 {
				return c.SendString("Buzz")
			} else {
				return c.Status(406).SendString("")
			}
		}
		return c.Status(404).SendString("/:input")
	})

	log.Fatal(app.Listen(":16001"))
}

func main() {
    runServer()
}
