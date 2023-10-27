package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func main() {
	r := gin.Default()
	r.LoadHTMLGlob("templates/*")
	// Serve static files (styles.css)
	r.Static("/static", "./static")

	// Define route for the homepage
	r.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", gin.H{})
	})

	// Run Server
	r.Run(":8080")
}
