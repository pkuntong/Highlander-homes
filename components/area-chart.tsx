"use client"

import { useEffect, useRef } from "react"

export function AreaChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions with device pixel ratio for sharp rendering
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    // Sample data - monthly cash flow
    const data = [2800, 3100, 2950, 3200, 3450, 3300, 3450]
    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]

    // Chart dimensions
    const width = rect.width
    const height = rect.height
    const padding = { top: 10, right: 10, bottom: 10, left: 10 }
    const chartWidth = width - padding.left - padding.right
    const chartHeight = height - padding.top - padding.bottom

    // Find min and max values
    const minValue = Math.min(...data) * 0.9
    const maxValue = Math.max(...data) * 1.1

    // Function to convert data point to coordinates
    const getX = (index: number) => padding.left + (index / (data.length - 1)) * chartWidth
    const getY = (value: number) =>
      padding.top + chartHeight - ((value - minValue) / (maxValue - minValue)) * chartHeight

    // Draw gradient background
    const gradient = ctx.createLinearGradient(0, padding.top, 0, height - padding.bottom)
    gradient.addColorStop(0, "rgba(99, 102, 241, 0.2)")
    gradient.addColorStop(1, "rgba(99, 102, 241, 0.0)")

    // Draw the area
    ctx.beginPath()
    ctx.moveTo(getX(0), getY(data[0]))

    for (let i = 1; i < data.length; i++) {
      ctx.lineTo(getX(i), getY(data[i]))
    }

    // Complete the area by drawing to the bottom right and bottom left
    ctx.lineTo(getX(data.length - 1), height - padding.bottom)
    ctx.lineTo(getX(0), height - padding.bottom)
    ctx.closePath()

    // Fill the area
    ctx.fillStyle = gradient
    ctx.fill()

    // Draw the line
    ctx.beginPath()
    ctx.moveTo(getX(0), getY(data[0]))

    for (let i = 1; i < data.length; i++) {
      ctx.lineTo(getX(i), getY(data[i]))
    }

    ctx.strokeStyle = "rgb(99, 102, 241)"
    ctx.lineWidth = 2
    ctx.stroke()

    // Draw dots at each data point
    for (let i = 0; i < data.length; i++) {
      ctx.beginPath()
      ctx.arc(getX(i), getY(data[i]), 3, 0, Math.PI * 2)
      ctx.fillStyle = "rgb(99, 102, 241)"
      ctx.fill()
      ctx.strokeStyle = "white"
      ctx.lineWidth = 1
      ctx.stroke()
    }

    // Draw the last dot larger to emphasize current month
    ctx.beginPath()
    ctx.arc(getX(data.length - 1), getY(data[data.length - 1]), 4, 0, Math.PI * 2)
    ctx.fillStyle = "rgb(99, 102, 241)"
    ctx.fill()
    ctx.strokeStyle = "white"
    ctx.lineWidth = 1.5
    ctx.stroke()
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full" />
}
